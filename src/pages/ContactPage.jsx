import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <style>{`
        @keyframes cp-leaf { 0%,100%{transform:rotate(-6deg)} 50%{transform:rotate(7deg) translateY(-9px)} }
        @keyframes cp-lf2  { 0%,100%{transform:rotate(9deg)} 50%{transform:rotate(-5deg) translateY(-8px)} }
      `}</style>

      <section id="contact" className="relative py-24 px-4 lg:px-8 bg-slate-50 overflow-hidden z-10">
        
        {/* Leaf SVGs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            {w:120,t:10,l:-25,a:'cp-leaf 6s ease-in-out infinite', op: 0.15},
            {w:88, t:28,r:-10,a:'cp-lf2  7.5s ease-in-out 1s infinite', op: 0.18},
            {w:66, b:68,l:'12%',a:'cp-leaf 9s ease-in-out 2s infinite', op: 0.14},
            {w:76, b:30,r:'8%',a:'cp-lf2  8s ease-in-out 1.5s infinite', op: 0.16},
            {w:50, t:'40%',l:'4%',a:'cp-leaf 7s ease-in-out 3s infinite', op: 0.12},
            {w:95, t:'65%',r:-20,a:'cp-lf2  8.5s ease-in-out 0.5s infinite', op: 0.20},
            {w:60, t:'20%',l:'45%',a:'cp-leaf 10s ease-in-out 4s infinite', op: 0.08},
            {w:70, b:15,l:'35%',a:'cp-lf2  9.5s ease-in-out 2.5s infinite', op: 0.11},
          ].map((l,i) => (
            <svg key={i} viewBox="0 0 60 80" fill="none" style={{
              position:'absolute', width:l.w, opacity:l.op,
              top:l.t, left:l.l, right:l.r, bottom:l.b, animation:l.a,
            }}>
              <path d="M30 3 C6 16 4 54 30 77 C56 54 54 16 30 3Z" fill="#16a34a"/>
              <line x1="30" y1="8" x2="30" y2="72" stroke="#14532d" strokeWidth="1.2"/>
            </svg>
          ))}
        </div>

        {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-lime-200/40 via-green-200/20 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-200/30 via-teal-200/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-green-200/60 shadow-md mx-auto">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 animate-pulse" />
            <span className="text-[10px] font-black bg-gradient-to-r from-lime-700 to-emerald-800 bg-clip-text text-transparent tracking-[0.22em] uppercase">
              CONTACT US
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Let's Build Sustainable <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-700">Agri-Business</span> Together
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          
          {/* TOP ROW: OFFICES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Registered Office */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-xl shadow-slate-200/40 overflow-hidden h-full flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lime-300/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-lime-400 to-lime-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Registered Office</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  House No.- 8, Transport Nagar Colony,<br/>
                  Mathura, District- Mathura,<br/>
                  <strong className="text-slate-800">Uttar Pradesh, India – 281001</strong>
                </p>
              </div>
            </motion.div>

            {/* Corporate Office */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-xl shadow-slate-200/40 overflow-hidden h-full flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-300/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-teal-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Corporate Office</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Plot No. 670, Pink City, Mohan Road,<br/>
                  Lucknow, District- Lucknow,<br/>
                  <strong className="text-slate-800">Uttar Pradesh, India – 226017</strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM ROW: DIRECT CONTACT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/40 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-300/10 to-transparent rounded-full blur-3xl group-hover:bg-green-300/20 transition-colors duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-400 to-emerald-600" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Column 1: CEO & Directors */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Co-founder, Director & CEO</h3>
                  <p className="text-xl font-black text-slate-900">Janmajay Prasad Kharwar</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Directors</h4>
                  <p className="text-sm text-slate-800 font-bold leading-relaxed">Lalit<br/>Saumya Ranjan Mallick</p>
                </div>
              </div>

              {/* Column 2: Mobile & Email */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mobile</h4>
                  <a href="tel:+919978993711" className="block text-sm text-slate-800 font-bold hover:text-green-600 transition-colors mb-1.5">+91-9978993711</a>
                  <a href="tel:+919002584140" className="block text-sm text-slate-800 font-bold hover:text-green-600 transition-colors">+91-9002584140</a>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email</h4>
                  <a href="mailto:ask@kissanagri.co.in" className="block text-sm text-slate-800 font-bold hover:text-green-600 transition-colors mb-1.5">ask@kissanagri.co.in</a>
                  <a href="mailto:care@kissanagri.co.in" className="block text-sm text-slate-800 font-bold hover:text-green-600 transition-colors">care@kissanagri.co.in</a>
                </div>
              </div>

              {/* Column 3: Website & Corp Info */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Website</h4>
                  <a href="http://www.kissanagri.co.in" target="_blank" rel="noreferrer" className="block text-sm text-slate-800 font-bold hover:text-green-600 transition-colors">www.kissanagri.co.in</a>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Corporate Information</h4>
                  <p className="text-xs text-slate-800 font-mono font-bold leading-relaxed">
                    CIN: U52100UW2026PTC256413<br/>
                    GSTIN: 09AANCK0938K1Z1
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
}
