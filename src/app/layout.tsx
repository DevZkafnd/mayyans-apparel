import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppCTA from "../components/WhatsAppCTA";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AtmosphereLayer from "../components/AtmosphereLayer";
import Preloader from "../components/Preloader";
import ScrollProgressBar from "../components/ScrollProgressBar";
import BackToTop from "../components/BackToTop";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Mayans Apparel — Konveksi Bandung Terintegrasi",
  description:
    "Spesialis Kaos, Jersey, Seragam, dan Kemeja. Legalitas resmi, workshop sendiri, bergaransi.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Mayans Apparel",
    description:
      "Solusi Konveksi & Apparel Terintegrasi. Terdaftar resmi & bergaransi.",
    images: ["/logo.svg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        <Preloader />
        <ScrollProgressBar />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppCTA />
        <AtmosphereLayer />
        <BackToTop />
      </body>
    </html>
  );
}
