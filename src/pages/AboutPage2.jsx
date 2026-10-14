import React from "react";
import { motion } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────────── */
const TIMELINE = [
  { year: "2012", title: "Our Beginning", icon: "🌱", text: "Started with a simple mission to support farmers with safe storage solutions." },
  { year: "2015", title: "Expanding Roots", icon: "🏛️", text: "Expanded warehousing in multiple regions ensuring better reach and reliability." },
  { year: "2018", title: "Growth & Trust", icon: "🛡️", text: "Trusted by thousands of farmers and partners across India." },
  { year: "2021", title: "Tech-Driven Leap", icon: "⚙️", text: "Integrated modern technology for smarter inventory and logistics." },
  { year: "2024+", title: "Sustainable Future", icon: "♻️", text: "Continuously innovating for a stronger, greener, and sustainable agri ecosystem." },
];

const VALUES = [
  { icon: "⭐", label: "Professionalism", desc: "Strengthen the agricultural value chain through professional business solutions." },
  { icon: "🤝", label: "Linkages", desc: "Create sustainable linkages between farmers, markets, financial institutions and corporates." },
  { icon: "🌱", label: "Growth", desc: "Facilitate responsible growth in rural and agri-business sectors." },
  { icon: "🎯", label: "Value-Driven", desc: "Provide value-driven solutions in warehousing, commodity and trade-related activities." },
  { icon: "🛡️", label: "Trust", desc: "Build long-term relationships based on trust, transparency, professionalism and performance." },
];

const MISSION_POINTS = [
  {
    num: "01", icon: "⭐", label: "PROFESSIONALISM",
    text: "Strengthen the agricultural value chain through professional business solutions.",
    g: "from-lime-500 to-green-600",
  },
  {
    num: "02", icon: "🤝", label: "LINKAGES",
    text: "Create sustainable linkages between farmers, markets, financial institutions and corporates.",
    g: "from-green-500 to-emerald-600",
  },
  {
    num: "03", icon: "🌱", label: "GROWTH",
    text: "Facilitate responsible growth in rural and agri-business sectors.",
    g: "from-emerald-500 to-teal-600",
  },
  {
    num: "04", icon: "🎯", label: "VALUE-DRIVEN",
    text: "Provide value-driven solutions in warehousing, commodity and trade-related activities.",
    g: "from-teal-500 to-cyan-600",
  },
  {
    num: "05", icon: "🛡️", label: "TRUST",
    text: "Build long-term relationships based on trust, transparency, professionalism and performance.",
    g: "from-cyan-500 to-blue-600",
  },
];


