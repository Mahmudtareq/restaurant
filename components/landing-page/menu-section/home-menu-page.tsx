"use client";

import { HomeMenuFilterProvider } from "@/context/home-menu-context";
import MenuSectionHighlight from "./menu-section-hilight";

const HomeMenuPage = () => {
  return (
    <HomeMenuFilterProvider>
      <MenuSectionHighlight />
    </HomeMenuFilterProvider>
  );
};

export default HomeMenuPage;
