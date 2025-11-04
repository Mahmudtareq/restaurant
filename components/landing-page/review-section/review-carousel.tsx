"use client";

import React, { useEffect, useState } from "react";

import ReviewCard from "./review-card";
import { reviews } from "@/public/sample-data/landing-page-data";

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + reviews.length) % reviews.length;
      visible.push({
        review: reviews[index],
        isActive: i === 0,
        offset: i,
        key: `${index}-${currentIndex}`,
      });
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();
  return (
    <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 ">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <p className="text-primary text-sm md:text-base font-medium font-montserrat">
              Reviews
            </p>
          </div>
          <h2 className="text-lg md:text-[28px] lg:text-[40px] font-serif_display font-normal mb-4">
            What Our Guests Say
          </h2>
          <p className="font-medium text-sm md:text-lg leading-[18px] md:leading-[26px] ">
            Real experiences from guests who've enjoyed the taste and warmth of
            Savoré.
          </p>
        </div>

        {/* Carousel - Mobile (Peek Effect) */}
        <div className="md:hidden relative py-8 overflow-hidden">
          <div className="flex items-center justify-center">
            {visibleReviews.map(({ review, isActive, offset, key }) => (
              <div
                key={key}
                className="w-full max-w-[280px] flex-shrink-0 transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${offset * 5}%)`,
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <ReviewCard review={review} isActive={isActive} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel - Desktop (Three Cards) */}
        <div className="hidden md:block relative overflow-visible py-8">
          <div className="flex items-center justify-center">
            {visibleReviews.map(({ review, isActive, offset, key }) => (
              <div
                key={key}
                className="w-full max-w-[400px] flex-shrink-0 transition-all duration-700"
                style={{
                  transform: `translateX(${offset * 5}%)`,
                  opacity: isActive ? 1 : 0.6,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <ReviewCard review={review} isActive={isActive} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
