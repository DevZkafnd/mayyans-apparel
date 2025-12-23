# Mayans Apparel — “The Industrial Dark”

Website konveksi terintegrasi berfokus pada konversi ke WhatsApp, dengan strategi UX “clean”, animasi premium, dan sistem desain gelap industrial.

## Status Proyek
- Framework: Next.js App Router dengan SSR.
- Styling: Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline` tokens).
- Animasi: Framer Motion untuk entry animation, page transition, dan garis workflow.
- Icons: Lucide React (stroke tebal 2px).
- Font: Oswald (heading uppercase, condensed look) & Inter (body text).
- Image Optimization: Next Image dengan `remotePatterns` untuk `images.unsplash.com`.
- Branding: Logo diintegrasikan ke header, footer, watermark, serta metadata.
- CTA: Tombol WhatsApp sticky global.
- Build: Lulus lint dan build; halaman `/` diprerender statik.

## Yang Sudah Dibangun
- Hero “Cinematic Intro”
  - Background image `object-cover` + gradient overlay (legibility tinggi).
  - Headline besar uppercase, subheadline abu terang (2 baris).
  - Watermark simbol besar 700px, opacity 5%, rotasi -15° (atmosferik).
  - Lokasi: `src/components/Hero.tsx:10`.
- Validasi Legalitas (HKI & Lokasi)
  - Strip dua poin dengan glassmorphism, border halus, ikon tebal.
  - Lokasi: `src/components/LegalStrip.tsx:5`.
- Product Grid “Bento Box”
  - Data statis `SERVICES_DATA` (id, title, description, image).
  - Grid 3 kolom desktop, 1 kolom mobile, tinggi kartu `h-[400px]`.
  - Hover: zoom 10%, overlay gelap, judul berubah merah, tombol dengan micro-interaction.
  - Peningkatan: efek 3D Tilt dengan glare/pantulan cahaya yang mengikuti posisi mouse.
  - Lokasi: `src/components/BentoGrid.tsx:15`, wrapper tilt: `src/components/TiltCard.tsx:1`, data: `src/app/page.tsx:12`.
- Workflow “Dark Glassmorphism”
  - Kartu transparan `bg-black/40` + `backdrop-blur-md` + `border-white/10`.
  - Ikon besar 48px (MessageSquareText, Calculator, Shirt, Truck).
  - Garis penghubung dashed yang “menggambar diri” saat di-scroll.
  - Lokasi: `src/components/Workflow.tsx:41`.
- Navigasi & CTA
  - Navbar sticky blur dengan logo (dioptimalkan dengan `next/image`).
  - Footer dengan varian logo putih (dioptimalkan dengan `next/image` + efek monochrome).
  - Tombol WhatsApp sticky global.
  - Lokasi: `src/components/Navbar.tsx:3`, `src/components/Footer.tsx:1`, `src/components/WhatsAppCTA.tsx:1`.
- Page Transition
  - AnimatePresence dengan spring “stiff” untuk pergantian halaman.
  - Lokasi: `src/components/PageTransition.tsx:6` dan dipakai di `src/app/layout.tsx:49`.
- Metadata & Icons
  - `metadataBase` diset, icons dan Open Graph image ditambahkan dan mengarah ke logo brand.
  - Lokasi: `src/app/layout.tsx:22`.
 - Velocity Marquee (Scroll-Responsive)
  - Teks besar berjalan horizontal dengan kecepatan mengikuti velocity scroll.
  - Integrasi di homepage di antara LegalStrip dan Product Grid.
  - Lokasi: `src/components/VelocityScroll.tsx:1`, pemakaian: `src/app/page.tsx:60`.
 - Atmosphere & Physics
  - Cinematic Noise Overlay: tekstur film/grain global `opacity 4%`.
  - Roaming Spotlight: radial gradient mengikuti kursor (efek senter).
  - Lokasi: overlay & spotlight `src/components/AtmosphereLayer.tsx:1`, mount di `src/app/layout.tsx:53`.
 - Preloader Intro
  - Layar hitam dengan counter 0–100% font Oswald, exit slide-up.
  - Lokasi: `src/components/Preloader.tsx:1`, mount di `src/app/layout.tsx:50`.
 - Hero Parallax
  - Watermark logo besar bergerak pelan saat scroll (kedalaman ruang).
  - Lokasi: `src/components/Hero.tsx:7` (transform) dan `src/components/Hero.tsx:19` (wrapper parallax).
 - Expandable Product Detail (Modal)
  - Klik kartu di grid membuka modal overlay dengan layout split (galeri kiri, detail kanan).
  - Shared Element Transition (magic motion) dari kartu ke modal memakai `layoutId` yang sama.
  - Lokasi: trigger & `layoutId` di `src/components/BentoGrid.tsx:34–46`, modal di `src/components/ProductModal.tsx:73–82`.
 - Smart CTA & QoL
  - Smart WhatsApp Link di modal: pesan otomatis berisi judul produk + bahan terpilih (`src/components/ProductModal.tsx:36`).
  - Scroll Progress Bar fixed merah (orientasi scroll): `src/components/ScrollProgressBar.tsx:1`, mount `src/app/layout.tsx:53`.
  - Back To Top button dengan smooth scroll: `src/components/BackToTop.tsx:1`, mount `src/app/layout.tsx:56`.
  - Marquee fade-in saat masuk viewport: bungkus dengan `AnimatedContainer` (`src/app/page.tsx:104`).
 - Interactive Showcase — Intro Hero
  - Menggabungkan fungsi Banner + Showcase: awal layar hitam dengan teks "MAYANS APPAREL" dan thumbnail; klik thumbnail memunculkan gambar dengan efek zoom-out (scale 1.2 → 1.0).
  - Variants background `hidden/visible/exit` dengan ease “crisp”, overlay gradient gelap untuk keterbacaan.
  - Thumbnail strip dengan active border merah dan scale.
  - Lokasi: `src/components/InteractiveShowcase.tsx:1`, sebagai elemen pertama di homepage `src/app/page.tsx:104` (Hero lama dihapus).

## Detail Animasi
 - Entry animation (Fade Up + Scale Up):
  - Spring stiffness 260, damping 24 (tegas/maskulin).
  - `viewport={{ once: true, amount: 0.2 }}` (scroll-triggered sekali).
  - Stagger children 0.1 detik.
  - Lokasi: `src/components/AnimatedInView.tsx:16`.
 - Hero Staggered Reveal:
  - Variants container/child untuk teks per-huruf dengan efek unblur; background zoom dari 1.1 → 1.0.
  - Lokasi: teks `src/components/Hero.tsx:35–45`, variants `src/components/Hero.tsx:8–24`, background `src/components/Hero.tsx:19–27`.
- Hover Interactions:
  - Gambar scale 110%, overlay gelap naik 10%.
  - Judul berubah ke merah Mayans, transition `duration-300 ease-in-out`.
  - Lokasi: `src/components/BentoGrid.tsx:16` (gambar), `src/components/BentoGrid.tsx:26` (overlay), `src/components/BentoGrid.tsx:28` (judul).
- Micro-interactions:
  - Tombol CTA & grid: `whileHover`/`whileTap` untuk rasa taktil.
  - Lokasi: WA CTA `src/components/WhatsAppCTA.tsx:14–21`, tombol grid `src/components/BentoGrid.tsx:55–60`, kartu tap `src/components/TiltCard.tsx:52`.
- Page transition:
  - Initial/animate/exit dengan spring stiff; mode `wait` (halus).
  - Lokasi: `src/components/PageTransition.tsx:6`.
 - 3D Tilt Card:
  - Menggunakan `useMotionValue` + `useSpring` untuk `rotateX`/`rotateY` (maks 15°).
  - Glare/pantulan cahaya dengan radial gradient bergerak mengikuti mouse.
  - Lokasi: `src/components/TiltCard.tsx:11`.
 - Velocity Marquee:
  - `useScroll` + `useVelocity` + `useSpring` + `useAnimationFrame` untuk mengupdate posisi `x`.
  - Base speed 40, akselerasi mengikuti kecepatan scroll pengguna.
  - Copy demo “Recent Orders” default di `src/components/VelocityScroll.tsx:9`, tuning tampilan di `src/components/VelocityScroll.tsx:31`.
 - Shared Element Transition (Modal):
  - `motion.div layoutId="image-{id}"` di kartu dan modal untuk transisi yang menyatu.
  - Lokasi: kartu `src/components/BentoGrid.tsx:34–46`, modal `src/components/ProductModal.tsx:73–82`.
 - Spotlight (Mouse-follow):
  - `pointermove` → update CSS vars `--x`, `--y`, radial-gradient mengikuti kursor.
  - Lokasi: `src/components/AtmosphereLayer.tsx:6` (listener) dan `src/components/AtmosphereLayer.tsx:24` (style).

## Design System “Industrial Dark”
- Background: `#0a0a0a` (neutral-950).
- Surface: hitam dengan opacity 40–70% + `backdrop-blur-md`.
- Border: `neutral-800` atau `white/10`.
- Aksen: Mayans Red `#D90429` (elemen interaktif).
- Teks: `neutral-100` (putih tulang).
- Tokens: `@theme inline` di `src/app/globals.css:9` untuk warna & font.

