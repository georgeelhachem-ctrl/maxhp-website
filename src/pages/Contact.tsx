import { useState } from 'react'

// ─── HUBSPOT SETUP ────────────────────────────────────────────────────────────
// 1. In HubSpot → Marketing → Forms, create a new form for your contact page.
// 2. Copy the form's GUID from the embed code and paste it below.
// Portal ID: 245867315
const HUBSPOT_FORM_GUID = 'a454f5c5-09f1-4581-aca1-827ac988144f'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    type: '',
    teamSize: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const [firstname, ...rest] = form.name.trim().split(' ')
    const lastname = rest.join(' ')

    const payload = {
      fields: [
        { name: 'firstname', value: firstname },
        { name: 'lastname', value: lastname },
        { name: 'email', value: form.email },
        { name: 'company', value: form.business },
        { name: 'jobtitle', value: form.type },
        { name: 'numemployees', value: form.teamSize },
        { name: 'message', value: form.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'Contact',
      },
    }

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/245867315/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )

      if (!res.ok) throw new Error(`HubSpot returned ${res.status}`)
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please email us directly at sales@maxhp.io.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#f7f9fb] pt-16 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 mb-7 shadow-card">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004ac6]" />
            <span className="text-xs font-semibold text-[#004ac6] tracking-wide">Get in Touch</span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-black tracking-tight text-[#191c1e] mb-5"
            style={{ fontFamily: 'Manrope' }}
          >
            Let's Talk About{' '}
            <span className="italic text-[#004ac6]">Your Shop.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-xl">
            Have questions? Want a walkthrough? Fill out the form and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-2xl font-black text-[#191c1e] mb-3"
                  style={{ fontFamily: 'Manrope' }}
                >
                  Request a Demo or Ask a Question
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Whether you're a solo detailer or running a fleet of shops, our team is ready to show you how MAX HP fits your operation.
                </p>
              </div>

              {/* Sales */}
              <div className="bg-[#f7f9fb] rounded-2xl border border-slate-100 p-6 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#004ac6]/8 text-[#004ac6] flex items-center justify-center mb-3">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#191c1e] text-sm" style={{ fontFamily: 'Manrope' }}>Sales Inquiries</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Direct access to our team for pricing and plan questions.</p>
                <a href="mailto:sales@maxhp.io" className="text-sm font-semibold text-[#004ac6] hover:underline block">
                  sales@maxhp.io
                </a>
              </div>

              {/* Support */}
              <div className="bg-[#f7f9fb] rounded-2xl border border-slate-100 p-6 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#004ac6]/8 text-[#004ac6] flex items-center justify-center mb-3">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#191c1e] text-sm" style={{ fontFamily: 'Manrope' }}>Technical Support</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Need help with your account or a feature? We've got you.</p>
                <a href="mailto:support@maxhp.io" className="text-sm font-semibold text-[#004ac6] hover:underline block">
                  support@maxhp.io
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#f7f9fb] border border-slate-100 rounded-2xl p-10 text-center shadow-card">
                  <div className="w-12 h-12 bg-[#004ac6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#004ac6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-black text-[#191c1e] mb-2"
                    style={{ fontFamily: 'Manrope' }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-sm text-slate-500">
                    We'll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#f7f9fb] border border-slate-100 rounded-2xl p-7 shadow-card space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#191c1e] mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Marcus Johnson"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#191c1e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004ac6]/30 focus:border-[#004ac6] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#191c1e] mb-1.5" htmlFor="email">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="marcus@elitedetail.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#191c1e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004ac6]/30 focus:border-[#004ac6] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191c1e] mb-1.5" htmlFor="business">
                      Business Name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Elite Detail Co."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#191c1e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004ac6]/30 focus:border-[#004ac6] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#191c1e] mb-1.5" htmlFor="type">
                        Type of Business <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={form.type}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#191c1e] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/30 focus:border-[#004ac6] transition-all"
                      >
                        <option value="">Select type…</option>
                        <option value="detailer">Detailer</option>
                        <option value="tint">Tint Shop</option>
                        <option value="mechanic">Mechanic</option>
                        <option value="tire">Tire Shop</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#191c1e] mb-1.5" htmlFor="teamSize">
                        Team Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        required
                        value={form.teamSize}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#191c1e] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/30 focus:border-[#004ac6] transition-all"
                      >
                        <option value="">Select size…</option>
                        <option value="solo">Just me</option>
                        <option value="2-5">2–5</option>
                        <option value="6-15">6–15</option>
                        <option value="16+">16+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191c1e] mb-1.5" htmlFor="message">
                      What are you looking to solve? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your shop and what you need…"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#191c1e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004ac6]/30 focus:border-[#004ac6] transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#004ac6] hover:bg-[#0038a0] disabled:opacity-60 text-white font-bold text-sm py-3.5 rounded-xl transition-colors"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
