"use client";
import CategoriesButton from "@/components/custom/categories-button";
import { useHomeMenuFilter } from "@/context/home-menu-context";

const HomeCategories = () => {
  const { activeCategory, handleCategoryChange } = useHomeMenuFilter();

  const categories = [
    "Appetizers",
    "Main Dishes",
    "Sides",
    "Beverages",
    "Desserts",
  ];

  return (
    <div className="max-w-[1440px] mx-auto pt-10 px-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2 ">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-xs md:text-base uppercase tracking-wider font-medium text-primary">
            Menu Highlights
          </span>
        </div>
        <h1 className="text-lg md:text-[28px] lg:text-[40px] font-serif_display capitalize font-normal text-center">
          A Taste of What We Serve
        </h1>
        <p className="text-sm md:text-lg font-montserrat font-semibold md:leading-[26px] leading-[18px] mt-3">
          Discover signature Pan-Asian dishes crafted with balance, freshness,
          and bold flavor.
        </p>

        <CategoriesButton
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          className="mb-[60px] mt-10"
        />
      </div>
    </div>
  );
};

export default HomeCategories;
