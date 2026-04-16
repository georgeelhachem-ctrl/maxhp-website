import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Terms of Service | MAX HP</title>
        <meta name="description" content="Read MAX HP's Terms of Service governing your use of the platform, subscriptions, billing, and data." />
        <meta property="og:title" content="Terms of Service | MAX HP" />
        <meta property="og:description" content="Read MAX HP's Terms of Service governing your use of the platform, subscriptions, billing, and data." />
        <meta property="og:url" content="https://maxhp.io/terms" />
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
            Terms of Service
          </h1>
          <p className="text-slate-500 text-base">Effective Date: April 11, 2026</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of the MAX HP platform and related services ("Services") provided by MAX HP LLC ("MAX HP", "we", "us", or "our"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.
          </p>
        </div>

        <div className="space-y-12 text-[15px] leading-relaxed text-slate-600">

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>1. Acceptance of Terms</h2>
            <p>By creating an account or using our Services, you confirm that you are at least 18 years old, have the legal authority to enter into these Terms, and agree to be bound by them. If you are using our Services on behalf of a business or other legal entity, you represent that you have the authority to bind that entity to these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>2. Description of Services</h2>
            <p>MAX HP provides a cloud-based business management platform designed for automotive service businesses including auto detailers, tint shops, mechanics, tire shops, and similar businesses. The Services include scheduling, client relationship management (CRM), invoicing, employee management, marketing tools, analytics, and an AI Voice Receptionist feature (available on Pro + AI plan).</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>3. Account Registration</h2>
            <p className="mb-3">To use our Services, you must create an account. You agree to:</p>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password confidential and not share it with third parties</li>
              <li>Notify us immediately at <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a> of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-6" style={{ fontFamily: 'Manrope' }}>4. Subscription Plans and Billing</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">4.1 Plans</h3>
                <p className="mb-3">MAX HP offers the following subscription plans:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li><strong className="text-[#191c1e]">Starter — $199/month</strong> (or discounted annual rate): Up to 5 team members, core features</li>
                  <li><strong className="text-[#191c1e]">Pro — $299/month</strong> (or discounted annual rate): Unlimited team members, advanced marketing features</li>
                  <li><strong className="text-[#191c1e]">Pro + AI — $799/month</strong> (or discounted annual rate): All Pro features plus AI Voice Receptionist</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">4.2 Free Trial</h3>
                <p>Each plan includes a 30-day free trial. A valid payment method is required to start your trial. You will not be charged until your trial period ends. You may cancel at any time before the trial ends to avoid being charged.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">4.3 Billing</h3>
                <p>By providing a payment method, you authorize MAX HP to charge you on a recurring basis for your selected plan. Subscriptions automatically renew at the end of each billing period unless cancelled. All fees are in US dollars and are non-refundable except as required by law or as stated in our 30-Day Money-Back Guarantee below.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">4.4 30-Day Money-Back Guarantee</h3>
                <p>If you are not satisfied with our Services within the first 30 days of your paid subscription (not trial), you may request a full refund by contacting <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a>. This guarantee applies once per customer and does not apply to renewals after the initial billing period.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">4.5 Price Changes</h3>
                <p>We reserve the right to change our pricing at any time. We will provide at least 30 days' notice before any price change takes effect. Your continued use of the Services after a price change constitutes acceptance of the new pricing.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">4.6 Cancellation</h3>
                <p>You may cancel your subscription at any time through your account settings or by contacting <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a>. Cancellation takes effect at the end of your current billing period. You will retain access to the Services until the end of the period for which you have paid.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>5. Acceptable Use</h2>
            <p className="mb-3">You agree not to use our Services to:</p>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>Violate any applicable law or regulation</li>
              <li>Infringe the intellectual property rights of others</li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to any part of the Services or our systems</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of our software</li>
              <li>Use the Services to store or transmit malicious code</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Scrape, crawl, or otherwise extract data from the Services without our written permission</li>
              <li>Use the AI Voice Receptionist feature in a manner that violates applicable telemarketing or recording laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-6" style={{ fontFamily: 'Manrope' }}>6. Your Data</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.1 Ownership</h3>
                <p>You retain ownership of all data you input into the Services, including client information, appointments, invoices, and business data ("Your Data"). We do not claim ownership of Your Data.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.2 License to MAX HP</h3>
                <p>By using our Services, you grant MAX HP a limited, non-exclusive license to access, process, and store Your Data solely to provide the Services to you. We will not use Your Data for any other purpose without your consent.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.3 Data Backup</h3>
                <p>We maintain backups of data stored on our platform. However, you are responsible for maintaining your own backups of critical business data. MAX HP is not liable for any data loss.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#191c1e] mb-3">6.4 Data Export</h3>
                <p>Upon cancellation of your account, you may request an export of Your Data by contacting <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a> within 30 days of cancellation. After 30 days, we may delete Your Data in accordance with our data retention policy.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>7. Intellectual Property</h2>
            <p>The Services, including all software, designs, text, graphics, and other content created by MAX HP, are owned by MAX HP LLC and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Services without our written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>8. Third-Party Integrations</h2>
            <p>Our Services may integrate with third-party services including Stripe, Square, Google Calendar, QuickBooks, Gusto, Twilio, and others. Your use of these integrations is subject to the respective third-party terms of service and privacy policies. MAX HP is not responsible for the practices of third-party services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>9. AI Voice Receptionist</h2>
            <p className="mb-3">The AI Voice Receptionist feature (available on the Pro + AI plan) automatically answers phone calls and books appointments on your behalf. By using this feature, you acknowledge and agree that:</p>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>You are responsible for ensuring your use of the AI Voice Receptionist complies with all applicable laws, including call recording consent laws in your jurisdiction</li>
              <li>You will provide appropriate disclosure to callers that they may be speaking with an AI system if required by law</li>
              <li>MAX HP does not guarantee the accuracy or completeness of AI-generated responses or bookings</li>
              <li>You are solely responsible for reviewing AI-booked appointments and resolving any errors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>10. Disclaimers</h2>
            <p className="uppercase text-sm leading-relaxed">The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. MAX HP does not warrant that the Services will be uninterrupted, error-free, or completely secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>11. Limitation of Liability</h2>
            <p className="uppercase text-sm leading-relaxed">To the maximum extent permitted by applicable law, MAX HP LLC and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost revenue, lost data, or loss of goodwill, arising out of or in connection with these Terms or your use of the Services.</p>
            <p className="mt-3 uppercase text-sm leading-relaxed">In no event shall MAX HP's total liability to you for all claims arising out of or relating to these Terms or the Services exceed the amount you paid to MAX HP in the twelve (12) months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>12. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless MAX HP LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any third-party rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>13. Governing Law and Dispute Resolution</h2>
            <p className="mb-3">These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Massachusetts, without regard to its conflict of law provisions.</p>
            <p>Any dispute arising out of or relating to these Terms or the Services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction for intellectual property disputes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>14. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by email or by posting a notice on our website at least 14 days before the changes take effect. Your continued use of the Services after the effective date of the revised Terms constitutes your acceptance of the changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>15. Termination</h2>
            <p>We may suspend or terminate your access to the Services at any time, with or without cause, with or without notice. Upon termination, your right to use the Services will immediately cease. Sections 6, 7, 10, 11, 12, and 13 of these Terms shall survive termination.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>16. Entire Agreement</h2>
            <p>These Terms, together with our <a href="/privacy" className="text-[#004ac6] hover:underline">Privacy Policy</a>, constitute the entire agreement between you and MAX HP regarding your use of the Services and supersede all prior agreements and understandings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#191c1e] mb-4" style={{ fontFamily: 'Manrope' }}>17. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="mt-4 bg-[#f7f9fb] border border-slate-100 rounded-xl p-5 text-sm space-y-1">
              <p className="font-semibold text-[#191c1e]">MAX HP LLC</p>
              <p>Email: <a href="mailto:support@maxhp.io" className="text-[#004ac6] hover:underline">support@maxhp.io</a></p>
              <p>Website: <span className="text-[#004ac6]">maxhp.io</span></p>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-100 text-sm text-slate-400">
            © 2026 MAX HP LLC. All rights reserved. Last updated: April 11, 2026
          </div>

        </div>
      </div>
    </div>
  )
}
