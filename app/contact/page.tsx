"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { businessConfig } from "@/config/businessConfig";
import Button from "../components/Button";
import PageWrapper from "../components/PageWrapper";

export default function ContactPage() {
  const whatsAppBookingUrl = `https://wa.me/${businessConfig.whatsAppNumber}?text=${encodeURIComponent(
    `Hi ${businessConfig.businessName}, I am contacting you from your website. I would like to book a tattoo or piercing session!`
  )}`;

  const contactMethods = [
    {
      id: "phone",
      label: "Call Us",
      value: businessConfig.phoneDisplay,
      description: "Direct shop line for booking, inquiries, and consultation scheduling.",
      icon: Phone,
      actionHref: `tel:${businessConfig.phoneNumbers[0]}`,
      actionLabel: "Call Shop",
    },
    {
      id: "email",
      label: "Email Us",
      value: businessConfig.email,
      description: "Send us reference images, custom ideas, or corporate booking requests.",
      icon: Mail,
      actionHref: `mailto:${businessConfig.email}`,
      actionLabel: "Send Email",
    },
    {
      id: "location",
      label: "Our Galway Studio",
      value: businessConfig.address,
      description: "Visit our clean, professional studio at Terryland House, Galway.",
      icon: MapPin,
      actionHref: "https://maps.google.com/?q=Art+Tattoo+Shop+Galway+Ireland",
      actionLabel: "Get Directions",
      isExternal: true,
    },
    {
      id: "hours",
      label: "Studio Hours",
      value: businessConfig.workingHours,
      description: "Our artists are carving ink and piercers are open during these hours.",
      icon: Clock,
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <PageWrapper>
      {/* 1. Page Sub-Header */}
      <section className="relative overflow-hidden py-32 sm:py-24 md:py-42 text-white text-center bg-zinc-950">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/art.jpg"
            alt="Art Tattoo Shop Galway studio"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact Art Tattoo Shop
          </h1>
          <div className="w-20 h-1 bg-brand-primary rounded-full mt-1" />
          <p className="text-zinc-300 text-sm md:text-base max-w-xl leading-relaxed mt-2 uppercase tracking-wider font-semibold">
            {businessConfig.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Contact Body Section */}
      <section className="md:py-24 py-16 bg-brand-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

            {/* Column 1: Info Cards */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-center lg:text-left">
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-wider">
                    BOOKING & CONSULTATION OPTIONS
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800">
                    Get in Touch Instantly
                  </h2>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                    Have a custom tattoo idea, want to check walk-in availability for piercings, or have questions about aftercare? Reach out to us via phone, email, or WhatsApp.
                  </p>
                </div>

                {/* Grid of contact card chips */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4"
                >
                  {contactMethods.map((method) => {
                    const MethodIcon = method.icon;
                    return (
                      <motion.div
                        key={method.id}
                        variants={fadeInUp}
                        whileHover={{ y: -4 }}
                        className="bg-white p-6 rounded-3xl border border-zinc-150 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-[#8c1d27]/10 text-brand-primary rounded-xl shrink-0">
                            <MethodIcon className="w-5 h-5" />
                          </div>
                          <span className="font-extrabold text-zinc-800 text-sm tracking-wide uppercase">
                            {method.label}
                          </span>
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <p className="font-bold text-zinc-700 text-sm md:text-base break-words leading-tight">
                            {method.value}
                          </p>
                          <p className="text-zinc-400 text-xs mt-1 leading-normal">
                            {method.description}
                          </p>
                        </div>
                        {method.actionHref && (
                          <a
                            href={method.actionHref}
                            target={method.isExternal ? "_blank" : undefined}
                            rel={method.isExternal ? "noopener noreferrer" : undefined}
                            className="text-xs font-bold text-brand-primary hover:underline self-start flex items-center gap-1 group/btn"
                          >
                            <span>{method.actionLabel}</span>
                            <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Mega Call to Action Box */}
              <div className=" p-8 rounded-[2rem] border border-zinc-750 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg mt-6">
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 self-center sm:self-start text-[#670b10] text-xs font-bold uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 animate-bounce" />
                    <span>WhatsApp Booking</span>
                  </div>
                  <h3 className="font-extrabold text-black text-lg md:text-xl">
                    Chat Directly with the Shop
                  </h3>
                  <p className="text-zinc-400 text-xs max-w-xs">
                    Connect with our booking coordinator instantly to arrange a consultation slot!
                  </p>
                </div>
                <Button href={whatsAppBookingUrl} variant="whatsapp" className="w-full sm:w-auto py-3.5 px-6 shadow-md justify-center shrink-0 bg-[#670b10] hover:bg-[#670b10]/80 text-white">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Column 2: Google Maps Embed Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <div className="bg-white shadow-md h-full min-h-[450px] overflow-hidden flex flex-col">
                <div className="flex-1 relative overflow-hidden">
                  <iframe
                    src={businessConfig.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title="Art Tattoo Shop Galway Location Map"
                  />
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
