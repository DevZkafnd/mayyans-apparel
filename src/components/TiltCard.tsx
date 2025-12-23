"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, MouseEvent, useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  onClick?: () => void;
};

export default function TiltCard({ children, className, maxTilt = 15, onClick }: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const rY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shineX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const shineY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * maxTilt);
    rotateY.set(px * maxTilt);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        <div className="relative h-full w-full">
          {children}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20"
            style={{
              x: shineX,
              y: shineY,
              background:
                "radial-gradient(200px circle at center, rgba(255,255,255,0.35), rgba(255,255,255,0) 60%)",
              mixBlendMode: "screen",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
