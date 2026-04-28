import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 grain-overlay overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 text-amber-wood font-mono text-xs sm:text-sm tracking-[0.25em]"
        >
          <span className="block w-12 h-px bg-amber-wood/60" />
          EST. 1891 • SAN JOSE'S PULSE
          <span className="block w-12 h-px bg-amber-wood/60" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="meat-glow text-forest-deep font-serif-display text-6xl sm:text-7xl md:text-8xl font-semibold leading-none"
        >
          PROUDLY SERVING
        </motion.h1>

        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, type: "spring", stiffness: 90 }}
          className="bg-brick-red text-smoke-white w-full max-w-3xl px-8 sm:px-14 py-6 sm:py-8 flex items-baseline justify-center gap-4 sm:gap-6"
          style={{ boxShadow: "0 30px 60px -20px rgba(139,38,27,0.55), 0 10px 20px -10px rgba(26,58,50,0.3)" }}
        >
          <span className="font-serif-display italic text-5xl sm:text-6xl md:text-7xl font-normal">
            Since
          </span>
          <span className="font-serif-display font-bold text-7xl sm:text-8xl md:text-9xl leading-none">
            1891
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl text-forest-deep/80 text-base sm:text-lg leading-relaxed"
        >
          Specialty meats cut by hand, slow-smoked daily, and piled high on our legendary
          <span className="italic text-brick-red font-semibold"> Dutch Crunch</span>.
          A Los Gatos institution for over a century.
        </motion.p>

        {/* Dual actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <a
            href="https://shop.losgatosmeats.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-forest-deep text-smoke-white py-4 px-10 text-sm font-mono tracking-widest hover:bg-brick-red transition-colors duration-300 flex items-center justify-center gap-3"
          >
            ORDER ONLINE
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#menu"
            className="border border-forest-deep text-forest-deep py-4 px-10 text-sm font-mono tracking-widest hover:bg-forest-deep hover:text-smoke-white transition-colors duration-300"
          >
            THE MENU
          </a>
        </motion.div>
      </div>
    </section>
  );
};
