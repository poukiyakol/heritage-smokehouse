import { motion } from "framer-motion";
import { Disc3 } from "lucide-react";

type Product = {
  title: string;
  price: string;
  badge: string;
  kind: "meat" | "spinner" | "smoke";
};

const products: Product[] = [
  { title: "Tri-Tip Roast", price: "$14.99 / lb", badge: "HOUSE SIGNATURE", kind: "meat" },
  { title: "Cottage Bacon", price: "$12.49 / lb", badge: "SPECIALTY CUT", kind: "spinner" },
  { title: "Smoked Pastrami", price: "$18.99 / lb", badge: "RETAIL MEAT", kind: "smoke" },
  { title: "Dry-Aged Ribeye", price: "$32.00 / lb", badge: "HOUSE SIGNATURE", kind: "meat" },
  { title: "Pulled Pork", price: "$13.50 / lb", badge: "SMOKED DAILY", kind: "smoke" },
  { title: "Pepper Bacon", price: "$11.99 / lb", badge: "SPECIALTY CUT", kind: "spinner" },
];

const ProductVisual = ({ kind }: { kind: Product["kind"] }) => {
  if (kind === "spinner") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <Disc3 size={140} strokeWidth={0.8} className="text-smoke-white" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-brick-red" />
          </div>
        </motion.div>
      </div>
    );
  }
  if (kind === "smoke") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, hsl(var(--amber-wood) / 0.35), transparent 55%), radial-gradient(circle at 70% 30%, hsl(var(--brick-red) / 0.3), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(245,245,240,0.08) 0 2px, transparent 2px 8px)",
          }}
        />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, hsl(var(--brick-red) / 0.55), transparent 60%), radial-gradient(ellipse at 70% 60%, hsl(var(--mahogany) / 0.6), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 40% 50%, rgba(255,255,255,0.15) 0 2px, transparent 2px 6px)",
        }}
      />
    </div>
  );
};

export const RetailCounter = () => {
  return (
    <section id="counter" className="relative py-28 px-6 bg-smoke-white">
      <div className="max-w-7xl mx-auto">
        {/* Header area with floating card */}
        <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div>
            <h2 className="font-serif-display text-5xl sm:text-6xl text-forest-deep font-semibold leading-none">
              The Retail
            </h2>
            <span className="block mt-2 ml-8 font-serif-display italic text-5xl sm:text-6xl text-amber-wood">
              Counter
            </span>
            <p className="mt-8 max-w-md text-forest-deep/70 leading-relaxed">
              Every cut prepared onsite by hand. From dry-aged ribeyes to specialty sausages ground
              fresh each morning — this is butchery the way it was meant to be.
            </p>
          </div>

          {/* Floating feature card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-forest-deep text-smoke-white p-6 w-72 shadow-2xl lg:-mb-8"
          >
            <div className="text-amber-wood font-mono text-xs tracking-widest">TODAY'S BACON</div>
            <div className="font-serif-display italic text-3xl mt-2">Hickory Smoked</div>
            <div className="mt-4 h-px bg-amber-wood/40" />
            <div className="mt-3 font-mono text-[10px] tracking-widest text-smoke-white/60">
              PULLED FROM THE SMOKER • 6:00 AM
            </div>
          </motion.div>
        </div>

        {/* Product grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group"
            >
              <div className="relative aspect-square bg-forest-deep overflow-hidden">
                <ProductVisual kind={p.kind} />
                <div className="absolute top-0 left-0 bg-brick-red text-smoke-white font-mono text-[10px] tracking-widest px-3 py-2">
                  {p.badge}
                </div>
                <div className="absolute inset-0 border border-amber-wood/0 group-hover:border-amber-wood/40 transition-colors duration-500" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-sans font-bold text-forest-deep text-lg">{p.title}</h3>
                <span className="font-mono text-brick-red">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
