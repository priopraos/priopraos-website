import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Database, Globe, CheckCircle, Sparkles, ExternalLink, BarChart3, Users, FileText, Award, Activity, ChevronDown, Building2, GraduationCap, ClipboardCheck, MapPin, X, ZoomIn, Briefcase, ShoppingCart, Network, UserCheck, Scale, BarChart2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const USE_CASES = [
  {
    id: 'health-system-operators',
    label: 'Health System Operators',
    icon: Building2,
    heading: 'Health System Operators',
    body: 'National and regional health authorities deploying temporary clinical workforces across complex geographies. PrioraOS provides the equity intelligence infrastructure to direct that workforce where it is needed most.',
    cta: { label: 'Learn More', to: '/contact' },
  },
  {
    id: 'commissioning-bodies',
    label: 'Commissioning Bodies',
    icon: MapPin,
    heading: 'Commissioning Bodies',
    body: 'Integrated care organisations, health boards, and commissioning authorities with statutory duties to reduce inequalities in access to health services. The ECE™ generates the evidence those duties require.',
    cta: { label: 'Learn More', to: '/contact' },
  },
  {
    id: 'clinicians',
    label: 'Locum and Temporary Clinicians',
    icon: Users,
    heading: 'Locum and Temporary Clinicians',
    body: 'Registered clinical professionals seeking meaningful temporary work in communities of genuine need. EquityMark™ recognises and professionally documents that contribution automatically.',
    cta: { label: 'Learn More', to: '/contact' },
  },
  {
    id: 'procurement-authorities',
    label: 'Procurement Authorities',
    icon: Shield,
    heading: 'Procurement Authorities',
    body: 'Public sector procurement bodies applying Social Value weighting to healthcare workforce contracts. The ECE™ Social Value Report is formatted for direct submission under national procurement policy frameworks.',
    cta: { label: 'Learn More', to: '/contact' },
  },
  {
    id: 'research',
    label: 'Academic and Research Partners',
    icon: GraduationCap,
    heading: 'Academic and Research Partners',
    body: 'Health equity researchers, health policy institutions, and population health academic centres. PrioraOS makes anonymised, aggregated equity-scored workforce data available for commissioned research.',
    cta: { label: 'Learn More', to: '/contact' },
  },
  {
    id: 'international',
    label: 'International Health Organisations',
    icon: Globe,
    heading: 'International Health Organisations',
    body: 'Government health agencies, multilateral health organisations, and international health system operators exploring data-driven approaches to equitable workforce distribution.',
    cta: { label: 'Learn More', to: '/contact' },
  },
];

