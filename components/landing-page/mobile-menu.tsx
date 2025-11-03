import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/public/sample-data/landing-page-data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

const MobileMenuSection = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden cursor-pointer">
          <Menu className=" h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#F6F1E7] ">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                width={67}
                height={24}
                alt="logo"
                className="aspect-[67/24]"
              />
            </Link>

            <button
              className="p-1 h-[25px] w-[25px] flex items-center justify-center cursor-pointer"
              onClick={handleNavClick}
            >
              <X className="text-black h-5 w-5 dark:text-white" />
            </button>
          </div>
        </SheetHeader>
        <div className="md:hidden ">
          <div className="container px-4 py-4 flex flex-col gap-1.5">
            {navItems.map((item) => {
              // ✅ Clean route-only active detection
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`text-[11px] font-montserrat bg-secondary flex font-medium hover:text-primary transition-colors p-2.5 ${
                    isActive ? " text-primary" : ""
                  }`}
                >
                  <span>
                    {" "}
                    {isActive ? (
                      <div className="flex items-center gap-1">
                        <span className="text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                          >
                            <circle cx="2" cy="2" r="2" fill="#CD5827" />
                          </svg>
                        </span>
                        {item.label}
                      </div>
                    ) : (
                      <> {item.label}</>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSection;
