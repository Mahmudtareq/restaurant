"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HomeCategories from "./home-categories";
import { CustomButton } from "@/components/custom/custom-button";
import { useHomeMenuFilter } from "@/context/home-menu-context";
import HomeMenuLoader from "./home-menu-loader";
import NoItemsCard from "./no-items-card";

interface MenuItem {
  id: number;
  name: string;
  price: string; // keep string for compatibility with context
  description: string;
  image: string;
}

export default function MenuSectionHighlight() {
  const { activeCategory, isLoading, filteredItems } = useHomeMenuFilter();

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [previousIndex, setPreviousIndex] = useState(0);
  console.log("filteredItems", filteredItems);

  // ✅ Update selected item when filter changes
  // ✅ Automatically set first item active when filteredItems change
  useEffect(() => {
    if (filteredItems?.length > 0) {
      setSelectedItem(filteredItems[0]); // make first item active
      setPreviousIndex(0);
    } else {
      setSelectedItem(null);
    }
  }, [filteredItems]);

  // ✅ Loading state
  if (isLoading) {
    return (
      <div className="py-20">
        <HomeMenuLoader />
      </div>
    );
  }

  // ✅ No items state
  if (!filteredItems || filteredItems.length === 0) {
    return (
      <div className="py-20 text-center">
        <HomeCategories />
        <NoItemsCard />
      </div>
    );
  }

  // ✅ Handle item selection
  const handleItemClick = (item: MenuItem) => {
    const currentIndex = filteredItems.findIndex(
      (i) => i.id === selectedItem?.id
    );
    const newIndex = filteredItems.findIndex((i) => i.id === item.id);
    setPreviousIndex(currentIndex);
    setSelectedItem(item);
  };

  const currentIndex = selectedItem
    ? filteredItems.findIndex((i) => i.id === selectedItem.id)
    : 0;
  const indexDiff = currentIndex - previousIndex;
  const isClockwise = indexDiff > 0 || indexDiff < -2;

  const radius = 10;
  const anglePerStep = 90;
  const startAngle = 180;
  const rotationAmount = isClockwise
    ? anglePerStep * Math.abs(indexDiff)
    : -anglePerStep * Math.abs(indexDiff);

  return (
    <div className="py-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <HomeCategories />
      </div>

      {selectedItem && (
        <div className="max-w-[1440px] mx-auto bg-secondary rounded-[10px] lg:p-8 p-6">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
            {/* ---------- LEFT SIDE ---------- */}
            <div className="relative md:col-span-2 col-span-1">
              {/* Background Circle */}
              <div className="absolute lg:-left-8 lg:top-[197px] -left-[220px] top-[17%] md:top-[16%] rotate-90 md:rotate-90 lg:rotate-0">
                <Image
                  src="/images/menu-hero/hilight-circel.svg"
                  alt="bg hero"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative lg:flex items-start gap-8">
                {/* Rotating Image */}
                <div className="relative flex-shrink-0 overflow-hidden z-50 top-10">
                  <div className="aspect-[53/55] rounded-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedItem.id}
                        initial={{
                          x:
                            radius *
                            Math.cos(
                              ((startAngle - rotationAmount) * Math.PI) / 180
                            ),
                          y:
                            radius *
                            Math.sin(
                              ((startAngle - rotationAmount) * Math.PI) / 180
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
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="md:w-[424px] md:h-[440px] h-[280px] w-[270px]"
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
                    className="md:text-[28px] lg:text-[40px] text-lg font-normal font-serif_display mb-[14px]"
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
                    ${Number(selectedItem.price).toFixed(1)}
                  </motion.p>
                  <motion.p
                    key={`desc-${selectedItem.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-[#8E8B88] md:text-lg text-sm font-medium font-montserrat mt-6"
                  >
                    {selectedItem.description}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* ---------- RIGHT SIDE ---------- */}
            <div className="col-span-1 flex md:flex-col flex-row overflow-x-scroll md:overflow-hidden">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`md:flex items-center justify-center gap-1 p-6 cursor-pointer transition-all duration-300 ${
                    selectedItem.id === item.id
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="md:w-[110px] md:h-[114px] w-[77px] h-[80px] flex items-center justify-center rounded-full overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="md:flex-1">
                    <h3
                      className={`text-lg md:text-[20px] lg:text-[28px] font-serif_display ${
                        selectedItem.id === item.id
                          ? "text-[#1B1B1B]"
                          : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-primary font-montserrat md:text-lg text-sm font-medium">
                      ${Number(item.price).toFixed(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <CustomButton href="/menu">View Full Menu</CustomButton>
      </div>
    </div>
  );
}
