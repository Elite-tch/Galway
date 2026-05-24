"use client";

import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";
import { businessConfig } from "@/config/businessConfig";
import ServiceCard from "../components/ServiceCard";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";

export default function ServicesPage() {
  const allServices = businessConfig.services;

  // Primary WhatsApp URL
  const whatsAppGeneralUrl = `https://wa.me/${businessConfig.whatsAppNumber}?text=${encodeURIComponent(
    `Hi ${businessConfig.businessName}, I would like to inquire about booking a tattoo or piercing session.`
  )}`;

  return (
    <PageWrapper>
      {/* 1. Sub-Header Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-32 text-white text-center bg-zinc-950">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/shop.jpg"
            alt="Tattoo studio background"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Studio Services
          </h1>
          <div className="w-20 h-1 bg-brand-primary rounded-full mt-1" />
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mt-2 px-2 sm:px-0">
            Providing Galway with custom tattoo designs, sterile applications, safe laser tattoo removal, and professional body piercings in a friendly, top-class studio.
          </p>
        </div>
      </section>

      {/* 2. Services Grid Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-brand-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom Banner / Support Info */}
      <section className="py-8 sm:py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-0 sm:right-10 w-56 h-56 sm:w-72 sm:h-72 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-[#f6f5f0] to-[#f6f5f0]/50 p-6 sm:p-10 md:p-12 rounded-3xl md:rounded-[2rem] border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 self-center md:self-start text-brand-primary font-bold text-sm">
                <Info className="w-5 h-5" />
                <span>Planning a custom piece?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-800">
                Book a Free Design Consultation
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                Planning a large scale sleeve, backpiece, complex cover-up, or custom project? Talk to our artists to sketch out, size, and estimate the project. We will help map your creative ideas into stunning skin art.
              </p>
            </div>
            <Button
              href={whatsAppGeneralUrl}
              variant="primary"
              isExternal
              className="py-3 px-6 shadow-md w-full md:w-auto justify-center bg-brand-primary hover:bg-[#72161d] text-white border-none"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
