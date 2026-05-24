"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { businessConfig } from "@/config/businessConfig";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Watch for scroll position to apply style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? " bg-white/90 backdrop-blur-md shadow-md "
          : " bg-[#e7e7db]"
          }`}
      >
        <div className="max-w-7xl mx-auto shadow py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative h-16 w-auto"
              >
                <Image
                  src="/lg.png"
                  alt="Galway Bay Tattoo Logo"
                  height={100}
                  width={180}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-md font-medium text-slate-900 hover:text-brand-primary py-2 transition-colors duration-300"
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBorder"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${businessConfig.phoneNumbers[0]}`}
                className="flex items-center gap-2 text-slate-900 hover:text-brand-primary font-semibold text-sm transition-colors"
              >
                <div className="p-2 text-[#670b10] rounded-full group-hover:bg-brand-primary/10 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-slate-900" >{businessConfig.phoneDisplay}</span>
              </a>
              <Button variant="whatsapp" className="py-2 bg-[#670b10] hover:bg-[#670b10]/80  px-8 text-sm">
                Book Now
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl border-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white p-6 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="/logo.jpg"
                      alt="Galway Bay Tattoo Logo"
                      height={44}
                      width={110}
                      className="h-11 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4 py-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-semibold py-2 px-3 rounded-xl transition-all ${isActive
                          ? "bg-brand-primary/10 text-brand-primary"
                          : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="border-t border-slate-100 pt-6 flex flex-col gap-4">
                <a
                  href={`tel:${businessConfig.phoneNumbers[0]}`}
                  className="flex items-center gap-3 text-slate-700 hover:text-brand-primary font-semibold py-2 px-3 rounded-xl hover:bg-slate-50 transition-all"
                >
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Call Us</p>
                    <p className="text-sm">{businessConfig.phoneDisplay}</p>
                  </div>
                </a>

                <Button
                  variant="whatsapp"
                  className="w-full bg-[#670b10] hover:bg-[#670b10]/80 justify-center py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
