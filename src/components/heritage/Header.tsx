import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SteakLogo } from "./Logo";

const NAV = [
  { label: "THE COUNTER", href: "#counter" },
  { label: "SANDWICHES", href: "#menu" },
  { label: "PROCESSING", href: "#processing" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-smoke-white/90 border-b border-forest-deep/10 transition-all duration-300 ${
        scrolled ? "py-3 shadow-xl" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#hero" className="flex items-center gap-3">
          <SteakLogo size={44} />
          <div className="leading-tight">
            <div className="font-serif-display text-forest-deep text-xl font-semibold tracking-widest">
              LOS GATOS
            </div>
            <div className="text-amber-wood font-bold text-[10px] tracking-[0.2em]">
              MEATS &amp; SMOKEHOUSE
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-underline text-forest-deep text-sm font-bold tracking-widest"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="https://shop.losgatosmeats.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-forest-deep text-smoke-white px-6 py-2 text-xs font-mono tracking-widest hover:bg-brick-red transition-colors duration-300"
        >
          ORDER ONLINE
        </a>
      </div>
    </motion.header>
  );
};
