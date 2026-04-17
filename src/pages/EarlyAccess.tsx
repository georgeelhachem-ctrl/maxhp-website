import { Helmet } from 'react-helmet-async'

export default function EarlyAccess() {
  return (
    <>
      <Helmet>
        <title>Early Access | MAX HP</title>
        <meta name="description" content="Join the first wave of automotive service businesses on MAX HP. Get personally onboarded by our team — free 30-day trial, no credit card required." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen overflow-visible">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="bg-[#f7f9fb] pt-12 pb-12 border-b border-slate-100 overflow-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 mb-6 shadow-card">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004ac6]" />
              <span className="text-xs font-semibold text-[#004ac6] tracking-wide">Limited Early Access</span>
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#191c1e] mb-5 max-w-3xl"
              style={{ fontFamily: 'Manrope' }}
            >
              Get Personally Onboarded by the{' '}
              <span className="italic text-[#004ac6]">MAX HP Team.</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-500 max-w-2xl">
              We're personally onboarding our first wave of automotive service businesses. Fill out the form below and we'll reach out within 24 hours to schedule your free walkthrough.
            </p>
          </div>
        </section>

        {/* ── FORM SECTION ─────────────────────────────────────────── */}
        <section className="py-12 sm:py-20 bg-white overflow-visible">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* HubSpot embed */}
            <div className="bg-[#f7f9fb] border border-slate-100 rounded-2xl p-4 sm:p-6 shadow-card mb-10 overflow-visible">
              <iframe
                src="https://42dsfn.share-na2.hsforms.com/2_2JWBzZ4RreDjfzqNl1SQw"
                width="100%"
                height="800"
                frameBorder="0"
                title="Early Access Application"
                className="rounded-xl w-full sm:hidden"
              />
              <iframe
                src="https://42dsfn.share-na2.hsforms.com/2_2JWBzZ4RreDjfzqNl1SQw"
                width="100%"
                height="600"
                frameBorder="0"
                title="Early Access Application"
                className="rounded-xl w-full hidden sm:block"
              />
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 00-4 0v2M12 12v4" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                    </svg>
                  ),
                  label: 'Free 30-day trial',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  ),
                  label: 'Personal onboarding included',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  ),
                  label: 'No credit card required',
                },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-500">
                  <span className="text-[#004ac6]">{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
