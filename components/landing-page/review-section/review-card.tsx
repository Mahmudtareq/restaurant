import { Icons } from "@/components/custom/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export interface Review {
  id: number;
  text: string;
  author: string;
  platform: string;
  avatar: string;
}

const ReviewCard = ({ review, isActive }: any) => {
  return (
    <Card
      className={` bg-secondary  relative min-h-[310px] ${
        isActive
          ? "border-[2px] rounded-[4px] border-primary transition-all duration-500"
          : "rounded-none border-0"
      }`}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <p className=" text-[12px] md:text-lg leading-[18px] md:leading-[26px] mb-6 font-montserrat font-semibold">
          "{review.text}"
        </p>
        <div className="absolute right-2 top-[120px] aspect-[39/29]">
          <Icons.questionMark className="text-[#F6F1E7]" />
        </div>
        <Separator className="bg-primary my-5" />
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center">
            <Image
              width={60}
              height={60}
              alt="avater image"
              src={review.avatar}
              className="h-full w-full"
            />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-sm md:text-lg leading-[18px] md:leading-[26px] font-montserrat">
              {review.author}
            </p>
            <p className="md:text-base text-xs font-medium font-montserrat text-[#8E8B88]">
              {review.platform}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
