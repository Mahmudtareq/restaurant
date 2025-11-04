import ContactSectionPage from "@/components/landing-page/contact-section/contact-section-page";
import MenuCard from "@/components/landing-page/menu-section/menu-card";
import MenuHeroSection from "@/components/landing-page/menu-section/menu-hero-section";
import ReviewCarousel from "@/components/landing-page/review-section/review-carousel";
import { menuItems } from "@/public/sample-data/landing-page-data";
import React from "react";

const MenuHome = () => {
  return (
    <div className="py-16">
      <MenuHeroSection
        title="Our Menu"
        dishImage="/images/menu-hero/menu-hero-image.svg"
      />
      <div className="bg-secondary py-4">
        <MenuCard title="Appetizers" items={menuItems} imagePosition="right" />
        <MenuCard imagePosition="left" title="Soup & Broth" items={menuItems} />
        <MenuCard
          imagePosition="right"
          items={menuItems}
          title="Rice & Noodles"
        />
      </div>

      <ReviewCarousel />
      <ContactSectionPage />
    </div>
  );
};

export default MenuHome;
