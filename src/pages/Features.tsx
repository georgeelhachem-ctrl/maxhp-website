import { Helmet } from 'react-helmet-async'
import { useDemoModal } from '../context/DemoModalContext'

const modules = [
  {
    id: 'dashboard',
    tag: 'Dashboard & Analytics',
    headline: 'See Your Whole Business at a Glance',
    body: "Your command center. Track today's appointments, daily revenue, average job value, repeat customers, and employee clock-in status — updated in real time. Switch between daily, weekly, monthly, and yearly views to spot trends and plan ahead.",
    bullets: [
      'Live revenue and appointment metrics',
      'Employee status and time tracking',
      'Daily, weekly, monthly, and yearly views',
      'Cancellation rate and completion tracking',
    ],
  },
  {
    id: 'scheduling',
    tag: 'Smart Scheduling',
    headline: 'Book, Manage, and Never Double-Book Again',
    body: 'Your interactive calendar keeps every appointment organized. Add new bookings in seconds, view your full week at a glance, and filter by employee or service type. Calendar and list views included.',
    bullets: [
      'Weekly calendar grid with time slots',
      'Filter by employee or service type',
      'Calendar and list view toggle',
      'Real-time sync across your team',
    ],
  },
  {
    id: 'crm',
    tag: 'Client & Vehicle CRM',
    headline: 'Every Client. Every Vehicle. Every Detail.',
    body: "Build detailed profiles for every client — including their vehicle info, contact details, and full appointment history. Search, filter, and manage your entire client database from one screen. Schedule follow-ups and stay connected without the manual work.",
    bullets: [
      'Full client profiles with contact and vehicle info',
      'Complete appointment history per client',
      'Multiple vehicles per client supported',
      'Search and filter your entire database',
      'One-click appointment booking from client profile',
    ],
  },
  {
    id: 'invoices',
    tag: 'Invoices & Estimates',
    headline: 'Get Paid Faster with Professional Invoicing',
    body: 'Create and send professional invoices and estimates in seconds. Track what\'s paid, what\'s pending, and your overall collection rate at a glance. Send invoices digitally and collect payment before the job leaves your shop.',
    bullets: [
      'Create invoices and estimates instantly',
      'Track paid, pending, and voided invoices',
      'Monitor total revenue and collection rate',
      'Download and send PDFs directly',
      'Full invoice history with search',
    ],
  },
  {
    id: 'employees',
    tag: 'Employee Management',
    headline: 'Manage Your Team and Track Payroll in One Place',
    body: 'Invite team members and manage your entire staff from a single dashboard. Track active employees, monitor hours worked over any time period, and generate payroll reports — all without leaving MAX HP.',
    bullets: [
      'Invite and manage unlimited team members',
      'Track active vs. clocked-out employees',
      'Time tracking with clock-in/clock-out',
      'Two-week hour summaries and payroll reports',
      'Hourly and salaried staff support',
    ],
  },
  {
    id: 'ai',
    tag: 'AI Voice Receptionist',
    headline: 'Never Miss a Call. Never Lose a Lead.',
    body: 'Your AI receptionist automatically answers incoming calls, understands what the customer needs, and books appointments directly into your schedule — 24/7. Review every call in your dashboard with call logs, duration, and outcome status.',
    bullets: [
      'AI answers calls and books appointments automatically',
      'Full call history with duration and outcome',
      'Tracks appointments booked and revenue via AI',
      'Success rate dashboard',
      'Never lose a lead to voicemail again',
    ],
    badge: 'Pro + AI Plan',
  },
  {
    id: 'analytics',
    tag: 'Analytics',
    headline: "Know Exactly What's Working — and What's Not",
    body: "Dig into your business performance with real data. Track revenue trends, completed job counts, average revenue per job, and appointment status breakdowns. View by day, week, month, or year and filter by service type to see what's driving your growth.",
    bullets: [
      'Revenue trend charts (daily, weekly, monthly, yearly)',
      'Completed jobs and cancellation rate',
      'Average revenue per job',
      'Service revenue breakdown',
      'Business summary with key KPIs',
    ],
  },
  {
    id: 'marketing',
    tag: 'Marketing Hub',
    headline: "Stay Top of Mind Without Lifting a Finger",
    body: 'Send targeted email and SMS campaigns to your clients directly from MAX HP. Filter your audience by service history, select individual recipients, and schedule campaigns for later or send instantly. Track email and SMS usage in real time.',
    bullets: [
      'Email and SMS campaigns in one place',
      'Filter clients by service history and preferences',
      'Schedule campaigns or send immediately',
      'Custom message templates',
      'Usage tracking for email and SMS limits',
    ],
  },
  {
    id: 'notifications',
    tag: 'Automated Notifications',
    headline: "Automate the Follow-Up So You Don't Have To",
    body: "Set it and forget it. MAX HP automatically sends appointment reminders before scheduled jobs, rebooking reminders after a set number of days, booking confirmations when clients schedule, and Google review requests after job completion.",
    bullets: [
      'Appointment reminders (email and/or SMS)',
      'Rebooking reminders after 30 days',
      'Booking confirmation messages',
      'Google review request automation',
      'Fully customizable message templates and timing',
    ],
  },
]