const Home = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [efeOpen, setEfeOpen] = useState(false);
  const [emOpen, setEmOpen] = useState(false);
  const [eceOpen, setEceOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState('health-system-operators');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="bg-white">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] min-h-[620px] lg:min-h-[680px] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
          <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
            <path fill="#fff" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Now Live • Founding Cohort Open.
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Clinical Priority Infrastructure{' '}
                <span className="text-yellow-300">for Public Health Systems.</span>
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                PrioraOS is a healthcare workforce intelligence system that transforms publicly available population health statistics into equity-directed clinical workforce deployment. Currently operating in the United Kingdom's National Health Service. Designed for international public health systems.
              </p>
              <p className="text-xs font-bold tracking-widest text-yellow-300 uppercase mt-10 mb-3">
                Equity Fulfilment Engine™ — Live Priority Feed
              </p>
              {/* EFE Live Preview Image */}
              <div className="mx-auto max-w-3xl">
                <img
                  src="/7.jpeg"
                  alt="Live EFE Preview — Blackpool equity score showing IMD, SSI, PCR, and GRI dimensions"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <p className="text-center text-[10px] font-mono text-blue-200/70 mt-2 tracking-wide">
                  Powered by PrioraOS • Open Government Data • OGL v3.0
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
                <Link
                  to="/engine"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Discover the Engine
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://locumstation.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  Visit Locum Station UK
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-8 text-blue-200 text-sm">
                <span className="flex items-center gap-1.5"><Database className="w-4 h-4" /> Built on Open Government Data</span>
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Zero Patient Data</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Equity Scored Every Shift</span>
                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> Designed for Global Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 1 — THE PROBLEM ═══════════ */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />
          <div className="absolute bottom-32 -right-28 w-80 h-80 rounded-full bg-red-50/30 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full animate-pulse" />
                The Structural Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Health Inequalities and{' '}
                <span className="text-[#005EB8]">Resource Misallocation.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 text-left md:text-justify">
              <p>
                Temporary clinical workforces play a vital role in maintaining timely, continuous care across every health system. In practice, they are directed by commercial logic rather than clinical need. The easiest shifts fill first. The highest-paying postings attract the most attention. Remote communities, high-deprivation areas, and chronically understaffed practices receive what remains.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We built PrioraOS not to replace the existing market but to add what has never existed within it: a mechanism that redirects temporary clinical resource toward the communities with the greatest clinical need, by ensuring that the genuine clinical need of every community is visible, measurable, and documentable at the point of workforce deployment.
              </p>
              <blockquote className="relative pl-6 border-l-4 border-[#005EB8] rounded-r-xl py-4 pr-4">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  <strong>The highest-need communities get served first.</strong>
                </p>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — THE THREE ENGINES ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full animate-pulse" />
                Proprietary Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Three innovations.{' '}
                <span className="text-[#005EB8]">One equity system.</span>
              </h2>
              <blockquote className="mb-6 border-l-4 border-yellow-400 pl-5">
                <p className="text-lg text-gray-500 leading-relaxed italic text-left">
                  <strong>Addressing health inequality through workforce deployment is not a policy question. It is an infrastructure question.</strong>
                </p>
              </blockquote>
              <p className="text-lg text-gray-500 leading-relaxed text-left md:text-justify">
                PrioraOS provides that infrastructure through three proprietary innovations that together form a closed loop of equity accountability with no equivalent in the healthcare workforce technology market.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">

            {/* EFE — text left, image right */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6] transition-all duration-500 group-hover:h-1.5" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 transition-all duration-500">
                        <BarChart3 className="w-6 h-6 text-[#005EB8] transition-all duration-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">The Equity Fulfilment Engine™</h3>
                    </div>
                    <p className="text-xs font-semibold text-[#005EB8] uppercase tracking-wider mb-2 italic">
                      Scores every posting by independently verified community need.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                      The EFE™ is a real-time algorithmic system that ranks temporary clinical postings by actual community need. Using open government data, it evaluates deprivation severity, workforce shortage, patient access pressure, and geographic remoteness to generate a composite equity score. The result is a strictly objective ranking where the highest-need communities are always served first, grounded entirely in independently published data rather than commercial logic.
                    </p>
                    <a href="/engine#efe" className="inline-block mt-3 text-sm font-semibold text-[#005EB8] hover:text-[#003087] hover:underline transition-colors">
                      [Learn more]
                    </a>
                  </div>
                  <button
                    onClick={() => { setLightboxImage('/EFE SHIFT.png'); setLightboxAlt('Equity Fulfilment Engine — shift scoring interface'); }}
                    className="relative group/image order-last md:order-last w-full"
                  >
                    <img
                      src="/EFE SHIFT.png"
                      alt="Equity Fulfilment Engine — shift scoring interface"
                      className="w-full h-auto rounded-md cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      EFE™ Priority Feed — live equity scoring on a GP practice shift in Blackpool (Grade A: Critical Need)
                    </p>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* EquityMark — image left, text right */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2ECC71] to-[#27AE60] transition-all duration-500 group-hover:h-1.5" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-last md:order-first">
                    <button
                      onClick={() => { setLightboxImage('/Screenshot_5-6-2026_33435_.jpeg'); setLightboxAlt('EquityMark — clinician equity credential'); }}
                      className="relative group/image w-full"
                    >
                      <img
                        src="/Screenshot_5-6-2026_33435_.jpeg"
                        alt="EquityMark — clinician equity credential"
                        className="rounded-xl w-full h-auto border border-gray-100 cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        Sample EquityMark™ Contribution Report — automatically generated from confirmed platform activity
                      </p>
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Sample reports available for download at <a href="https://locumstation.co.uk/our-innovations" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">locumstation.co.uk/our-innovations</a>
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 transition-all duration-500">
                        <Award className="w-6 h-6 text-emerald-600 transition-all duration-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">EquityMark™</h3>
                    </div>
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2 italic">
                      The first professional equity credential in healthcare.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                      EquityMark™ is the first professional recognition and credentialing system in the healthcare workforce market built around equity of deployment rather than commercial performance. Every confirmed engagement in a high-need community automatically contributes points toward a portable professional credential structured for professional revalidation, appraisal frameworks, and continuing professional development records. Across four progression levels, it transforms equity-directed clinical practice into independently verified career distinction, giving every clinician a documented record of the communities they chose to serve.
                    </p>
                    <a href="/engine#equitymark" className="inline-block mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline transition-colors">
                      [Learn more]
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ECE — text left, image right */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#ED8B00] to-[#D4820A] transition-all duration-500 group-hover:h-1.5" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 transition-all duration-500">
                        <FileText className="w-6 h-6 text-amber-600 transition-all duration-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">The Equity Compliance Engine™</h3>
                    </div>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 italic">
                      Records equity-directed activity as auditable evidence.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                      The ECE™ translates EFE™ outputs into an independently sourced record of a provider organisation's equity-directed workforce activity. Every confirmed engagement is automatically logged with its community need assessment, equity grade, and any national health priority flags. Structured monthly reports are generated automatically in formats aligned with active statutory and regulatory obligations, ensuring that every provider's commitment to equitable healthcare access is continuously documented, independently verifiable, and audit-ready without any manual assembly.
                    </p>
                    <a href="/engine#ece" className="inline-block mt-3 text-sm font-semibold text-amber-600 hover:text-amber-800 hover:underline transition-colors">
                      [Learn more]
                    </a>
                  </div>
                  <div className="order-last md:order-last">
                    <button
                      onClick={() => { setLightboxImage('/Screenshot_5-6-2026_32943_.jpeg'); setLightboxAlt('Equity Compliance Engine — ECE compliance report'); }}
                      className="relative group/image w-full"
                    >
                      <img
                        src="/Screenshot_5-6-2026_32943_.jpeg"
                        alt="Equity Compliance Engine — ECE compliance report"
                        className="rounded-xl w-full h-auto border border-gray-100 cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        Sample ECE™ Full Activity Report — formatted for CQC inspection and PPN 06/20 submission
                      </p>
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Sample reports available for download at <a href="https://locumstation.co.uk/our-innovations" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">locumstation.co.uk/our-innovations</a>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — HOW IT WORKS ═══════════ */}
      <section id="how-it-works" className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full animate-pulse" />
                The Operational Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                How It <span className="text-[#005EB8]">Works.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                The platform transforms raw population health statistics into equity-directed workforce decisions grounded in independently verifiable open government data.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">

            {/* Step 01 — The Input: text left, image right */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6] transition-all duration-500 group-hover:h-1.5" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 transition-all duration-500">
                        <Activity className="w-6 h-6 text-[#005EB8] transition-all duration-500" />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Step 01</span>
                        <h3 className="text-xl font-bold text-gray-900">The Input</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                      A healthcare provider submits a request for clinical coverage. The EFE™ algorithm instantly cross-references the location and clinical specialty against national health, deprivation, and workforce datasets. It calculates a composite Clinical Need Score and assigns the posting an equity grade from A (Critical Need) to D (Lower Need). The grade reflects the genuine clinical need of the community the posting serves. Urgency, pay rate, and posting recency play no role in how the posting is ranked. Need alone determines priority.
                    </p>
                  </div>
                  <div className="order-last md:order-last w-full">
                    <button
                      type="button"
                      onClick={() => { setLightboxImage('/Screenshot%202026-06-05%20at%2004-33-32%20Locum%20Station%20Landing%20Page%20Design.png'); setLightboxAlt('Landing page design screenshot'); }}
                      className="relative group/image w-full"
                    >
                      <img
                        src="/Screenshot%202026-06-05%20at%2004-33-32%20Locum%20Station%20Landing%20Page%20Design.png"
                        alt="Landing page design screenshot"
                        className="rounded-xl w-full h-auto border border-gray-100 cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </button>
                    <p className="text-[11px] sm:text-xs text-gray-600 italic text-center mt-3 leading-relaxed px-1">
                      Provider shift posting interface — EFE™ equity grade assigned automatically on postcode entry
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 02 — The Output: image left, text right */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2ECC71] to-[#27AE60] transition-all duration-500 group-hover:h-1.5" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-last md:order-first w-full">
                    <button
                      type="button"
                      onClick={() => { setLightboxImage('/shift%20detailes%20page.png'); setLightboxAlt('Shift details page screenshot'); }}
                      className="relative group/image w-full"
                    >
                      <img
                        src="/shift%20detailes%20page.png"
                        alt="Shift details page screenshot"
                        className="rounded-xl w-full h-auto border border-gray-100 cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </button>
                    <p className="text-[11px] sm:text-xs text-gray-600 italic text-center mt-3 leading-relaxed px-1">
                      Clinician shift detail view — community need profile, four dimension scores, and Core20PLUS5 flag status displayed before application
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 transition-all duration-500">
                        <Users className="w-6 h-6 text-emerald-600 transition-all duration-500" />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Step 02</span>
                        <h3 className="text-xl font-bold text-gray-900">The Output</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                      Clinicians identify and respond to the highest-need postings first, simultaneously building their EquityMark™ credential with every confirmed engagement in a higher-need community. Healthcare providers increase the likelihood of fulfilling hard-to-fill clinical coverage and receive an automated structured compliance report from the Equity Compliance Engine™ documenting every confirmed engagement, the community it served, and the independently verified clinical need of that community.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — GLOBAL EXPANSION ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <Globe className="w-4 h-4" />
                GLOBAL DEPLOYMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Designed for Global <span className="text-[#005EB8]">Health Equity.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {/* Global Card */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6] transition-all duration-500 group-hover:h-1.5" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 transition-all duration-500 flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#005EB8] transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">International Deployment</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                    The PrioraOS framework is built for international deployment through jurisdictional data abstraction. The four scoring dimensions, deprivation, workforce shortage, patient access, and geographic remoteness, exist in every public health system. Wherever a government publishes open data measuring them, the engine can be recalibrated for that jurisdiction without reconstructing the core architecture.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                    Currently deployed in the United Kingdom. The framework's data architecture is designed to support replication in Australia, Canada, and New Zealand, each of which publishes equivalent open government health and deprivation datasets.
                  </p>
                  <a href="/global" className="inline-block mt-3 text-sm font-semibold text-[#005EB8] hover:text-[#003087] hover:underline transition-colors">
                    [Learn more]
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal delay={200}>
              <div className="text-center">
                <Link
                  to="/contact?type=international"
                  className="inline-flex items-center justify-center gap-2 bg-[#005EB8] hover:bg-[#003087] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Discuss International Partnership
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — LOCUM STATION UK ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-emerald-100">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Live UK Implementation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Locum Station <span className="text-[#005EB8]">UK.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {/* Locum Station Card */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2ECC71] to-[#27AE60] transition-all duration-500 group-hover:h-1.5" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 transition-all duration-500">
                        <Building2 className="w-6 h-6 text-emerald-600 transition-all duration-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">UK Implementation</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                        Locum Station is the trading name under which PrioraOS operates within the United Kingdom's National Health Service. It is a fully built clinical shift posting platform powered by the complete PrioraOS engine suite, where every shift posted by an NHS provider is independently scored by community clinical need before any clinician sees it.
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                        In England, the EFE™ is calibrated against the English Indices of Deprivation 2025, NHS England GP Workforce Statistics, NHS Digital patient registration data, the ONS Rural-Urban Classification, and OHID Fingertips condition prevalence data. Every shift is scored, graded, and recorded. Every clinician who works in higher-need communities builds a verified professional equity credential. Every provider receives compliance evidence aligned with the Health and Care Act 2022, the CQC Single Assessment Framework, Procurement Policy Note 06/20, and the NHS England Core20PLUS5 national health inequalities programme.
                      </p>
                      <a href="/locum-station" className="inline-block mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline transition-colors">
                        [Learn more]
                      </a>
                    </div>
                  </div>
                  <div className="order-last md:order-last w-full">
                    <button
                      type="button"
                      onClick={() => { setLightboxImage('/providers dashboard.png'); setLightboxAlt('Locum Station provider dashboard — live equity scoring, shift management, and automated ECE™ compliance reporting'); }}
                      className="relative group/image w-full"
                    >
                      <img
                        src="/providers dashboard.png"
                        alt="Locum Station provider dashboard — live equity scoring, shift management, and automated ECE™ compliance reporting"
                        className="rounded-xl w-full h-auto border border-gray-100 cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </button>
                    <p className="text-[11px] sm:text-xs text-gray-600 italic text-center mt-3 leading-relaxed px-1">
                      Locum Station provider dashboard — live equity scoring, shift management, and automated ECE™ compliance reporting
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm leading-relaxed text-left md:text-justify">
                    Locum Station is currently accepting founding cohort registrations from NHS providers and GMC-registered locum doctors. Registration for nursing and allied health professional locums is in development.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal delay={200}>
              <div className="text-center">
                <a
                  href="https://locumstation.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Visit Locum Station UK
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] py-20 lg:py-28 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-yellow-400 text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Who PrioraOS is built for
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight max-w-4xl mx-auto">
              PrioraOS is designed for institutional audiences operating at the intersection of workforce policy, health equity, and regulatory compliance.
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {[
              { id: 'health-system-operators', label: 'Health System Operators' },
              { id: 'commissioning-bodies', label: 'Commissioning and Planning Bodies' },
              { id: 'clinicians', label: 'Temporary Clinical Professionals' },
              { id: 'procurement', label: 'Procurement and Social Value Bodies' },
              { id: 'academic', label: 'Academic and Research Partners' },
              { id: 'international', label: 'International Health Organisations' },
            ].map((tab) => {
              const active = activeUseCase === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveUseCase(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    active
                      ? 'bg-yellow-400 text-[#003087] border-yellow-400 shadow-md'
                      : 'bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {activeUseCase === 'health-system-operators' && (
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                    <Network className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Health System Operators</span>
                </div>
                <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
                  National and regional health authorities deploying temporary clinical workforces across complex geographies. PrioraOS provides the equity intelligence infrastructure to direct that workforce where clinical need is greatest.
                </p>
                <div className="bg-yellow-400 border border-yellow-300 rounded-2xl p-6 shadow-lg shadow-yellow-400/20">
                  <p className="text-[#003087] text-sm leading-relaxed italic font-medium">
                    PrioraOS enables health system operators to deploy clinical resources based on verified population need rather than commercial urgency, transforming temporary workforce deployment into a measurable, documented equity intervention.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/contact?type=institutional"
                    className="inline-flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors text-sm"
                  >
                    Schedule a Technical Briefing
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeUseCase === 'commissioning-bodies' && (
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Commissioning and Planning Bodies</span>
                </div>
                <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
                  Health commissioning authorities, integrated care bodies, and planning organisations with obligations to reduce inequalities in access to health services. The ECE™ generates the independently sourced evidence those obligations require, produced automatically as a consequence of normal platform activity.
                </p>
                <div className="bg-yellow-400 border border-yellow-300 rounded-2xl p-6 shadow-lg shadow-yellow-400/20">
                  <p className="text-[#003087] text-sm leading-relaxed italic font-medium">
                    The Equity Compliance Engine™ produces structured, independently sourced documentation that satisfies equity reporting obligations and demonstrates active equity stewardship across a commissioning footprint.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/contact?type=institutional"
                    className="inline-flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors text-sm"
                  >
                    Schedule a Technical Briefing
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeUseCase === 'clinicians' && (
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Temporary Clinical Professionals</span>
                </div>
                <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
                  Registered clinical professionals seeking temporary work in communities where they are needed most. EquityMark™ recognises and professionally documents that contribution automatically, building a portable credential that evidences equity-directed practice across any jurisdiction where the platform operates.
                </p>
                <div className="bg-yellow-400 border border-yellow-300 rounded-2xl p-6 shadow-lg shadow-yellow-400/20">
                  <p className="text-[#003087] text-sm leading-relaxed italic font-medium">
                    Every confirmed engagement in a high-need community builds a verified equity credential: an independently verifiable professional record that documents contribution to reducing health inequality, structured for revalidation and continuing professional development frameworks.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://locumstation.co.uk/clinician-signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors text-sm"
                  >
                    Join as a Clinician
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeUseCase === 'procurement' && (
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Procurement and Social Value Bodies</span>
                </div>
                <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
                  Public sector procurement bodies and social value assessment authorities applying equity and social value weighting to healthcare workforce contracts. The ECE™ Social Value Report is formatted for direct submission under national procurement policy frameworks, with full data provenance from independently published government sources.
                </p>
                <div className="bg-yellow-400 border border-yellow-300 rounded-2xl p-6 shadow-lg shadow-yellow-400/20">
                  <p className="text-[#003087] text-sm leading-relaxed italic font-medium">
                    PrioraOS generates procurement-ready documentation that quantifies Social Value contribution with independently verifiable evidence, enabling compliance without additional administrative burden.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/contact?type=institutional"
                    className="inline-flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors text-sm"
                  >
                    Schedule a Technical Briefing
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeUseCase === 'academic' && (
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                    <BarChart2 className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Academic and Research Partners</span>
                </div>
                <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
                  Health equity researchers, health policy institutions, and population health academic centres. PrioraOS provides access to anonymised, aggregated equity-scored workforce data to support collaborative research linking deployment patterns to population health outcomes.
                </p>
                <div className="bg-yellow-400 border border-yellow-300 rounded-2xl p-6 shadow-lg shadow-yellow-400/20">
                  <p className="text-[#003087] text-sm leading-relaxed italic font-medium">
                    A continuously updated dataset linking workforce deployment decisions to independently verified population health data, providing researchers with an empirical foundation for health equity analysis that has not previously existed.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/contact?type=research"
                    className="inline-flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors text-sm"
                  >
                    Discuss Research Collaboration
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeUseCase === 'international' && (
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">International Health Organisations</span>
                </div>
                <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
                  Government health agencies, multilateral health organisations, and international health system operators with an interest in data-driven approaches to equitable clinical workforce distribution. The PrioraOS framework is designed for recalibration to any jurisdiction with equivalent open government data infrastructure.
                </p>
                <div className="bg-yellow-400 border border-yellow-300 rounded-2xl p-6 shadow-lg shadow-yellow-400/20">
                  <p className="text-[#003087] text-sm leading-relaxed italic font-medium">
                    PrioraOS is ready for international deployment wherever governments publish open data measuring population health need. The core algorithmic logic transfers without reconstruction. Only the data inputs change.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/global"
                    className="inline-flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors text-sm"
                  >
                    Discuss International Deployment
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={lightboxImage}
            alt={lightboxAlt}
            className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
