import type { Metadata } from "next";
import "./globals.css";
import { businessConfig } from "@/config/businessConfig";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: `${businessConfig.businessName} | Premium Tattoos & Piercings Galway`,
  description: `Visit ${businessConfig.businessName} in the heart of Galway City. Custom tattoo designs, professional tattooing, laser tattoo removal, and body piercing. Walk-ins welcome!`,
  keywords: "tattoo shop galway, tattoo studio galway, body piercing galway, tattoo artists galway, custom tattoos ireland, tattoo removal galway, piercer galway, galway bay tattoo, walk in tattoo galway, body jewelry",
  openGraph: {
    title: `${businessConfig.businessName} - Premium Tattoos & Piercings Galway`,
    description: `Custom tattoo designs, professional tattooing, laser tattoo removal, and body piercing in the heart of Galway. Walk-ins welcome!`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dynamicStyles = {
    "--brand-primary": businessConfig.colors.primary,
    "--brand-secondary": businessConfig.colors.secondary,
    "--brand-accent": businessConfig.colors.accent,
    "--brand-neutral-bg": businessConfig.colors.neutralBg,
    "--brand-neutral-dark": businessConfig.colors.neutralDark,
  } as React.CSSProperties;

  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      style={dynamicStyles}
    >
      <body className="min-h-full flex flex-col bg-brand-neutral-bg text-brand-neutral-dark">
        <Navbar />
        {/* Padding-top to ensure content does not slide under the floating sticky header */}
        <main className="flex-1 flex flex-col pt-20 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
