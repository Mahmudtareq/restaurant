"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: boolean;
  modalComponent?: React.ReactNode;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  icon = true,
  modalComponent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-[2px] font-montserrat uppercase font-semibold px-3.5 leading-[35px] md:px-4 py-1.5  md:py-2.5 text-[12px] md:text-base transition-all duration-300 group";

  // ✅ define variant styles
  const variants = {
    filled: cn(
      "bg-primary text-[#FAF8F5] hover:border-[2px] hover:border-[#EDE4D2] hover:shadow-[-3px_3px_4px_0_rgba(26,26,26,0.4)]",
      className
    ),
    outline: cn(
      "bg-transparent text-white hover:bg-primary hover:text-[#101020] border hover:border-[2px] hover:border-[#EDE4D2] hover:shadow-[-3px_3px_4px_0_rgba(26,26,26,0.4)]",
      className
    ),
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  // ✅ Add default white border if not already in className
  const defaultBorder =
    variant === "outline" && !className.includes("border-")
      ? "border-white"
      : "";

  // ✅ Combine all classes properly
  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    defaultBorder,
    disabledStyles
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Icons.arrowTop className="md:w-6 md:h-6 h-5 w-5 transition-all duration-300" />
      )}
    </>
  );
  const handleClick = () => {
    if (modalComponent) setIsModalOpen(true);
    else if (onClick) onClick();
  };

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={combinedClassName}
        onClick={handleClick}
      >
        {content}
      </button>

      {/* ✅ Render modal dynamically if passed */}
      {isModalOpen &&
        React.isValidElement(modalComponent) &&
        React.cloneElement(modalComponent as React.ReactElement<any>, {
          open: isModalOpen,
          setOpen: setIsModalOpen, // inject control props
        })}
    </>
  );
};
