import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components/custom/custom-button";
import ReservationModal from "@/components/custom/reservation-modal";

interface StatProps {
  number: string;
  label: string;
  color: string;
  plus?: boolean;
}

interface RestaurantHeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  dishImage?: string;
  brushImage?: string;
  stats?: StatProps[];
}

const Stat: React.FC<StatProps> = ({ number, label, color, plus }) => (
  <div className="text-start">
    <div
      className={`text-lg lg:text-[40px] md:text-[28px]  font-normal font-serif_display ${color}`}
    >
      {number}
      {plus && (
        <span className="text-lg lg:text-[40px] md:text-[28px] font-serif_display font-normal md:leading-[46px] text-primary">
          +
        </span>
      )}
    </div>
    <div className="text-[12px] lg:text-lg md:text-base font-medium font-montserrat lg:leading-[26px] leading-[18px]">
      {label}
    </div>
  </div>
);

const LandingHero = ({
  title = "Authentic Flavors, Modern Taste",
  description = "Discover authentic Pan-Asian dishes that bring together taste, comfort, and creativity.",
  buttonText = "BOOK A TABLE",
  dishImage = "/images/hero-section/landing-hero-image.svg", // Combined dish + brush image
  stats = [
    { number: "5", label: "Years of Craft", color: "text-primary", plus: true },
    { number: "18", label: "Outlets", color: "text-primary" },
    {
      number: "20",
      label: "Signature Dishes",
      color: "text-primary",
      plus: true,
    },
  ],
}: RestaurantHeroProps) => {
  return (
    <section className="relative bg-secondary py-12 md:py-[60px] overflow-hidden w-full">
      <div className="">
        {/* Desktop Layout */}
        <div className="">
          <div className="relative">
            {/* Title at top */}
            <h1 className="text-2xl md:text-4xl lg:text-[64px] font-serif_display font-normal text-center lg:leading-[78px] md:leading-[48px] leading-[30px]  lg:mt-[60px] mt-[40px]">
              {title}
            </h1>

            {/* Main content area with combined image */}
            <div className="relative flex items-center justify-center">
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

            {/* Content below image */}
            <div className="relative max-w-[1440px] mx-auto lg:px-4 px-4">
              <div className="flex md:flex-row flex-col items-start gap-4 justify-between gap-y-4">
                {/* Left content - Description and Button */}
                <div className="max-w-[400px]">
                  <p className="text-[12px] md:text-lg mb-7 md:leading-[26px] leading-[18px]">
                    {description}
                  </p>
                  <CustomButton
                    className="cursor-pointer"
                    modalComponent={<ReservationModal />}
                  >
                    {buttonText}
                  </CustomButton>
                </div>

                {/* Right stats */}
                <div className="flex items-center gap-12 pb-2">
                  {stats.map((stat, index) => (
                    <Stat key={index} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
