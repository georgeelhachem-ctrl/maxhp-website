import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useDemoModal } from '../context/DemoModalContext'

const bentoCards = [
  {
    title: 'Central Intelligence Dashboard',
    body: 'A real-time overview of your entire business. Track today\'s appointments, daily revenue, average job value, and repeat customers — all in one place.',
    accent: 'bg-[#004ac6]',
    textAccent: 'text-white',
    span: 'md:col-span-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Smart Scheduling',
    body: 'Book, manage, and never double-book again. Your calendar syncs in real time so your team is always on the same page.',
    link: 'Learn more →',
    span: 'md:col-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Precision CRM',
    body: 'Detailed client profiles, vehicle history, and automated service reminders — built for automotive professionals who need every detail at their fingertips.',
    span: 'md:col-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Performance Analytics',
    body: 'Track revenue trends, completed jobs, average job value, and cancellation rates. See exactly what\'s working — and what isn\'t.',
    span: 'md:col-span-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

const pricingPreview = [
  {
    name: 'Starter', price: '$199', period: '/mo', featured: false,
    bullets: ['Scheduling, CRM & Invoicing', 'Email & SMS Marketing', 'Automated Reminders'],
  },
  {
    name: 'Pro', price: '$299', period: '/mo', featured: false,
    bullets: ['Everything in Starter', 'Unlimited Team Members', 'Priority Support'],
  },
  {
    name: 'Pro + AI', price: '$799', period: '/mo', featured: true, badge: 'Most Popular',
    bullets: ['Everything in Pro', 'AI Voice Receptionist 24/7', 'Unlimited Marketing'],
  },
]

export default function Home() {
  const openDemo = useDemoModal()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MAX HP',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://maxhp.io',
    description: 'All-in-one business management platform for automotive service businesses — scheduling, CRM, invoicing, marketing, employee management, and AI voice receptionist.',
    offers: [
      { '@type': 'Offer', name: 'Starter', price: '199', priceCurrency: 'USD', billingIncrement: 'P1M' },
      { '@type': 'Offer', name: 'Pro', price: '299', priceCurrency: 'USD', billingIncrement: 'P1M' },
      { '@type': 'Offer', name: 'Pro + AI', price: '799', priceCurrency: 'USD', billingIncrement: 'P1M' },
    ],
    provider: {
      '@type': 'Organization',
      name: 'MAX HP LLC',
      url: 'https://maxhp.io',
      contactPoint: { '@type': 'ContactPoint', email: 'sales@maxhp.io', contactType: 'sales' },
    },
  }

  return (
    <>
      <Helmet>
        <title>MAX HP | All-in-One Platform for Automotive Service Businesses</title>
        <meta name="description" content="Run your entire shop from one screen. Scheduling, CRM, invoicing, marketing, and AI — built for auto detailers, tint shops, mechanics, and tire shops." />
        <meta property="og:title" content="MAX HP | All-in-One Platform for Automotive Service Businesses" />
        <meta property="og:description" content="Run your entire shop from one screen. Scheduling, CRM, invoicing, marketing, and AI — built for auto detailers, tint shops, mechanics, and tire shops." />
        <meta property="og:url" content="https://maxhp.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://maxhp.io/logo.svg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#f7f9fb] pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left — copy */}
            <div className="pt-6 pb-12 lg:pb-20">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 mb-7 shadow-card">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004ac6]" />
                <span className="text-xs font-semibold text-[#004ac6] tracking-wide">Engineered for Precision</span>
              </div>

              {/* H1 */}
              <h1
                className="text-5xl sm:text-6xl lg:text-[64px] font-black leading-[1.04] tracking-tight text-[#191c1e] mb-6"
                style={{ fontFamily: 'Manrope' }}
              >
                Run Your Entire Shop{' '}
                <span className="italic text-[#004ac6]">From One Screen.</span>
              </h1>

              {/* Sub */}
              <p className="text-lg text-slate-500 leading-relaxed mb-9 max-w-xl" style={{ fontFamily: 'Inter' }}>
                Scheduling, clients, invoices, marketing, and AI — built for auto detailers, tint shops, mechanics, tire shops, and every automotive service business serious about growth.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://app.maxhp.io/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#004ac6] hover:bg-[#0038a0] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-card"
                >
                  Start Free Trial
                </a>
                <button
                  onClick={openDemo}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#191c1e] hover:border-slate-300 hover:bg-slate-50 font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-card"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Watch Demo
                </button>
              </div>

              {/* Trust */}
              <div className="flex items-center gap-5 mt-7">
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#004ac6" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  SOC2 Compliant
                </span>
                <span className="text-slate-200">·</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#004ac6" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  256-bit Encryption
                </span>
              </div>

              {/* Floating stats card */}
              <div className="mt-10 inline-flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-card-md">
                <div className="w-10 h-10 rounded-xl bg-[#004ac6]/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004ac6" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Daily Revenue</p>
                  <p className="text-base font-black text-[#191c1e]" style={{ fontFamily: 'Manrope' }}>
                    +18% this week
                  </p>
                </div>
              </div>
            </div>

            {/* Right — dashboard mockup */}
            <div className="hidden lg:block self-end">
              <div className="relative rounded-t-2xl border border-b-0 border-slate-200 bg-white shadow-card-lg overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  <div className="ml-3 bg-white rounded border border-slate-200 px-3 py-0.5 text-xs text-slate-400 flex-1 max-w-[180px]">
                    app.maxhp.io
                  </div>
                </div>

                {/* App UI */}
                <div className="p-5 grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 flex flex-col gap-1">
                    {[
                      { label: 'Dashboard', active: true },
                      { label: 'Schedule', active: false },
                      { label: 'Clients', active: false },
                      { label: 'Invoices', active: false },
                      { label: 'Marketing', active: false },
                      { label: 'Analytics', active: false },
                    ].map(({ label, active }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${
                          active ? 'bg-[#004ac6] text-white' : 'text-slate-400'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${active ? 'bg-white' : 'bg-slate-300'}`} />
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* Main area */}
                  <div className="col-span-9 space-y-4">
                    {/* Stat row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Today's Revenue", value: '$3,420', delta: '+18%', up: true },
                        { label: 'Appointments', value: '12', delta: '4 upcoming', up: null },
                        { label: 'Invoices Out', value: '8', delta: '3 pending', up: null },
                      ].map((s) => (
                        <div key={s.label} className="bg-[#f7f9fb] rounded-xl p-3 border border-slate-100">
                          <p className="text-[10px] text-slate-400 mb-1">{s.label}</p>
                          <p className="text-base font-black text-[#191c1e]" style={{ fontFamily: 'Manrope' }}>{s.value}</p>
                          {s.up && <p className="text-[10px] font-semibold text-green-500 mt-0.5">{s.delta}</p>}
                          {s.up === null && <p className="text-[10px] text-slate-400 mt-0.5">{s.delta}</p>}
                        </div>
                      ))}
                    </div>
                    {/* Schedule list */}
                    <div className="bg-[#f7f9fb] rounded-xl p-3 border border-slate-100">
                      <p className="text-[10px] font-bold text-[#191c1e] mb-2" style={{ fontFamily: 'Manrope' }}>Today's Schedule</p>
                      <div className="space-y-2">
                        {[
                          { time: '9:00 AM', name: 'Marcus Johnson', svc: 'Full Detail — Tesla Model 3', status: 'In Progress', color: 'text-blue-600 bg-blue-50' },
                          { time: '11:30 AM', name: 'Sarah Chen', svc: 'Ceramic Coating — BMW X5', status: 'Confirmed', color: 'text-green-600 bg-green-50' },
                          { time: '2:00 PM', name: 'Derek Williams', svc: 'Paint Correction — F-150', status: 'Upcoming', color: 'text-slate-500 bg-slate-100' },
                        ].map((a) => (
                          <div key={a.time} className="flex items-center justify-between text-[10px] py-1.5 border-b border-slate-100 last:border-0">
                            <span className="text-slate-400 w-14 shrink-0">{a.time}</span>
                            <div className="flex-1 px-2">
                              <p className="font-semibold text-[#191c1e]">{a.name}</p>
                              <p className="text-slate-400">{a.svc}</p>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full font-medium text-[9px] ${a.color}`}>{a.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#004ac6] tracking-widest uppercase mb-3">Core Components</p>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight text-[#191c1e] max-w-2xl"
              style={{ fontFamily: 'Manrope' }}
            >
              Integrated tools designed to remove friction from your workflow.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bentoCards.map((card) => (
              <div
                key={card.title}
                className={`${card.span} ${
                  card.accent
                    ? `${card.accent} text-white`
                    : 'bg-[#f7f9fb] border border-slate-100'
                } rounded-2xl p-7 flex flex-col gap-4`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.accent ? 'bg-white/20' : 'bg-white border border-slate-100 shadow-card text-[#004ac6]'}`}>
                  {card.icon}
                </div>
                <div>
                  <h3
                    className={`text-lg font-black mb-2 ${card.accent ? 'text-white' : 'text-[#191c1e]'}`}
                    style={{ fontFamily: 'Manrope' }}
                  >
                    {card.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${card.accent ? 'text-white/75' : 'text-slate-500'}`}>
                    {card.body}
                  </p>
                </div>
                {card.link && (
                  <Link
                    to="/features"
                    className={`text-sm font-semibold mt-auto ${card.accent ? 'text-white' : 'text-[#004ac6]'} hover:underline`}
                  >
                    {card.link}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ──────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight text-[#191c1e] mb-3"
              style={{ fontFamily: 'Manrope' }}
            >
              Pricing Built for Growth
            </h2>
            <p className="text-slate-500 text-lg">No hidden fees. Pick the plan that fits your shop.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {pricingPreview.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-6 flex flex-col items-start gap-3 ${
                  plan.featured
                    ? 'border-2 border-[#004ac6] shadow-card-lg'
                    : 'border border-slate-100 shadow-card'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#004ac6] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <p className="text-sm font-semibold text-slate-500">{plan.name}</p>
                <p className="font-black text-3xl text-[#191c1e]" style={{ fontFamily: 'Manrope' }}>
                  {plan.price}
                  <span className="text-base font-medium text-slate-400">{plan.period}</span>
                </p>
                <ul className="w-full space-y-1.5">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-slate-500">
                      <svg className="w-3.5 h-3.5 text-[#004ac6] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.maxhp.io/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center text-sm font-semibold py-2.5 rounded-xl transition-colors mt-1 ${
                    plan.featured
                      ? 'bg-[#004ac6] text-white hover:bg-[#0038a0]'
                      : 'bg-[#f7f9fb] text-[#191c1e] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 space-y-3">
            <div>
              <Link
                to="/pricing"
                className="text-sm font-semibold text-[#004ac6] hover:underline"
              >
                See Full Pricing & Features →
              </Link>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-slate-400 font-medium">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              30-Day Money-Back Guarantee — Try risk-free
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight text-[#191c1e] mb-5"
            style={{ fontFamily: 'Manrope' }}
          >
            Your Shop Runs Better{' '}
            <span className="italic text-[#004ac6]">With MAX HP.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-9">
            Join automotive businesses already saving hours every week. No credit card required to get started.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://app.maxhp.io/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#004ac6] hover:bg-[#0038a0] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors shadow-card"
            >
              Start Your Free Trial
            </a>
            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#191c1e] hover:border-slate-300 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors shadow-card"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
