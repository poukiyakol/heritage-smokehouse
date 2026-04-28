import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { SteakLogo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#3a2a24] text-smoke-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Identity */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <SteakLogo size={36} />
            <span className="font-serif-display text-xl tracking-widest">LOS GATOS MEATS</span>
          </div>
          <p className="text-smoke-white/60 text-sm leading-relaxed max-w-xs">
            High quality specialty meats, delicious deli sandwiches, and custom processing.
            Family owned and operated since 1891 in this town's historic soul.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-smoke-white/30 flex items-center justify-center hover:border-amber-wood hover:text-amber-wood transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-smoke-white/30 flex items-center justify-center hover:border-amber-wood hover:text-amber-wood transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h4 className="font-serif-display italic text-2xl text-amber-wood mb-5">
            Business Hours
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-baseline justify-between">
              <span className="font-mono tracking-widest text-smoke-white/80">MON – SAT</span>
              <span className="font-mono text-smoke-white">10 AM – 4 PM</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-mono tracking-widest text-smoke-white/80">SUN</span>
              <span className="font-mono text-brick-red/80">CLOSED</span>
            </div>
          </div>
          <div className="mt-6 bg-brick-red/20 border border-brick-red/60 py-3 px-4 text-center">
            <span className="font-sans font-bold uppercase text-xs tracking-widest text-smoke-white">
              Sandwich line closes at 3:45 PM
            </span>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-serif-display italic text-2xl text-amber-wood mb-5">Connect</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-amber-wood shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <span className="text-smoke-white/80">
                575 University Avenue
                <br />
                Los Gatos, CA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-amber-wood shrink-0" size={18} strokeWidth={1.5} />
              <a href="tel:4083547055" className="font-mono text-smoke-white hover:text-amber-wood">
                408-354-7055
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <span className="font-mono text-[11px] tracking-widest text-smoke-white/50">
            © 1891–2024 LOS GATOS MEATS &amp; SMOKEHOUSE
          </span>
          <span className="font-mono text-[11px] tracking-widest text-amber-wood/80">
            PROUDLY SERVING SINCE 1891 • SCRUBBED DAILY • SMOKED NIGHTLY
          </span>
        </div>
      </div>
    </footer>
  );
};
