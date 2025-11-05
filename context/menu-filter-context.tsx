"use client";
import { MenuItem } from "@/lib/types";
import { menuCategories } from "@/public/sample-data/landing-page-data";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface MenuFilterContextType {
  activeCategory: string;
  filteredItems: MenuItem[];
  isLoading: boolean;
  handleCategoryChange: (category: string) => void;
}

const MenuFilterContext = createContext<MenuFilterContextType | undefined>(
  undefined
);

export const MenuFilterProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Helper: flatten all items across categories
  const getAllItems = (): MenuItem[] => {
    return menuCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        category: cat.categoryName,
      }))
    );
  };

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setActiveCategory(category.toLowerCase());

    setTimeout(() => {
      if (category.toLowerCase() === "all") {
        setFilteredItems(getAllItems());
      } else {
        const selectedCategory = menuCategories.find(
          (c) => c.categoryName.toLowerCase() === category.toLowerCase()
        );
        setFilteredItems(
          selectedCategory
            ? selectedCategory.items.map((item) => ({
                ...item,
                category: selectedCategory.categoryName,
              }))
            : []
        );
      }
      setIsLoading(false);
    }, 400);
  };

  useEffect(() => {
    // Initial load - all items
    setIsLoading(true);
    setTimeout(() => {
      setFilteredItems(getAllItems());
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <MenuFilterContext.Provider
      value={{ activeCategory, filteredItems, isLoading, handleCategoryChange }}
    >
      {children}
    </MenuFilterContext.Provider>
  );
};

export const useMenuFilter = () => {
  const context = useContext(MenuFilterContext);
  if (!context) {
    throw new Error("useMenuFilter must be used within MenuFilterProvider");
  }
  return context;
};
