import { Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">THE COMPANY</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 mb-12">
              <p className="text-left md:text-justify">
                PrioraOS Ltd is a software-as-a-service company providing workforce data analytics and compliance reporting tools to healthcare provider organisations, incorporated in England and Wales. It develops and operates the algorithmic infrastructure that powers Locum Station, the first equity-scored temporary clinical workforce platform in the United Kingdom.
              </p>
              <p className="text-left md:text-justify">
                The company was founded on a single observation: the temporary clinical workforce has always had the potential to function as a deliberate instrument of healthcare equity, by directing clinical resource toward the communities that need it most, generating independently verifiable evidence that those communities were reached, and recognising the clinicians who chose to serve them.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ THE MISSION ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-16 -right-28 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">THE MISSION</h2>
            <div className="bg-gradient-to-r from-[#003087] via-[#005EB8] to-[#0072CE] rounded-2xl p-10 text-center">
              <p className="text-xl lg:text-2xl text-yellow-300 font-bold mb-6">
                Directing clinical resource where it is needed most.
              </p>
              <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto text-left md:text-justify">
                Every design decision in PrioraOS, from the weighting of the EFE™ formula to the structure of the ECE™ compliance reports to the EquityMark™ progression levels, is made in service of one outcome: ensuring that communities with the greatest clinical need receive reliable access to qualified temporary clinical staff, and that the providers and clinicians who serve them have the evidence and recognition to demonstrate it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ THE HUMAN RIGHTS FOUNDATION ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">THE HUMAN RIGHTS FOUNDATION</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p className="text-left md:text-justify">
                PrioraOS aligns with the international legal and policy framework governing equality of access to healthcare. The right to health under Article 12 of the International Covenant on Economic, Social and Cultural Rights, and the commitments expressed in SDG 3 and SDG 10, establish equitable access to healthcare as a universal obligation, not a national policy choice.
              </p>
              <p className="text-left md:text-justify">
                Persistent staffing gaps in underserved communities represent a measurable failure to fulfil these commitments wherever market mechanisms govern temporary clinical workforce deployment. PrioraOS provides the infrastructure through which that failure can be addressed in practice, not only in policy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ INTELLECTUAL PROPERTY ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-16 -right-28 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">INTELLECTUAL PROPERTY</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify">
              The three proprietary innovations of PrioraOS, the Equity Fulfilment Engine™, EquityMark™, and the Equity Compliance Engine™, are protected as trade secrets of PrioraOS Ltd under an executed IP Assignment Agreement. PrioraOS and Locum Station are the subject of trademark applications at the UK Intellectual Property Office in classes 42 and 35.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
