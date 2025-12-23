"use client";

import Image from "next/image";

const STACKED_ITEMS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2400&auto=format&fit=crop",
    title: "Urban Collection",
    subtitle: "Redefining Streetwear",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2400&auto=format&fit=crop",
    title: "Premium Materials",
    subtitle: "Quality in Every Stitch",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2400&auto=format&fit=crop",
    title: "Limited Edition",
    subtitle: "Exclusive Drops",
  },
];

export default function StackedScroll() {
  return (
    <section className="relative w-full bg-neutral-950">
      {/* Container height determines scroll distance. 
          3 items * 100vh = 300vh scroll space.
          However, usually for sticky stacking, we just let them flow naturally 
          if the parent is tall enough, or we use a specific structure.
          
          Pattern:
          Container (relative)
            Item 1 (sticky, top-0, h-screen)
            Item 2 (sticky, top-0, h-screen)
            Item 3 (sticky, top-0, h-screen)
      */}
      
      <div className="relative flex flex-col">
        {STACKED_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className="sticky top-0 z-0 flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-900"
            style={{ zIndex: index + 1 }}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h2 className="mb-4 text-5xl font-bold uppercase tracking-tighter md:text-7xl">
                  {item.title}
                </h2>
                <p className="text-xl font-light tracking-widest uppercase opacity-90 md:text-2xl">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
