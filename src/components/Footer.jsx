import { Link } from 'react-router-dom'

export default function Footer({ scrollToSection }) {

  // Scroll to a section by ID, or to a hash anchor within the page
  const goTo = (sectionId, anchorId) => {
    scrollToSection(sectionId)
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 400)
    }
  }

  // Quick Links — label + section + optional anchor
  const quickLinks = [
    { label: 'Home',                  section: 'home'       },
    { label: 'About Us',              section: 'about'      },
    { label: 'Services',              section: 'services'   },
    { label: 'Warehousing',           section: 'services',  anchor: 'professional-warehousing'                  },
    { label: 'Commodity Procurement', section: 'key-areas', anchor: 'agricultural-commodity-procurement'        },
    { label: 'Agri-Finance',          section: 'key-areas', anchor: 'agri-commodity-finance'                    },
    { label: 'Trade Facilitation',    section: 'key-areas', anchor: 'trade-facilitation-commodity-business'     },
    { label: 'Consulting',            section: 'key-areas', anchor: 'consulting-services'                       },
    { label: 'Leadership',            section: 'leadership' },
    { label: 'Contact Us',            section: 'contact'    },
  ]

  // Services — label + section + optional anchor
  const servicesList = [
    { label: 'Professional Warehousing', section: 'services',  anchor: 'professional-warehousing'              },
    { label: 'Warehouse Management',     section: 'services',  anchor: 'warehouse-management'                  },
    { label: 'Audit & Inspection',       section: 'services',  anchor: 'audit-inspection-fumigation'           },
    { label: 'Fumigation',               section: 'services',  anchor: 'audit-inspection-fumigation'           },
    { label: 'Commodity Procurement',    section: 'key-areas', anchor: 'agricultural-commodity-procurement'    },
    { label: 'Collateral Management',    section: 'key-areas', anchor: 'collateral-management'                 },
    { label: 'Trade Facilitation',       section: 'key-areas', anchor: 'trade-facilitation-commodity-business' },
    { label: 'Agri-Finance',             section: 'key-areas', anchor: 'agri-commodity-finance'                },
    { label: 'Consulting',               section: 'key-areas', anchor: 'consulting-services'                   },
  ]

  return (
    <footer className="bg-slate-900 text-white relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Kissan Agri Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col text-left">
                <div className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                  KISSAN <span className="text-emerald-400 font-black">AGRI</span>
                </div>
                <div className="text-[9px] font-black tracking-[0.22em] text-green-400 uppercase mt-1">
                  WAREHOUSING PRIVATE LIMITED
                </div>
              </div>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed pr-4 font-semibold italic">
              "From storage to prosperity, we are along with You."
            </p>

            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-slate-500 font-medium pt-1">
              {['Agriculture','Rural Business','Warehousing','Agri-Finance','Commodity','Trade'].map((tag, i, arr) => (
                <span key={tag} className="flex items-center gap-2">
                  {tag}{i < arr.length - 1 && <span className="text-slate-700">|</span>}
                </span>
              ))}
            </div>

            <div className="pt-1 text-xs font-mono text-slate-500">
              <span className="text-slate-600">CIN:</span> U52100UW2026PTC256413
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-green-400 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {quickLinks.map(({ label, section, anchor }) => (
                <li key={label}>
                  <button
                    onClick={() => goTo(section, anchor)}
                    className="hover:text-green-400 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-green-400 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {servicesList.map(({ label, section, anchor }) => (
                <li key={label}>
                  <button
                    onClick={() => goTo(section, anchor)}
                    className="hover:text-green-400 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Offices */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-green-400 uppercase tracking-widest">Contact & Offices</h4>
            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div>
                <span className="text-slate-400 font-bold block text-[10px] uppercase mb-0.5">Registered Office:</span>
                House No.- 8, Transport Nagar Colony, Mathura, District- Mathura, UP – 281001
              </div>
              <div>
                <span className="text-slate-400 font-bold block text-[10px] uppercase mb-0.5">Corporate Office:</span>
                Plot No. 670, Pink City, Mohan Road, Lucknow, District- Lucknow, UP – 226017
              </div>
              <div className="pt-1 space-y-1">
                <div>📞 <a href="tel:+919978993711" className="hover:text-green-400 transition-colors">+91-9978993711</a></div>
                <div>📞 <a href="tel:+919002584140" className="hover:text-green-400 transition-colors">+91-9002584140</a></div>
                <div>✉️ <a href="mailto:ask@kissanagri.co.in" className="hover:text-green-400 transition-colors">ask@kissanagri.co.in</a></div>
                <div>✉️ <a href="mailto:care@kissanagri.co.in" className="hover:text-green-400 transition-colors">care@kissanagri.co.in</a></div>
                <div>🌐 <a href="http://www.kissanagri.co.in" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">www.kissanagri.co.in</a></div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© 2026 Kissan Agri Warehousing Private Limited. All Rights Reserved.</div>
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-x-3 gap-y-1 text-[11px]">
            <Link to="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link to="/terms-conditions" className="hover:text-green-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
