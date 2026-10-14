import React from 'react';
import { motion } from 'framer-motion';

const CORE_SERVICES = [
  {
    icon: '🏢',
    images: ['/7.jpeg', '/10.jpeg', '/3.jpeg'],
    title: 'Professional Warehousing',
    subtitle: 'Scientific Storage. Professional Management. Reliable Operations.',
    desc: 'We offer dry and cold storage solutions capable of catering to approximately 80 agricultural commodities. Kissan manages and operates 50+ warehouses through a hub-and-spoke model across various states of India, with an aggregate area exceeding 5 lakh sq. ft.',
    points: ['Scientific storage both Dry and Cold', 'Open plight storage', 'Silo storage', 'Distribution support'],
    cta: 'Explore Warehousing Solutions'
  },
  {
    icon: '📋',
    images: ['/9.jpeg', '/4.jpeg', '/2.jpeg'],
    title: 'Warehouse Management',
    subtitle: 'Protecting Stock. Improving Efficiency. Managing Risk.',
    desc: 'We provide professional and scientific stock management services to retailers and corporates for commodities stored on their behalf.',
    points: ['Stock integrity', 'Inventory management', 'Operational discipline', 'Stock monitoring', 'Warehouse management', 'Risk monitoring', 'Efficient warehouse operations'],
    cta: 'Explore Management Services'
  },
  {
    icon: '🧪',
    images: ['/6.jpeg', '/5.jpeg', '/4.jpeg'],
    title: 'Audit, Inspection & Fumigation',
    subtitle: 'Quality and Integrity Across the Storage Cycle',
    desc: 'Our professional services include third-party warehouse audits and commodity inspection through qualified professionals. We also provide comprehensive fumigation and pest-management solutions designed to protect commodity quality and integrity during storage and transportation while supporting applicable health, safety, environmental and regulatory requirements.',
    points: ['Warehouse audit', 'Commodity inspection', 'Stock verification', 'Quality assessment', 'Fumigation', 'Pest management', 'Risk monitoring'],
    cta: 'Explore Audit Services'
  }
];

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((img, idx) => (
        <motion.img
          key={img}
          src={img}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === idx ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          style={{ zIndex: currentIndex === idx ? 1 : 0 }}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-white scale-125' : 'bg-white/40'}`} 
            />
          ))}
        </div>
      )}
    </>
  );
};



export default function ServicesPage({ scrollToSection }) {
  return (
    <section id="services" className="relative z-10 py-16 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-green-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-green-200/60 shadow-md shadow-green-950/5">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 animate-pulse" />
          <span className="text-[10px] font-black bg-gradient-to-r from-lime-700 to-emerald-800 bg-clip-text text-transparent tracking-[0.2em] uppercase">
            Operational Excellence & Core Pillars
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-800">Business Pillars</span>
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
          Professional warehousing, collateral management, commodity finance, and market linkage solutions designed for scale.
        </p>
      </motion.div>

      {/* Detailed Services Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-10 px-1">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Our Core Services</h3>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-6 bg-gradient-to-r from-green-300 via-slate-200 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, i) => {
            const anchorId = service.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            return (
              <motion.div
                id={anchorId}
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-green-300 transition-all duration-500 overflow-hidden flex flex-col"
              >
              {/* Top Image Section */}
              <div className="relative h-60 overflow-hidden flex-shrink-0 bg-slate-100">
                <ImageSlider images={service.images} title={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent z-10 pointer-events-none" />
                
                {/* Floating Icon & Titles overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-md">
                    {service.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight mb-1.5">{service.title}</h4>
                  <p className="text-[9px] font-bold text-green-300 uppercase tracking-widest leading-relaxed opacity-90">{service.subtitle}</p>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-6 line-clamp-4">
                  {service.desc}
                </p>

                <div className="space-y-3 flex-1 mb-6">
                  {service.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-md group-hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  {service.cta} <span>→</span>
                </motion.button>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>



      {/* Modern Gradient CTA Banner */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-lime-500 via-green-600 to-emerald-900 rounded-3xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-green-900/20 relative overflow-hidden"
      >
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-1 text-center md:text-left z-10">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-lime-200 block">Ready to Scale?</span>
          <h3 className="text-lg md:text-2xl font-black tracking-tight">
            Need Custom Warehousing & Logistics Solutions?
          </h3>
          <p className="text-xs text-white/90 font-medium">
            Partner with Kisaan Agri Warehousing Private Limited today.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="px-6 py-3 rounded-full bg-white text-slate-900 text-xs font-black tracking-widest uppercase shadow-xl hover:bg-slate-50 transition-all flex-shrink-0 z-10"
        >
          Contact Our Team →
        </motion.button>
      </motion.div> */}

    </section>
  );
}