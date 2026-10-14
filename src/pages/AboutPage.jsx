import React from "react";
import { motion } from "framer-motion";

const WHO_POINTS = [
  "Professional Warehousing",
  "Collateral Management",
  "Trade Facilitation & Supply chain solution",
  "Buyer–seller linkages",
  "Procurement of agri commodity",
  "Warehouse audit and accreditation",
  "Market research and price intelligence",
  "Rake Management",
  "Assaying and certification of agri commodities",
  "Warehouse structure consultancy services and advisory",
];





const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

/* ─── Component ────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <section id="about" className="relative z-0 overflow-hidden pt-16 pb-10">

      {/* ── Left-to-Right Green Gradient Base Background ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 via-white/90 to-lime-50/70 pointer-events-none -z-20" />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — Who We Are (image grid + bullet list)
      ══════════════════════════════════════════════════ */}
      <div className="pt-2 pb-10 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left — image collage */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 gap-3.5 h-[300px]"
            >
              <motion.div variants={fadeUp} className="row-span-2 relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-white/60">
                <img
                  src="/1.jpeg"
                  alt="Warehouse interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                  <svg className="w-3.5 h-3.5 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-white/60">
                <img
                  src="/2.jpeg"
                  alt="Farmer in field"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow">
                  <svg className="w-3 h-3 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-white/60">
                <img
                  src="/3.jpeg"
                  alt="Delivery truck"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow">
                  <svg className="w-3 h-3 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — text + bullets */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="space-y-5"
            >
              <motion.div variants={fadeUp}>
                <span className="text-[8px] font-black text-green-700 uppercase tracking-[0.28em]">✦ ABOUT US</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 leading-tight">
                  Building Stronger{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-600">
                    Agricultural Value Chains
                  </span>
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-3">
                <p className="text-xs text-slate-700 font-bold leading-relaxed">
                  Kissan Agri Warehousing Private Limited is a professionally managed company focused on creating business opportunities across the agriculture, rural economy, agri-business, warehousing, commodity and financial services ecosystem.
                </p>
                <p className="text-xs text-slate-700 font-bold leading-relaxed">
                  We work with farmers, FPOs, traders, aggregators, exporters, hedgers, banks, financial institutions, warehouse operators, corporate houses and other stakeholders to develop commercially viable and sustainable solutions.
                </p>
                <p className="text-xs text-slate-700 font-bold leading-relaxed pt-1">
                  Our domain expertise spans:
                </p>
              </motion.div>

              <motion.ul variants={stagger} className="space-y-2">
                {WHO_POINTS.map((pt, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-2.5 group cursor-default">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-lime-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-green-800 transition-colors">{pt}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeUp} className="text-xs text-slate-700 font-bold leading-relaxed pt-2">
                Our objective is to create professionally managed solutions that deliver measurable value to our clients, partners and stakeholders.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-3">
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-lime-500 via-green-600 to-emerald-700 text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-green-500/25"
                >
                  Meet Our Leadership →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white text-slate-800 text-[10px] font-black uppercase tracking-wider shadow-sm hover:border-green-300 transition-all"
                >
                  Get In Touch →
                </motion.button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>



    </section>
  );
}
