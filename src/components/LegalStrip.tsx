import { BadgeCheck, MapPin } from "lucide-react";
import { AnimatedContainer, AnimatedItem } from "./AnimatedInView";

export default function LegalStrip() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <AnimatedContainer>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AnimatedItem>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-black/50 px-4 py-3 text-white backdrop-blur-sm">
                <BadgeCheck strokeWidth={2} className="text-mayans-red" />
                <p className="text-sm font-medium">
                  Merek Terdaftar IDM • HKI Resmi
                </p>
              </div>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-black/50 px-4 py-3 text-white backdrop-blur-sm">
                <MapPin strokeWidth={2} className="text-mayans-red" />
                <p className="text-sm font-medium">
                  Workshop Milik Sendiri • Bandung Kulon
                </p>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
