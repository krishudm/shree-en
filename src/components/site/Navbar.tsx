import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  // { to: "/clients", label: "Clients" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || location.pathname !== "/"
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Shree Enterprise"
            className="h-[120px] w-[100px] object-contain shrink-0"
          />
          <div className="leading-tight hidden md:block min-w-0">
            <div className="font-display text-base text-ink truncate">
              Shree Enterprise
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-ink-soft truncate">
              Since 1978 · Indore
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm transition-colors relative group ${
                  active ? "text-primary" : "text-ink-soft hover:text-primary"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 text-sm font-medium rounded-lg text-primary-foreground bg-primary px-5 py-2.5 hover:opacity-90 transition"
        >
          Get a Quote
        </Link>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container-tight py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="text-base text-ink py-2">
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground rounded-lg text-center py-3 mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
