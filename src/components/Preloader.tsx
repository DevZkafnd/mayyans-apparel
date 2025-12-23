"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hasRunInitial, setHasRunInitial] = useState(false);

  useEffect(() => {
    // Run preloader if it's the homepage OR if it's the very first load of the session
    if (pathname === "/" || !hasRunInitial) {
      setDone(false);
      setProgress(0);
      setHasRunInitial(true);

      let p = 0;
      const start = performance.now();
      const duration = 1800;
      let raf = 0;

      function tick(now: number) {
        const t = Math.min(1, (now - start) / duration);
        p = Math.floor(t * 100);
        setProgress(p);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setTimeout(() => setDone(true), 300);
        }
      }
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-6xl text-paper-white"
          >
            {progress}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

