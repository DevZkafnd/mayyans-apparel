"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "6285880225306";
const MESSAGE = encodeURIComponent("Halo Mayans Apparel, saya ingin konsultasi konveksi.");

export default function WhatsAppCTA() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`;
  return (
    <Link
      href={href}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-mayans-red px-5 py-3 text-paper-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-mayans-red/60"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle size={20} strokeWidth={2} className="text-paper-white" />
      <span className="font-semibold tracking-wide">Hubungi via WhatsApp</span>
    </Link>
  );
}
