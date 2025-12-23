import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.svg"
            alt="Mayans Apparel"
            width={320}
            height={64}
            className="h-16 w-auto object-contain invert brightness-200"
          />
          <div className="text-right">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Mayans Apparel. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-white/50">
              IDM Reg. No. 000928xxx • NIB 1902202xxx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
