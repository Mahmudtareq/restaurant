import React from "react";

// Reusable Category Filter Component
interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  activeCategory?: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

const CategoriesButton = ({
  categories,
  onCategoryChange,
  activeCategory,
  className = "",
  activeClassName = "bg-[#1B1B1B] text-[#F9F3F0]",
  inactiveClassName = "font-medium font-montserrat border border-[#8E8B88] hover:border-primary text-base hover:text-primary",
}: CategoryFilterProps) => {
  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {categories.map((category) => {
        const isActive =
          activeCategory?.toLowerCase() === category.toLowerCase();

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2.5 capitalize cursor-pointer duration-300 rounded-md ${
              isActive ? activeClassName : inactiveClassName
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoriesButton;
