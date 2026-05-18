import { motion } from "framer-motion";

const items = [
  {
    quote:
      "Shree Enterprise has been our pump supplier for over twenty years. Their advice has saved us crore-rupees in irrigation efficiency.",
    name: "Mahendra Patidar",
    role: "Owner",
    company: "Patidar Agro Farms, Khargone",
  },
  {
    quote:
      "On-site delivery to remote tehsils is what sets them apart. We have never had a project delayed because of supply.",
    name: "Anil Sharma",
    role: "Project Engineer",
    company: "MP Rural Water Authority",
  },
  {
    quote:
      "Genuine products, transparent pricing and a team that actually picks up the phone. That is rare in this industry.",
    name: "Kavita Joshi",
    role: "Procurement Head",
    company: "Sunrise Builders, Indore",
  },
  {
    quote:
      "Forty-five years and still the most responsive distributor in Madhya Pradesh. Three generations of our family trust them.",
    name: "Dr. Suresh Verma",
    role: "Managing Director",
    company: "Verma Textile Mills",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-5">
            <span className="inline-block h-px w-8 bg-primary align-middle mr-3" />
            What our partners say
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
            Trusted by <em className="text-primary not-italic">farmers, builders</em> and
            industries.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="bg-card border border-border p-8 md:p-10 relative"
            >
              <div className="font-display text-6xl text-primary leading-none mb-4">"</div>
              <blockquote className="text-lg text-ink leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-display text-lg text-ink">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mt-1">
                  {t.role} · {t.company}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