// Floating organic leaves drifting smoothly right-to-left
const floatingLeaves = [
  { icon: "🍃", top: "12%", startX: "105%", endX: "-10%", duration: 16, delay: 0, scale: 1.1, rot: [0, 180, 360] },
  { icon: "🌿", top: "38%", startX: "110%", endX: "-15%", duration: 20, delay: 4, scale: 0.95, rot: [0, -140, -320] },
  { icon: "🌱", top: "62%", startX: "105%", endX: "-10%", duration: 18, delay: 1.5, scale: 1.05, rot: [0, 210, 420] },
  { icon: "🍃", top: "82%", startX: "115%", endX: "-20%", duration: 22, delay: 7, scale: 1.2, rot: [0, -190, -380] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 30, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ─── Component ────────────────────────────────────────────── */
export default function AboutPage2() {
  return (
    <section id="about-part2" className="relative z-10 overflow-hidden py-10">

      {/* ── Background Image (/image.png) ── */}
      <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden">
        <img
          src="/image.png"
          alt="Agri Warehouse Background"
          className="w-full h-full object-cover object-right opacity-30"
        />
      </div>

      {/* Transparent glass gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/70 via-white/85 to-lime-50/60 pointer-events-none -z-10" />

      {/* ── Floating Organic Leaves Drifting Right-to-Left ── */}
      {floatingLeaves.map((leaf, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-xl -z-10 select-none opacity-45"
          style={{ top: leaf.top }}
          animate={{
            left: [leaf.startX, leaf.endX],
            y: [0, -22, 16, -12, 0],
            rotate: leaf.rot,
            scale: [leaf.scale, leaf.scale * 1.2, leaf.scale * 0.9, leaf.scale],
            opacity: [0, 0.5, 0.7, 0.4, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {leaf.icon}
        </motion.div>
      ))}

      {/* ══════════════════════════════════════════════════
          SECTION 1 — Vision & Mission
      ══════════════════════════════════════════════════ */}

      <div className="py-10 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* ── HEADER ── */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-green-200/80 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 animate-pulse" />
              <span className="text-[10px] font-black text-green-700 uppercase tracking-[0.24em]">Our Vision & Mission</span>
            </div>
          </div>

          {/* ── MISSION ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="text-center flex flex-col items-center">
              <div className="relative w-12 h-12 mb-3">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-300 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-lime-500 to-emerald-600 flex items-center justify-center text-white text-lg shadow-md">
                  🎯
                </div>
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-[0.2em]">Our Mission</h3>
              <div className="w-10 h-1 mt-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
              {MISSION_POINTS.map((p, i) => {
                let spanClass = "";
                if (i < 3) spanClass = "sm:col-span-1 lg:col-span-2";
                else if (i === 3) spanClass = "sm:col-span-1 lg:col-span-3";
                else if (i === 4) spanClass = "sm:col-span-2 lg:col-span-3";

                return (
                  <motion.div key={i} variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative p-5 bg-white/75 backdrop-blur-xl border border-white/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 ${spanClass}`}
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${p.g} opacity-[0.07] rounded-bl-full group-hover:opacity-[0.15] transition-opacity`} />

                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${p.g} flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform`}>
                        {p.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{p.num}</p>
                        <p className="text-[11px] font-black text-slate-800 uppercase tracking-[0.15em] leading-tight">{p.label}</p>
                      </div>
                    </div>

                    <p className="text-[12px] text-slate-600 font-bold leading-relaxed relative z-10">
                      {p.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── VISION ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-14 max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/90 shadow-lg shadow-green-900/5 text-center">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-lime-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <h3 className="text-[10px] font-black text-green-700 uppercase tracking-[0.25em] mb-4">Our Vision</h3>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 leading-relaxed italic">
                To become a trusted and professionally managed organisation delivering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-700 font-black">
                  innovative, sustainable and commercially viable
                </span>
                {" "}solutions for India's agriculture and rural economy.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — Journey Timeline "From Farm To Future"
      ══════════════════════════════════════════════════ */}
      {/* <div className="py-6 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-8 space-y-2 relative z-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-green-300/70 text-[8px] font-black text-green-700 uppercase tracking-[0.25em] shadow-sm">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600">
                Farm
              </span>
              {" "}To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700">
                Future
              </span>
            </h2>
          </motion.div> */}

      {/* Timeline Grid Container */}
      {/* <div className="relative z-10">
       
            <div className="hidden lg:block absolute top-[30px] left-[10%] right-[10%] h-px border-t border-dashed border-green-300/80 z-0" />

           
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 z-10"
            >
              {TIMELINE.map((t, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="relative flex flex-col items-center text-center group cursor-default z-10"
                >
 
                  <motion.div
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="relative w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/90 shadow-md shadow-green-950/5 flex items-center justify-center text-2xl mb-2.5 group-hover:border-emerald-400 group-hover:bg-white transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-2xl border border-green-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{t.icon}</span>
                  </motion.div>


                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 text-white text-[10px] font-black shadow-sm mb-1.5 transition-transform duration-200 group-hover:scale-105">
                    {t.year}
                  </div>


                  <div className="text-[11px] font-black text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
                    {t.title}
                  </div>


                  <p className="text-[9px] text-slate-600 font-bold leading-relaxed max-w-[150px]">
                    {t.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div> */}
      {/* </div> */}


    </section>
  );
}
