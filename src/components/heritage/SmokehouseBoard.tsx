import { motion } from "framer-motion";

type MenuItem = { name: string; desc: string; price: string };

const categories: { title: string; items: MenuItem[] }[] = [
  {
    title: "Smokehouse Traditionals",
    items: [
      { name: "Chicken Club", desc: "Marinated BBQ chicken breast, swiss, LGM smoked bacon, BBQ sauce.", price: "$15" },
      { name: "Classic Turkey", desc: "House-roasted turkey breast, provolone, cranberry aioli.", price: "$14" },
      { name: "Roast Beef Dip", desc: "Slow-roasted beef, horseradish cream, au jus on the side.", price: "$15" },
      { name: "Ham & Swiss", desc: "Black forest ham, aged swiss, grain mustard, butter lettuce.", price: "$13" },
    ],
  },
  {
    title: "Super Signatures",
    items: [
      { name: "The A.J.", desc: "LGM cured smoked pastrami, LGM bacon, avocado, pepper jack.", price: "$17" },
      { name: "Smokehouse Brisket", desc: "14-hour smoked brisket, caramelized onion, sharp cheddar.", price: "$17" },
      { name: "Porchetta Press", desc: "Herb-crusted porchetta, broccolini, pecorino, salsa verde.", price: "$17" },
    ],
  },
  {
    title: "Gut Busters",
    items: [
      { name: "The Triple Bypass", desc: "Marinated tri-tip, slow smoked pulled pork, LGM bacon, avocado, pepper jack.", price: "$18" },
      { name: "The Lumberjack", desc: "Pastrami, brisket, smoked ham, swiss, grilled onions, spicy mustard.", price: "$18" },
      { name: "Four-Meat Monster", desc: "Turkey, roast beef, ham, bacon, three cheeses, the works.", price: "$18" },
    ],
  },
];

const WORKS = ["Mayo", "Mustard", "Lettuce", "Tomato", "Onion", "Mild Pepper Rings"];
const BREADS = ["Dutch Crunch", "Sourdough", "Wheat", "Rye", "Ciabatta"];
const CHEESES = ["Monterey Jack", "Cheddar", "Swiss", "Provolone", "Pepper Jack"];
const ADDONS = [
  { label: "EXTRA MEAT", price: "$2.00" },
  { label: "AVOCADO", price: "$1.50" },
  { label: "BACON", price: "$2.50" },
  { label: "EGG", price: "$1.50" },
];

export const SmokehouseBoard = () => {
  return (
    <section id="menu" className="relative bg-forest-deep py-20 px-6 sm:px-10 grain-overlay">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="meat-glow text-smoke-white font-serif-display italic text-5xl sm:text-6xl font-semibold"
          >
            The Smokehouse Board
          </motion.h2>
          <p className="mt-6 text-amber-wood font-mono text-xs tracking-[0.25em]">
            EVERY SANDWICH INCLUDES 'THE WORKS' &amp; A PICKLE
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-smoke-white/60 font-mono text-[10px] tracking-widest">
            {WORKS.map((w, i) => (
              <span key={w} className="flex items-center gap-3">
                {w}
                {i < WORKS.length - 1 && <span className="text-amber-wood/60">•</span>}
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <div className="w-24 h-px bg-amber-wood/60" />
          </div>
        </div>

        {/* Menu columns */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-serif-display italic text-amber-wood text-2xl mb-6">
                {cat.title}
              </h3>
              <ul className="space-y-5">
                {cat.items.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="group px-3 py-2 -mx-3 hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="flex items-baseline">
                      <span className="font-serif-display text-smoke-white text-xl">
                        {item.name}
                      </span>
                      <span className="dotted-leader" />
                      <span className="font-mono text-amber-wood text-sm">{item.price}</span>
                    </div>
                    <p className="mt-1 italic text-sm text-smoke-white/50 leading-snug">
                      {item.desc}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Choices & Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-mahogany-deep border border-amber-wood/40 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-mono text-xs tracking-[0.25em] text-amber-wood mb-4">
                CHOOSE YOUR BREAD
              </h4>
              <div className="flex flex-wrap gap-2">
                {BREADS.map((b) => (
                  <span
                    key={b}
                    className="border border-smoke-white/30 text-smoke-white/90 font-mono text-[10px] tracking-widest px-3 py-2 hover:border-amber-wood hover:text-amber-wood transition-colors cursor-default"
                  >
                    {b.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-[0.25em] text-amber-wood mb-4">
                CHOOSE YOUR CHEESE
              </h4>
              <div className="flex flex-wrap gap-2">
                {CHEESES.map((c) => (
                  <span
                    key={c}
                    className="border border-smoke-white/30 text-smoke-white/90 font-mono text-[10px] tracking-widest px-3 py-2 hover:border-amber-wood hover:text-amber-wood transition-colors cursor-default"
                  >
                    {c.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-[0.25em] text-amber-wood mb-4">
                ADD-ONS
              </h4>
              <ul className="space-y-2">
                {ADDONS.map((a) => (
                  <li key={a.label} className="flex items-center">
                    <span className="font-mono text-[11px] tracking-widest text-smoke-white/80">
                      {a.label}
                    </span>
                    <span className="dotted-leader" />
                    <span className="font-mono text-amber-wood text-sm">{a.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
