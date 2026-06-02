import type { ReactNode } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const LAST_UPDATED = 'May 2026';

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-bold tracking-[0.2em] uppercase mb-4">PrioraOS Ltd</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Privacy <span className="text-yellow-300">Policy</span>
          </h1>
          <p className="text-blue-200 text-sm mt-6">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-600 leading-relaxed space-y-12 text-base">
              <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-6 sm:p-8 space-y-3 text-sm">
                <MetaRow label="Document:" value="Privacy Policy — prioraos.com" />
                <MetaRow label="Version:" value="1.0 — Pre-Launch" />
                <MetaRow label="Last Updated:" value={LAST_UPDATED} />
                <MetaRow label="Applies to:" value="prioraos.com and all subdomains" />
                <MetaRow label="Company:" value="PrioraOS Ltd" />
                <MetaRow label="Company No.:" value="14688210" />
                <MetaRow label="ICO Registration:" value="ZC159864" />
                <MetaRow label="Registered Office:" value="London, England" />
              </div>

              <p className="text-left md:text-justify">
                This Privacy Policy explains how PrioraOS Ltd collects, uses, stores, and protects personal data through prioraos.com. If you are a Locum Station provider or clinician, the Locum Station Privacy Policy at{' '}
                <a href="https://locumstation.co.uk/privacy" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline font-medium">
                  locumstation.co.uk/privacy
                </a>{' '}
                governs the processing of your platform account and activity data. This policy governs data collected through prioraos.com only.
              </p>

              <Section title="1. WHO WE ARE">
                <p className="text-left md:text-justify mb-4">
                  PrioraOS Ltd (Company No. 14688210), registered in England and Wales, is the data controller for personal data processed through prioraos.com. Our registered office is in London, England. We operate Locum Station at locumstation.co.uk.
                </p>
                <p className="text-left md:text-justify">
                  <strong className="text-gray-900">Data Protection contact:</strong>{' '}
                  <a href="mailto:contact@prioraos.com" className="text-[#005EB8] hover:underline">contact@prioraos.com</a>
                </p>
                <p className="text-left md:text-justify mt-2">
                  <strong className="text-gray-900">ICO Registration No.:</strong> ZC159864
                </p>
              </Section>

              <Section title="2. WHAT DATA WE COLLECT">
                <h4 className="text-lg font-bold text-gray-900 mb-3">2.1 — Contact Form Submissions</h4>
                <p className="text-left md:text-justify mb-3">
                  When you submit an enquiry through the contact form at prioraos.com/contact, we collect:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-left">
                  <li>Your full name</li>
                  <li>Your organisation name</li>
                  <li>Your job title or role</li>
                  <li>Your email address</li>
                  <li>The type of enquiry you selected</li>
                  <li>The content of your message</li>
                </ul>
                <p className="text-left md:text-justify mb-8">
                  We do not collect payment information, health data, national insurance numbers, or any special category personal data through this website.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">2.2 — Server Log Data</h4>
                <p className="text-left md:text-justify mb-8">
                  Our hosting provider, Microsoft Azure, automatically collects standard server log data when you visit prioraos.com. This may include your IP address, browser type and version, the pages you visit, the time and date of your visit, and the duration of your visit. This data is processed by Azure for security monitoring and performance optimisation. It is not used to identify individual visitors and is not shared with third parties for any marketing purpose.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">2.3 — Cookies</h4>
                <p className="text-left md:text-justify">
                  prioraos.com uses essential functional cookies only. These are required for the website to operate correctly. We do not use tracking cookies, advertising cookies, or third-party analytics cookies. A cookie notice appears on your first visit to the site. You may adjust your cookie preferences at any time through your browser settings. Disabling essential cookies may affect the functionality of the website.
                </p>
              </Section>

              <Section title="3. WHY WE PROCESS YOUR DATA">
                <h4 className="text-lg font-bold text-gray-900 mb-3">3.1 — Contact Form Data</h4>
                <p className="text-left md:text-justify mb-4">
                  We process contact form submissions to respond to your enquiry, to maintain a record of institutional correspondence, and to follow up on expressed interest in institutional partnership, investment, or research collaboration.
                </p>
                <p className="text-left md:text-justify mb-8">
                  <strong className="text-gray-900">Legal basis:</strong> Legitimate interests (Article 6(1)(f) UK GDPR). Our legitimate interest is in managing business relationships and responding to institutional enquiries about our products and services. This processing is necessary for the purpose and does not override your rights and interests.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">3.2 — Server Log Data</h4>
                <p className="text-left md:text-justify mb-4">
                  We process server log data for website security monitoring, performance optimisation, and the detection and prevention of malicious activity.
                </p>
                <p className="text-left md:text-justify mb-8">
                  <strong className="text-gray-900">Legal basis:</strong> Legitimate interests (Article 6(1)(f) UK GDPR). Our legitimate interest is in maintaining a secure and functional website.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">3.3 — Automated Decision-Making</h4>
                <p className="text-left md:text-justify">
                  prioraos.com does not engage in automated decision-making or profiling that produces legal or similarly significant effects on individuals. The Equity Fulfilment Engine™ described on this website operates within the Locum Station service at locumstation.co.uk and is addressed in the Locum Station Privacy Policy.
                </p>
              </Section>

              <Section title="4. HOW LONG WE KEEP YOUR DATA">
                <p className="text-left md:text-justify mb-3">
                  We retain personal data only for as long as is necessary for the purpose for which it was collected:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong className="text-gray-900">Contact form submissions:</strong> retained for three years from the date of submission, after which they are permanently deleted unless an ongoing business relationship has been established, in which case data is retained for the duration of that relationship plus two years.</li>
                  <li><strong className="text-gray-900">Server log data:</strong> retained for 90 days and then automatically deleted.</li>
                  <li><strong className="text-gray-900">Cookie data:</strong> session cookies expire when you close your browser. Persistent functional cookies expire after 12 months.</li>
                </ul>
                <p className="text-left md:text-justify">
                  Where we are required by law to retain data for a longer period, we will do so. In all other cases, we apply the minimum retention period necessary for the legitimate purpose.
                </p>
              </Section>

              <Section title="5. WHO WE SHARE YOUR DATA WITH">
                <p className="text-left md:text-justify mb-4">
                  We do not sell your personal data. We do not share your personal data with third parties for marketing purposes. We share data only with the following categories of processor, each acting under a written data processing agreement:
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">5.1 — Formspree (or equivalent form handling service)</h4>
                <p className="text-left md:text-justify mb-8">
                  We use a form handling service to receive contact form submissions. This service acts as a data processor on our behalf, processing form submission data only for the purpose of delivering it to our email inbox. The service does not retain your data beyond this delivery function.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">5.2 — Microsoft Azure</h4>
                <p className="text-left md:text-justify mb-8">
                  prioraos.com is hosted on Microsoft Azure (UK South region). Azure processes server log data as described in Section 2.2. Microsoft&apos;s data processing is subject to the Microsoft Data Protection Addendum and is governed by UK GDPR standard contractual clauses. Azure does not use your data for any purpose other than providing the hosting service.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">5.3 — Microsoft Azure Communication Services</h4>
                <p className="text-left md:text-justify mb-8">
                  We use Microsoft Azure Communication Services to send email responses to contact form enquiries. Azure Communication Services processes your email address and message content only for the purpose of delivering the email. This processing is subject to the Microsoft Data Protection Addendum.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">5.4 — Legal Disclosure</h4>
                <p className="text-left md:text-justify">
                  We may disclose personal data to law enforcement, regulatory authorities, or other public bodies where we are legally required to do so. We will notify you of any such disclosure unless we are legally prohibited from doing so.
                </p>
              </Section>

              <Section title="6. YOUR RIGHTS">
                <p className="text-left md:text-justify mb-3">
                  Under the UK General Data Protection Regulation and the Data Protection Act 2018, you have the following rights in relation to your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-left">
                  <li><strong className="text-gray-900">Right of access:</strong> to request a copy of the personal data we hold about you.</li>
                  <li><strong className="text-gray-900">Right to rectification:</strong> to request correction of inaccurate or incomplete personal data.</li>
                  <li><strong className="text-gray-900">Right to erasure:</strong> to request deletion of your personal data where there is no compelling reason for us to continue processing it.</li>
                  <li><strong className="text-gray-900">Right to restriction:</strong> to request that we restrict the processing of your personal data in certain circumstances.</li>
                  <li><strong className="text-gray-900">Right to data portability:</strong> to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                  <li><strong className="text-gray-900">Right to object:</strong> to object to processing based on legitimate interests.</li>
                  <li><strong className="text-gray-900">Right to withdraw consent:</strong> where processing is based on consent, to withdraw that consent at any time without affecting the lawfulness of processing before withdrawal.</li>
                </ul>
                <p className="text-left md:text-justify mb-4">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:contact@prioraos.com" className="text-[#005EB8] hover:underline">contact@prioraos.com</a>
                  . We will respond within one calendar month of receiving your request. If your request is complex or numerous, we may extend this period by a further two months and will notify you accordingly.
                </p>
                <p className="text-left md:text-justify">
                  You also have the right to lodge a complaint with the Information Commissioner&apos;s Office if you believe we have not handled your personal data in accordance with applicable law. The ICO can be contacted at{' '}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">ico.org.uk</a>{' '}
                  or by telephone on{' '}
                  <a href="tel:03031231113" className="text-[#005EB8] hover:underline">0303 123 1113</a>.
                </p>
              </Section>

              <Section title="7. INTERNATIONAL TRANSFERS">
                <p className="text-left md:text-justify">
                  Your personal data is processed and stored within the United Kingdom and the European Economic Area. We do not transfer personal data to countries outside these jurisdictions. Microsoft Azure operates our hosting services from UK South data centres, ensuring your data does not leave the United Kingdom.
                </p>
              </Section>

              <Section title="8. DATA SECURITY">
                <p className="text-left md:text-justify">
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or damage. These measures include encrypted data transmission (HTTPS), access controls, and regular security reviews. No method of electronic transmission or storage is completely secure. While we take all reasonable steps to protect your data, we cannot guarantee absolute security.
                </p>
              </Section>

              <Section title="9. CHILDREN'S DATA">
                <p className="text-left md:text-justify">
                  prioraos.com is an institutional website intended for healthcare professionals, health system administrators, researchers, and investors. It is not directed at children under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us at{' '}
                  <a href="mailto:contact@prioraos.com" className="text-[#005EB8] hover:underline">contact@prioraos.com</a>{' '}
                  and we will delete it immediately.
                </p>
              </Section>

              <Section title="10. CHANGES TO THIS POLICY">
                <p className="text-left md:text-justify">
                  We may update this Privacy Policy from time to time to reflect changes in our data processing activities, applicable law, or regulatory guidance. The date at the top of this document shows when it was last updated. Where changes are material, we will take reasonable steps to inform you, which may include a notice on the website. Your continued use of prioraos.com after any change constitutes acceptance of the updated policy.
                </p>
              </Section>

              <Section title="11. CONTACT">
                <p className="text-left md:text-justify mb-3">
                  For any questions about this Privacy Policy, to exercise your rights, or to raise a concern about our data processing, contact us at:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-left">
                  <li><strong className="text-gray-900">Email:</strong>{' '}
                    <a href="mailto:contact@prioraos.com" className="text-[#005EB8] hover:underline">contact@prioraos.com</a>
                  </li>
                  <li><strong className="text-gray-900">Company:</strong> PrioraOS Ltd</li>
                  <li><strong className="text-gray-900">Company No.:</strong> 14688210</li>
                  <li><strong className="text-gray-900">Registered Office:</strong> London, England</li>
                </ul>
              </Section>

              <div className="pt-8 border-t border-gray-200 text-sm text-gray-500 text-center leading-relaxed">
                <p>
                  PrioraOS Ltd • Registered in England and Wales • Company No. 14688210 • © 2026 PrioraOS Ltd
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 border-b border-gray-200/80 last:border-0 pb-2 last:pb-0">
      <dt className="text-gray-500 font-medium shrink-0 sm:w-40">{label}</dt>
      <dd className="text-gray-900">{value}</dd>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}

export default Privacy;
