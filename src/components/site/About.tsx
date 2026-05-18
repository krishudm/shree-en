import { motion } from "framer-motion";
import showroom from "@/assets/father.jpeg";
import { Counter } from "@/components/site/Counter";
import { ShieldCheck, Globe, Wrench, Award } from "lucide-react";

const values = [
  {
    k: "Quality",
    v: "Best-in-class products from trusted manufacturers.",
    icon: Award,
  },
  { k: "Reach", v: "Serving every corner of Madhya Pradesh.", icon: Globe },
  {
    k: "Service",
    v: "Responsive support before and after every sale.",
    icon: Wrench,
  },
  {
    k: "Trust",
    v: "Honest, transparent dealings with every customer.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: 45, suffix: "+", label: "Years of trust" },
  { value: 50, suffix: "+", label: "Districts served" },
  { value: 10000, suffix: "+", label: "Happy customers" },
];

export const About = () => {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-23 bg-surface">
      {/* <h1 className="text-2xl sm:text-3xl uppercase underline text-primary text-center mb-6 font-bold">
        About Us
      </h1> */}

      <div className="container-tight px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-lg shadow-card">
              <img
                src={showroom}
                alt="Showroom"
                className="w-full h-[240px] sm:h-[320px] md:h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug"
            >
              Four decades of{" "}
              <span className="text-primary">Trusted Distribution</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-ink-soft"
            >
              Founded by Mr. Ramshchandra Rathi on 22 March 1978, Shree
              Enterprise has grown from a single Indore storefront into a
              regional distribution network for Motor, Pumps, cables and pipes.
            </motion.p>

            {/* Intro Line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 sm:mt-4 font-medium text-sm sm:text-base"
            >
              We do not just distribute products, we deliver the promise of
              progress.
            </motion.p>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-3 text-sm sm:text-base text-ink-soft"
            >
              Our vision is to be the most trusted distribution partner, while
              our mission is to deliver quality products, ensure reliable
              service, and build long-term customer relationships.
            </motion.p>

            {/* Stats */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 text-center">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="text-primary text-xl sm:text-2xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-ink-soft">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core Values (Top) */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.k}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="p-3 sm:p-4 border rounded-lg text-center transition-all duration-300 hover:shadow-xl hover:border-primary"
                  >
                    <Icon className="mx-auto mb-2 text-primary" size={20} />
                    <span className="text-sm">{v.k}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FULL CONTENT */}
        <div className="mt-12 sm:mt-20 space-y-12 sm:space-y-16">
          {/* Vision + Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold">Our Vision</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-soft">
                To be the most trusted and reliable distribution partner in the
                region, empowering industries and communities with quality
                products and consistent service.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold">Our Mission</h2>
              <ul className="mt-3 sm:mt-4 list-disc pl-5 sm:pl-6 text-sm sm:text-base text-ink-soft space-y-2">
                <li>Deliver high-quality products from trusted brands</li>
                <li>Ensure timely and efficient distribution</li>
                <li>Build long-term relationships with customers</li>
                <li>Continuously improve service standards</li>
              </ul>
            </motion.section>
          </div>

          {/* Core Values Full */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold">
              Our Core Values
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-4 sm:mt-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.k}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="p-3 sm:p-6 border rounded-xl text-center transition-all duration-300 hover:shadow-2xl hover:border-primary bg-card"
                  >
                    <Icon
                      className="mx-auto mb-2 sm:mb-3 text-primary"
                      size={22}
                    />
                    <div className="font-semibold text-primary text-sm sm:text-base">{v.k}</div>
                    <p className="mt-1.5 text-xs sm:text-sm text-ink-soft leading-snug">
                      {v.v}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};
