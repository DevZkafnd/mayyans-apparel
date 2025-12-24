import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FOOTER_LINKS = {
  mayans: {
    title: "MAYANS",
    links: [
      { label: "Lokasi Toko", href: "/pages/our-store" },
      { label: "Tentang Kami", href: "/pages/about" },
      { label: "Hubungi Kami", href: "/pages/contact-us" },
      { label: "Corporate Order by Mayans", href: "/pages/corporate-order" },
    ],
  },
  bantuan: {
    title: "BANTUAN",
    links: [
      { label: "FAQ", href: "/pages/faq" },
      { label: "Pembayaran", href: "/pages/payment" },
      { label: "Penukaran & Pengembalian", href: "/pages/returns" },
      { label: "Kebijakan Privasi", href: "/pages/privacy-policy" },
    ],
  },
  customer: {
    title: "CUSTOMER",
    links: [
      { label: "Voucher", href: "/pages/voucher" },
      { label: "Lacak Pesanan", href: "/pages/track-order" },
    ],
  },
  produk: {
    title: "PRODUK",
    links: [
      { label: "Sale", href: "/collections/sale" },
      { label: "Koleksi Baru", href: "/collections/new-arrivals" },
      { label: "Kaos", href: "/collections/t-shirts" },
      { label: "Kemeja", href: "/collections/shirts" },
      { label: "Celana", href: "/collections/pants" },
      { label: "Aksesoris", href: "/collections/accessories" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 pt-12 pb-8 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Navigation Columns */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {Object.values(FOOTER_LINKS).map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold tracking-wider text-white">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-2 sm:space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-xs sm:text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Logo Column */}
          <div className="flex flex-col gap-6 lg:items-start border-t border-neutral-800 pt-8 lg:border-0 lg:pt-0">
            <Link href="/" className="block">
              <Image
                src="/logo.webp"
                alt="Mayans Apparel"
                width={124}
                height={32}
                className="h-8 w-auto object-contain invert brightness-200"
              />
            </Link>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wider text-white">
                Follow kami
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 md:mt-16 border-t border-neutral-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left">
            <p className="text-xs sm:text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} Mayans Apparel. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-neutral-500">
              IDM Reg. No. 000928xxx • NIB 1902202xxx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
