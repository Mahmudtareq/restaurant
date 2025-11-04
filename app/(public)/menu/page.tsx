import React from "react";
import MenuSectionHome from "@/components/landing-page/menu-section/menu-section-home";
import { MenuFilterProvider } from "@/context/menu-filter-context";

const MenuHome = () => {
  return (
    <div className="py-16">
      <MenuFilterProvider>
        <MenuSectionHome />
      </MenuFilterProvider>
    </div>
  );
};

export default MenuHome;
