"use client";
import { useEffect, useRef } from "react";

export default function AtmosphereLayer() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      const x = e.clientX;
      const y = e.clientY;
      const el = spotRef.current;
      if (!el) return;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"></rect>
        </svg>
      </div>
      <div
        ref={spotRef}
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)",
        }}
      />
    </>
  );
}

