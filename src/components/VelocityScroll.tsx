"use client";
import { motion, useScroll, useVelocity, useSpring, useAnimationFrame, useMotionValue } from "framer-motion";

type VelocityScrollProps = {
  text?: string;
};

export default function VelocityScroll({
  text = "🔥 RECENT ORDER: 1.200 PCS JERSEY - BANK BRI JAKARTA • 500 PCS KEMEJA - PT TELKOM AKSES • 300 PCS ROMPI - KOMUNITAS MOTOR BANDUNG •",
}: VelocityScrollProps) {
  const baseSpeed = 40;
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 400, damping: 50 });

  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const v = Math.abs(smoothVelocity.get());
    const speed = baseSpeed + v * 0.05;
    const moveBy = speed * (delta / 1000);
    x.set(x.get() - moveBy);
  });

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10">
        <motion.div
          aria-hidden
          className="whitespace-nowrap opacity-20"
          style={{ x }}
        >
          <span className="mr-12 font-display text-8xl uppercase tracking-widest">
            {text}
          </span>
          <span className="mr-12 font-display text-8xl uppercase tracking-widest">
            {text}
          </span>
          <span className="mr-12 font-display text-8xl uppercase tracking-widest">
            {text}
          </span>
          <span className="mr-12 font-display text-8xl uppercase tracking-widest">
            {text}
          </span>
          <span className="mr-12 font-display text-8xl uppercase tracking-widest">
            {text}
          </span>
          <span className="mr-12 font-display text-8xl uppercase tracking-widest">
            {text}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
