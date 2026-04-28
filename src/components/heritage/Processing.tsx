import { motion } from "framer-motion";
import { Award, Fish, Beef, Flame, Gift } from "lucide-react";

const services = [
  { icon: Beef, title: "Wild Game", desc: "Deer, elk, and boar processing by appointment." },
  { icon: Fish, title: "Fish Smoking", desc: "Salmon, trout — cold and hot smoked to order." },
  { icon: Flame, title: "Retail Cuts", desc: "Custom primals broken to your exact specification." },
];

export const Processing = () => {
  return (
    <section id="processing" className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
      {/* Left */}
      <div className="bg-smoke-white py-20 px-6 sm:px-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-brick-red" size={28} strokeWidth={1.5} />
            <span className="w-16 h-0.5 bg-brick-red" />
            <span className="font-mono text-xs tracking-[0.25em] text-brick-red">
              SINCE 1891
            </span>
          </div>
          <h2 className="font-serif-display text-5xl sm:text-6xl text-forest-deep font-semibold leading-none">
            Custom
          </h2>
          <span className="block ml-8 font-serif-display italic text-5xl sm:text-6xl text-amber-wood">
            Processing
          </span>

          <p className="mt-8 text-forest-deep/70 leading-relaxed max-w-md">
            Four generations of skill in every cut. We handle your harvest with the same
            care we've given our regulars since the 19th century.
          </p>

          <ul className="mt-10 divide-y divide-forest-deep/15">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="py-5 flex items-start gap-5 group"
                >
                  <Icon className="text-brick-red mt-1 shrink-0" size={24} strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="font-serif-display text-2xl text-forest-deep group-hover:text-brick-red transition-colors">
                      {s.title}
                    </div>
                    <div className="text-sm text-forest-deep/60 mt-1">{s.desc}</div>
                  </div>
                  <span className="font-mono text-xs text-amber-wood tracking-widest mt-2">
                    →
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Right */}
      <div className="bg-forest-deep py-20 px-6 sm:px-10 flex items-center justify-center grain-overlay">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-sm text-center"
        >
          <Gift className="mx-auto text-amber-wood mb-5" size={36} strokeWidth={1.5} />
          <h3 className="font-serif-display italic text-4xl text-smoke-white">Need a Gift?</h3>
          <p className="mt-4 text-smoke-white/60 text-sm leading-relaxed">
            Give the gift of handcrafted meats &amp; legendary sandwiches. Redeemable in-store
            and online.
          </p>

          <div className="mt-8 bg-gift-brown p-6 border border-amber-wood/30">
            <div className="font-mono text-[10px] tracking-[0.3em] text-amber-wood mb-4">
              LGM GIFT CARDS
            </div>
            <button className="w-full bg-amber-wood hover:bg-brick-red transition-colors duration-300 text-smoke-white font-mono text-xs tracking-widest py-4">
              ORDER GIFT CARD
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
