import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: b1,
    tag: "Guide",
    date: "Apr 2026",
    title: "How to choose the right pump cable for your borewell",
    excerpt:
      "Cable cross-section, depth, voltage drop — a field engineer's checklist for sizing the right submersible cable for any borewell installation.",
    read: "6 min read",
  },
  {
    image: b2,
    tag: "Insight",
    date: "Mar 2026",
    title: "Irrigation efficiency in Malwa: lessons from 1,200 farms",
    excerpt:
      "What four decades of supplying agricultural pumps has taught us about water, yield, and what really moves the needle on a farmer's monthly bill.",
    read: "8 min read",
  },
  {
    image: b3,
    tag: "News",
    date: "Feb 2026",
    title: "Our new Indore showroom is open",
    excerpt:
      "Visit us at 212, Shastri Market — the full Shree Enterprise range is now on display, with live demos of every pump and panel we distribute.",
    read: "3 min read",
  },
  {
    image: b1,
    tag: "Tutorial",
    date: "Jan 2026",
    title: "Dry-run protection: a small panel that saves big motors",
    excerpt:
      "How a ₹1,500 dry-run cutoff can prevent a ₹50,000 motor burnout — and why every borewell pump should have one.",
    read: "5 min read",
  },
  {
    image: b2,
    tag: "Insight",
    date: "Dec 2025",
    title: "Solar pumps in MP: payback periods and the truth about subsidies",
    excerpt:
      "We crunched the numbers on 80 solar pump installations across Madhya Pradesh. Here's what the brochures don't tell you.",
    read: "7 min read",
  },
  {
    image: b3,
    tag: "Guide",
    date: "Nov 2025",
    title: "Why your pressure pump keeps short-cycling (and how to fix it)",
    excerpt:
      "Pressure switches, air bladders, and the five most common installation mistakes we see in domestic booster systems.",
    read: "5 min read",
  },
];

const BlogPage = () => (
  <PageShell
    eyebrow="Journal"
    title={
      <>
        Notes from the <em className="text-primary not-italic">field</em>.
      </>
    }
    intro="Practical guides, market insight and updates from the Shree Enterprise team — written by engineers who do the work."
  >
    <section className="py-16 md:py-32">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.a
              key={p.title + i}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-card mb-5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-ink-soft mb-3">
                <span className="text-primary">{p.tag}</span>
                <span className="h-px w-6 bg-border" />
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={11} /> {p.date}
                </span>
                <span className="h-px w-6 bg-border" />
                <span>{p.read}</span>
              </div>
              <h2 className="font-display text-2xl text-ink leading-snug group-hover:text-primary transition-colors">
                {p.title}
              </h2>
              <p className="mt-3 text-ink-soft leading-relaxed text-sm">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
                Read article
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default BlogPage;
