export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string; // Lucide icon name mapping
  featured: boolean;
}

export interface ArtistItem {
  name: string;
  specialty: string;
  image: string;
  instagram: string;
  bio: string;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  phoneDisplay: string;
  phoneNumbers: string[];
  whatsAppNumber: string; // International format without + or spaces, e.g., '353871234567'
  email: string;
  address: string;
  googleMapsEmbedUrl: string;
  workingHours: string;
  areasServed: string[];
  colors: {
    primary: string; // Primary brand color (Hex)
    secondary: string; // Secondary brand color (Hex)
    accent: string; // Accent color (Hex)
    neutralBg: string; // Clean background
    neutralDark: string; // Professional dark text
  };
  services: ServiceItem[];
  artists: ArtistItem[];
}

export const businessConfig: BusinessConfig = {
  businessName: "Art Tattoo Shop Galway",
  tagline: "Premium Tattoos & Piercings in the Heart of Galway",
  phoneDisplay: "+353 (0) 91 562 822",
  phoneNumbers: ["+35391562822"],
  whatsAppNumber: "353871234567", // Ireland code 353 + mobile
  email: "info@arttattoogalway.com",
  address: "Unit 25B Terryland House, Terryland Retail Park, Headford Road, Galway, H91 28H2",
  // Google Maps embed URL for Art Tattoo Shop Galway Ireland
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.452097722421!2d-9.046930922851944!3d53.284771779967675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96e92a3213c5%3A0x13c043575d9bc039!2sArt%20Tattoo%20Shop%20Galway%20Ireland!5e0!3m2!1sen!2sie!4v1716560000000!5m2!1sen!2sie",
  workingHours: "Monday to Saturday: 11:00 AM - 7:00 PM, Sunday: 12:00 PM - 6:00 PM",
  areasServed: [
    "Galway City Centre",
    "Salthill",
    "Claddagh",
    "Oranmore",
    "County Galway",
    "All of Ireland"
  ],
  colors: {
    primary: "#8c1d27", // Deep Crimson Red (from logo)
    secondary: "#9bbca7", // Sage Green (from logo)
    accent: "#d4af37", // Vintage Gold (from logo detail)
    neutralBg: "#ffffff", // Pure White
    neutralDark: "#18181b" // Charcoal Black
  },
  services: [
    {
      id: "custom-tattoo-design",
      name: "Custom Tattoo Design",
      shortDescription: "Work 1-on-1 with our artists to draft and refine a completely custom concept.",
      fullDescription: "Every piece of body art should be as unique as the story behind it. In our custom design sessions, our artists sketch, illustrate, and map designs specifically to your body contour, style preferences, and creative brief.",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80",
      iconName: "Palette",
      featured: true
    },
    {
      id: "tattoo-application",
      name: "Tattoo Application",
      shortDescription: "Flawless technical application using top-tier sterile equipment and vegan-friendly inks.",
      fullDescription: "From intricate fine-line details and vibrant color realism to bold traditional work, our artists deliver clean line-work, smooth shading, and rich saturated pigments. We maintain medical-grade sterilization for absolute safety.",
      image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&w=800&q=80",
      iconName: "Paintbrush",
      featured: true
    },
    {
      id: "tattoo-removal",
      name: "Tattoo Removal & Fading",
      shortDescription: "Safe and effective laser removal to clear your skin or prepare it for a cover-up.",
      fullDescription: "If you have an old or unwanted tattoo, our advanced laser removal systems can help fade it for a fresh cover-up design or completely remove it. Minimal discomfort, certified technicians, and top-tier safety protocols.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      iconName: "Scissors",
      featured: true
    },
    {
      id: "piercing",
      name: "Body Piercing",
      shortDescription: "Safe, sterile body piercings using single-use needles. Walk-ins are always welcome!",
      fullDescription: "We provide professional, gentle-handed piercings for earlobes, cartilage, septum, nose, navel, and more. Our piercers use sterile single-use needles and offer implant-grade titanium jewelry. Walk-ins are welcome every day.",
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80",
      iconName: "Sparkles",
      featured: true
    },
    {
      id: "jewelry",
      name: "Premium Jewelry",
      shortDescription: "A curated collection of implant-grade titanium, gold, and niobium body jewelry.",
      fullDescription: "Explore our cabinet of beautiful body jewelry. We offer threadless and internally threaded studs, rings, and clickers from the world's most trusted manufacturers. Safe for fresh piercings and perfect for upgrades.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      iconName: "Gem",
      featured: false
    }
  ],
  artists: [
    {
      name: "Artur",
      specialty: "Hyper-Realism & Portraits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      instagram: "artur_tattoos_galway",
      bio: "Shop owner and lead artist. Artur is renowned for jaw-dropping black-and-grey realism, detailed portraits, and highly complex compositions."
    },
    {
      name: "Fay",
      specialty: "Fine-Line & Floral Realism",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      instagram: "fay_ink_design",
      bio: "Fay brings a delicate, illustrative touch to the studio. She specializes in fine-line work, micro-realism, botany, and elegant script tattoos."
    },
    {
      name: "CJ / Colm",
      specialty: "Traditional & Bold Neo-Traditional",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      instagram: "cj_colm_traditional",
      bio: "Extremely talented and gentle-handed, Colm brings a wonderful personality to the chair. He specializes in bold, colorful traditional and neo-traditional work."
    },
    {
      name: "Rob",
      specialty: "Illustrative Blackwork & Geometric",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
      instagram: "rob_geo_ink",
      bio: "Rob specializes in custom illustrative blackwork, clean dotwork, and complex geometric mandalas that flow perfectly with body anatomy."
    },
    {
      name: "Louis",
      specialty: "Custom Lettering & Cover-Ups",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      instagram: "louis_lettering_galway",
      bio: "With over 10 years of experience, Louis is our go-to expert for script calligraphy, custom typography, and complex tattoo cover-ups."
    }
  ]
};
