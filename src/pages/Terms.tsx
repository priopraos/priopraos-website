import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const LAST_UPDATED = 'May 2026';

const Terms = () => {
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
            Terms of <span className="text-yellow-300">Service</span>
          </h1>
          <p className="text-blue-200 text-sm mt-6">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-gray-600 leading-relaxed space-y-12 text-base">
              <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-6 sm:p-8 space-y-3 text-sm">
                <MetaRow label="Document:" value="Terms of Service — prioraos.com" />
                <MetaRow label="Version:" value="1.0 — Pre-Launch" />
                <MetaRow label="Last Updated:" value={LAST_UPDATED} />
                <MetaRow label="Applies to:" value="prioraos.com and all subdomains" />
                <MetaRow label="Company:" value="PrioraOS Ltd" />
                <MetaRow label="Company No.:" value="14688210" />
                <MetaRow label="Registered Office:" value="London, England" />
              </div>

              <p className="text-left md:text-justify">
                Please read these Terms of Service carefully before using prioraos.com. By accessing or using this website, you agree to be bound by these terms. If you do not agree, please do not use this website.
              </p>

              <Section title="1. ABOUT THIS WEBSITE">
                <p className="text-left md:text-justify mb-4">
                  prioraos.com is the institutional and investor-facing website of PrioraOS Ltd (Company No. 14688210), registered in England and Wales, with its registered office in London, England.
                </p>
                <p className="text-left md:text-justify mb-4">
                  PrioraOS Ltd is a software-as-a-service company providing workforce data analytics and compliance reporting tools to healthcare provider organisations. The company operates Locum Station, a clinical shift posting service for the United Kingdom&apos;s National Health Service, at locumstation.co.uk.
                </p>
                <p className="text-left md:text-justify">
                  This website provides information about PrioraOS Ltd, its proprietary technology, and its clinical workforce service. It does not provide clinical advice, regulatory advice, investment advice, or legal advice of any kind.
                </p>
              </Section>

              <Section title="2. USE OF THIS WEBSITE">
                <p className="text-left md:text-justify mb-3">
                  You may access and use prioraos.com for lawful purposes only. In using this website, you agree that you will not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Use the website in any way that violates applicable local, national, or international law or regulation.</li>
                  <li>Transmit unsolicited commercial communications or spam.</li>
                  <li>Attempt to gain unauthorised access to any part of the website, its servers, or any systems connected to it.</li>
                  <li>Reproduce, redistribute, or commercially exploit any content from this website without the prior written consent of PrioraOS Ltd.</li>
                  <li>Misrepresent your identity or organisational affiliation in any communication submitted through this website.</li>
                  <li>Introduce viruses, trojans, worms, logic bombs, or any other malicious or technologically harmful material.</li>
                  <li>Engage in any conduct that disrupts or interferes with the normal operation of the website or its infrastructure.</li>
                </ul>
                <p className="text-left md:text-justify">
                  We reserve the right to restrict or terminate access to this website for any user who breaches these terms without notice.
                </p>
              </Section>

              <Section title="3. INTELLECTUAL PROPERTY">
                <p className="text-left md:text-justify mb-4">
                  All content on prioraos.com, including text, design, data graphics, methodology descriptions, and the descriptions of proprietary technology, is the intellectual property of PrioraOS Ltd and is protected by copyright.
                </p>
                <p className="text-left md:text-justify mb-4">
                  The Equity Fulfilment Engine™, EquityMark™, and the Equity Compliance Engine™ are trade secrets of PrioraOS Ltd, protected under an executed IP Assignment Agreement.
                </p>
                <p className="text-left md:text-justify mb-4">
                  PrioraOS and Locum Station are the subject of trademark applications at the UK Intellectual Property Office in classes 42 and 35. Nothing on this website grants any licence to use, reproduce, or exploit any intellectual property of PrioraOS Ltd, whether by implication, estoppel, or otherwise.
                </p>
                <p className="text-left md:text-justify">
                  The open government data sources referenced on this website are published under Crown copyright Open Government Licence v3.0. PrioraOS Ltd acknowledges Crown copyright in all such data. Use of those data sources is subject to the terms of the Open Government Licence.
                </p>
              </Section>

              <Section title="4. NATURE OF THE SERVICE — IMPORTANT LEGAL STATEMENT">
                <p className="text-left md:text-justify mb-4">
                  PrioraOS Ltd is a software company. Locum Station, operated by PrioraOS Ltd at locumstation.co.uk, is a clinical shift posting service.
                </p>
                <p className="text-left md:text-justify mb-4">
                  PrioraOS Ltd is not an employment business or employment agency as defined under the Employment Agencies Act 1973 and the Conduct of Employment Agencies and Employment Businesses Regulations 2003. PrioraOS Ltd does not supply workers, intermediate the contractual relationship between healthcare providers and clinicians, set or negotiate clinical pay rates, or process payments between any parties. The contractual relationship for any clinical engagement conducted through Locum Station is solely between the relevant healthcare provider and the relevant clinician.
                </p>
                <p className="text-left md:text-justify">
                  Nothing on this website or within the Locum Station service constitutes the supply of workers, the provision of employment agency services, or the operation of an employment business.
                </p>
              </Section>

              <Section title="5. ACCURACY OF INFORMATION">
                <p className="text-left md:text-justify mb-4">
                  We take reasonable care to ensure that the information on prioraos.com is accurate and up to date at the time of publication. However, we make no representation or warranty, express or implied, as to the accuracy, completeness, or fitness for purpose of any information on this website.
                </p>
                <p className="text-left md:text-justify mb-6">
                  Descriptions of the PrioraOS engine suite and its components represent the current state of the technology and commercial deployment at the date of publication. They are subject to change as the technology develops.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">5.1 — EFE Scoring</h4>
                <p className="text-left md:text-justify mb-6">
                  The Equity Fulfilment Engine™ described on this website calculates composite community clinical need scores based on open government data published by national government bodies at the time of calculation. PrioraOS Ltd makes no warranty as to the absolute accuracy of any individual score for any specific posting. Scores reflect the data inputs available at the point of calculation and are updated when the underlying government data sources are refreshed by their publishers. EFE™ scores do not constitute a clinical assessment, a health needs analysis, or a regulatory determination.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">5.2 — International Deployment</h4>
                <p className="text-left md:text-justify">
                  The international deployment framework described on this website reflects the architectural capability of the PrioraOS infrastructure to be recalibrated for jurisdictions with equivalent open government data. Active deployment in Australia, Canada, and New Zealand has not yet been implemented. Nothing on this website constitutes a commitment to deploy in any specific jurisdiction or timeline.
                </p>
              </Section>

              <Section title="6. EXTERNAL LINKS">
                <p className="text-left md:text-justify">
                  prioraos.com may contain links to external websites including locumstation.co.uk, government data sources, academic publications, and third-party service providers. PrioraOS Ltd is not responsible for the content, accuracy, or availability of external websites. Links are provided for information only and do not constitute endorsement of the linked website or its content.
                </p>
              </Section>

              <Section title="7. LIMITATION OF LIABILITY">
                <p className="text-left md:text-justify mb-3">
                  To the maximum extent permitted by applicable law, PrioraOS Ltd excludes all liability for any direct, indirect, incidental, consequential, or punitive loss or damage arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Your use of or reliance on information contained on prioraos.com.</li>
                  <li>Any interruption, suspension, or unavailability of the website.</li>
                  <li>Any errors, inaccuracies, or omissions in the content of the website.</li>
                  <li>Any unauthorised access to or alteration of your data transmitted through the website.</li>
                  <li>Any action taken or not taken based on information obtained through this website.</li>
                </ul>
                <p className="text-left md:text-justify">
                  Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be lawfully excluded or limited.
                </p>
              </Section>

              <Section title="8. CONTACT FORM AND COMMUNICATIONS">
                <p className="text-left md:text-justify mb-4">
                  When you submit an enquiry through the contact form at prioraos.com/contact, you are inviting PrioraOS Ltd to enter into a discussion about the subject of your enquiry. Submission of the form does not create any legally binding obligation on either party. PrioraOS Ltd will use reasonable efforts to respond to enquiries within two business days but cannot guarantee response times.
                </p>
                <p className="text-left md:text-justify">
                  All communications submitted through this website are subject to our{' '}
                  <Link to="/privacy" className="text-[#005EB8] hover:underline font-medium">
                    Privacy Policy
                  </Link>{' '}
                  at prioraos.com/privacy.
                </p>
              </Section>

              <Section title="9. CHANGES TO THESE TERMS">
                <p className="text-left md:text-justify">
                  PrioraOS Ltd reserves the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to prioraos.com/terms with an updated Last Updated date. Your continued use of the website after any change constitutes your acceptance of the revised terms. Where changes are material, we will take reasonable steps to draw them to your attention through a notice on the website.
                </p>
              </Section>

              <Section title="10. GOVERNING LAW AND JURISDICTION">
                <p className="text-left md:text-justify mb-4">
                  These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any dispute arising under or in connection with these terms, including any question regarding their existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
                <p className="text-left md:text-justify">
                  If you are accessing this website from outside England and Wales, you are responsible for compliance with local laws to the extent they are applicable.
                </p>
              </Section>

              <Section title="11. GENERAL">
                <p className="text-left md:text-justify mb-4">
                  If any provision of these Terms of Service is found to be invalid, unlawful, or unenforceable, that provision shall be deemed severed from the remaining terms, which shall continue in full force and effect.
                </p>
                <p className="text-left md:text-justify mb-4">
                  Our failure to enforce any right or provision of these terms shall not constitute a waiver of that right or provision.
                </p>
                <p className="text-left md:text-justify">
                  These Terms of Service constitute the entire agreement between PrioraOS Ltd and you in relation to your use of prioraos.com and supersede all previous agreements, representations, and arrangements.
                </p>
              </Section>

              <Section title="12. CONTACT">
                <p className="text-left md:text-justify mb-3">
                  For any questions about these Terms of Service, contact us at:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-left">
                  <li>
                    <strong className="text-gray-900">Email:</strong>{' '}
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
          </ScrollReveal>
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

export default Terms;
