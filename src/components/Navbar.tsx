import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-[#004ac6]' : 'text-slate-500 hover:text-[#191c1e]'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.svg" alt="MAX HP logo" className="h-8 w-auto" />
          <span
            className="text-xl font-black italic tracking-tight text-[#191c1e]"
            style={{ fontFamily: 'Manrope' }}
          >
            MAX HP
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          <NavLink to="/features" className={linkClass}>Features</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://app.maxhp.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-500 hover:text-[#191c1e] transition-colors"
          >
            Sign In
          </a>
          <a
            href="https://app.maxhp.io/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#004ac6] hover:bg-[#0038a0] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Get Started →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-500 hover:text-[#191c1e] hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-5 flex flex-col gap-4">
          <NavLink to="/features" className={linkClass} onClick={() => setMobileOpen(false)}>Features</NavLink>
          <NavLink to="/pricing" className={linkClass} onClick={() => setMobileOpen(false)}>Pricing</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMobileOpen(false)}>Contact</NavLink>
          <hr className="border-slate-100" />
          <a
            href="https://app.maxhp.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-500 hover:text-[#191c1e] transition-colors"
          >
            Sign In
          </a>
          <a
            href="https://app.maxhp.io/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#004ac6] hover:bg-[#0038a0] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
          >
            Get Started →
          </a>
        </div>
      )}
    </header>
  )
}
