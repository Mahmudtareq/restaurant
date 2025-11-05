"use client";

import Image from "next/image";
import { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCardProps {
  title?: string;
  items: MenuItem[];
  imagePosition?: "left" | "right";
  bgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  showDottedLine?: boolean;
  defaultActiveId?: number;
}

const MenuCard = ({
  title = "Appetizers",
  items,
  imagePosition = "right",
  bgColor = "#F6F1E7",
  titleColor = "text-primary",
  descriptionColor = "#8E8B88",
  showDottedLine = true,
  defaultActiveId,
}: MenuCardProps) => {
  const [activeItem, setActiveItem] = useState<number>(
    defaultActiveId || items[0]?.id || 1
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleHover = (id: number) => {
    if (id !== activeItem) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveItem(id);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const currentItem = items.find((item) => item.id === activeItem) || items[0];

  return (
    <div className="flex items-center justify-center max-w-[1440px] mx-auto mt-8 md:mt-[60px] px-4 md:px-2">
      <div className="w-full">
        <div
          className={`flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-4 items-start ${
            imagePosition === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Menu Items Section with Title */}
          <div
            className={`w-full md:col-span-3 ${
              imagePosition === "left" ? "md:order-2" : "md:order-1"
            }`}
          >
            {/* Title */}
            <h1
              className={`text-2xl md:text-[28px] capitalize lg:text-[40px] font-normal font-serif_display ${titleColor} mb-6 md:mb-8`}
            >
              {title}
            </h1>

            {/* Menu Items */}
            <div className="space-y-3 md:space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`cursor-pointer rounded-[4px] transition-all duration-200 ${
                    activeItem === item.id ? "shadow-md" : "hover:shadow-sm"
                  }`}
                  style={{ backgroundColor: bgColor }}
                  onMouseEnter={() => handleHover(item.id)}
                  onClick={() => handleHover(item.id)}
                >
                  <div className="px-3 py-2.5 md:px-4 md:py-3">
                    <div className="flex items-center gap-2 mb-1.5 md:mb-2 justify-between">
                      <h3 className="text-base md:text-[20px] lg:text-[28px] font-normal font-serif_display flex-shrink-0">
                        {item.name}
                      </h3>

                      {/* Dotted line */}
                      {showDottedLine && (
                        <span className="hidden md:flex flex-1 items-center justify-center mx-2 min-w-[40px]">
                          <svg
                            className="w-full h-[1px]"
                            preserveAspectRatio="none"
                            viewBox="0 0 506 1"
                            fill="none"
                          >
                            <path
                              d="M0.5 0.5H505.5"
                              stroke="#8E8B88"
                              strokeLinecap="round"
                              strokeDasharray="4 4"
                            />
                          </svg>
                        </span>
                      )}

                      <span className="text-base md:text-lg lg:text-xl font-semibold text-primary whitespace-nowrap flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p
                      className="text-xs md:text-sm lg:text-base font-medium leading-relaxed"
                      style={{ color: descriptionColor }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Image */}
          <div
            className={`relative w-full md:w-auto h-[280px] sm:h-[350px] md:h-[480px] flex items-center justify-center md:col-span-2 order-first md:${
              imagePosition === "left" ? "order-1" : "order-2"
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative lg:w-[450px] lg:h-[450px] w-[280px] h-[280px] rounded-full overflow-hidden  transition-all duration-300">
                <div
                  className={`w-full h-full transition-all duration-300 ${
                    isTransitioning
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <Image
                    width={450}
                    height={450}
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
