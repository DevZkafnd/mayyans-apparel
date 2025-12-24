"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Shirt, ShieldCheck } from "lucide-react";
import Link from "next/link";

const PHONE_NUMBER = "6287848722051";
const MESSAGE = encodeURIComponent("Halo Mayans Apparel, saya ingin tanya-tanya & kirim file pesanan.");

export default function IntroNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShow(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const waHref = `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] flex items-end sm:items-center justify-center p-4"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-900/95 text-white backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShow(false)}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-mayans-red">
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold tracking-wide">MAYANS APPAREL</span>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                Tanya-tanya atau kirim file pesanan silahkan wa ya..
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <Shirt className="h-5 w-5 text-mayans-red" />
                <span className="text-sm sm:text-base">
                  Buat KAOS, JERSEY, KEMEJA & HOODIE DLL yg berkualitas tentu bisa.
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <ShieldCheck className="h-5 w-5 text-mayans-red" />
                <span className="text-sm sm:text-base">
                  MAYANS APPAREL memberikan Sentuhan Seni dan Kualitas.
                </span>
              </div>
              <div className="pt-2">
                <Link
                  href={waHref}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-mayans-red px-5 py-3 text-sm font-semibold text-paper-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat via WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
