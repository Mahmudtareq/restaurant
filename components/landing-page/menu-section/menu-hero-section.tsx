import Image from "next/image";
import React from "react";

const MenuHeroSection = ({
  title = "Our Menu",
  dishImage = "/images/menu-hero/menu-hero-image.svg",
}) => {
  return (
    <section className="bg-[#F6F1E7] py-8 md:py-[40px] overflow-hidden w-full">
      <div className="relative">
        {/* Title at top */}
        <h1 className="text-2xl md:text-4xl lg:text-[64px] font-serif_display font-normal text-center lg:leading-[78px] md:leading-[48px] leading-[30px]  lg:mt-[60px] mt-[40px]">
          {title}
        </h1>

        {/* Combined dish + brush stroke image */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={dishImage}
            width={100}
            height={500}
            alt="Pan-Asian dish with brush stroke"
            className="w-full  h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuHeroSection;
