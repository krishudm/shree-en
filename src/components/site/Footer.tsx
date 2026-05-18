import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-tight py-10 sm:py-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Shree Enterprise"
                className="h-[84px] w-[70px] sm:h-[100px] sm:w-[84px] object-contain transition-transform duration-500 hover:scale-105"
              />
              <div>
                <div className="font-display text-lg text-ink">
                  Shree Enterprise
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  Motor Pumps · Cables · Pipes
                </div>
              </div>
            </div>

            <p className="text-sm text-ink-soft max-w-sm leading-relaxed">
              Authorized distributor across Madhya Pradesh since 1978. We do not
              just distribute products — we deliver the promise of progress.
            </p>

            {/* ✅ ADDED LINE */}
            <p className="mt-4 text-xs text-ink-soft leading-relaxed transition-all duration-300 hover:text-primary">
              Shree Enterprise | Authorized Distributor, Madhya Pradesh | Motor
              Pumps | Cables | Pipes
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-soft mb-4">
              Explore
            </div>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/products", label: "Products" },
                // { to: "/clients", label: "Clients" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-soft mb-4">
              Visit
            </div>

            {/* ✅ ADDRESS WITH ICON */}
            <p className="flex items-start gap-2 text-sm text-ink leading-relaxed">
              <MapPin size={16} className="mt-1 text-primary shrink-0" />
              <span>
                112, Shastri Market Near Railway Station
                <br />
                Indore – 452007, MP
              </span>
            </p>

            {/* ✅ CONTACT WITH ICONS */}
            <div className="text-sm text-ink-soft leading-relaxed mt-4 space-y-2">
              <span className="flex items-center gap-2 hover:text-primary transition">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="break-all">+91 89898 29551 / 89892 22110</span>
              </span>

              <span className="flex items-center gap-2 hover:text-primary transition">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="break-all">shrienterprise.rathi@gmail.com</span>
              </span>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/ShreeEnterpriseWaterPumpStoreIndore/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/shreeenterprisewaterpump/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-soft">
          <div>
            © {new Date().getFullYear()} Shree Enterprise. All rights reserved.
          </div>
          <div>
            Developed By{" "}
            <a
              href="https://udmtechno.com/"
              className="text-primary hover:underline transition-all duration-300"
            >
              UDM Techno Solution
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
