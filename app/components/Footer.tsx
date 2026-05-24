"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { businessConfig } from "@/config/businessConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">



          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg tracking-wide uppercase border-l-2 border-brand-primary pl-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-all">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg tracking-wide uppercase border-l-2 border-brand-primary pl-3">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm md:text-base text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>{businessConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${businessConfig.phoneNumbers[0]}`}
                    className="hover:text-white transition-colors"
                  >
                    {businessConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {businessConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Coverage */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg tracking-wide uppercase border-l-2 border-brand-primary pl-3">
              Working Hours
            </h4>
            <ul className="flex flex-col gap-4 text-sm md:text-base text-slate-400">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-300">Operational Hours</p>
                  <p className="text-slate-400 text-xs mt-0.5">{businessConfig.workingHours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-300">Areas We Serve</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {businessConfig.areasServed.slice(0, 5).join(", ")} and surrounding regions.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs md:text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {businessConfig.businessName}. All rights reserved.</p>
          <p className="text-slate-600">
            Premium Custom Tattoos & Body Piercings in Galway, Ireland.
          </p>
        </div>
      </div>
    </footer>
  );
}
