"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function BrandHeritage() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const opacity = useMotionValue(0);
  const shouldRender = pathname !== '/coming-soon';

  const updateOpacity = useCallback((latestScrollY: number) => {
    if (typeof window === "undefined") return;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = latestScrollY + windowHeight;
    const distanceToBottom = documentHeight - scrollPosition;

    const triggerDistance = windowHeight * 0.5;

    let newOpacity = 1 - distanceToBottom / triggerDistance;
    newOpacity = Math.max(0, Math.min(1, newOpacity));
    opacity.set(newOpacity);
  }, [opacity]);

  useEffect(() => {
    if (!shouldRender) {
      opacity.set(0);
    } else {
      // Recalculate opacity after a brief delay to ensure DOM is ready
      setTimeout(() => {
        updateOpacity(window.scrollY);
      }, 100);
    }
  }, [pathname, opacity, updateOpacity, shouldRender]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (shouldRender) {
      updateOpacity(latest);
    }
  });

  if (!shouldRender) return null;

  return (
    <section className="fixed bottom-0 left-0 -z-10 h-[80vh] w-full overflow-hidden">
      {/* Background Image - Fixed/Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=2400&auto=format&fit=crop"
          alt="Mayans Heritage"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Darker overlay for better contrast */}
      </div>

      {/* Centered Logo Content - Fade In Effect */}
      <motion.div 
        className="relative z-10 flex h-full w-full items-center justify-center"
        style={{ opacity }}
      >
        <div className="w-full max-w-[300px] md:max-w-[500px] px-6">
          <Image
            src="/logo.webp"
            alt="Mayans Apparel"
            width={500}
            height={200}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
