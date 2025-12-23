"use client";
import { motion } from "framer-motion";
import { AnimatedContainer, AnimatedItem } from "./AnimatedInView";
import { MessageSquareText, Calculator, Shirt, Truck } from "lucide-react";

const steps = [
  { title: "Konsultasi Desain", desc: "Diskusi kebutuhan dan konsep.", icon: MessageSquareText },
  { title: "Estimasi Harga & DP", desc: "Kalkulasi biaya dan DP.", icon: Calculator },
  { title: "Proses Produksi", desc: "Update berkala progres.", icon: Shirt },
  { title: "Pelunasan & Pengiriman", desc: "QC, pelunasan, dan kirim.", icon: Truck },
];

export default function Workflow() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <AnimatedContainer>
          <div className="relative">
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-7 mx-auto hidden h-4 w-full md:block"
              viewBox="0 0 100 4"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 5 2 L 95 2"
                stroke="#3f3f46"
                strokeWidth="0.8"
                fill="transparent"
                pathLength={1}
                strokeDasharray="3 3"
              />
            </motion.svg>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <AnimatedItem key={s.title}>
                    <div className="relative rounded-xl border border-white/10 bg-black/40 p-6 text-white backdrop-blur-md">
                      <Icon strokeWidth={2} className="mb-3 h-12 w-12 text-mayans-red" />
                      <h4 className="font-display text-base font-semibold uppercase tracking-wider">
                        {s.title}
                      </h4>
                      <p className="mt-2 text-sm text-white/80">{s.desc}</p>
                    </div>
                  </AnimatedItem>
                );
              })}
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
