"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ShopMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShopMenu({ isOpen, onClose }: ShopMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full w-full border-t border-neutral-800 bg-neutral-950/95 backdrop-blur-xl"
          onMouseLeave={onClose}
        >
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-6 gap-8">
              {/* Menu Links - Spanning 5 columns */}
              <div className="col-span-5 grid grid-cols-5 gap-8">
                {/* Column 1: Main Links */}
                <div className="flex flex-col gap-4">
                  <Link href="/collections/shop-all" className="text-lg font-bold uppercase tracking-wider text-white hover:text-mayans-red transition-colors">
                    Shop All
                  </Link>
                  <Link href="/collections/holiday-25" className="text-lg font-bold uppercase tracking-wider text-white hover:text-mayans-red transition-colors">
                    Holiday 25
                  </Link>
                  <Link href="/collections/classics" className="text-lg font-bold uppercase tracking-wider text-white hover:text-mayans-red transition-colors">
                    Classics
                  </Link>
                  <Link href="/products/gift-card" className="text-lg font-bold uppercase tracking-wider text-white hover:text-mayans-red transition-colors">
                    Gift Card
                  </Link>
                </div>

                {/* Column 2: Tops */}
                <div>
                  <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">Tops</h3>
                  <ul className="flex flex-col gap-3">
                    {["All Tops", "Jackets & Fleeces", "Knits & Shirts", "Hoodies", "Crewnecks", "T-Shirts", "Women"].map((item) => (
                      <li key={item}>
                        <Link href={`/collections/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-sm text-neutral-300 hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Bottoms */}
                <div>
                  <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">Bottoms</h3>
                  <ul className="flex flex-col gap-3">
                    {["All Bottoms", "Shorts", "Pants", "Sweatpants"].map((item) => (
                      <li key={item}>
                        <Link href={`/collections/${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-neutral-300 hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Accessories */}
                <div>
                  <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">Accessories</h3>
                  <ul className="flex flex-col gap-3">
                    {["All Accessories", "Hats", "Belts", "Bags & Wallets", "Misc."].map((item) => (
                      <li key={item}>
                        <Link href={`/collections/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-").replace(/\./g, "")}`} className="text-sm text-neutral-300 hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 5: Empty for spacing or future use */}
                <div></div>
              </div>

              {/* Push Image - Spanning 1 column */}
              <div className="col-span-1">
                <Link href="/blogs/projects/dime-x-paraboot-thiers" className="group relative block aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                    alt="Featured Collection"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-white/80">New Arrival</p>
                    <h3 className="mt-2 text-xl font-bold uppercase leading-tight text-white">Mayans x Urban<br />Collection</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
