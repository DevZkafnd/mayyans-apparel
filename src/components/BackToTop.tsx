"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => {
      const threshold = window.innerHeight * 2;
      setShow(v > threshold);
    });
    return () => unsub();
  }, [scrollY]);

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          onClick={toTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-24 right-6 z-50 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-md hover:bg-white/20"
        >
          ↑ Ke atas
        </motion.button>
      )}
    </AnimatePresence>
  );
}

