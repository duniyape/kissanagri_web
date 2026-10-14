export default function HomePage({ scrollToSection }) {
  return (
    <section id="home" className="home-section relative min-h-screen flex flex-col justify-between">
      {/* Background */}
      <div className="home-bg absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img src="/image1.png" alt="Agri Warehouse Forklift" className="home-bg-img w-full h-full object-cover object-center" />
      </div>

      {/* Content */}
      <div className="relative z-10 home-content px-4 lg:px-6 max-w-[1400px] mx-auto flex flex-col justify-between lg:justify-center w-full" style={{minHeight:'100vh', paddingTop:'6rem', paddingBottom:'3rem'}}>
        <div className="home-grid grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">

          {/* LEFT: Hero Text */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[0.98]">POWERING</h1>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[0.98] mt-0.5"
                style={{ background: 'linear-gradient(105deg, #4d7c0f 0%, #65a30d 18%, #ffffff 35%, #5ea22a 52%, #ffffff 75%, #3f6212 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                EVERY HARVEST
              </h1>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-extrabold text-slate-600 tracking-[0.22em] uppercase">POWERING EVERY HARVEST WITH ONE-STEP WAREHOUSING SOLUTIONS</p>
              <div className="w-10 h-0.5 bg-green-600 rounded-full" />
            </div>

            <div className="space-y-0.5 max-w-md pt-1">
              <h3 className="text-xs font-black text-slate-900 tracking-wider uppercase">KISSAN AGRI WAREHOUSING PRIVATE LIMITED</h3>
              <p className="text-[11px] text-slate-700 font-semibold leading-relaxed">
                We connect agriculture, warehousing, commodity markets, financial institutions and rural businesses to create commercially viable and sustainable solutions across the agricultural value chain. From storage to prosperity, we are along with you.
              </p>
            </div>

            <div className="home-btns flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-lime-500 via-green-600 to-emerald-700 text-white text-[11px] font-black tracking-wider uppercase shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                EXPLORE OUR SERVICES
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-slate-800 text-[11px] font-black tracking-wider uppercase shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
              >
                PARTNER WITH US
              </button>
            </div>
          </div>

          {/* RIGHT: Glass Cards */}
          <div className="home-cards lg:col-span-5 flex flex-col gap-3 items-end justify-center ml-auto w-full">
            {[
              { path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: '50+ WAREHOUSES', desc: 'Across various states of India' },
              { path: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: '5+ LAKH SQ. FT.', desc: 'Aggregate warehousing area' },
              { path: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3', title: '80+ AGRI COMMODITIES', desc: 'Storage capabilities' },
              { path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: '20+ COMMODITIES', desc: 'Procurement experience' },
              { path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: '20+ YEARS', desc: 'Domain experience' },
            ].map((card, i) => (
              <div key={i} className="w-full lg:max-w-[290px] bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl p-3 flex items-center gap-3 hover:bg-white/35 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-white/40 border border-white/60 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.path} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-slate-900 tracking-wider uppercase">{card.title}</h4>
                  <p className="text-[10px] text-slate-700 font-semibold leading-tight">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
