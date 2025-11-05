"use client";

import MenuHeroSection from "./menu-hero-section";
import MenuCard from "./menu-card";
import ReviewCarousel from "../review-section/review-carousel";
import ContactSectionPage from "../contact-section/contact-section-page";
import CategoriesItemsSection from "./categories-items-section";
import { useMenuFilter } from "@/context/menu-filter-context";
import MenuCardSkeleton from "./menu-card-skeleton";
import NoItemsCard from "./no-items-card";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

const MenuSectionHome = () => {
  const { activeCategory, isLoading, filteredItems } = useMenuFilter();
  const isAllCategory = activeCategory.toLowerCase() === "all";

  // ✅ Helper: group filtered items by category (typed)
  const groupByCategory = (items: MenuItem[]): Record<string, MenuItem[]> => {
    return items.reduce<Record<string, MenuItem[]>>((acc, item) => {
      if (!item.category) return acc;
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  };

  const groupedItems = groupByCategory(filteredItems);
  const hasItems = Object.keys(groupedItems).length > 0;

  return (
    <div className="py-16">
      <MenuHeroSection
        title="Our Menu"
        dishImage="/images/menu-hero/menu-hero-image.svg"
      />

      <div className="bg-secondary py-4">
        <CategoriesItemsSection />

        {isLoading ? (
          <div className="space-y-8">
            <MenuCardSkeleton count={2} />
          </div>
        ) : !hasItems ? (
          // ✅ No items found
          <div className="py-5">
            <NoItemsCard />
          </div>
        ) : (
          <>
            {/* ✅ Show all categories or just one */}
            {isAllCategory
              ? Object.entries(groupedItems).map(
                  ([categoryName, items], idx) => (
                    <MenuCard
                      key={categoryName}
                      title={categoryName}
                      items={items}
                      imagePosition={idx % 2 === 0 ? "right" : "left"}
                    />
                  )
                )
              : Object.entries(groupedItems).map(([categoryName, items]) => (
                  <MenuCard
                    key={categoryName}
                    title={categoryName}
                    items={items} // ✅ Works fine here too
                  />
                ))}
          </>
        )}
      </div>

      <ReviewCarousel />
      <ContactSectionPage />
    </div>
  );
};

export default MenuSectionHome;
