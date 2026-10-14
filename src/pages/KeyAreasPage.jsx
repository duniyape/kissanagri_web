import React from 'react';
import { motion } from 'framer-motion';

const ADDITIONAL_SERVICES = [
  { 
    id: '05', tag: 'Procurement', title: 'Agricultural Commodity Procurement', 
    img: '/1.1.png', 
    subtitle: 'Reliable Sourcing. Quality Commodities. Efficient Delivery.',
    desc: 'Kissan facilitates agricultural commodity procurement through a broad supplier network and experience across 50+ agricultural commodities. We help create effective connections between suppliers, buyers, traders and institutional stakeholders.',
    points: ['Supplier network development', 'Commodity sourcing', 'Quality coordination', 'Price discovery support', 'Buyer-seller linkages', 'Delivery coordination', 'Commodity business facilitation'] 
  },
  { 
    id: '06', tag: 'Corporate', title: 'Corporate Business', 
    img: '/1.2.png', 
    subtitle: 'Trusted Relationships. Professional Warehousing.',
    desc: 'Kissan has established relationships with leading corporate organisations. The company provides professional warehousing services for commodity storage. These relationships reflect the confidence placed in our warehouse service capabilities.',
    points: ['Cargill India', 'Olam', 'Louis Dreyfus', 'COFCO Agri', 'Glencore', 'ITC'] 
  },
  { 
    id: '07', tag: 'Finance', title: 'Agri & Commodity Finance', 
    img: '/1.3.png', 
    subtitle: 'Connecting Commodities with Financial Solutions',
    desc: 'Our experience across agriculture, warehousing and financial services enables us to support stakeholders with solutions related to commodity-based financial ecosystems. Our objective is to facilitate stronger connections between agricultural commodities, businesses and appropriate financial ecosystems.',
    points: ['Warehouse Receipt Finance', 'Commodity Finance', 'Trade Finance', 'Commodity Stock Management', 'Financial Assessment', 'Risk Analysis', 'Value-Chain Services'] 
  },
  { 
    id: '08', tag: 'Management', title: 'Collateral Management', 
    img: '/1.4.png', 
    subtitle: 'Professional Stock Monitoring & Risk Management',
    desc: 'Kissan brings practical experience in warehouse and commodity operations to support professional collateral management.',
    points: ['Warehouse management support', 'Collateral management', 'Stock inspection and evaluation', 'Commodity stock monitoring', 'Risk monitoring', 'Compliance support'] 
  },
  { 
    id: '09', tag: 'Trade', title: 'Trade Facilitation & Commodity Business', 
    img: '/1.5.png', 
    subtitle: 'Connecting Buyers, Sellers & Markets',
    desc: 'We facilitate commodity business and trade relationships by connecting relevant participants across the agricultural ecosystem.',
    points: ['Commodity business', 'Trade facilitation', 'Market development', 'Buyer-seller linkages', 'Commodity stock management', 'Corporate relationships', 'Institutional relationships'] 
  },
  { 
    id: '10', tag: 'Rural', title: 'Rural Financial Services', 
    img: '/1.6.png', 
    subtitle: 'Supporting Rural Businesses Through Better Connections',
    desc: 'We facilitate solutions connecting rural businesses and agricultural stakeholders with appropriate financial ecosystems. Our focus is to strengthen access and linkages between:',
    points: ['Farmers', 'Businesses', 'Markets', 'Financial Institutions', 'Corporates'] 
  },
  { 
    id: '11', tag: 'Consulting', title: 'Consulting Services', 
    img: '/1.7.png', 
    subtitle: 'Professional Advisory for Warehousing & Agri-Business',
    desc: 'Our consulting capabilities cover key areas of warehouse and agri-business development. We provide consulting support for:',
    points: ['Warehouse construction', 'Warehouse-related projects', 'Risk monitoring', 'Compliance'] 
  },
  { 
    id: '12', tag: 'Ecosystem', title: 'Our Stakeholder Ecosystem', 
    img: '/1.8.png', 
    subtitle: 'One Platform. Multiple Stakeholders. Shared Growth.',
    desc: 'We work across the agricultural and rural business ecosystem with various stakeholders. Our Approach: CONNECT → DEVELOP → FACILITATE → MANAGE → GROW',
    points: ['Farmers', 'FPOs', 'Traders & Associates', 'Aggregators', 'Manufacturers', 'Exporters', 'Corporate Houses', 'Warehouse Associates', 'Banks & Financial Institutions', 'Government Agencies'] 
  }
];

export default function KeyAreasPage() {
  return (
    <section id="key-areas" className="relative z-10 py-16 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-lime-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* 5-12 Additional Services: Asymmetric Split Feature Showcase */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-10 px-1">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Key Areas of Business</h3>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-6 bg-gradient-to-r from-green-300 via-slate-200 to-transparent" />
        </div>

        <div className="space-y-4">
          {ADDITIONAL_SERVICES.map((area, i) => {
            const anchorId = area.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                id={anchorId}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:shadow-xl hover:border-green-200 transition-all duration-500"
              >
                {/* Image Side */}
                <div className={`lg:col-span-4 relative h-64 lg:h-auto overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img src={area.img} alt={area.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-green-900 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest shadow-sm">
                    {area.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 lg:top-3 lg:left-auto lg:right-3 bg-gradient-to-br from-lime-500 to-emerald-700 text-white w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shadow-md">
                    {area.id}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-8 p-6 md:p-8 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2 group-hover:text-green-800 transition-colors tracking-tight">
                    {area.title}
                  </h4>
                  {area.subtitle && <p className="text-[10px] sm:text-xs font-bold text-green-700 uppercase tracking-widest mb-3">{area.subtitle}</p>}
                  {area.desc && <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">{area.desc}</p>}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {area.points.map((pt, j) => (
                      <div key={j} className="flex items-center gap-2.5 bg-slate-50/80 border border-slate-100 p-3 rounded-xl hover:bg-white transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 flex-shrink-0" />
                        <span className="text-[11px] text-slate-700 font-semibold">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
