"use client";
import { menuCategories } from "@/public/sample-data/landing-page-data";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

interface MenuFilterContextType {
  activeCategory: string;
  filteredItems: MenuItem[];
  isLoading: boolean;
  handleCategoryChange: (category: string) => void;
}

const HomeMenuFilterContext = createContext<MenuFilterContextType | undefined>(
  undefined
);

export const HomeMenuFilterProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("appetizers");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ✅ Helper: get all items across all categories
  const getAllItems = (): MenuItem[] => {
    return menuCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        category: cat.categoryName,
      }))
    );
  };

  // ✅ Change category (no “All” case)
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setActiveCategory(category.toLowerCase());

    setTimeout(() => {
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
      setIsLoading(false);
    }, 300);
  };

  // ✅ Load only the default active category on first render
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const selectedCategory = menuCategories.find(
        (c) => c.categoryName.toLowerCase() === activeCategory.toLowerCase()
      );

      setFilteredItems(
        selectedCategory
          ? selectedCategory.items.map((item) => ({
              ...item,
              category: selectedCategory.categoryName,
            }))
          : []
      );

      setIsLoading(false);
    }, 300);
  }, []); // only run once

  return (
    <HomeMenuFilterContext.Provider
      value={{ activeCategory, filteredItems, isLoading, handleCategoryChange }}
    >
      {children}
    </HomeMenuFilterContext.Provider>
  );
};

export const useHomeMenuFilter = () => {
  const context = useContext(HomeMenuFilterContext);
  if (!context) {
    throw new Error(
      "useHomeMenuFilter must be used within HomeMenuFilterProvider"
    );
  }
  return context;
};
