import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDemoModal } from '../context/DemoModalContext'

const plans = [
  {
    name: 'Starter',
    monthly: 199,
    yearly: 179,
    tagline: 'Everything you need to run your shop',
    features: [
      '5 Team Members',
      'Unlimited Appointments',
      'Unlimited Clients',
      'Client & Vehicle CRM',
      'Invoicing & Estimates',
      'Online Booking',
      'Calendar Sync',
      'Email & SMS Marketing',
      'Automated Reminders & Google Review Requests',
      'Analytics',
    ],
    cta: 'Start Free Trial',
    href: 'https://app.maxhp.io/signup?plan=starter',
    featured: false,
  },
  {
    name: 'Pro',
    monthly: 299,
    yearly: 269,
    tagline: 'For growing teams that need more power',
    features: [
      'Everything in Starter',
      'Unlimited Team Members',
      'Higher Email & SMS Marketing Limits',
      'Upload Lead Lists for Blast Campaigns',
      'Priority Customer Support',
    ],
    cta: 'Start Free Trial',
    href: 'https://app.maxhp.io/signup?plan=pro',
    featured: false,
  },
  {
    name: 'Pro + AI',
    monthly: 799,
    yearly: 719,
    tagline: 'Pro plan with AI Receptionist included',
    features: [
      'Everything in Pro',
      'Unlimited Email & SMS Marketing',
      'AI Voice Receptionist (answers calls & books appointments 24/7)',
      'Custom Integrations',
      'Request New Features',
    ],
    cta: 'Start Free Trial',
    href: 'https://app.maxhp.io/signup?plan=pro-ai',
    featured: true,
    badge: 'Most Popular',
  },
]

const tableRows: [string, string, string, string][] = [
  ['Team Members', 'Up to 5', 'Unlimited', 'Unlimited'],
  ['Appointments', 'Unlimited', 'Unlimited', 'Unlimited'],
  ['Clients', 'Unlimited', 'Unlimited', 'Unlimited'],
  ['Client & Vehicle CRM', '✓', '✓', '✓'],
  ['Invoicing & Estimates', '✓', '✓', '✓'],
  ['Online Booking', '✓', '✓', '✓'],
  ['Analytics', '✓', '✓', '✓'],
  ['Email & SMS Marketing', 'Standard limits', 'Higher limits', 'Unlimited'],
  ['Blast Lead List Campaigns', '—', '✓', '✓'],
  ['Automated Reminders', '✓', '✓', '✓'],
  ['Google Review Automation', '✓', '✓', '✓'],
  ['Priority Support', '—', '✓', '✓'],
  ['AI Voice Receptionist', '—', '—', '✓'],
  ['Custom Integrations', '—', '—', '✓'],
]

