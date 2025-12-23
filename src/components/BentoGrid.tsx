"use client";
import Image from "next/image";
import { AnimatedContainer, AnimatedItem } from "./AnimatedInView";
import TiltCard from "./TiltCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductModal from "./ProductModal";

type Item = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  gridArea?: "large" | "small";
  gallery?: string[];
  specs?: string[];
  pricing?: string;
  tags?: string[];
  materials?: { name: string; desc: string }[];
};

export default function BentoGrid({ items }: { items: Item[] }) {
  const [selected, setSelected] = useState<Item | null>(null);
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <AnimatedContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <AnimatedItem key={item.id}>
              <TiltCard
                className="group relative h-[400px] overflow-hidden rounded-xl border border-neutral-800 bg-black/50 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelected(item)}
              >
                <motion.div
                  layoutId={`image-${item.id}`}
                  className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 600px, (min-width: 768px) 33vw, 100vw"
                    priority={idx === 0}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-in-out group-hover:bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-paper-white drop-shadow group-hover:text-mayans-red transition-colors duration-300 ease-in-out">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-paper-white/85 drop-shadow">
                    {item.description}
                  </p>
                  <button
                    onClick={() => setSelected(item)}
                    className="mt-3 rounded-full bg-mayans-red px-3 py-1.5 text-sm font-semibold text-paper-white shadow-md transition-transform hover:scale-105 active:scale-95"
                  >
                    Lihat Detail
                  </button>
                </div>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>
      <AnimatePresence>
        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
