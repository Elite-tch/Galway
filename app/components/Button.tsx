"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { businessConfig } from "@/config/businessConfig";

const MotionLink = motion(Link);

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "outline" | "whatsapp";
  className?: string;
  isExternal?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  isExternal = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full px-6 py-3 text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-opacity-90 focus:ring-brand-primary",
    secondary:
      "bg-brand-secondary text-white hover:bg-opacity-90 focus:ring-brand-secondary",
    accent:
      "bg-brand-accent text-brand-neutral-dark hover:bg-opacity-95 focus:ring-brand-accent font-bold",
    outline:
      "border-2 border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white focus:ring-brand-primary",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba5a] focus:ring-[#25D366] font-bold shadow-[#25D366]/20",
  };

  const dynamicStyles = `${baseStyles} ${variants[variant]} ${className}`;

  // If it's a WhatsApp variant, we pre-format the WhatsApp URL
  const isWhatsApp = variant === "whatsapp";
  const finalHref = isWhatsApp
    ? `https://wa.me/${businessConfig.whatsAppNumber}?text=${encodeURIComponent(
      `Hi ${businessConfig.businessName}, I would like to inquire about booking a tattoo or piercing session!`
    )}`
    : href;

  const content = (
    <>

      {children}
    </>
  );

  if (finalHref) {
    if (isExternal || isWhatsApp) {
      return (
        <motion.a
          href={finalHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={dynamicStyles}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <MotionLink
        href={finalHref}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={dynamicStyles}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={dynamicStyles}
    >
      {content}
    </motion.button>
  );
}
