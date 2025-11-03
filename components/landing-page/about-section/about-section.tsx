import React from "react";
import { Truck, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { Icons } from "@/components/custom/icons";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AboutSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  quote?: string;
  image?: string;
  features?: FeatureProps[];
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start">
    <div className="flex justify-center mb-3">
      <div className="w-16 h-16 rounded-full bg-secondary flex items-start justify-center relative size-[60px]">
        <div className="absolute -right-4 size-[60px] text-primary">{icon}</div>
      </div>
    </div>
    <h3 className="text-[12px] md:text-lg md:leading-[26px] leading-[18px] font-semibold mb-2 font-montserrat">
      {title}
    </h3>
    <p className="text-[11px] md:text-base font-medium font-montserrat text-[#8E8B88]">
      {description}
    </p>
  </div>
);
const AboutSection = ({
  badge = "About Savoré",
  heading = "Where Asian Flavors Find Harmony",
  description = "Savoré brings together the best of Pan-Asian cuisine under one roof. From the spicy streets of Bangkok to the cozy kitchens of Tokyo, every curve is inspired by authentic regional flavors and techniques, combined with a dash of modern innovation and creativity—serving food that feels comforting yet exciting with every bite.",
  quote = "Good food, good moments, one shared experience.",
  image = "/images/about-section/about-us-image.svg",
  features = [
    {
      icon: <Icons.cartTroliy className="" />,
      title: "Fast Delivery",
      description: "Delivery within 30 minutes",
    },
    {
      icon: <Icons.boilWater className="" />,
      title: "Dine In",
      description: "Enjoy your food freshly served",
    },
  ],
}: AboutSectionProps) => {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-[150px]">
          {/* Left Side - Image */}
          <div className="block md:hidden">
            <div className="flex items-center gap-2 mb-2 ">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-xs md:text-base uppercase tracking-wider font-medium text-primary">
                {badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-lg md:text-[28px] lg:text-[40px] font-serif_display font-normal lg:leading-[46px] md:leading-[30px]">
              {heading}
            </h2>
          </div>

          <div className="relative  aspect-[480/480] ">
            {/* Large decorative background circle (beige/cream) */}
            <div className="absolute inset-0  h-full bg-secondary  rounded-l-full w-1/2"></div>

            {/* Main circular image container - slightly smaller and centered */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full h-full rounded-full overflow-hidden ">
                <Image
                  src={image}
                  width={506}
                  height={506}
                  alt="Restaurant ambiance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote card - positioned on the right side */}
            <div className="absolute top-1/2 lg:-translate-y-1/2 lg:right-5 right-16 translate-x-[40%] bg-secondary dark:bg-[#1B1B1B] border-t-[4px] rounded-[2px] border-l-[4px] border-primary shadow-xl p-4 lg:min-w-[300px] w-[150px] z-20 ">
              <p className="text-base md:text-lg lg:text-[28px] font-serif_display font-normal ">
                {quote}
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="md:block hidden">
              <div className="flex items-center gap-2 mb-2 ">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-xs md:text-base uppercase tracking-wider font-medium text-primary">
                  {badge}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-lg md:text-[28px] lg:text-[40px] font-serif_display font-normal lg:leading-[46px] md:leading-[30px]">
                {heading}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs md:text-lg leading-[18px] md:leading-[28px] md:mt-12">
              {description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
