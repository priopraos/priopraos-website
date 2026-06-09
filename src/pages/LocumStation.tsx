import { useState } from 'react';
import {
  Sparkles, ExternalLink, CheckCircle, Award, FileText, Shield,
  Database, Lock, BarChart3, Users, Building2, Activity, ZoomIn, X,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const JOB_BOARD_CAPTION =
  'Locum Station public job board — shifts sorted by EFE™ equity grade. Grade A (Critical Need) postings surface first. Accessible to all visitors without registration.';
const SHIFT_DETAIL_CAPTION =
  'Locum Station clinician shift detail view — community need profile, four dimension scores with named government data sources, Core20PLUS5 flag status, and EquityMark™ points preview displayed before the clinician applies.';

const LocumStation = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [activeView, setActiveView] = useState<'jobBoard' | 'shiftDetail'>('jobBoard');

  return (
    <div className="bg-white">

      {/* ===========
          HERO
      =========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
          <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
            <path fill="#fff" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Live · UK Deployment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">Locum </span>
            <span className="text-yellow-300">Station</span>
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-justify">
            Locum Station is the trading name under which PrioraOS operates within the United Kingdom's National Health Service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://locumstation.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Visit Locum Station
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-blue-200 text-sm">
            <span className="flex items-center gap-1.5"><Database className="w-4 h-4" /> Open Government Data Only</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> Zero Patient Data</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Every Shift Equity Scored</span>
          </div>
        </div>
      </section>

      {/* ===========
          WHAT LOCUM STATION IS
      =========== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center justify-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <BarChart3 className="w-4 h-4" />
                Platform Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                What Locum Station <span className="text-[#005EB8]">Is</span>
              </h2>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 text-left md:text-justify">
              <p>
                Locum Station is a clinical shift posting service powered by the complete PrioraOS engine suite, connecting NHS healthcare providers with registered locum clinicians. Every shift posted is independently scored by community clinical need before any clinician sees it. Every confirmed engagement generates an automated compliance record. Every clinician who works in higher-need communities builds a verified professional equity credential.
              </p>
              <p>
                It is the first temporary clinical workforce service in the UK where allocation priority is determined by independently verified clinical need rather than commercial logic.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===========
          HOW IT WORKS
      =========== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-16 -right-28 w-80 h-80 rounded-full bg-yellow-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center justify-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full animate-pulse" />
                The Operational Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                How It <span className="text-[#005EB8]">Works</span>
              </h2>
            </div>
          </ScrollReveal>

                    <ScrollReveal delay={150}>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* LEFT: Text content — both steps stacked */}
              <div className="space-y-8">
                {/* Step 01 */}
                <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6]" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                      <Activity className="w-6 h-6 text-[#005EB8]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Step 01</span>
                      <h3 className="text-xl font-bold text-gray-900">The public job board</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify">
                    Every shift posted on Locum Station appears on a publicly accessible job board at locumstation.co.uk/shifts. Shifts are sorted by EFE™ equity grade: Grade A (Critical Need) postings surface first. This sort order is not configurable. It cannot be overridden by pay rate, urgency, or posting recency.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2ECC71] to-[#27AE60]" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50">
                      <Users className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Step 02</span>
                      <h3 className="text-xl font-bold text-gray-900">Clinician shift detail</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify">
                    Registered clinicians see the full shift detail including the four-dimension community need assessment, the composite EFE™ score, any Core20PLUS5 Specialty Need Flag applied, and a preview of the EquityMark™ points the shift would award. They apply directly through the platform.
                  </p>
                </div>
              </div>

              {/* RIGHT: Image display with toggle switch */}
              <div className="sticky top-8">
                {/* Toggle switch */}
                <div className="flex items-center justify-center gap-1 bg-gray-100 rounded-xl p-1 mb-4 w-full max-w-md mx-auto">
                  <button
                    type="button"
                    onClick={() => setActiveView('jobBoard')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeView === 'jobBoard'
                        ? 'bg-white text-[#005EB8] shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="hidden sm:inline">The public job board</span>
                    <span className="sm:hidden">Job board</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView('shiftDetail')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeView === 'shiftDetail'
                        ? 'bg-white text-emerald-600 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="hidden sm:inline">Clinician shift detail</span>
                    <span className="sm:hidden">Shift detail</span>
                  </button>
                </div>

                {/* Image display */}
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-2 md:p-3">
                  {activeView === 'jobBoard' ? (
                    <button
                      type="button"
                      onClick={() => {
                        setLightboxImage('/24.png');
                        setLightboxAlt(JOB_BOARD_CAPTION);
                      }}
                      className="relative group/image w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005EB8] focus-visible:ring-offset-2 rounded-lg"
                      aria-label="Enlarge public job board screenshot"
                    >
                      <img
                        src="/24.png"
                        alt={JOB_BOARD_CAPTION}
                        className="w-full h-auto max-h-[500px] object-contain object-center bg-white rounded-lg cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                                            onClick={() => {
                        setLightboxImage('/Locum%20Station%20sd.png');
                        setLightboxAlt(SHIFT_DETAIL_CAPTION);
                      }}
                      className="relative group/image w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded-lg"
                      aria-label="Enlarge clinician shift detail screenshot"
                    >
                      <img
                        src="/Locum%20Station%20sd.png"
                        alt={SHIFT_DETAIL_CAPTION}
                        className="w-full h-auto max-h-[500px] object-contain object-center bg-white rounded-lg cursor-zoom-in transition-transform duration-300 group-hover/image:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Caption */}
                <p className="text-[11px] sm:text-xs text-gray-600 italic text-center mt-3 leading-relaxed px-1">
                  {activeView === 'jobBoard' ? JOB_BOARD_CAPTION : SHIFT_DETAIL_CAPTION}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="text-lg text-gray-600 leading-relaxed mt-12 text-left md:text-justify">
              When a shift is fulfilled, the provider confirms which clinician worked it. The clinician confirms on their side. Both confirmations trigger the Equity Compliance Engine, which generates the compliance record for that engagement. The clinician's EquityMark™ credential is updated automatically.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <p className="mt-12 text-sm text-gray-500 leading-relaxed italic text-left md:text-justify">
              The EFE™ score and equity grade assigned to each posting express an assessment of community clinical need based on independently verified open government data inputs at the time of scoring. They do not constitute a clinical assessment, a health needs analysis, or a regulatory determination. The score reflects the data inputs available at the point of posting and is updated when those data sources are refreshed by their publishers. All source data is published under Crown copyright Open Government Licence v3.0 and is independently verifiable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===========
          FIVE DATA SOURCES
      =========== */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-blue-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <Database className="w-4 h-4" />
                Open Government Data
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                The Five Data Sources in the{' '}
                <span className="text-[#005EB8]">UK Deployment</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">
                  <CheckCircle className="w-3.5 h-3.5" /> Open Government Licence v3.0
                </span>
                <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                  <Lock className="w-3.5 h-3.5" /> No patient-identifiable data accessed
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                n: '1',
                source: 'English Indices of Deprivation 2025',
                org: 'MHCLG',
                desc: 'Socioeconomic disadvantage at Lower Super Output Area level across 33,755 areas of England.',
                dim: 'Deprivation',
              },
              {
                n: '2',
                source: 'GP Workforce Statistics',
                org: 'NHS Digital',
                desc: 'Staff shortage intensity at sub-ICB level, updated monthly.',
                dim: 'Workforce Shortage',
              },
              {
                n: '3',
                source: 'Patients Registered at a GP Practice',
                org: 'NHS Digital',
                desc: 'Patient-to-clinician ratio at individual practice level, updated monthly.',
                dim: 'Patient Access',
              },
              {
                n: '4',
                source: 'Rural-Urban Classification 2021',
                org: 'ONS',
                desc: 'Geographic remoteness at Output Area level.',
                dim: 'Geographic Remoteness',
              },
              {
                n: '5',
                source: 'Fingertips Local Authority Health Profiles',
                org: 'OHID',
                desc: 'Condition prevalence data for Core20PLUS5 Specialty Need Flag application.',
                dim: 'Specialty Need',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6] group-hover:h-1.5 transition-all duration-500" />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-[#005EB8] text-xs font-extrabold border border-blue-100">
                      {item.n}
                    </span>
                    <span className="text-xs font-bold text-[#005EB8] uppercase tracking-wider">{item.org}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{item.source}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#005EB8] text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005EB8]" />
                    {item.dim}
                  </span>
                </div>
              </ScrollReveal>
            ))}
            {/* OGL note card */}
            <ScrollReveal delay={400}>
              <div className="relative bg-gradient-to-br from-[#003087] to-[#005EB8] rounded-2xl border border-blue-700 p-6 shadow-sm h-full flex flex-col justify-center">
                <Lock className="w-8 h-8 text-yellow-300 mb-4" />
                <p className="text-sm font-semibold text-white leading-relaxed">
                  No patient-identifiable data is accessed or processed at any stage of the scoring pipeline.
                </p>
                <p className="text-xs text-blue-200 mt-3">
                  All data published under OGL v3.0 — Crown Copyright.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===========
          WHAT PROVIDERS & CLINICIANS RECEIVE
      =========== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-10 -left-20 w-72 h-72 rounded-full bg-emerald-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <Users className="w-4 h-4" />
                Platform Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                What Every Party <span className="text-[#005EB8]">Receives</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Providers */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6] group-hover:h-1.5 transition-all duration-500" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                    <Building2 className="w-6 h-6 text-[#005EB8]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#005EB8]">NHS Providers</p>
                    <h3 className="text-xl font-bold text-gray-900">What Providers Receive</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm text-left md:text-justify">
                  Every shift posted is scored and graded automatically by the EFE™. Compliance evidence is generated automatically by the ECE™, aligned with the following active regulatory frameworks:
                </p>
                <div className="space-y-3">
                  {[
                    { title: 'Health and Care Act 2022', desc: 'Statutory duty to reduce inequalities in access to health services.' },
                    { title: 'CQC Single Assessment Framework', desc: 'Equity in Access quality statement under the Responsive and Well-Led categories.' },
                    { title: 'Procurement Policy Note 06/20', desc: '10% minimum Social Value weighting in NHS procurement scoring.' },
                    { title: 'NHS England Core20PLUS5', desc: 'National health inequalities programme for the most deprived 20% of the population across five clinical priority areas.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <Shield className="w-4 h-4 text-[#005EB8] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Clinicians */}
            <ScrollReveal delay={200}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 group-hover:h-1.5 transition-all duration-500" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">GMC-Registered Locums</p>
                    <h3 className="text-xl font-bold text-gray-900">What Clinicians Receive</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm text-left md:text-justify">
                  Every confirmed engagement in a higher-need community contributes to the clinician's EquityMark™ credential. The credential builds automatically, requires no manual submission, and generates a downloadable Contribution Report structured for GMC revalidation portfolios and continuing professional development records.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle, label: 'EquityMark™ credential built automatically with every shift' },
                    { icon: FileText, label: 'Downloadable Contribution Report structured for GMC revalidation' },
                    { icon: CheckCircle, label: 'Formatted for CPD portfolio submission' },
                    { icon: Award, label: 'Free to register and use the platform, permanently' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-emerald-50/60 rounded-xl p-4 border border-emerald-100">
                      <item.icon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT THE PLATFORM DOES NOT DO */}
      <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What the Platform <span className="text-[#005EB8]">Does Not Do</span>
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-left md:text-justify">
                <p>PrioraOS Ltd is not an employment business or employment agency as defined under the Employment Agencies Act 1973. It does not intermediate the contractual relationship between any provider and any clinician.</p>
                <p>Locum Station does not employ or supply clinicians, negotiate or set clinical pay rates, or process payments between providers and clinicians. Providers pay clinicians directly by BACS transfer. Locum Station is not in the payment chain at any stage.</p>
                <p>Locum Station does not access or process patient-identifiable data at any stage.</p>
                <p>The EFE™ equity grade informs how a posting is presented in the discovery interface. It does not override provider decision-making and does not guarantee that any posting will be fulfilled. Providers should not rely solely on Locum Station for urgent or time-critical clinical staffing requirements. For time-critical cover, maintain parallel channels including NHS staff banks and direct clinician contacts.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 -right-20 w-72 h-72 rounded-full bg-yellow-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-[#005EB8] rounded-full" />
                Provider Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pricing</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-br from-[#003087] to-[#005EB8] rounded-2xl p-8 shadow-xl mb-6 text-white">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-extrabold">£99</span>
                <span className="text-blue-200 mb-2 text-lg">/month</span>
              </div>
              <p className="text-blue-100 text-sm mb-6">After a 30-day free trial. No placement commissions. No urgency premiums.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                  <div className="text-3xl font-extrabold text-yellow-300 mb-1">10%</div>
                  <p className="text-sm text-blue-100">Automatic equity discount for IMD decile 1 and 2 practices</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                  <div className="text-3xl font-extrabold text-yellow-300 mb-1">20%</div>
                  <p className="text-sm text-blue-100">Automatic discount for Core20PLUS5-flagged practices</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-6 py-4 border border-emerald-100">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <p className="text-sm font-semibold text-gray-700">Clinicians register and use the platform for free, permanently.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===========
          FOUNDING COHORT
      =========== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-12 -right-24 w-80 h-80 rounded-full bg-emerald-50/50 blur-3xl" />
          <div className="absolute bottom-8 -left-20 w-72 h-72 rounded-full bg-yellow-50/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Founding Cohort — Open for Registration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">The Founding Cohort</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-justify">
              Locum Station is currently open for founding cohort registration.
            </p>
            <div className="max-w-3xl mx-auto mb-10 rounded-2xl bg-white border border-gray-100 p-3 shadow-sm">
              <img
                src="/14.png"
                alt="Locum Station founding cohort visual"
                className="w-full h-auto rounded-xl border border-gray-100"
              />
            </div>
            <div className="text-left max-w-3xl mx-auto mb-10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">For Providers:</h3>
                <p className="text-gray-600 leading-relaxed text-left md:text-justify">
                  We welcome registrations from all CQC-registered organisations delivering NHS care in England, including GP Practices, Primary Care Networks, NHS Trusts across acute, mental health, and community settings, Urgent Treatment Centres, and Out-of-Hours providers. Social enterprises and independent sector organisations holding NHS contracts are equally welcome.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">For Clinicians:</h3>
                <p className="text-gray-600 leading-relaxed text-left md:text-justify">
                  We are currently onboarding GMC-registered locum doctors across primary care, emergency medicine, acute medicine, psychiatry, and paediatrics. Registration for NMC-registered nurses and Allied Health Professionals is in active development and will open soon.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://locumstation.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Visit Locum Station — locumstation.co.uk
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://locumstation.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#005EB8] hover:bg-[#003087] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Register as a Provider
              </a>
              <a
                href="https://locumstation.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#005EB8] text-[#005EB8] hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
              >
                Join as a Clinician
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close enlarged image"
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

export default LocumStation;

