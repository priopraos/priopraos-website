import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Award, FileText, Shield, Download, Sparkles, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';


const TheEngine = () => {
  usePageMeta('The Engine — How PrioraOS Scores Clinical Need | PrioraOS', 'The scoring engine behind PrioraOS: how open government data on deprivation, workforce and geography becomes a single, auditable measure of community clinical need.');
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    // Wait for layout to settle before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">

      
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] min-h-[520px] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
          <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
            <path fill="#fff" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            The PrioraOS <span className="text-yellow-300">Engine Suite.</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Three proprietary innovations.{' '}
            <span className="text-yellow-300">One integrated equity intelligence system.</span>
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Each innovation is independently valuable. Together they form a closed loop that ensures equitable workforce deployment is documented, recognised, and evidenced outcome.
          </p>
        </div>
      </section>

      
      <section className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            <a href="#efe" className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#005EB8] hover:bg-blue-50 transition-colors">
              <BarChart3 className="w-4 h-4" />
              <span>Module 01 — EFE™</span>
            </a>
            <span className="text-gray-200 select-none">|</span>
            <a href="#equitymark" className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors">
              <Award className="w-4 h-4" />
              <span>Module 02 — EquityMark™</span>
            </a>
            <span className="text-gray-200 select-none">|</span>
            <a href="#ece" className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-amber-600 hover:bg-amber-50 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Module 03 — ECE™</span>
            </a>
          </div>
        </div>
      </section>

      
      <section id="efe" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />
          <div className="absolute bottom-32 -right-28 w-80 h-80 rounded-full bg-blue-50/30 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50">
                <BarChart3 className="w-7 h-7 text-[#005EB8]" />
              </div>
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100">
                Module 01
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              The Equity Fulfilment Engine™
            </h2>
            <p className="text-lg font-semibold text-[#005EB8] mb-6 italic">
              Scores every clinical posting by independently verified community need.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 text-left md:text-justify">
              The EFE™ is the algorithmic core of PrioraOS. Every temporary clinical posting submitted is automatically scored and ranked in real time across four independently verified dimensions of community clinical need. All inputs are drawn from open government data published under open licensing by national government bodies. Every score is independently verifiable against its published source. No patient data is accessed or processed at any stage.
            </p>
          </ScrollReveal>

          {/* Four Dimensions */}
          <ScrollReveal delay={150}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">THE FOUR DIMENSIONS.</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Deprivation Index',
                  weight: '30%',
                  color: '#DA291C',
                  body: 'A normalised measure of relative socioeconomic disadvantage at the smallest available geographic unit within each deployment jurisdiction. Every country in the deployment roadmap publishes an equivalent national deprivation index. On international deployment, each jurisdiction\'s national index substitutes directly without algorithmic reconstruction.',
                  uk: 'In the United Kingdom: English Indices of Deprivation 2025 (MHCLG) at Lower Super Output Area level across 33,755 areas of England.',
                },
                {
                  title: 'Staff Shortage Index',
                  weight: '30%',
                  color: '#ED8B00',
                  body: 'A measure of clinical workforce shortage intensity in the area the posting serves, drawn from national workforce statistics published at sub-regional level. Areas where the ratio of available clinical staff to registered patients falls significantly below the national benchmark receive higher scores within this dimension.',
                  uk: 'In the United Kingdom: NHS England GP Workforce Statistics (NHS Digital) at individual GP practice level, updated monthly.',
                },
                {
                  title: 'Patient-to-Clinician Ratio',
                  weight: '25%',
                  color: '#005EB8',
                  body: 'A measure of the ratio of registered patients to available clinical staff at the individual practice or facility level, sourced from national patient registration data. This dimension anchors the scoring framework in real patient demand rather than aggregate area statistics.',
                  uk: 'In the United Kingdom: Patients Registered at a GP Practice (NHS Digital) at individual practice level, updated monthly.',
                },
                {
                  title: 'Geographic Remoteness Index',
                  weight: '15%',
                  color: '#2ECC71',
                  body: 'A measure applying the national rural-urban or remoteness classification at the smallest available geographic unit. This dimension captures the access barriers particularly pronounced in rural, coastal, and isolated communities that deprivation data alone does not fully reflect.',
                  uk: 'In the United Kingdom: ONS Rural-Urban Classification 2021 at Output Area level.',
                },
              ].map((dim, i) => (
                <div key={i} className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl" style={{ background: dim.color }} />
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-base font-bold text-gray-900 leading-snug">
                      {dim.title}
                    </h4>
                    <span className="text-sm font-bold px-3 py-1 rounded-full flex-shrink-0 whitespace-nowrap" style={{ color: dim.color, backgroundColor: `${dim.color}15` }}>
                      weighted at {dim.weight}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{dim.body}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100 italic">
                    {dim.uk}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Formula */}
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-r from-[#003087] via-[#005EB8] to-[#0072CE] rounded-2xl p-8 mb-12 text-center">
              <h3 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4">The Formula</h3>
              <p className="text-base sm:text-lg lg:text-xl font-mono font-bold text-yellow-300 leading-relaxed">
                EFE™ Score = (0.30 × Deprivation Index) + (0.30 × Staff Shortage Index)<br />
                + (0.25 × Patient-to-Clinician Ratio) + (0.15 × Geographic Remoteness Index)
              </p>
            </div>
          </ScrollReveal>

          {/* Specialty Need Flag */}
          <ScrollReveal delay={230}>
            <div className="flex items-start gap-4 mb-2">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                <Shield className="w-6 h-6 text-[#005EB8]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 self-center">THE SPECIALTY NEED FLAG.</h3>
            </div>
            <div className="relative pl-6 border-l-4 border-[#005EB8] bg-white rounded-r-xl py-4 pr-4 shadow-sm mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to the composite score, the EFE™ applies a specialty-level health inequality flag. Every posting is cross-referenced against condition prevalence measured at the individual GP practice serving that location — more granular than local-authority reporting. Where the posted clinical specialty aligns with a condition disproportionately prevalent in that community relative to the national average, a Specialty Need Flag is attached to the posting record. This flag adds a fifth layer of independently verified, specialty-specific evidence to the compliance record generated by the ECE™.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3 italic">
                In the United Kingdom: OHID Fingertips QOF condition prevalence at GP practice level, aligned with the NHS England Core20PLUS5 national health inequalities programme.
              </p>
            </div>
          </ScrollReveal>

          {/* Grading System */}
          <ScrollReveal delay={260}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">THE FOUR EQUITY GRADES.</h3>
            
            {/* EFE Score Notice */}
            <div className="px-6 py-4 mb-12">
              <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify">
                The EFE™ score and equity grade assigned to each posting express an assessment of community clinical need based on independently verified open government data inputs at the time of scoring. They do not constitute a clinical assessment, a health needs analysis, or a regulatory determination. All source data is published under open government licence and is independently verifiable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                {
                  grade: 'A', label: 'Critical Need', range: '75 – 100',
                  color: '#DA291C', iconBg: 'bg-red-100', textColor: 'text-red-700',
                  badgeBg: 'bg-red-100', badgeText: 'text-red-700',
                  note: 'The posting serves a community in extreme clinical need across multiple dimensions. Grade A postings surface first in every clinician-facing discovery interface. This ranking is not configurable and cannot be overridden by pay rate, urgency, or how recently a posting was listed.',
                },
                {
                  grade: 'B', label: 'High Need', range: '50 – 74',
                  color: '#ED8B00', iconBg: 'bg-amber-100', textColor: 'text-amber-700',
                  badgeBg: 'bg-amber-100', badgeText: 'text-amber-700',
                  note: 'The posting serves a community with significant clinical need above the national average across the majority of scoring dimensions.',
                },
                {
                  grade: 'C', label: 'Moderate Need', range: '35 – 49',
                  color: '#005EB8', iconBg: 'bg-blue-100', textColor: 'text-blue-700',
                  badgeBg: 'bg-blue-100', badgeText: 'text-blue-700',
                  note: 'The posting serves a community with clinical need broadly aligned with the national average, with localised pressures in one or two dimensions.',
                },
                {
                  grade: 'D', label: 'Lower Need', range: '0 – 34',
                  color: '#64748B', iconBg: 'bg-slate-100', textColor: 'text-slate-600',
                  badgeBg: 'bg-slate-100', badgeText: 'text-slate-600',
                  note: 'The posting serves a community where current open government data indicates clinical need below the national average across the majority of dimensions.',
                },
              ].map((g, i) => (
                <div key={i} className="relative flex flex-col bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl" style={{ background: g.color }} />
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full ${g.iconBg} flex items-center justify-center`}>
                      <span className={`text-sm font-black ${g.textColor}`}>{g.grade}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-gray-900">{g.label}</h4>
                      <span className={`inline-flex items-center text-xs font-bold px-2.5 py-0.5 rounded-full ${g.badgeBg} ${g.badgeText}`}>
                        {g.range}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{g.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Transition to EquityMark */}
          <ScrollReveal delay={400}>
            <p className="text-lg font-semibold text-[#005EB8] mb-6 italic text-center">
              The EFE™ creates the equity signal. It tells clinicians which communities need them most. EquityMark™ is the professional recognition system that transforms responding to that signal into a verified career record.
            </p>
          </ScrollReveal>

        </div>
      </section>

      
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-8" />

      
      <section id="equitymark" className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -right-28 w-80 h-80 rounded-full bg-emerald-50/50 blur-3xl" />
          <div className="absolute bottom-32 -left-28 w-80 h-80 rounded-full bg-emerald-50/30 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50">
                <Award className="w-7 h-7 text-emerald-600" />
              </div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100">
                Module 02
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              EquityMark™
            </h2>
            <p className="text-lg font-semibold text-emerald-600 mb-6 italic">
              The first professional equity credential in healthcare
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left md:text-justify">
              EquityMark™ builds automatically from confirmed clinical activity. Every confirmed engagement records the EFE™ grade of the community served, and that grade contributes a weighted point value to the clinician's cumulative credential. The process requires nothing from the clinician beyond completing the shift. Clinicians who choose to work in underserved communities now have, for the first time, an independently verified record of that choice, structured for professional portfolios, revalidation, and appraisal.
            </p>
          </ScrollReveal>

          {/* Point allocation */}
          <ScrollReveal delay={150}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">POINT ALLOCATION.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 text-left md:text-justify">
              EquityMark™ points are a weighting mechanism that ensures the credential accurately reflects the distribution of clinical need in the clinician's work pattern. A clinician who consistently works in Grade A communities builds a different credential from one who works primarily in Grade D communities, even if both have completed the same number of shifts. The points translate clinical activity into an independently verifiable equity record.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { grade: 'A', pointsLabel: '3 points', desc: "Each Grade A engagement awards 3 points toward the clinician\u2019s EquityMark\u2122 total.", color: '#DA291C', iconBg: 'bg-red-100', textColor: 'text-red-700', badgeBg: 'bg-red-100', badgeText: 'text-red-700' },
                { grade: 'B', pointsLabel: '2 points', desc: "Each Grade B engagement awards 2 points toward the clinician\u2019s EquityMark\u2122 total.", color: '#ED8B00', iconBg: 'bg-amber-100', textColor: 'text-amber-700', badgeBg: 'bg-amber-100', badgeText: 'text-amber-700' },
                { grade: 'C', pointsLabel: '1 point', desc: "Each Grade C engagement awards 1 point toward the clinician\u2019s EquityMark\u2122 total.", color: '#005EB8', iconBg: 'bg-blue-100', textColor: 'text-blue-700', badgeBg: 'bg-blue-100', badgeText: 'text-blue-700' },
                { grade: 'D', pointsLabel: '0 points', desc: 'Grade D engagements are recorded but carry no point value. Neutral \u2014 no reduction.', color: '#64748B', iconBg: 'bg-slate-100', textColor: 'text-slate-600', badgeBg: 'bg-slate-100', badgeText: 'text-slate-600' },
              ].map((g, i) => (
                <div key={i} className="relative flex flex-col bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl" style={{ background: g.color }} />
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full ${g.iconBg} flex items-center justify-center`}>
                      <span className={`text-sm font-black ${g.textColor}`}>{g.grade}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-gray-900">Grade {g.grade}</h4>
                      <span className={`inline-flex items-center text-xs font-bold px-2.5 py-0.5 rounded-full ${g.badgeBg} ${g.badgeText}`}>
                        {g.pointsLabel}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Four levels */}
          <ScrollReveal delay={200}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">THE FOUR PROGRESSION LEVELS.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 text-left md:text-justify">
              The four levels reflect a sustained pattern of health equity contribution, not a single engagement. They are structured to make a clinician's equity contribution visible and professionally credible within appraisal, revalidation, and continuing professional development frameworks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  step: '01', level: 'Registered', threshold: '0 points',
                  desc: 'Verified platform registration. Professional identity confirmed.',
                  color: '#64748B', iconBg: 'bg-slate-100', textColor: 'text-slate-600',
                  badgeBg: 'bg-slate-100', badgeText: 'text-slate-600',
                },
                {
                  step: '02', level: 'Developing', threshold: '15 points',
                  desc: 'An emerging pattern of health equity contribution has begun.',
                  color: '#005EB8', iconBg: 'bg-blue-100', textColor: 'text-blue-700',
                  badgeBg: 'bg-blue-100', badgeText: 'text-blue-700',
                },
                {
                  step: '03', level: 'Committed', threshold: '50 points',
                  desc: 'Sustained contribution across multiple higher-need communities. Structured for CPD portfolio inclusion in the category of reducing health inequalities.',
                  color: '#ED8B00', iconBg: 'bg-amber-100', textColor: 'text-amber-700',
                  badgeBg: 'bg-amber-100', badgeText: 'text-amber-700',
                },
                {
                  step: '04', level: 'Exemplary', threshold: '120 points',
                  desc: 'Distinguished record of health equity contribution. Structured as supporting information for professional revalidation in the categories of quality improvement, clinical leadership, and the active reduction of health inequalities.',
                  color: '#2ECC71', iconBg: 'bg-emerald-100', textColor: 'text-emerald-700',
                  badgeBg: 'bg-emerald-100', badgeText: 'text-emerald-700',
                },
              ].map((l, i) => (
                <div key={i} className="relative flex flex-col bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl" style={{ background: l.color }} />
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full ${l.iconBg} flex items-center justify-center`}>
                      <span className={`text-xs font-black ${l.textColor}`}>{l.step}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-gray-900">{l.level}</h4>
                      <span className={`inline-flex items-center text-xs font-bold px-2.5 py-0.5 rounded-full ${l.badgeBg} ${l.badgeText}`}>
                        {l.threshold}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contribution Report */}
          <ScrollReveal delay={250}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">THE CONTRIBUTION REPORT.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left md:text-justify">
              At any point, a clinician can download a Contribution Report documenting every confirmed engagement, every community served, every EFE™ grade recorded, and their cumulative EquityMark™ score. The report is structured as supporting information for professional revalidation, appraisal frameworks, and continuing professional development records across all jurisdictions in which PrioraOS operates. It provides independently verified evidence of equity-directed clinical practice sourced entirely from open government data and platform activity records.
            </p>
            
            <p className="text-sm text-gray-500 leading-relaxed mb-12 text-left md:text-justify italic">
              The Contribution Report is provided as independently verified supporting information and does not constitute a formal qualification or regulatory certification. Clinicians maintain full responsibility for determining the suitability of this report within their professional development and revalidation processes.
            </p>
            
            <div className="text-center">
              <a 
                href="https://locumstation.co.uk/our-innovations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download sample Contribution Report
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Transition to ECE */}
          <ScrollReveal delay={300}>
            <p className="text-lg font-semibold text-emerald-600 mb-6 italic text-left md:text-justify mt-12">
              Every confirmed engagement generates two simultaneous records. For the clinician, it updates their EquityMark™ credential. For the provider, it creates a compliance record documenting that the workforce decision was informed by verified community clinical need. The Equity Compliance Engine™ generates the provider's record automatically, translating the same equity activity into the structured regulatory evidence that commissioners, inspectors, and procurement bodies require.
            </p>
          </ScrollReveal>

        </div>
      </section>

      
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-8" />

      
      <section id="ece" className="relative py-20 lg:py-28 bg-white overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-amber-50/50 blur-3xl" />
          <div className="absolute bottom-32 -right-28 w-80 h-80 rounded-full bg-amber-50/30 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-50">
                <FileText className="w-7 h-7 text-amber-600" />
              </div>
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-100">
                Module 03
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              The Equity Compliance Engine™
            </h2>
            <p className="text-lg font-semibold text-amber-600 mb-6 italic">
              Records equity-directed workforce activity as structured, independently sourced evidence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 text-left md:text-justify">
              The ECE™ generates an independently auditable record of every provider organisation's equity-directed workforce activity. It produces the structured, verifiable evidence that health providers are required to demonstrate under active statutory and regulatory obligations, automatically, as a consequence of the equity-scored posting and confirmation process, without manual assembly or retrospective reporting.
            </p>
          </ScrollReveal>

          {/* What it records */}
          <ScrollReveal delay={150}>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-5">WHAT IT RECORDS FOR EVERY CONFIRMED ENGAGEMENT.</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Date, role, and clinical specialty of the posting',
                  'Practice or facility location at the appropriate geographic unit',
                  'EFE™ composite score and equity grade',
                  'Individual scores for all four input dimensions with named data sources',
                  'Specialty Need Flag status',
                  'Confirmation from both provider and clinician with timestamps',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Report formats */}
          <ScrollReveal delay={200}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">WHAT THE REPORT CONTAINS.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Engagement activity',
                  body: 'Complete record of all equity-scored engagement activity, dimension scores, and grade history for the reporting period. Supports annual equity reporting and care quality inspection evidence.',
                },
                {
                  title: 'Specialty need',
                  body: 'Every engagement carrying a Specialty Need Flag, alongside condition prevalence measured at the GP practice serving the posting location. Supports specialty-level health inequalities reporting obligations.',
                },
                {
                  title: 'Social value provenance',
                  body: 'Equity-directed workforce evidence aligned with national procurement Social Value requirements, with full data provenance from independently published government sources.',
                },
              ].map((r, i) => (
                <div key={i} className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#ED8B00] to-[#D4820A]" />
                  <h4 className="text-base font-bold text-gray-900 mb-2 mt-1">{r.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Regulatory Alignment */}
          <ScrollReveal delay={250}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">REGULATORY ALIGNMENT.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left md:text-justify">
              The ECE™ report formats are aligned to the active statutory and regulatory frameworks of each deployment jurisdiction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left md:text-justify">
              In the United Kingdom the current alignment covers:
            </p>
            <div className="border border-gray-200 rounded-xl p-6 mb-12">
              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-semibold">•</span>
                  <span><strong>Health and Care Act 2022</strong> — statutory duty on ICBs and NHS trusts to reduce inequalities in access to health services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-semibold">•</span>
                  <span><strong>CQC Single Assessment Framework</strong> — Equity in Access quality statement under the Responsive and Well-Led categories.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-semibold">•</span>
                  <span><strong>Procurement Policy Note 06/20</strong> — minimum 10 percent Social Value weighting in NHS procurement scoring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-semibold">•</span>
                  <span><strong>NHS England Core20PLUS5</strong> — national health inequalities programme across five clinical priority areas.</span>
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 text-left md:text-justify">
              On international deployment, equivalent regulatory frameworks are mapped as part of the jurisdiction recalibration process before deployment proceeds.
            </p>
          </ScrollReveal>

          {/* Data governance */}
          <ScrollReveal delay={300}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">DATA GOVERNANCE.</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-12 text-left md:text-justify italic">
              Every data point in every ECE™ report is sourced from open government datasets published under national open licensing. No patient-identifiable data is accessed or processed at any stage. The ECE™ is a workforce activity recording tool. It does not constitute a regulatory determination, a compliance certification, or legal advice on any equality obligation. It is designed to support, not replace, the organisation's own compliance processes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="text-center mt-12">
              <a 
                href="https://locumstation.co.uk/our-innovations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Download sample ECE™ report
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] py-20 lg:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight text-center">
              Jurisdiction-Ready <span className="text-yellow-300">Architecture</span>
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 text-left md:text-justify">
              The EFE™ formula and ECE™ compliance record architecture are designed for jurisdictional recalibration. The four scoring dimensions exist in every public health system with equivalent open government data infrastructure. International deployment requires only the substitution of jurisdiction-specific data inputs with equivalent national publications from the target jurisdiction. The algorithmic logic, grading system, compliance record structure, and EquityMark™ framework all transfer without reconstruction.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 text-left md:text-justify">
              Currently deployed in the United Kingdom. The architecture supports future recalibration for Australia, Canada, and New Zealand using equivalent open government data.
            </p>
            <div className="text-center">
              <Link
                to="/global"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Read the international deployment framework
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default TheEngine;
