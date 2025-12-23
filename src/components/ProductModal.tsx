"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type Material = { name: string; desc: string };
type Product = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  specs?: string[];
  pricing?: string;
  tags?: string[];
  materials?: Material[];
};

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const PHONE_NUMBER = "6281234567890";
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const [idx, setIdx] = useState(0);
  const mats = product.materials ?? [
    { name: "Drifit Milano", desc: "Drifit premium, jatuh dan adem." },
    { name: "Drifit Brazil", desc: "Pori rapat, ringan, cepat kering." },
    { name: "Benzema", desc: "Tekstur unik, kuat dan nyaman." },
  ];
  const [mat, setMat] = useState<Material>(mats[0]);

  const waText = useMemo(() => {
    const base = `Halo Mayans, saya tertarik dengan ${product.title}. Info untuk bahan ${mat.name} dan price list?`;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(base)}`;
  }, [product.title, mat.name]);

  function next() {
    setIdx((i) => (i + 1) % gallery.length);
  }
  function prev() {
    setIdx((i) => (i - 1 + gallery.length) % gallery.length);
  }

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[70] bg-black/60"
      />

      <motion.div
        key="panel"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="fixed inset-0 z-[80] mx-auto flex max-w-6xl items-center px-6"
      >
        <div className="relative grid w-full grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-neutral-900/90 p-6 text-white backdrop-blur-xl md:grid-cols-2">
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
          >
            ✕
          </button>
          <div className="relative">
            <motion.div layoutId={`image-${product.id}`} className="relative h-[420px] overflow-hidden rounded-xl">
              <Image
                src={gallery[idx]}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 640px, 100vw"
                priority
              />
            </motion.div>
            {gallery.length > 1 && (
              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={prev}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                >
                  ← Prev
                </button>
                <div className="text-xs text-white/70">
                  {idx + 1} / {gallery.length}
                </div>
                <button
                  onClick={next}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                >
                  Next →
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide">
              {product.title} PRO
            </h2>
            {product.tags && (
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-3 flex gap-2 text-xs text-white/80">
              <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">
                Min. Order 12 Pcs
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">
                Pengerjaan 7 Hari
              </span>
            </div>

            <div className="mt-5">
              <div className="mb-2 text-xs uppercase tracking-wider text-white/60">Pilihan Bahan</div>
              <div className="flex flex-wrap gap-2">
                {mats.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => setMat(m)}
                    className={`rounded-full px-3 py-1 text-sm ${
                      mat.name === m.name ? "bg-mayans-red text-paper-white" : "border border-white/20 bg-white/10 text-white"
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">{mat.desc}</p>
            </div>

            {product.specs && product.specs.length > 0 && (
              <div className="mt-5">
                <div className="mb-2 text-xs uppercase tracking-wider text-white/60">Spesifikasi</div>
                <ul className="list-disc pl-5 text-sm text-white/85">
                  {product.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.pricing && (
              <div className="mt-5">
                <div className="mb-2 text-xs uppercase tracking-wider text-white/60">Estimasi Harga</div>
                <p className="text-sm font-medium text-paper-white">{product.pricing}</p>
              </div>
            )}

            <details className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3">
              <summary className="cursor-pointer text-sm font-medium">Lihat Size Chart</summary>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-white/60">
                    <tr>
                      <th className="py-1">Size</th>
                      <th className="py-1">Lebar (cm)</th>
                      <th className="py-1">Panjang (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/85">
                    <tr><td>S</td><td>48</td><td>68</td></tr>
                    <tr><td>M</td><td>50</td><td>70</td></tr>
                    <tr><td>L</td><td>52</td><td>72</td></tr>
                    <tr><td>XL</td><td>54</td><td>74</td></tr>
                  </tbody>
                </table>
              </div>
            </details>

            <div className="mt-6">
              <a
                href={waText}
                target="_blank"
                rel="noopener noreferrer"
                className="sticky bottom-0 inline-flex w-full justify-center rounded-full bg-mayans-red px-4 py-3 text-sm font-semibold text-paper-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Pesan Model Ini via WA
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
