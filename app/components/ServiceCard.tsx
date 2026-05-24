"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Paintbrush, Scissors, Sparkles, Gem, HelpCircle } from "lucide-react";
import { ServiceItem } from "@/config/businessConfig";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Paintbrush,
  Scissors,
  Sparkles,
  Gem,
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="flex flex-col h-full bg-white rounded overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-shadow duration-300"
    >
      {/* Service Image Section */}
      <div className="relative h-72 md:h-80 w-full overflow-hidden group">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-80" />


      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
            <IconComponent className="w-5 h-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Service
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-brand-primary transition-colors">
          {service.name}
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-1">
          {service.shortDescription}
        </p>
      </div>
    </motion.div>
  );
}
