import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { solutions } from "@/data/solutions";

export const Portfolio = () => {
  const [active, setActive] = useState(solutions[0].slug);
  const current = solutions.find((s) => s.slug === active)!;

  return (
    <section id="portfolio" className="py-16 md:py-25 bg-surface">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4 sm:mb-5">
              <span className="inline-block h-px w-8 bg-primary align-middle mr-3" />
              Product Range
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05]">
              A complete portfolio for{" "}
              <em className="text-primary not-italic">every application</em>.
            </h2>
          </div>
          {/* <p className="text-ink-soft max-w-md leading-relaxed">
            Explore our pumps and systems engineered for residential,
            agricultural, industrial & commercial use — plus full installation
            and service support.
          </p> */}
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto gap-0 mb-8 sm:mb-12 border-b border-border pb-1 -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-none">
          {solutions.map((c) => {
            const isActive = c.slug === active;
            return (
              <button
                key={c.slug}
                onClick={() => setActive(c.slug)}
                className={`relative inline-flex items-center gap-2 px-3 sm:px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap shrink-0 min-h-[44px] ${
                  isActive ? "text-primary" : "text-ink-soft hover:text-ink"
                }`}
              >
                {c.title}
                <span
                  className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-ink-soft"
                  }`}
                >
                  {c.pumps.length}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="prod-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-10"
          >
            {/* Category intro */}
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink mb-3 sm:mb-4">
                {current.title}
              </h3>
              <p className="text-ink-soft leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {current.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/solutions/${current.slug}`}
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
                >
                  View all products
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <a
                  href="tel:+918989829551"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-medium text-ink hover:border-primary hover:text-primary transition"
                >
                  <Phone size={14} />
                  Talk to an expert
                </a>
              </div>
            </div>

            {/* Products grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3 sm:gap-4">
              {current.pumps.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                >
                  <Link
                    to={`/solutions/${current.slug}/${p.slug}`}
                    className="group flex items-center gap-3 sm:gap-4 bg-card border border-border p-3 sm:p-4 hover:border-primary hover:shadow-card transition-all"
                  >
                    <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden bg-surface">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-medium text-ink leading-snug flex-1 text-sm min-w-0">
                      {p.name}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-soft group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
