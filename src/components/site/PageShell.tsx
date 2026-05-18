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
      <section className="py-16 md:py-24 -mb-32 bg-surface border-b border-border">
        <div className=" text-center">
          {/* Eyebrow */}
          {/* <div className="eyebrow mb-4 flex items-center justify-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" />
            <span>{eyebrow}</span>
          </div> */}

          {/* Title */}
          <h1 className="font-display  text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-tight max-w-3xl mx-auto">
            {title}
          </h1>

          {/* Intro */}
          {intro && (
            <p className="mt-5  sm:text-lg  max-w-xl mx-auto ">{intro}</p>
          )}
        </div>
      </section>
      {children}
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};
