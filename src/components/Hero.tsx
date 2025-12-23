"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="relative isolate h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-neutral-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 min-h-full min-w-full w-[300vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[1.35]">
          <iframe
            src="https://www.youtube.com/embed/9zLN7gSwq_Q?autoplay=1&mute=1&controls=0&loop=1&playlist=9zLN7gSwq_Q&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&enablejsapi=1&origin=http://localhost:3000"
            title="Mayans Apparel Video"
            className="h-full w-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute right-[-10%] top-[20%] -z-10"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={700}
            height={700}
            className="h-[700px] w-auto opacity-5 rotate-[-15deg]"
          />
        </motion.div>
      </div>

      <div className="relative flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-40 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="block text-xl sm:text-2xl font-display tracking-[0.2em] text-mayans-red mb-4"
          >
            MAYANS APPAREL
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-wide text-paper-white text-center sm:text-left max-w-4xl"
          >
            SOLUSI KONVEKSI & APPAREL TERINTEGRASI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-paper-white/85 text-center sm:text-left"
          >
            Spesialis pembuatan Kaos, Jersey, Seragam, dan Kemeja. Terdaftar resmi
            dan bergaransi.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
