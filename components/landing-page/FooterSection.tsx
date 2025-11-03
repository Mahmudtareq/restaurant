import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../shared/socials-links";

const FooterSection = () => {
  return (
    <footer className="bg-[#1B1B1B] text-[#E8E8E8] pt-16 pb-8">
      <div className="container max-w-[1440px] mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 border-b border-[#8E8B88] pb-10">
          {/* Left - Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center w-[168px] h-[60px]">
              <Image
                src="/images/footer-logo.svg"
                width={168}
                height={60}
                alt="logo"
                className="h-full w-full "
              />
            </Link>
            <p className="text-sm text-[#F6F1E7] md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px] lg:mb-[60px] mt-6 md:mb-[44px] mb-6">
              Savoré brings the essence of Pan-Asian cuisine to your table with
              fresh ingredients and authentic flavors.
            </p>
            <ul className="space-y-1.5">
              <li className="text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px] text-[#8E8B88] ">
                +880187623489
              </li>
              <li className="text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px] text-[#8E8B88]">
                hello@savore.com
              </li>
              <li className="text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px] text-[#8E8B88]">
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Middle - Navigation */}
          <div className="col-span-1">
            <h3 className="text-primary font-semibold mb-6 text-sm md:text-lg font-montserrat leading-[18px] md:leading-[26px]">
              Restaurant
            </h3>
            <ul className="space-y-1.5 text-[#8E8B88]">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-primary transition text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px]"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Open Hours */}
          <div className="col-span-1">
            <h3 className="text-primary font-semibold mb-6 text-sm md:text-lg font-montserrat leading-[18px] md:leading-[26px]">
              Open Hours
            </h3>
            <ul className="space-y-2 text-sm text-[#8E8B88]">
              <li className="hover:text-primary transition text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px]">
                Sat–Thu: 11 AM – 11 PM
              </li>
              <li className="hover:text-primary transition text-sm md:text-lg font-montserrat font-medium leading-[18px] md:leading-[26px]">
                Fri: 1 PM – 11 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-6">
          <SocialLinks iconColor="text-primary" />
          {/* Copyright */}
          <p className="text-xs font-medium font-montserrat md:text-base text-[#8E8B88] text-center md:text-right">
            © 2025 SAVORÉ. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
