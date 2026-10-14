import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  { id: '01', title: 'CONNECT', desc: 'Build meaningful relationships across the agricultural ecosystem.', icon: '🤝' },
  { id: '02', title: 'DEVELOP', desc: 'Identify opportunities and develop commercially viable businesses.', icon: '📈' },
  { id: '03', title: 'FACILITATE', desc: 'Connect stakeholders with markets, services and financial ecosystems.', icon: '🔄' },
  { id: '04', title: 'MANAGE', desc: 'Bring professional management, operational discipline and risk awareness.', icon: '⚙️' },
  { id: '05', title: 'GROW', desc: 'Create sustainable long-term value for clients and partners.', icon: '🌱' },
];

const WHY_KISSAN = [
  { title: '20+ Years of Domain Experience', desc: 'Deep practical exposure to agriculture, rural finance, warehousing and commodity businesses.', icon: '🏆' },
  { title: 'Strong Institutional Network', desc: 'Experience working with banks, financial institutions, corporates, traders, farmers and warehouse stakeholders.', icon: '🌐' },
  { title: 'Business Development Capability', desc: 'Experience in building businesses, developing markets and managing large portfolios.', icon: '🚀' },
  { title: 'Risk & Compliance Orientation', desc: 'Experience in financial assessment, KYC, due diligence, portfolio monitoring, warehouse inspection and risk mitigation.', icon: '🛡️' },
  { title: 'Strong Rural Understanding', desc: 'Practical understanding of farmers, rural markets, agricultural commodities and rural financial requirements.', icon: '🌾' }
];

const CAPABILITIES = [
  { title: 'Agriculture & Agri-Business', desc: 'Agri-business development, farmer and market linkages, agricultural value-chain opportunities, rural marketing and business advisory.' },
  { title: 'Warehousing & Collateral Management', desc: 'Warehouse management, stock inspection, commodity monitoring, collateral management, risk monitoring and compliance.' },
  { title: 'Agri & Commodity Finance', desc: 'Warehouse receipt finance, commodity finance, trade finance, financial assessment and risk analysis.' },
  { title: 'Trade Facilitation & Commodity Business', desc: 'Commodity business, market development, buyer-seller linkages and institutional relationships.' },
  { title: 'Rural Financial Services', desc: 'Connecting rural businesses and agricultural stakeholders with appropriate financial ecosystems.' }
];



export default function ApproachPage() {
  return (
    <section className="relative z-10 py-20 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-lime-300/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-green-200/60 shadow-md">
          <span className="text-yellow-500 text-xs">★</span>
          <span className="text-[10px] font-black bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent tracking-[0.2em] uppercase">
            Established & Trusted • Our Approach
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          From Connection <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-700">To Growth</span>
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          We believe sustainable growth in India's agriculture and rural economy requires strong coordination between farmers, markets, financial institutions, warehouses, traders and corporate organisations.
        </p>
      </motion.div>

      {/* 5 Pillars - Step Timeline / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24 relative">
        {/* Connecting Line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-green-200 via-emerald-300 to-green-200 -z-10 transform -translate-y-1/2 opacity-50" />
        
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative bg-white/80 backdrop-blur-xl border border-slate-200/60 p-6 rounded-3xl shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-green-300 hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:bg-green-50 transition-all duration-500 shadow-sm">
              {pillar.icon}
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center shadow-lg group-hover:bg-green-600 transition-colors">
              {pillar.id}
            </div>
            <h4 className="text-sm font-black text-slate-800 tracking-widest uppercase mb-3 group-hover:text-green-700 transition-colors">
              {pillar.title}
            </h4>
            <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>



      {/* SIDE BY SIDE: Why Kissan (Left) & Capabilities (Right) */}
      <div className="mt-32 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        
        {/* Left Side: WHY KISSAN */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 relative"
          >
            {/* Glowing background */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-lime-400/40 blur-[40px] rounded-full pointer-events-none animate-pulse" />
            
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-xl shadow-green-900/20 mb-6 border border-slate-700 relative z-10"
            >
              <span className="text-lime-400 text-xl">💡</span>
              <span className="text-sm md:text-base font-black tracking-[0.2em] uppercase bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                Why Kissan?
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight relative z-10">
              What Makes Us <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-700">Different</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {WHY_KISSAN.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/90 backdrop-blur-xl border-l-[6px] border-l-lime-500 border border-y-slate-200/60 border-r-slate-200/60 p-6 rounded-r-3xl shadow-xl shadow-lime-900/10 hover:shadow-2xl hover:shadow-lime-900/20 hover:translate-x-3 transition-all duration-400 group flex gap-5 items-start relative overflow-hidden"
              >
                {/* Glowing hover accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lime-100/60 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="text-4xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0 drop-shadow-sm z-10">{item.icon}</div>
                <div className="z-10">
                  <h3 className="text-base font-black text-slate-900 mb-1.5 group-hover:text-green-700 transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: BUSINESS CAPABILITIES */}
        <div className="relative lg:pt-16">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 lg:mt-0 mt-12"
          >
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
              <span className="w-10 h-1.5 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full" />
              Our Business Capabilities
            </h2>
          </motion.div>

          <div className="space-y-4">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50/90 backdrop-blur-xl border-l-[4px] border-l-slate-400 border border-y-slate-200/60 border-r-slate-200/60 p-6 rounded-r-3xl shadow-md hover:shadow-lg hover:translate-x-3 transition-all duration-400 group flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-400 text-sm font-black group-hover:bg-slate-900 group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 mb-1.5 group-hover:text-slate-700 transition-colors">{cap.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
