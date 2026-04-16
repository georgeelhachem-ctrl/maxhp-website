import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Privacy Policy | MAX HP</title>
        <meta name="description" content="Read MAX HP's Privacy Policy to understand how we collect, use, and protect your data." />
        <meta property="og:title" content="Privacy Policy | MAX HP" />
        <meta property="og:description" content="Read MAX HP's Privacy Policy to understand how we collect, use, and protect your data." />
        <meta property="og:url" content="https://maxhp.io/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://maxhp.io/logo.svg" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-[#004ac6] tracking-widest uppercase mb-4">Legal</p>
          <h1
            className="text-4xl lg:text-5xl font-black tracking-tight text-[#191c1e] mb-4"
            style={{ fontFamily: 'Manrope' }}
          >
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-base">Effective Date: April 11, 2026</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            This Privacy Policy describes how MAX HP LLC ("MAX HP", "we", "us", or "our") collects, uses, and shares information about you when you use our software platform and related services (collectively, the "Services"). By using our Services, you agree to the collection and use of information as described in this policy.
          </p>
        </div>

        <div className="space-y-12 text-[15px] leading-relaxed text-slate-600">

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-6" style={{ fontFamily: 'Manrope' }}>1. Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">1.1 Information You Provide</h3>
                <p className="mb-3">We collect information you provide directly to us when you:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>Create an account (name, email address, password)</li>
                  <li>Subscribe to a paid plan (billing name, address, payment information processed by Stripe)</li>
                  <li>Add clients to the platform (client names, contact information, vehicle information)</li>
                  <li>Use our scheduling, invoicing, or CRM features</li>
                  <li>Contact us for support or sales inquiries</li>
                  <li>Fill out forms on our website</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">1.2 Information Collected Automatically</h3>
                <p className="mb-3">When you use our Services, we automatically collect certain information, including:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>Log data (IP address, browser type, pages visited, time spent)</li>
                  <li>Device information (hardware model, operating system, unique device identifiers)</li>
                  <li>Usage data (features used, actions taken within the platform)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">1.3 Information from Third Parties</h3>
                <p className="mb-3">We may receive information about you from third-party services you connect to MAX HP, including:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>Payment processors (Stripe, Square) — transaction data</li>
                  <li>Calendar integrations (Google Calendar) — scheduling data</li>
                  <li>Accounting software (QuickBooks) — financial data</li>
                  <li>Marketing tools (Twilio, Resend) — communication logs</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information including confirmations and invoices</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send marketing communications (you may opt out at any time)</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-6" style={{ fontFamily: 'Manrope' }}>3. How We Share Your Information</h2>
            <p className="mb-6">We do not sell your personal information. We may share your information in the following circumstances:</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">3.1 Service Providers</h3>
                <p>We share information with third-party vendors and service providers that perform services on our behalf, including payment processing (Stripe), cloud infrastructure (Supabase), email delivery (Resend), SMS delivery (Twilio), and analytics. These providers are contractually obligated to protect your information.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">3.2 Business Transfers</h3>
                <p>If MAX HP is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information is transferred and becomes subject to a different privacy policy.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">3.3 Legal Requirements</h3>
                <p>We may disclose your information if we believe disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>4. Data Storage and Security</h2>
            <p className="mb-3">Your data is stored on Supabase infrastructure, which uses AES-256 encryption at rest and TLS encryption in transit. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <p>However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>5. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide you with our Services. You may request deletion of your account and associated data at any time by contacting us at <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a>. We will delete or anonymize your information within 30 days of your request, except where we are required to retain it for legal or regulatory purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-6" style={{ fontFamily: 'Manrope' }}>6. Your Rights and Choices</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.1 Account Information</h3>
                <p>You may update or correct information in your account by logging into your account settings or contacting us at <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a>.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.2 Marketing Communications</h3>
                <p>You may opt out of receiving promotional emails from us by following the instructions in those messages or by contacting us directly. Even if you opt out, we may still send you non-promotional communications such as service-related notices.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.3 Cookies</h3>
                <p>Most web browsers are set to accept cookies by default. You can usually set your browser to remove or reject cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Services.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.4 California Residents</h3>
                <p>If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your personal information, and the right to opt out of the sale of your personal information. We do not sell personal information. To exercise your rights, contact us at <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a>.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>7. Children's Privacy</h2>
            <p>Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>8. International Users</h2>
            <p>Our Services are operated in the United States. If you are located outside of the United States, please be aware that information we collect will be transferred to and processed in the United States. By using our Services, you consent to this transfer.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. Your continued use of our Services after the effective date constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="mt-4 bg-[#f7f9fb] border border-slate-100 rounded-xl p-5 text-sm space-y-1">
              <p className="font-semibold text-[#191c1e]">MAX HP LLC</p>
              <p>Email: <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a></p>
              <p>Website: <span className="text-[#004ac6]">maxhp.io</span></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
