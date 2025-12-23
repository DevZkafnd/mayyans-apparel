"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black/30 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center">
          <Link href="/" className="inline-flex items-center pl-6">
            <Image
              src="/logo.svg"
              alt="Mayans Apparel"
              width={144}
              height={48}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