const trustCards = [
  {
    title: '30-Day Money Back',
    body: "Not satisfied? We'll refund every penny. No questions, no friction.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise-Grade Security',
    body: 'Your data is protected with AES-256 encryption at rest and TLS in transit, powered by Supabase and industry-standard security protocols.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: 'Always-On Support',
    body: 'Connect with our team any time. We keep your shop running.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
]

const faqs: [string, string][] = [
  ['Can I upgrade my plan mid-cycle?', "Yes, you can upgrade at any time. We'll prorate the difference for the remainder of your billing cycle."],
  ['What counts as a Team Member?', 'A team member is any unique staff login within your account. Owner accounts are included in the count.'],
  ['How secure is my customer data?', 'We use row-level security and AES-256 encryption to ensure your data is fully isolated and protected.'],
  ['Does the AI Receptionist work for any type of automotive business?', 'Yes. The AI Receptionist is built to handle calls for detailers, tint shops, mechanics, tire shops, and more — it learns your services and books directly into your calendar.'],
  ['Is there a free trial?', 'Yes. Every plan includes a 30-day free trial. A credit card is required to start — you won\'t be charged until your trial ends, and you can cancel anytime before then.'],
]

function Check({ dim }: { dim?: boolean }) {
  if (dim) return <span className="text-slate-300 font-bold">—</span>
  return (
    <svg className="w-4 h-4 text-[#004ac6] mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  const openDemo = useDemoModal()
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Helmet>
        <title>Pricing | MAX HP — Starter $199, Pro $299, Pro + AI $799/mo</title>
        <meta name="description" content="Simple, transparent pricing for automotive service businesses. 30-day free trial included. No hidden fees." />
        <meta property="og:title" content="Pricing | MAX HP — Starter $199, Pro $299, Pro + AI $799/mo" />
        <meta property="og:description" content="Simple, transparent pricing for automotive service businesses. 30-day free trial included. No hidden fees." />
        <meta property="og:url" content="https://maxhp.io/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://maxhp.io/logo.svg" />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#f7f9fb] pt-16 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-5xl lg:text-6xl font-black tracking-tight text-[#191c1e] mb-4"
            style={{ fontFamily: 'Manrope' }}
          >
            Simple Pricing.{' '}
            <span className="italic text-[#004ac6]">Serious Results.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-8">
            Pick the plan that fits your team. Upgrade anytime as you grow.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 bg-white border border-slate-200 rounded-full p-1 shadow-card mb-5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual ? 'bg-[#191c1e] text-white shadow-card' : 'text-slate-500 hover:text-[#191c1e]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? 'bg-[#191c1e] text-white shadow-card' : 'text-slate-500 hover:text-[#191c1e]'
              }`}
            >
              Yearly
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Save 10%</span>
            </button>
          </div>

          {/* Guarantee banner */}
          <p className="text-sm text-slate-400 font-medium">
            30-Day Money-Back Guarantee — Try risk-free
          </p>
        </div>
      </section>

      {/* ── PLAN CARDS ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.featured
                    ? 'border-2 border-[#004ac6] shadow-card-lg bg-white'
                    : 'border border-slate-100 shadow-card bg-white'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#004ac6] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-card whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">{plan.name}</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span
                      className="text-5xl font-black text-[#191c1e]"
                      style={{ fontFamily: 'Manrope' }}
                    >
                      ${annual ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-base text-slate-400 pb-1.5">/mo</span>
                  </div>
                  {annual && (
                    <p className="text-xs text-slate-400">Billed annually</p>
                  )}
                  <p className="text-sm text-slate-500 mt-2">{plan.tagline}</p>
                </div>

                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#191c1e]">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? 'text-[#004ac6]' : 'text-[#004ac6]'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-bold text-sm py-3.5 rounded-xl transition-colors ${
                    plan.featured
                      ? 'bg-[#004ac6] text-white hover:bg-[#0038a0]'
                      : 'bg-[#f7f9fb] text-[#191c1e] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {plan.cta}
                </a>
                <p className="text-sm text-gray-400 text-center mt-2">
                  30-day free trial · Card required · Cancel anytime
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="py-16 bg-[#f7f9fb] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-black tracking-tight text-[#191c1e] text-center mb-10"
            style={{ fontFamily: 'Manrope' }}
          >
            Compare Plans
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-4 px-6 text-slate-500 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-[#191c1e]">Starter</th>
                  <th className="text-center py-4 px-4 font-bold text-[#191c1e]">Pro</th>
                  <th className="text-center py-4 px-4 font-bold text-[#004ac6]">Pro + AI</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([feat, s, p, ai], i) => {
                  const renderCell = (val: string) => {
                    if (val === '✓') return <Check />
                    if (val === '—') return <Check dim />
                    return <span className="text-xs text-slate-500">{val}</span>
                  }
                  return (
                    <tr
                      key={feat}
                      className={`border-b border-slate-50 last:border-0 ${i % 2 === 0 ? '' : 'bg-slate-50/50'}`}
                    >
                      <td className="py-3.5 px-6 text-slate-600">{feat}</td>
                      <td className="text-center py-3.5 px-4">{renderCell(s)}</td>
                      <td className="text-center py-3.5 px-4">{renderCell(p)}</td>
                      <td className="text-center py-3.5 px-4">{renderCell(ai)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trustCards.map((card) => (
              <div key={card.title} className="bg-[#f7f9fb] border border-slate-100 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#004ac6]/8 text-[#004ac6] flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-black text-[#191c1e] mb-1.5" style={{ fontFamily: 'Manrope' }}>{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f7f9fb] border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-black tracking-tight text-[#191c1e] text-center mb-10"
            style={{ fontFamily: 'Manrope' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map(([q, a], i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-[#191c1e] text-sm">{q}</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                    <p className="pt-3">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE CTA ───────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-black tracking-tight text-[#191c1e] mb-3"
            style={{ fontFamily: 'Manrope' }}
          >
            Need a custom plan?
          </h2>
          <p className="text-slate-500 mb-7">
            Multi-location chains and enterprise shops get custom pricing, dedicated support, and white-glove onboarding.
          </p>
          <button
            onClick={openDemo}
            className="inline-flex items-center gap-2 bg-[#004ac6] hover:bg-[#0038a0] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors shadow-card"
          >
            Contact Sales
          </button>
        </div>
      </section>
    </>
  )
}
