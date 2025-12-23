"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero({ imageUrl }: { imageUrl: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/0" />
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute right-[-10%] top-[20%] -z-10"
        >
          <Image
            src="/logo-symbol.svg"
            alt=""
            width={700}
            height={700}
            className="h-[700px] w-auto opacity-5 rotate-[-15deg]"
          />
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-wide text-paper-white text-center sm:text-left"
        >
          SOLUSI KONVEKSI & APPAREL TERINTEGRASI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-paper-white/85 text-center sm:text-left"
        >
          Spesialis pembuatan Kaos, Jersey, Seragam, dan Kemeja. Terdaftar resmi
          dan bergaransi.
        </motion.p>
      </div>
    </section>
  );
}
