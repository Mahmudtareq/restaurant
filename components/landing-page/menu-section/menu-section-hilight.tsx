"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { menuItems } from "@/public/sample-data/landing-page-data";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function MenuSectionHighlight() {
  const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[0]);
  const [previousIndex, setPreviousIndex] = useState(0);

  const handleItemClick = (item: MenuItem) => {
    const currentIndex = menuItems.findIndex((i) => i.id === selectedItem.id);
    const newIndex = menuItems.findIndex((i) => i.id === item.id);
    setPreviousIndex(currentIndex);
    setSelectedItem(item);
  };

  const currentIndex = menuItems.findIndex((i) => i.id === selectedItem.id);
  const indexDiff = currentIndex - previousIndex;

  // Determine rotation direction based on index difference
  const isClockwise = indexDiff > 0 || indexDiff < -2;

  const radius = 10;
  const anglePerStep = 90;
  const startAngle = 180;
  // Calculate rotation amount based on direction
  const rotationAmount = isClockwise
    ? anglePerStep * Math.abs(indexDiff)
    : -anglePerStep * Math.abs(indexDiff);

  return (
    <div className="py-20 px-8">
      <div className="max-w-[1440px] mx-auto bg-secondary rounded-[10px] lg:p-8 p-6">
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
          {/* ---------- LEFT SIDE ---------- */}
          <div className="relative md:col-span-2 col-span-1">
            {/* background image circel */}
            <div className="absolute -left-8 top-[195px]">
              <Image
                src="/images/menu-hero/hilight-circel.svg"
                alt="bg hero"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative lg:flex items-start gap-8">
              {/* Rotating Image with White Circle Background */}
              <div className="relative flex-shrink-0 overflow-hidden z-50 top-10">
                <div className="aspect-[53/55] rounded-full  flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedItem.id}
                      initial={{
                        x:
                          radius *
                          Math.cos(
                            ((startAngle +
                              (isClockwise
                                ? -rotationAmount
                                : -rotationAmount)) *
                              Math.PI) /
                              180
                          ),
                        y:
                          radius *
                          Math.sin(
                            ((startAngle +
                              (isClockwise
                                ? -rotationAmount
                                : -rotationAmount)) *
                              Math.PI) /
                              180
                          ),
                        scale: 0.7,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        x:
                          radius *
                          Math.cos(
                            ((startAngle + rotationAmount) * Math.PI) / 180
                          ),
                        y:
                          radius *
                          Math.sin(
                            ((startAngle + rotationAmount) * Math.PI) / 180
                          ),
                        scale: 0.7,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      className="w-full h-[440px]"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-24 flex-1 flex-col z-50">
                <motion.h2
                  key={`title-${selectedItem.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="md:text-[28px] lg:text-[40px] text-lg font-normal font-serif_display mb-[14px] md:leading-[30px] lg:leading-[46px] leading-[24px]"
                >
                  {selectedItem.name}
                </motion.h2>
                <motion.p
                  key={`price-${selectedItem.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-[28px] font-normal text-primary font-serif_display"
                >
                  $ {selectedItem.price.toFixed(1)}
                </motion.p>
                <motion.p
                  key={`desc-${selectedItem.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[#8E8B88]  md:text-lg text-sm font-medium font-montserrat md:leading-[26px] leading-[18px] md:mt-[80px] mt-6"
                >
                  {selectedItem.description}
                </motion.p>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT SIDE ---------- */}
          <div className="col-span-1">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`md:flex items-center gap-6 p-6 cursor-pointer transition-all duration-300 ${
                  selectedItem.id === item.id ? "" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className="w-[110px] h-[114px] flex items-center justify-center rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className={`text-xl md:text-[20px] lg:text-[28px] font-serif_display font-normal ${
                      selectedItem.id === item.id
                        ? "text-[#1B1B1B]"
                        : "text-gray-500"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`text-primary font-montserrat md:leading-[26px] leading-[18px] font-medium md:text-lg text-sm ${
                      selectedItem.id === item.id ? "" : ""
                    }`}
                  >
                    $ {item.price.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
