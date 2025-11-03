"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/public/sample-data/landing-page-data";
import { usePathname } from "next/navigation";
import SocialLinks from "@/components/shared/socials-links";
import { Icons } from "@/components/custom/icons";
import MobileMenuSection from "./mobile-menu";
import Image from "next/image";
import { Button } from "../ui/button";
import { CustomButton } from "../custom/custom-button";

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
  return (
    <header
      className={`fixed top-0 left-0 w-full  border-b border-primary bg-secondary z-50 h-[80px] flex items-center justify-center`}
    >
      <div className="container max-w-[1440px] mx-auto px-4 h-full flex items-center">
        {/* Mobile Header */}
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              width={67}
              height={24}
              alt="logo"
              className="aspect-[67/24]"
            />
          </Link>

          {/* Right side: Button + Menu */}
          <div className="flex items-center gap-2.5">
            <CustomButton>Reservation</CustomButton>
            <MobileMenuSection />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between w-full h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              width={151}
              height={54}
              alt="logo"
              className="aspect-[151/54]"
            />{" "}
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-base font-montserrat font-medium uppercase hover:text-primary  ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Subscribe Button */}
          <CustomButton variant="filled">Reservation</CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
