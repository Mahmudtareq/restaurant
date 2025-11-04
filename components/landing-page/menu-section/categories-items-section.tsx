import CategoriesButton from "@/components/custom/categories-button";
import { useMenuFilter } from "@/context/menu-filter-context";

const CategoriesItemsSection = () => {
  const { activeCategory, handleCategoryChange } = useMenuFilter();

  const categories = ["All", "Appetizers", "Soup", "Chicken", "Rice", "Beef"];
  return (
    <div className="max-w-[1440px] mx-auto pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-lg md:text-[28px] lg:text-[40px] font-serif_display capitalize font-normal text-center">
          Explore Our Full Pan-Asian Menu
        </h1>

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

export default CategoriesItemsSection;
