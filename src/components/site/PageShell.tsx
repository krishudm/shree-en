import { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const PageShell = ({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}) => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:py-24 -mb-32 bg-surface border-b border-border">
        <div className="container-tight text-center">
          {/* Title */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-ink leading-tight max-w-3xl mx-auto px-2 sm:px-0">
            {title}
          </h1>

          {/* Intro */}
          {intro && (
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg max-w-xl mx-auto text-ink-soft leading-relaxed px-2 sm:px-0">{intro}</p>
          )}
        </div>
      </section>
      {children}
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};
