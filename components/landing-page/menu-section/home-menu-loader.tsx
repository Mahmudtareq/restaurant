"use client";
import React from "react";
import { motion } from "framer-motion";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[#ffffff30] before:to-transparent";

const HomeMenuLoader = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#f9f5ef] rounded-[10px] lg:p-8 p-6">
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-6">
        {/* ---------- LEFT SIDE ---------- */}
        <div className="relative md:col-span-2 col-span-1 flex items-center justify-center">
          <div
            className={`md:w-[424px] md:h-[440px] h-[280px] w-[270px] rounded-full bg-[#e7e2dc] ${shimmer}`}
          ></div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="col-span-1 flex md:flex-col flex-row gap-6 md:gap-4 justify-center md:justify-start overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 md:p-4 p-2 w-full md:w-auto"
            >
              <div
                className={`md:w-[100px] md:h-[100px] w-[77px] h-[80px] rounded-full bg-[#e7e2dc] ${shimmer}`}
              ></div>
              <div className="flex flex-col gap-2">
                <div
                  className={`h-4 w-[120px] md:w-[160px] rounded bg-[#e7e2dc] ${shimmer}`}
                ></div>
                <div
                  className={`h-3 w-[80px] md:w-[100px] rounded bg-[#e7e2dc] ${shimmer}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom shimmer bar */}
      <div
        className={`mt-8 h-10 w-[180px] mx-auto rounded bg-[#e7e2dc] ${shimmer}`}
      ></div>
    </div>
  );
};

export default HomeMenuLoader;
