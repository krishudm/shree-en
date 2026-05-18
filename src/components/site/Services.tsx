import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Wrench,
  Hammer,
  ShieldCheck,
  Package,
  Search,
  Settings,
  Home,
  Sprout,
  Factory,
  Cog,
} from "lucide-react";
import { solutions } from "@/data/solutions";

const icons: Record<string, typeof Home> = {
  residential: Home,
  agricultural: Sprout,
  industrial: Factory,
  "installation-service": Cog,
};

const offers = [
  {
    icon: Wrench,
    title: "Pump Installation",
    desc: "Professional commissioning for domestic, agri & industrial pumps.",
  },
  {
    icon: Hammer,
    title: "Repair & Maintenance",
    desc: "Quick diagnosis and on-site repair for every make and model.",
  },
  {
    icon: ShieldCheck,
    title: "Annual Maintenance (AMC)",
    desc: "Scheduled servicing plans with priority breakdown response.",
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    desc: "Genuine OEM spares for KOEL, Kalsi, Oswal, BCH and more.",
  },
  {
    icon: Search,
    title: "Troubleshooting & Inspection",
    desc: "Performance audits, leak detection and pressure diagnostics.",
  },
  {
    icon: Settings,
    title: "Motor Rewinding",
    desc: "Expert rewinding and overhaul to restore motor efficiency.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-25">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-5">
              <span className="inline-block h-px w-8 bg-primary align-middle mr-3" />
              Our Services
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] max-w-2xl">
              End-to-end{" "}
              <em className="text-primary not-italic">pump solutions</em> for
              every requirement.
            </h2>
          </div>
          <p className="text-ink-soft max-w-md text-base leading-relaxed">
            Four solution families, decades of expertise, one trusted partner —
            backed by 45+ years of on-the-ground service across Madhya Pradesh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {solutions.map((s, i) => {
            const Icon = icons[s.slug] ?? Home;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 2) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="h-full"
              >
                <Link
                  to={`/solutions/${s.slug}`}
                  className="group block h-full bg-card border border-border p-6 md:p-7 transition-shadow duration-500 hover:shadow-card relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-display text-sm text-primary">
                      {s.n}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-ink-soft group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                    />
                  </div>

                  <div className="h-11 w-11 grid place-items-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl text-ink mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-4 max-w-md">
                    {s.tagline}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    Explore solution
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* What we offer */}
        <div className="mt-24 md:mt-32">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-5">
              <span className="inline-block h-px w-8 bg-primary align-middle mr-3" />
              What we offer
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
              A full suite of{" "}
              <em className="text-primary not-italic">on-site services</em>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group bg-card border border-border p-5 md:p-6 transition-shadow duration-500 hover:shadow-card cursor-default"
              >
                <div className="h-9 w-9 grid place-items-center bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <o.icon size={18} />
                </div>
                <h3 className="font-display text-base md:text-lg text-ink mb-1.5">
                  {o.title}
                </h3>
                <p className="text-xs md:text-sm text-ink-soft leading-relaxed">
                  {o.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
