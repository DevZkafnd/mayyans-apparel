import Hero from "../components/Hero";
import LegalStrip from "../components/LegalStrip";
import BentoGrid from "../components/BentoGrid";
import Workflow from "../components/Workflow";
import VelocityScroll from "../components/VelocityScroll";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&w=1972&q=80";

const SERVICES_DATA = [
  {
    id: 1,
    title: "JERSEY PRINTING",
    description: "Full printing, anti luntur, bahan drifit premium.",
    image:
      "https://images.unsplash.com/photo-1577212017184-80cc0da11082?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1577212017184-80cc0da11082?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&w=1200&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&w=1200&q=80",
    ],
    specs: [
      "Bahan: Drifit Premium",
      "Sablon: Full Sublimasi",
      "Jahitan: Stick Balik",
    ],
    pricing: "Mulai Rp 85.000/pcs",
    tags: ["Best Seller", "Sport"],
    materials: [
      { name: "Drifit Milano", desc: "Drifit premium, jatuh dan adem." },
      { name: "Drifit Brazil", desc: "Pori rapat, ringan, cepat kering." },
      { name: "Benzema", desc: "Tekstur unik, kuat dan nyaman." },
    ],
  },
  {
    id: 2,
    title: "KAOS SABLON",
    description: "Plastisol & discharge, detail presisi.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&w=1200&q=80",
      "https://images.unsplash.com/photo-1656360088907-5109c245851d?q=80&w=1200&auto=format&fit=crop",
    ],
    specs: [
      "Bahan: Cotton 24s",
      "Sablon: Plastisol/Discharge",
      "Jahitan: Rapi & kuat",
    ],
    pricing: "Mulai Rp 55.000/pcs",
    tags: ["Classic", "Casual"],
  },
  {
    id: 3,
    title: "KEMEJA KERJA",
    description: "Bahan drill/tropical, jahitan rapi standard butik.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&w=1200&q=80",
    specs: [
      "Bahan: Drill/Tropical",
      "Kancing: Resin kuat",
      "Saku: Fungsional",
    ],
    pricing: "Mulai Rp 95.000/pcs",
    tags: ["Corporate", "Uniform"],
  },
  {
    id: 4,
    title: "ROMPI & JACKET",
    description: "Desain custom untuk komunitas dan perusahaan.",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&w=1200&q=80",
    specs: ["Bahan: Parasut/Canvas", "Resleting: YKK", "Logo: Bordir/Terasa"],
    pricing: "Mulai Rp 120.000/pcs",
    tags: ["Community", "Outdoor"],
  },
  {
    id: 5,
    title: "CELANA & CHINOS",
    description: "Pola nyaman, bahan awet untuk seragam.",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&w=1200&q=80",
    specs: ["Bahan: Twill/Chino", "Pola: Slim/Regular", "Jahitan: Double lock"],
    pricing: "Mulai Rp 130.000/pcs",
    tags: ["Workwear"],
  },
  {
    id: 6,
    title: "MARCHANDISE",
    description: "Topi, Tote bag, dan aksesoris tekstil lainnya.",
    image:
      "https://images.unsplash.com/photo-1656360088907-5109c245851d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specs: ["Topi, Tote bag, dll.", "Logo: Bordir/Sablon", "Material: Variatif"],
    pricing: "Mulai Rp 25.000/pcs",
    tags: ["Promo", "Branding"],
  },
];

export default function Home() {
  return (
    <main>
      <Hero imageUrl={HERO_IMAGE} />
      <LegalStrip />
      <VelocityScroll />
      <BentoGrid items={SERVICES_DATA} />
      <Workflow />
    </main>
  );
}
