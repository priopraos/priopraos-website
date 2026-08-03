import { Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';

const About = () => {
  usePageMeta('About PrioraOS', 'PrioraOS Ltd builds clinical priority infrastructure for public health systems. Who we are, what we believe, and why equitable access should not depend on where you live.');
  return (
    <div className="bg-white">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            About
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            About <span className="text-yellow-300">PrioraOS.</span>
          </h1>
        </div>
      </section>

      {/* ═══════════ THE COMPANY ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full animate-pulse" />
                Institutional Profile
              </span>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 mb-12">
              <p className="text-left md:text-justify">
                PrioraOS Ltd is a healthcare infrastructure technology company incorporated in England and Wales. We build software that helps health systems direct temporary clinical workforce capacity toward communities with the greatest measurable need.
              </p>
              <p className="text-left md:text-justify">
                Our platform combines real-time equity scoring, compliance evidence generation, and clinician recognition into one operational workflow. PrioraOS powers Locum Station in the United Kingdom and is designed for adaptation across international public health systems with compatible open data sources.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ THE HUMAN RIGHTS FOUNDATION ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full animate-pulse" />
                Rights &amp; Public Policy
              </span>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p className="text-left md:text-justify">
                Equitable access to healthcare is a legal and policy duty, not an optional objective. PrioraOS aligns with the right to health under Article 12 of the International Covenant on Economic, Social and Cultural Rights, and with SDG 3 and SDG 10 commitments on health access and reduced inequalities.
              </p>
              <p className="text-left md:text-justify">
                Where temporary workforce markets leave high-need communities underserved, these obligations are difficult to evidence in practice. PrioraOS provides an operational mechanism to target workforce deployment by measurable need and to produce auditable records that demonstrate whether equity commitments were actually delivered.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ INTELLECTUAL PROPERTY ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-16 -right-28 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full animate-pulse" />
                Protected Innovation
              </span>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p className="text-left md:text-justify">
                PrioraOS includes three proprietary innovations: the Equity Fulfilment Engine™, EquityMark™, and the Equity Compliance Engine™. Their methods, scoring logic, and implementation architecture are protected as confidential intellectual property owned by PrioraOS Ltd.
              </p>
              <p className="text-left md:text-justify">
                PrioraOS and Locum Station branding is protected through trademark filings with the UK Intellectual Property Office in classes 42 and 35. Together, these protections secure both the technology core and the market identity of the platform.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ THE MISSION ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] py-20 lg:py-28 text-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-yellow-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Directing clinical resource <span className="text-yellow-300">where it is needed most.</span>
              </h2>
            </div>
            <div className="text-lg text-blue-100 leading-relaxed space-y-6 text-left md:text-justify italic">
              <p>
                Every design decision in PrioraOS, from the weighting of the EFE™ formula to the structure of the ECE™ compliance reports to the EquityMark™ progression levels, is made in service of one outcome: ensuring that communities with the greatest clinical need receive reliable access to qualified temporary clinical staff, and that the providers and clinicians who serve them have the evidence and recognition to demonstrate it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
