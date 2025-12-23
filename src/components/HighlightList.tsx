"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HIGHLIGHT_DATA = [
  {
    id: "men",
    title: "KOLEKSI PRIA",
    image: {
      desktop: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2400&auto=format&fit=crop",
      mobile: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
    },
    cta: "Belanja Pria",
    href: "/coming-soon",
    alt: "Koleksi Pakaian Pria Mayans Apparel"
  },
  {
    id: "women",
    title: "KOLEKSI WANITA",
    image: {
      desktop: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2400&auto=format&fit=crop",
      mobile: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
    },
    cta: "Belanja Wanita",
    href: "/coming-soon",
    alt: "Koleksi Pakaian Wanita Mayans Apparel"
  }
];

export default function HighlightList() {
  return (
    <section className="relative w-full bg-neutral-950">
      <div className="flex flex-col md:flex-row w-full">
        {HIGHLIGHT_DATA.map((item) => (
          <div key={item.id} className="relative w-full md:w-1/2 overflow-hidden group">
            {/* Aspect Ratio Container - Mobile: 2:3, Desktop: 1:1.15 */}
            <div className="relative pt-[150%] md:pt-[115%]">
              <Image
                src={item.image.desktop}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 px-6">
                <Link href={item.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-white text-black px-8 py-3 md:px-10 md:py-4 font-display font-bold tracking-wider text-sm md:text-base uppercase hover:bg-mayans-red hover:text-white transition-colors duration-300"
                  >
                    {item.cta}
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
