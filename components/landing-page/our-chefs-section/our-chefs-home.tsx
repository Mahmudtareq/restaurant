import React from "react";
import ChefCard from "./chef-card";
// ✅ Define the shape of a single chef
const chefsData = [
  {
    image: "/images/our-chefs/chef-afrin.svg",
    name: "Chef Arin Tanaka",
    title: "Head Chef",
  },
  {
    image: "/images/our-chefs/chef-maya.svg",
    name: "Chef Maya Liu",
    title: "Dim Sum & Small Plates",
  },
  {
    image: "/images/our-chefs/chef-rafi.svg",
    name: "Chef Rafi Chowdhury",
    title: "Curries & Grills",
  },
  {
    image: "/images/our-chefs/chef-kim.svg",
    name: "Chef Kim Hyun",
    title: "Desserts & Sweets",
  },
];

const OurChefsHome = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-20 px-4">
      <div className="flex items-center gap-2 mb-2 ">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <span className="text-xs md:text-base uppercase tracking-wider font-medium text-primary">
          Our Chefs
        </span>
      </div>
      <h2 className="text-lg md:text-[28px] lg:text-[40px] font-serif_display font-normal lg:leading-[46px] md:leading-[30px]">
        The Hands Behind Every Flavor
      </h2>
      <p className="text-xs md:text-lg leading-[18px] md:leading-[28px] md:mt-8">
        At Savoré, our chefs bring together diverse Asian influences, crafting
        dishes that balance tradition and creativity.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mt-10">
        {chefsData.map((chef, idx) => (
          <ChefCard chef={chef} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default OurChefsHome;
