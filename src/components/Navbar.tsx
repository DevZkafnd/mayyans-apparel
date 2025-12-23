"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ShopMenu from "./ShopMenu";

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header 
      className="fixed top-[40px] z-50 w-full border-b border-neutral-800 bg-black/30 backdrop-blur-md"
      onMouseLeave={() => setIsShopOpen(false)}
    >
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center pl-6">
            <Image
              src="/logo.svg"
              alt="Mayans Apparel"
              width={144}
              height={48}
              priority
              className="h-12 w-auto object-contain invert"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 pr-6">
            <div 
              className="relative h-full py-2"
              onMouseEnter={() => setIsShopOpen(true)}
            >
              <Link 
                href="/shop" 
                className={`text-sm font-medium uppercase tracking-widest transition-colors ${isShopOpen ? 'text-mayans-red' : 'text-white hover:text-mayans-red'}`}
              >
                Shop
              </Link>
            </div>
            
            <Link 
              href="/coming-soon" 
              className="text-sm font-medium uppercase tracking-widest text-white hover:text-mayans-red transition-colors"
            >
              Coming Soon
            </Link>
          </nav>
        </div>
      </div>

      <ShopMenu isOpen={isShopOpen} onClose={() => setIsShopOpen(false)} />
    </header>
  );
}
