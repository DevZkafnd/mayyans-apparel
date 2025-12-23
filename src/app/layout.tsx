import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppCTA from "../components/WhatsAppCTA";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import BrandHeritage from "../components/BrandHeritage";
import Footer from "../components/Footer";
import AtmosphereLayer from "../components/AtmosphereLayer";
import Preloader from "../components/Preloader";
import ScrollProgressBar from "../components/ScrollProgressBar";
import BackToTop from "../components/BackToTop";
import AnnouncementBar from "../components/AnnouncementBar";

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
  metadataBase: new URL("https://mayans-apparel.vercel.app"),
  title: "Mayans Apparel | Premium Clothing Manufacturer",
  description:
    "Premium apparel manufacturing and convection services. Specialists in jerseys, t-shirts, uniforms, and corporate wear with high-quality standards.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Mayans Apparel",
    description:
      "Premium Clothing Manufacturer & Convection Services.",
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
        <AnnouncementBar />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <div className="relative z-10 mb-[80vh] bg-neutral-950">
          <Footer />
        </div>
        <BrandHeritage />
        <WhatsAppCTA />
        <AtmosphereLayer />
        <BackToTop />
      </body>
    </html>
  );
}
