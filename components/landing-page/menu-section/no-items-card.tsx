"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components/custom/custom-button";

const NoItemsCard = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#f9f5ef] rounded-[10px] p-10 flex flex-col items-center justify-center text-center  border border-[#f1ece6]">
      {/* ✅ Placeholder illustration */}
      <div className="relative w-[160px] h-[160px] mb-6">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
          alt="No items found"
          fill
          className="object-contain opacity-90 grayscale"
        />
      </div>

      {/* ✅ Text content */}
      <h2 className="text-[22px] md:text-[28px] font-serif_display font-normal  mb-3">
        No Items Found
      </h2>
      <p className="text-[#8E8B88] font-montserrat text-base md:text-lg leading-[26px] max-w-md mb-8">
        We couldn’t find any dishes for this category right now. Please try
        selecting another category from the menu.
      </p>

      {/* <CustomButton
        href="/menu"
        className="uppercase tracking-wider px-8"
        variant="filled"
      >
        Back to Menu
      </CustomButton> */}
    </div>
  );
};

export default NoItemsCard;
