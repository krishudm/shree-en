// ✅ Mobile Optimized Version (No content/logic changes)

import { motion } from "framer-motion";
import { useState } from "react";
import { Wrench, ShieldCheck, Hammer, Package } from "lucide-react";

import bch from "@/assets/brand-bch.png";
import oswal from "@/assets/brand-oswal.png";
import varuna from "@/assets/Varuna-Logo.png";
import koel from "@/assets/brand-koel.png";
import aquaqube from "@/assets/brand-aquaqube.jpeg";
import vguard from "@/assets/V-GUARD.png";

import koelPdf from "@/assets/pdfs/KOEL.pdf";
import oswalPdf from "@/assets/pdfs/KOEL.pdf";
import varunaPdf from "@/assets/pdfs/Varuna.pdf";
import aquaPdf from "@/assets/pdfs/Aquqba.pdf";
import bchPdf from "@/assets/pdfs/BCH.pdf";
import vguardPdf from "@/assets/pdfs/V-Guard.pdf";

const brands = [
  {
    name: "KOEL",
    logo: koel,
    pdf: koelPdf,
    tagline: "A KIRLOSKER GROUP COMPANY",
    services: [
      { icon: Wrench, label: "Installation" },
      { icon: ShieldCheck, label: "Maintenance" },
      { icon: Hammer, label: "Repair" },
      { icon: Package, label: "Authorised Spares" },
    ],
  },
  {
    name: "Oswal Pumps",
    logo: oswal,
    pdf: oswalPdf,
    tagline: "Solar & submersible pumps",
    services: [
      { icon: Wrench, label: "Solar Installation" },
      { icon: ShieldCheck, label: "AMC & Maintenance" },
      { icon: Hammer, label: "Repair" },
      { icon: Package, label: "Technical Support" },
    ],
  },
  {
    name: "Varuna Pumps",
    logo: varuna,
    pdf: varunaPdf,
    tagline: "Solar & submersible pumps",
    services: [
      { icon: Wrench, label: "Solar Installation" },
      { icon: ShieldCheck, label: "Maintenance" },
      { icon: Hammer, label: "Repair" },
      { icon: Package, label: "Technical Support" },
    ],
  },
  {
    name: "AQUAQUBE",
    logo: aquaqube,
    pdf: aquaPdf,
    tagline: "Water purification & treatment",
    services: [
      { icon: Wrench, label: "Installation" },
      { icon: ShieldCheck, label: "Maintenance" },
      { icon: Hammer, label: "Repair" },
      { icon: Package, label: "Genuine Spare Parts" },
    ],
  },
  {
    name: "BCH Electric Limited",
    logo: bch,
    pdf: bchPdf,
    tagline: "Switchgear & control solutions",
    services: [
      { icon: Wrench, label: "Installation" },
      { icon: ShieldCheck, label: "Maintenance" },
      { icon: Hammer, label: "Repair" },
      { icon: Package, label: "Spare Parts & Support" },
    ],
  },
  {
    name: "V-Guard Industries Ltd.",
    logo: vguard,
    pdf: vguardPdf,
    tagline: "Stabilizers, inverters & pumps",
    services: [
      { icon: Wrench, label: "Installation" },
      { icon: ShieldCheck, label: "Maintenance" },
      { icon: Hammer, label: "Repair" },
      { icon: Package, label: "Spare Parts & Support" },
    ],
  },
];

export const TrustedBrands = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section
      id="brands"
      className="py-12 sm:py-16 md:py-24 bg-surface border-y border-border"
    >
      <div className="container-tight px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="eyebrow mb-4 sm:mb-5">
              <span className="inline-block h-px w-6 sm:w-8 bg-primary align-middle mr-3" />
              Trusted Brands
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-ink leading-tight md:leading-[1.05] max-w-2xl">
              Authorised partners for{" "}
              <em className="text-primary not-italic">India's leading</em> pump
              & electrical brands.
            </h2>
          </div>

          <p className="text-ink-soft max-w-md text-sm sm:text-base leading-relaxed">
            Four pillars of quality — backed by genuine spares, certified
            service and a four-decade distribution network across Madhya
            Pradesh.
          </p>
        </div>

        {/* ✅ Improved grid for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {brands.map((b, i) => (
            <motion.article
              key={b.name}
              onClick={() => setSelectedPdf(b.pdf)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="group cursor-pointer bg-card border border-border p-5 sm:p-7 transition-shadow duration-500 hover:shadow-card flex flex-col rounded-xl"
            >
              <div className="h-24 sm:h-32 flex items-center justify-center bg-surface mb-4 sm:mb-6 p-3 sm:p-4 border border-border/60">
                <img
                  src={b.logo}
                  alt={`${b.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="font-display text-lg sm:text-xl text-ink mb-1">
                {b.name}
              </h3>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] text-ink-soft mb-4 sm:mb-5">
                {b.tagline}
              </p>

              <ul className="mt-auto space-y-2">
                {b.services.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-ink"
                  >
                    <span className="h-6 w-6 sm:h-7 sm:w-7 grid place-items-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-md">
                      <s.icon size={12} />
                    </span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ✅ Mobile optimized modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="bg-white w-full max-w-3xl h-[85vh] sm:h-[80vh] rounded-lg overflow-hidden shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-black/70 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-black transition"
            >
              ✕
            </button>

            <iframe
              src={selectedPdf}
              className="w-full h-full"
              title="Brand PDF"
            />
          </div>
        </div>
      )}
    </section>
  );
};