"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";

const ANNOUNCEMENTS = [
  "Gratis Ongkir se-jabodetabek untuk pesanan diatas 100 pcs!",
  "Diskon 10% untuk pelanggan baru dengan kode: MAYANSNEW",
  "Garansi kualitas dengan acc sample jadi!",
  "Gratis Design dan Sample untuk pemesan serius / sudah DP!",
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-neutral-900 text-white text-[10px] sm:text-xs tracking-wider h-[40px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-full">
        <div className="relative flex items-center justify-center h-full">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label={isPlaying ? "Pause announcement" : "Play announcement"}
          >
            {isPlaying ? (
              <Pause className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3" />
            )}
          </button>

          <div className="relative h-5 w-full overflow-hidden text-center px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="font-medium uppercase line-clamp-1">
                  {ANNOUNCEMENTS[currentIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
