import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
import heroFloat from "@/assets/hero-float.png";
import { Counter } from "@/components/site/Counter";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Strong mobile overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60 lg:from-background/85 lg:via-background/40 lg:to-transparent" />

      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="container-tight relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-24 sm:pt-28 md:pt-28 pb-14 sm:pb-16">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-[28px] xs:text-[32px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-ink"
          >
            Powering Madhya&nbsp;Pradesh,
            <span className="block italic text-primary">
              one connection at a time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-[15px] sm:text-base md:text-lg text-ink-soft max-w-[92%] sm:max-w-xl leading-relaxed"
          >
            Since 1978, Shree Enterprise has been the trusted distributor of
            Motor, Pumps, electrical cables and pipes across every district of
            Madhya Pradesh — built on quality, reach, and relentless service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#services"
              className="group w-full sm:w-auto justify-center inline-flex rounded-lg items-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-5 sm:px-7 py-3.5 sm:py-4 text-sm font-medium hover:opacity-90 transition"
            >
              Explore our products
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+918989829551"
              className="w-full sm:w-auto justify-center inline-flex rounded-lg items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3.5 sm:py-4 text-sm font-medium text-ink border border-border hover:border-primary hover:text-primary transition bg-background/60 backdrop-blur"
            >
              <Phone size={16} />
              +91 89898 29551
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-[95%] sm:max-w-lg"
          >
            {[
              { value: 45, suffix: "+", label: "Years of trust" },
              { value: 50, suffix: "+", label: "Districts served" },
              { value: 10000, suffix: "+", label: "Customers" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl sm:text-3xl text-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-soft mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex justify-end">
          <motion.img
            src={heroFloat}
            alt="Solar-powered irrigation pumps in the field"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -16, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-full max-w-md rounded-2xl shadow-2xl ring-1 ring-border/40"
          />
        </div>
      </div>
    </section>
  );
};
