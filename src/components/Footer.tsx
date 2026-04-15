import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#191c1e] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span
                className="text-xl font-black italic tracking-tight text-white"
                style={{ fontFamily: 'Manrope' }}
              >
                MAX HP
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Professional-grade operations management for automotive service businesses.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:support@maxhp.io" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-600">© 2026 MAX HP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
