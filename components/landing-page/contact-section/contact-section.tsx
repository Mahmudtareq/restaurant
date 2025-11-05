import { CustomButton } from "@/components/custom/custom-button";
import { Icons } from "@/components/custom/icons";
import ReservationModal from "@/components/custom/reservation-modal";
import Image from "next/image";
import React from "react";

interface Location {
  city: string;
  address: string;
  openHours: string;
  phone?: string;
}

interface ContactSectionProps {
  image: string;
  openHours: { day: string; time: string }[];
  locations: Location[];
  heading: string;
  buttonLabel: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  image,
  openHours,
  locations,
  heading,
  buttonLabel,
}) => {
  return (
    <section className=" py-16 md:py-24">
      <div className="container max-w-[1440px] mx-auto">
        {/* Heading */}
        {/* Grid layout */}
        <div className="flex md:flex-row flex-col">
          {/* Left Side: Image */}
          <div className="md:w-[644px] self-end">
            <h2 className="text-center md:text-left font-serif_display text-lg lg:text-[28px] md:text-[20px]  font-normal mb-10">
              {heading}
            </h2>
            <div className="relative  md:h-[610px] h-[140px] overflow-hidden bg-[#1D1C1C]">
              <Image
                src={image}
                alt="Restaurant interior"
                fill
                className="object-cover object-center h-full w-full p-4 md:p-0"
                priority
              />
              <div className="absolute bottom-6 left-6 md:block hidden">
                <CustomButton
                  className=""
                  modalComponent={<ReservationModal />}
                >
                  {buttonLabel}
                </CustomButton>
              </div>
            </div>
          </div>

          {/* Right Side: Info Panel */}
          <div className="bg-[#1D1C1C] text-[#E8E8E8] px-8 py-10 flex flex-col justify-between md:w-[450px] lg:w-[803px] md:h-[760px]">
            {/* Open Hours */}
            <div>
              <h3 className="text-primary font-normal font-serif_display text-base md:text-2xl lg:text-[28px] mb-6 md:mb-[30px] lg:mb-[40px]">
                Open Hours
              </h3>
              <ul className="space-y-2 text-[12px] md:text-lg">
                {openHours.map((hour, idx) => (
                  <li key={idx} className="flex justify-between  pb-1">
                    <span>{hour.day}</span>
                    <span>{hour.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="671"
                height="1"
                viewBox="0 0 671 1"
                fill="none"
              >
                <path
                  d="M0.5 0.5H670.5"
                  stroke="#8E8B88"
                  stroke-linecap="round"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>

            {/* Locations */}
            <div className="mt-8">
              <h3 className="text-primary font-normal font-serif_display text-base md:text-2xl lg:text-[28px] mb-6 md:mb-[30px] lg:mb-[40px]">
                Location
              </h3>

              <div className="space-y-6">
                {locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row justify-between md:items-center gap-4"
                  >
                    <div>
                      <h4 className="text-primary flex items-center gap-2 text-sm md:text-lg font-medium font-montserrat">
                        {loc.city}{" "}
                        <Icons.locationIcon className="text-primary h-6 w-6" />
                      </h4>
                      <p className="text-[#F9F3F0] text-sm md:text-lg leading-[18px] md:leading-[26px] font-medium">
                        {loc.address}
                      </p>
                      <p className="text-[#F9F3F0] text-sm md:text-lg  md:leading-[26px] leading-[18px] font-medium">
                        {loc.openHours}
                      </p>
                    </div>
                    <CustomButton
                      href={`tel:${loc.phone || "#"}`}
                      variant="outline"
                      className="border border-primary text-primary hover:text-white"
                      icon={false}
                    >
                      CALL NOW
                    </CustomButton>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
