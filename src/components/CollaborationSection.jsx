import React from 'react';
import { motion } from 'framer-motion';

const PARTNER_NEEDS = [
  { title: "Warehouse Solutions", desc: "Talk to our warehousing team.", icon: "🏢" },
  { title: "Commodity Procurement", desc: "Connect with our procurement team.", icon: "🌾" },
  { title: "Warehouse Management", desc: "Discuss your operational requirements.", icon: "⚙️" },
  { title: "Trade & Commodity Business", desc: "Explore partnership opportunities.", icon: "🤝" },
  { title: "Agri-Finance & Collateral", desc: "Connect with our business team.", icon: "💼" },
];

export default function CollaborationSection({ scrollToSection }) {
  return (
    <section className="py-20 px-4 lg:px-8 relative z-10 overflow-hidden bg-slate-50/50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="relative bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col xl:flex-row items-stretch"
        >
          {/* LEFT SIDE: Title & Description */}
          <div className="relative xl:w-[35%] p-8 md:p-12 flex flex-col justify-center border-b xl:border-b-0 xl:border-r border-slate-100 bg-gradient-to-br from-white via-white to-green-50/30 overflow-hidden">
            {/* Glowing effect similar to the image */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-lime-400/20 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-400/10 blur-[40px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-lime-500 text-[10px]">★</span>
                <span className="text-[9px] font-black text-green-700 tracking-[0.2em] uppercase">Partner With Kissan</span>
                <span className="text-lime-500 text-[10px]">★</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 leading-[1.1] mb-4 tracking-tight">
                Let's Build Sustainable <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-600">Agri-Business</span> Together
              </h2>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
                Whether you are a farmer, FPO, trader, corporate, exporter, warehouse owner, financial institution or commodity business, Kissan aims to create meaningful partnerships.
              </p>
              
              <button 
                onClick={() => scrollToSection && scrollToSection('contact')}
                className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-green-600 transition-colors shadow-lg shadow-slate-900/20 inline-flex items-center gap-2"
              >
                Contact Our Team
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: The 5 Columns */}
          <div className="xl:w-[65%] grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
            {PARTNER_NEEDS.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className={`p-6 md:p-5 flex flex-col items-center text-center justify-center group hover:bg-slate-50 transition-colors ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-lg mb-4 group-hover:scale-110 group-hover:border-green-200 group-hover:shadow-green-900/10 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-black text-slate-900 mb-1.5 leading-snug group-hover:text-green-700 transition-colors px-2">
                  {item.title}?
                </h4>
                <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-widest leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
