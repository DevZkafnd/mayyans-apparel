"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const container: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

export function AnimatedContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={item}>
      {children}
    </motion.div>
  );
}
