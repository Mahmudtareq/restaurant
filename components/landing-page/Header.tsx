"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/public/sample-data/landing-page-data";
import { usePathname } from "next/navigation";
import SocialLinks from "@/components/shared/socials-links";
import { Icons } from "@/components/custom/icons";
import MobileMenuSection from "./mobile-menu";

// Navigation items configuration

const Header = () => {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: any) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  // Split nav items into left and right
  const midPoint = Math.floor(navItems.length / 2);
  const leftNavItems = navItems.slice(0, midPoint);
  const rightNavItems = navItems.slice(midPoint);

  return (
    <header className={`w-full py-5`}>
      <div className=" px-3 container max-w-[1320px] mx-auto">
        <div
          className={` md:justify-between flex items-center ${
            isMobileMenuOpen ? "justify-between" : ""
          } mb-3 md:mb-[27px]`}
        >
          <div className="flex items-center justify-between w-full">
            <div className=" hidden md:block">
              <SocialLinks iconSize="w-[20px] h-[20px]" gap="gap-x-[18px]" />
            </div>
            <div className="md:hidden block ">
              <div className="flex items-center">
                {/* <ThemeToggleButton /> */}
                <MobileMenuSection />
                <Link href="/" className="flex items-center">
                  <h1 className="text-[20px]  font-cormorant font-bold">
                    Cake Storys
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:block hidden">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Icons.call className="w-[18px] h-[18px] text-[#3E3B3] aspect-[]" />
                <span className="text-[15px] font-comfortaa font-medium text-nowrap">
                  +880-1XXX-XXXXXX
                </span>
              </div>

              {/* <Button className="rounded-[24px] w-[103px] h-[30px] helvetica-neue-light bg-black dark:bg-[#F9FAFB] dark:text-[#111] hover:bg-black">
                Subscribe
              </Button> */}
            </div>
          </div>
        </div>
        <div className="hidden md:block text-center">
          <div className="flex items-center text-center justify-center lg:gap-[60px] gap-6">
            {/* Left Navigation Items */}
            {leftNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-[15px] font-comfortaa font-medium hover:text-primary transition-colors ${
                    isActive ? "text-primary font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Center: Logo */}
            <Link href="/">
              <h1 className="text-[36px] font-cormorant font-bold">
                Cake Storys
              </h1>
            </Link>

            {/* Right Navigation Items */}
            {rightNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-[15px] font-comfortaa font-medium hover:text-primary transition-colors ${
                    isActive ? "text-primary font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