const integrations = ['Stripe', 'Square', 'QuickBooks', 'Google Calendar', 'Gusto']

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#004ac6] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Features() {
  const openDemo = useDemoModal()

  return (
    <>
      <Helmet>
        <title>Features | MAX HP Automotive Business Management Software</title>
        <meta name="description" content="Explore MAX HP's full feature set — smart scheduling, client CRM, invoicing, employee management, marketing hub, AI receptionist, and more." />
        <meta property="og:title" content="Features | MAX HP Automotive Business Management Software" />
        <meta property="og:description" content="Explore MAX HP's full feature set — smart scheduling, client CRM, invoicing, employee management, marketing hub, AI receptionist, and more." />
        <meta property="og:url" content="https://maxhp.io/features" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://maxhp.io/logo.svg" />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#f7f9fb] pt-16 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 mb-7 shadow-card">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004ac6]" />
              <span className="text-xs font-semibold text-[#004ac6] tracking-wide">Engineered for Efficiency</span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-black tracking-tight text-[#191c1e] mb-6 leading-[1.05]"
              style={{ fontFamily: 'Manrope' }}
            >
              Every Tool Your Shop Needs.{' '}
              <span className="italic text-[#004ac6]">Zero Switching Tabs.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
              MAX HP isn't just a CRM. It's a complete operating system for automotive service businesses — built to save you time, capture more revenue, and keep your customers coming back.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-[#004ac6] hover:bg-[#0038a0] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-card"
              >
                Explore All Features →
              </a>
              <button
                onClick={openDemo}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#191c1e] hover:border-slate-300 font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-card"
              >
                Book a Demo
              </button>
            </div>

            {/* Floating stat */}
            <div className="mt-10 inline-flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-card-md">
              <div className="w-10 h-10 rounded-xl bg-[#004ac6]/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004ac6" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Efficiency Boost</p>
                <p className="text-base font-black text-[#191c1e]" style={{ fontFamily: 'Manrope' }}>+32%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE MODULES ──────────────────────────────────────── */}
      <section id="features" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 divide-y divide-slate-100">
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              id={mod.id}
              className={`py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-[#004ac6] bg-[#004ac6]/8 px-3 py-1 rounded-full">
                    {mod.tag}
                  </span>
                  {mod.badge && (
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                      {mod.badge}
                    </span>
                  )}
                </div>
                <h2
                  className="text-3xl lg:text-4xl font-black tracking-tight text-[#191c1e] mb-4"
                  style={{ fontFamily: 'Manrope' }}
                >
                  {mod.headline}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">{mod.body}</p>
                <ul className="space-y-2.5">
                  {mod.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#191c1e]">
                      <CheckIcon />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-[#f7f9fb] rounded-2xl p-8 border border-slate-100 shadow-card min-h-[240px] flex flex-col justify-center gap-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-[#191c1e]" style={{ fontFamily: 'Manrope' }}>{mod.tag}</p>
                    <span className="text-xs font-medium text-[#004ac6] bg-[#004ac6]/8 px-2.5 py-0.5 rounded-full">Active</span>
                  </div>
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 shadow-card flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-[#004ac6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2 bg-slate-200 rounded-full" style={{ width: `${80 - j * 12}%` }} />
                        <div className="h-1.5 bg-slate-100 rounded-full w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#f7f9fb] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-[#004ac6] tracking-widest uppercase mb-4">Integrations</p>
          <h2
            className="text-3xl font-black tracking-tight text-[#191c1e] mb-3"
            style={{ fontFamily: 'Manrope' }}
          >
            Universal Compatibility
          </h2>
          <p className="text-slate-500 mb-10">All your favorite tools, perfectly synced. Zero friction.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrations.map((name) => (
              <div
                key={name}
                className="bg-white border border-slate-200 rounded-xl px-6 py-3.5 text-sm font-semibold text-[#191c1e] shadow-card hover:shadow-card-md hover:border-slate-300 transition-all"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#191c1e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-black text-white tracking-tight mb-4"
            style={{ fontFamily: 'Manrope' }}
          >
            Ready to Shift into High Gear?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join automotive service businesses already using MAX HP to run smarter, faster operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://app.maxhp.io/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#004ac6] hover:bg-[#0038a0] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
            >
              Start Free Trial
            </a>
            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors border border-white/10"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
