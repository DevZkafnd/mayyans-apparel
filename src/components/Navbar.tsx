"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ShopMenu from "./ShopMenu";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileShopExpanded, setMobileShopExpanded] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className="fixed top-[40px] z-50 w-full border-b border-neutral-800 bg-black/30 backdrop-blur-md"
      onMouseLeave={() => setIsShopOpen(false)}
    >
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center pl-6 md:pl-0">
            <Image
              src="/logo.svg"
              alt="Mayans Apparel"
              width={144}
              height={48}
              priority
              className="h-10 w-auto md:h-12 object-contain invert"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <ShopMenu isOpen={isShopOpen} onClose={() => setIsShopOpen(false)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] h-screen w-full bg-neutral-950 md:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="Mayans Apparel"
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain invert"
                  />
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full bg-neutral-900 p-2 text-white hover:bg-neutral-800"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 overflow-y-auto pb-20">
                {/* Shop Section */}
                <div className="border-b border-neutral-800 pb-6">
                  <button 
                    onClick={() => setMobileShopExpanded(!mobileShopExpanded)}
                    className="flex w-full items-center justify-between text-xl font-bold uppercase tracking-wider text-white"
                  >
                    <span>Shop</span>
                    {mobileShopExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </button>
                  
                  <AnimatePresence>
                    {mobileShopExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 flex flex-col space-y-4 pl-4">
                          <Link href="/collections/shop-all" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-neutral-400 hover:text-white">Shop All</Link>
                          <Link href="/collections/holiday-25" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-neutral-400 hover:text-white">Holiday 25</Link>
                          
                          <div className="pt-2">
                            <span className="text-xs font-semibold text-mayans-red uppercase tracking-widest">Tops</span>
                            <div className="mt-2 flex flex-col space-y-2 pl-2">
                              {["All Tops", "Jackets & Fleeces", "Knits & Shirts", "Hoodies", "Crewnecks", "T-Shirts"].map(item => (
                                <Link 
                                  key={item}
                                  href={`/collections/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm text-neutral-400 hover:text-white"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <span className="text-xs font-semibold text-mayans-red uppercase tracking-widest">Bottoms</span>
                            <div className="mt-2 flex flex-col space-y-2 pl-2">
                              {["All Bottoms", "Shorts", "Pants", "Sweatpants"].map(item => (
                                <Link 
                                  key={item}
                                  href={`/collections/${item.toLowerCase().replace(/ /g, "-")}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm text-neutral-400 hover:text-white"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <span className="text-xs font-semibold text-mayans-red uppercase tracking-widest">Accessories</span>
                            <div className="mt-2 flex flex-col space-y-2 pl-2">
                              {["All Accessories", "Hats", "Belts", "Bags & Wallets", "Misc."].map(item => (
                                <Link 
                                  key={item}
                                  href={`/collections/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-").replace(/\./g, "")}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm text-neutral-400 hover:text-white"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/coming-soon" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-wider text-white hover:text-mayans-red"
                >
                  Coming Soon
                </Link>
              </div>

              <div className="mt-auto pt-6 border-t border-neutral-800">
                <p className="text-xs text-neutral-500 text-center">
                  &copy; 2024 Mayans Apparel
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