## Data & Aset
- Data dummy layanan via Unsplash untuk menghindari Empty State.
- `next.config.ts` mengizinkan domain Unsplash.
- Logo Brand:
  - File utama yang dipakai: `public/logo.svg`.
  - Header: tinggi 48px, `object-contain` (tidak distorsi).
  - Footer: efek monochrome via `grayscale invert brightness(200%)`.
  - Watermark Hero: ukuran besar 700px, `opacity-5`, `object-contain`, rotasi -15°, off-center.
  - Metadata icons & OG image: referensi ke `/logo.svg`.
  - Opsi: jika tersedia SVG resmi (disarankan untuk ketajaman maksimal), letakkan di `public/` dan ganti referensi pada komponen yang relevan.

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
# buka http://localhost:3000
```

## Build & Verifikasi
```bash
npm run lint
npm run build
```
- Output: `/` diprerender statik, lint dan typecheck lulus.

## Deployment
- Platform: Vercel (direkomendasikan).
- Pastikan `Image Optimization` aktif dan `NEXT_PUBLIC_SITE_URL` diset ke domain produksi.
 - Set `metadataBase` di `src/app/layout.tsx` ke URL produksi final (mis. `https://mayans-apparel.vercel.app`), agar Open Graph/Twitter images resolve absolut.

## Next Steps
 - Ganti semua URL Unsplash dengan foto/video brand final.
 - Jika tersedia, sediakan varian logo SVG (wordmark & simbol) untuk kualitas maksimal.
 - Isi detail legalitas dari dokumen resmi (IDM/HKI).
 - Tambah halaman detail layanan & portofolio produksi (opsional).
 - Sesuaikan copywriting Marquee (mis. “KONVEKSI BANDUNG • TERPERCAYA SEJAK 2020 • KUALITAS EKSPOR •”) di `src/components/VelocityScroll.tsx:9`.
 - Tambahkan section Testimoni bergaya Dark Card dengan foto Unsplash & copy spesifik.
 - Optional: Elemen dekoratif floating tambahan (needle/thread PNG) untuk memperkaya parallax.
  - Perkaya `SERVICES_DATA` dengan `gallery`, `specs`, `pricing`, `tags`, `materials` untuk setiap produk agar modal informatif. Contoh: `src/app/page.tsx:12–37` (Jersey).
