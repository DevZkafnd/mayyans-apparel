import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2400&auto=format&fit=crop"
          alt="Coming Soon Background"
          fill
          className="object-cover opacity-30 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Logo */}
        <div className="mb-12 w-48 md:w-64">
          <Image
            src="/logo.webp"
            alt="Mayans Apparel"
            width={300}
            height={100}
            className="w-full h-auto object-contain invert drop-shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <h1 className="mb-6 font-display text-5xl font-bold uppercase tracking-tighter text-white md:text-8xl">
          Coming Soon
        </h1>
        <p className="mb-10 max-w-lg font-sans text-lg font-light tracking-wide text-neutral-300 md:text-xl">
          We are crafting something extraordinary. Our full collection is currently in production and will be revealed shortly.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-md transition-all hover:border-mayans-red hover:bg-mayans-red/10"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-white transition-colors group-hover:text-mayans-red">
            Back to Home
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:text-mayans-red"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
