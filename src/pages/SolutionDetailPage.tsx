import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { getSolution } from "@/data/solutions";

const SolutionDetailPage = () => {
  const { slug = "" } = useParams();
  const solution = getSolution(slug);
  if (!solution) return <Navigate to="/services" replace />;

  return (
    <PageShell
      eyebrow={`Solution ${solution.n}`}
      title={
        <>
          {solution.title.split(" ")[0]}{" "}
          <em className="text-primary not-italic">
            {solution.title.split(" ").slice(1).join(" ")}
          </em>
        </>
      }
      intro={solution.intro}
    >
      <section className="py-10 sm:py-16 md:py-28">
        <div className="container-tight">
          <div className="flex items-center justify-between mb-8 sm:mb-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-primary transition"
            >
              <ArrowLeft size={16} />
              All solutions
            </Link>
            <span className="text-xs uppercase tracking-[0.18em] text-ink-soft shrink-0 ml-4">
              {solution.pumps.length} products
            </span>
          </div>

          <div className="mb-10 sm:mb-16">
            <div className="eyebrow mb-4 sm:mb-5">
              <span className="inline-block h-px w-8 bg-primary align-middle mr-3" />
              What's included
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1] max-w-2xl">
              Every pump we supply for{" "}
              <em className="text-primary not-italic">
                {solution.title.toLowerCase()}
              </em>
              .
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solution.pumps.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.01, y: -3 }}
              >
                <Link
                  to={`/solutions/${solution.slug}/${p.slug}`}
                  className="group block bg-card border border-border overflow-hidden transition-shadow duration-500 hover:shadow-card hover:border-primary"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-full w-full  transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 h-5 w-5 grid place-items-center bg-primary/10 text-primary">
                          <Check size={12} />
                        </span>
                        <h3 className="font-display text-xl text-ink">
                          {p.name}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-ink-soft group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
                      />
                    </div>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 sm:mt-20 border-t border-border pt-10 sm:pt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="eyebrow mb-3 sm:mb-4">Need a recommendation?</div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink max-w-xl leading-[1.1]">
                Talk to our engineers — get the right pump for your project.
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition self-start"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default SolutionDetailPage;
