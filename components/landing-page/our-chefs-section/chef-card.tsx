import Image from "next/image";
import React from "react";
interface Chef {
  image: string;
  title: string;
  name: string;
}

// ✅ Define props for the component
interface ChefCardProps {
  chef: Chef;
}

const ChefCard = ({ chef }: ChefCardProps) => {
  return (
    <div className="relative">
      <div className="relative w-full max-w-[330px] mx-auto">
        {/* Large decorative background circle (beige/cream) - left half circle */}
        <div className="absolute top-0 left-0 w-full h-full -rotate-50 -z-10">
          <div className="w-1/2 h-full bg-secondary rounded-l-full"></div>
        </div>

        {/* Main circular image container */}
        <div className="w-full aspect-square rounded-full overflow-hidden mb-6 md:p-3 p-2">
          <Image
            src={chef?.image}
            height={330}
            width={330}
            alt={chef.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text content below image */}
      <div className="text-center flex flex-col mt-4">
        <h3 className="md:text-lg text-base font-montserrat font-semibold md:leading-[26px] leading-[22px] mb-1 ">
          {chef.name}
        </h3>
        <p className="md:text-base text-sm text-[#8E8B88] font-montserrat font-normal md:leading-[24px] leading-[20px]">
          {chef.title}
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
