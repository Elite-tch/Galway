"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, ShieldCheck, Star, CheckCircle, MapPin, ChevronRight } from "lucide-react";
import { businessConfig } from "@/config/businessConfig";
import Button from "./components/Button";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  // Custom pre-filled WhatsApp message
  const whatsAppBookingUrl = `https://wa.me/${businessConfig.whatsAppNumber}?text=${encodeURIComponent(
    `Hi ${businessConfig.businessName}, I would like to book a consultation with one of your artists!`
  )}`;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stats = [

    { value: "100%", label: "Sterile & Safe" },
    { value: "5★★★★★", label: "Highly Rated" },
  ];

  const galleryImages = [
    {
      url: "/art3.jpg",
      tag: "Tattoo shading",
      alt: "Tattoo shading close up"
    },
    {
      url: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=600&q=80",
      tag: "Portrait",
      alt: "Detailed portrait tattoo"
    },
    {
      url: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
      tag: "Tattoo shading",
      alt: "Tattoo artist applying stencil"
    },
    {
      url: "/art4.jpg",
      tag: "Tattoo shading",
      alt: "Traditional sleeve ink"
    },
    {
      url: "/art5.jpg",
      tag: "Tattoo shading",
      alt: "Minimalist floral forearm tattoo"
    },
    {
      url: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80",
      tag: "Jewelry",
      alt: "Gold ear jewelry studs"
    }
  ];

  const customerReviews = [
    {
      quote: "Professional atmosphere and top-notch service. Artur nailed it every single time",
      author: "Satisfied Client",
      artistFeatured: "Artur",
      stars: 5
    },
    {
      quote: "Absolutely top class, professional and extremely clean studio",
      author: "Local Guide",
      artistFeatured: "Studio Vibe",
      stars: 5
    },
    {
      quote: "CJ is extremely talented, gentle handed and a wonderful personality",
      author: "Regular Customer",
      artistFeatured: "CJ / Colm",
      stars: 5
    },
    {
      quote: "Lovely place, immaculately clean and friendly happy staff",
      author: "Visitor Review",
      artistFeatured: "Friendly Staff",
      stars: 5
    }
  ];

  return (
    <PageWrapper>
      {/* 1. Hero Section — side-by-side: text left, video right */}
      <section className="relative -mt-20 md:-mt-24 pt-24 md:pt-24 md:min-h-screen bg-[#e7e7db] overflow-hidden">
        <div className="flex flex-col lg:flex-row md:min-h-screen">

          {/* Left: Text Content */}
          <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-10 md:py-16 lg:py-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-center lg:items-start justify-center gap-4 md:gap-6 text-center lg:text-left max-w-xl w-full"
            >


              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 leading-tight tracking-tight"
              >
                Premium Custom <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                  Tattoos & Piercings
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-zinc-700 text-lg md:text-xl leading-relaxed font-medium"
              >
                Welcome to <span className="font-bold text-[#670b10]">{businessConfig.businessName}</span>.
                A creative tattoo design studio in the heart of Galway known for our professional atmosphere, top quality work, and friendly staff. Walk-ins welcome!
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {stats.map((stat, idx) => {

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center justify-center text-center "
                    >
                      <span className="text-xl md:text-2xl font-extrabold text-[#670b10]">{stat.value}</span>
                      <span className="text-zinc-500 font-semibold text-xs md:text-sm tracking-wide mt-1 uppercase">
                        {stat.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 w-full mx-auto"
              >
                <Button variant="primary" href={whatsAppBookingUrl} className="py-4 px-8 text-base shadow-lg bg-brand-primary hover:bg-[#72161d] border-none text-white w-full sm:w-auto">
                  Book Consultation
                </Button>

              </motion.div>


            </motion.div>
          </div>

          {/* Right: Image Panel — ~45% on desktop */}
          <div className="w-full lg:w-[45%] hidden md:block relative min-h-[50vh] lg:min-h-screen shrink-0">
            <Image
              src="/art.jpg"
              alt="Tattoo artist at work in Art Tattoo Shop Galway"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>



      {/* 3. About Us Section */}
      <section className="bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* About Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[45%] relative min-h-[350px] lg:min-h-full shrink-0"
          >
            <Image
              src="/art2.jpg"
              alt="Custom Tattoo Drafting in Galway"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </motion.div>

          {/* About Right Text */}
          <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-10 lg:py-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 max-w-xl w-full"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#670b10] font-bold text-xs uppercase tracking-wider">
                  ABOUT OUR STUDIO
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800">
                  Galway&apos;s Premier Custom Tattoo & Piercing Studio
                </h2>
              </div>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                At <span className="font-semibold text-[#670b10]">{businessConfig.businessName}</span>, we are dedicated to merging custom illustration with premium body art. We offer an inviting, professional atmosphere and friendly staff who guide you through every step of your tattoo or piercing journey.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                Located right at Terryland Retail Park on Headford Road, our studio matches top-notch service with absolute cleanliness. Our resident artists design custom, hand-crafted artwork that is tailored specifically for you, and we welcome walk-ins for both piercing and tattooing daily.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-semibold text-zinc-700">5 Award-Winning Artists</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-semibold text-zinc-700">Immaculately Clean Studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-semibold text-zinc-700">Walk-Ins Always Welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-semibold text-zinc-700">Implant-Grade Body Jewelry</span>
                </div>
              </div>

              <div className="mt-4 self-center sm:self-start">
                <Button href="/contact" variant="outline" className="group border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                  <span>Contact & Bookings</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>


      <section className="relative h-[450px] mt-8 w-full border-t border-zinc-150 overflow-hidden shadow-inner">
        <iframe
          src={businessConfig.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Art Tattoo Shop Galway Location Map"
        />
        <div className="absolute top-8 left-4 md:left-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-sm border border-zinc-100 hidden sm:flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-2 text-brand-primary font-bold text-sm tracking-wider uppercase">
            <MapPin className="w-4 h-4" />
            <span>Our Studio</span>
          </div>
          <div>
            <h4 className="font-bold text-zinc-800 text-lg">{businessConfig.businessName}</h4>
            <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{businessConfig.address}</p>
          </div>
          <div className="border-t border-zinc-100 pt-3">
            <p className="text-zinc-400 text-xs font-medium">Opening Hours:</p>
            <p className="text-zinc-600 text-xs font-semibold mt-1">{businessConfig.workingHours}</p>
          </div>
          <Button href={whatsAppBookingUrl} variant="whatsapp" className="w-full text-xs py-2 px-4 shadow-sm justify-center bg-[#670b10] text-white hover:bg-[#670b10]/80">
            Book via WhatsApp
          </Button>
        </div>
      </section>


      {/* 6. Gallery Preview Section */}
      <section className="py-14 bg-[#f6f5f0]/50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center flex flex-col items-center gap-4 mb-10">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-wider">
              CREATIVE PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800">
              Studio Gallery
            </h2>
            <div className="w-20 h-1 bg-brand-primary rounded-full" />

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="relative aspect-square rounded overflow-hidden shadow-md group bg-zinc-200 border border-white"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out "
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {img.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Real Customer Reviews Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center flex flex-col items-center gap-4 mb-8 md:mb-16">
            <span className="text-[#670b10] font-bold text-xs uppercase tracking-wider">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800">
              Reviews from our Clients
            </h2>
            <div className="w-20 h-1 bg-[#670b10] rounded-full" />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerReviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#f6f5f0]/40 border border-zinc-150 p-8 rounded-[2rem] flex flex-col justify-between shadow-sm relative overflow-hidden"
              >
                {/* Large Background Icon */}
                <div className="absolute -top-4 -right-4 text-brand-secondary/10 pointer-events-none">
                  <Flame className="w-32 h-32" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-brand-accent mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-700 italic text-base md:text-lg leading-relaxed relative z-10 mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-zinc-200/50 pt-4 mt-auto">
                  <span className="font-extrabold text-zinc-800 text-sm tracking-wide">
                    {review.author}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full">
                    {review.artistFeatured}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Location Map Embed Section */}

    </PageWrapper>
  );
}
