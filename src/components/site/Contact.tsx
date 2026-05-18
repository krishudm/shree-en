import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 bg-deep text-primary-foreground relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary-glow)) 0, transparent 40%), radial-gradient(circle at 80% 80%, hsl(var(--primary-glow)) 0, transparent 40%)",
        }}
      />
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60 mb-5">
                <span className="inline-block h-px w-8 bg-primary-foreground/40 align-middle mr-3" />
                Get in touch
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
                Let's power your{" "}
                <em className="not-italic" style={{ color: "hsl(var(--primary-glow))" }}>
                  next project
                </em>
                .
              </h2>
              <p className="mt-7 text-lg text-primary-foreground/75 max-w-xl leading-relaxed">
                Visit our Indore showroom, call directly, or write to us — our team responds the same working day.
              </p>
            </motion.div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  label: "Call us",
                  value: "+91 89898 29551",
                  sub: "+91 89892 22110",
                  href: "tel:+918989829551",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "shrienterprise.rathi@gmail.com",
                  sub: "Mon – Sat · 10am to 8pm",
                  href: "mailto:shrienterprise.rathi@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Showroom",
                  value: "112, Shastri Market",
                  sub: "Near Railway Station, Indore – 452007",
                  href: "#",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group block border border-primary-foreground/15 p-6 hover:border-primary-foreground/40 transition"
                >
                  <c.icon size={18} className="mb-4 opacity-70" />
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">{c.label}</div>
                  <div className="font-display text-lg mt-1">{c.value}</div>
                  <div className="text-xs text-primary-foreground/60 mt-1">{c.sub}</div>
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-5 bg-background text-foreground p-8 md:p-10"
          >
            <div className="font-display text-2xl text-ink mb-6">Request a quote</div>
            {[
              { label: "Name", type: "text" },
              { label: "Phone", type: "tel" },
              { label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.label} className="mb-5">
                <label className="text-[10px] uppercase tracking-[0.22em] text-ink-soft block mb-2">{f.label}</label>
                <input
                  type={f.type}
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-ink"
                />
              </div>
            ))}
            <div className="mb-7">
              <label className="text-[10px] uppercase tracking-[0.22em] text-ink-soft block mb-2">
                Tell us what you need
              </label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 resize-none text-ink"
              />
            </div>
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 hover:opacity-90 transition"
            >
              Send enquiry
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
