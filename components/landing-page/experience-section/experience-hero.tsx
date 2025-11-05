import { CustomButton } from "@/components/custom/custom-button";
import ReservationModal from "@/components/custom/reservation-modal";
import Image from "next/image";
import React from "react";

const ExperienceHero = () => {
  return (
    <section className="relative md:h-[680px] h-[500px] w-full flex items-center justify-center overflow-hidden py-16">
      {/* Background Image */}
      <Image
        src="/images/experience/experience-hero.svg"
        alt="Experience Hero"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay content */}
      <div className="relative max-w-[1440px] mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center text-center md:text-left">
        {/* Left Side - Image */}
        <div className="aspect-[576/538] md:py-6 lg:py-8 py-4 hidden md:block">
          <Image
            src="/images/experience/exprience-pan.svg"
            alt="Chef cooking"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>

        {/* Right Side - Text + Button */}
        <div className="flex flex-col  items-start gap-6 mt-10 md:mt-0">
          <div className="flex items-center gap-2 mb-2 ">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-xs md:text-base uppercase tracking-wider font-medium text-primary">
              Ambiance & Experience
            </span>
          </div>
          <h2 className="text-lg md:text-[28px] lg:text-[40px] font-serif_display font-normal lg:leading-[46px] md:leading-[30px] text-[#F9F3F0]">
            A Space Made for Every Mood
          </h2>
          <p className="text-xs md:text-lg leading-[18px] md:leading-[28px] md:mt-10 lg:mb-[60px] md:mb-[44px] mb-[36px] text-[#F9F3F0] text-start">
            Warm lights, soft music, and the aroma of fresh flavors welcome you
            in. Whether it’s a quiet dinner or a friendly gathering, Savoré
            offers an inviting space where good food and comfort come together.
          </p>
          <CustomButton modalComponent={<ReservationModal />}>
            Book a Table
          </CustomButton>
        </div>
      </div>

      {/* Optional subtle overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}
    </section>
  );
};

export default ExperienceHero;
