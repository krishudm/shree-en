import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { getProduct } from "@/data/solutions";

const ProductDetailPage = () => {
  const { slug = "", productSlug = "" } = useParams();
  const data = getProduct(slug, productSlug);
  if (!data) return <Navigate to="/services" replace />;
  const { solution, product } = data;

  const related = solution.pumps
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <PageShell
      eyebrow={`${solution.title}`}
      title={
        <>
          {product.name.split(" ")[0]}{" "}
          <em className="text-primary not-italic">
            {product.name.split(" ").slice(1).join(" ")}
          </em>
        </>
      }
      intro={product.desc}
    >
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container-tight">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <Link
              to={`/solutions/${solution.slug}`}
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-primary transition"
            >
              <ArrowLeft size={16} />
              Back to {solution.title}
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface border border-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full "
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-10"
            >
              {product.features && (
                <div>
                  <div className="eyebrow mb-4">Key features</div>
                  <ul className="space-y-3">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-ink">
                        <span className="mt-1 h-5 w-5 grid place-items-center bg-primary/10 text-primary shrink-0">
                          <Check size={12} />
                        </span>
                        <span className="text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.specs && (
                <div>
                  <div className="eyebrow mb-4">Specifications</div>
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5">
                    {product.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="text-xs uppercase tracking-wider text-ink-soft mb-1">
                          {s.label}
                        </dt>
                        <dd className="text-sm font-medium text-ink">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
                >
                  Request a quote
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
            </motion.div>
          </div>

          {product.applications && (
            <div className="mt-12 sm:mt-20">
              <div className="eyebrow mb-4">Typical applications</div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.applications.map((a) => (
                  <div
                    key={a}
                    className="bg-card border border-border p-5 text-sm text-ink"
                  >
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-16 sm:mt-24 border-t border-border pt-10 sm:pt-12">
              <div className="flex items-end justify-between mb-6 sm:mb-8">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-ink">
                  More from {solution.title}
                </h3>
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="text-sm text-ink-soft hover:text-primary transition shrink-0 ml-4"
                >
                  View all →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/solutions/${solution.slug}/${p.slug}`}
                    className="group bg-card border border-border overflow-hidden hover:border-primary hover:shadow-card transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-surface">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <span className="font-medium text-ink text-sm">
                        {p.name}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-ink-soft group-hover:text-primary transition"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default ProductDetailPage;
