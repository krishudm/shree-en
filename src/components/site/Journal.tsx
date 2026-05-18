import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: b1,
    tag: "Buying Guide",
    date: "Apr 18, 2026",
    read: "6 min read",
    title: "How to Choose the Right Borewell Submersible Pump",
    excerpt:
      "A practical guide to picking the correct HP, stages and pipe size based on your borewell depth and water yield.",
  },
  {
    image: b2,
    tag: "Agriculture",
    date: "Apr 10, 2026",
    read: "5 min read",
    title: "Why Solar Water Pumps Are a Smart Farm Investment",
    excerpt:
      "Cut diesel and electricity bills, get government subsidies, and irrigate your fields with zero running cost.",
  },
  {
    image: b3,
    tag: "Building Service",
    date: "Apr 02, 2026",
    read: "4 min read",
    title: "Hydro-Pneumatic Booster Systems for Apartments",
    excerpt:
      "Solve uneven water pressure across floors with a properly sized hydro-pneumatic booster — here's how.",
  },
];

export const Journal = () => {
  return (
    <section id="journal" className="py-16 md:py-23 bg-surface">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-5">
              <span className="inline-block h-px w-8 bg-primary align-middle mr-3" />
              From the Blog
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] max-w-2xl">
              Insights, guides &{" "}
              <em className="text-primary not-italic">pump expertise</em>.
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
          >
            View all articles
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col h-full bg-card border border-border overflow-hidden hover:shadow-card transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-ink-soft mb-3">
                  <span className="text-primary">{p.tag}</span>
                  <span className="h-px w-4 bg-border" />
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={11} /> {p.date}
                  </span>
                  <span className="h-px w-4 bg-border" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={11} /> {p.read}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed text-sm flex-1">
                  {p.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-primary"
                >
                  Read more
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
