import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AUSTRALIA_DATA_SOURCES: { label: string; href: string }[] = [
  {
    label: 'SEIFA — Australian Bureau of Statistics',
    href: 'https://www.abs.gov.au/statistics/people/people-and-communities/socio-economic-indexes-areas-seifa-australia/latest-release',
  },
  {
    label: 'ARIA+ — ABS and AIHW jointly',
    href: 'https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/remoteness-structure/remoteness-areas',
  },
  {
    label: 'AIHW Health Workforce Data',
    href: 'https://www.aihw.gov.au/reports-data/health-welfare-services/workforce',
  },
  {
    label: 'Medicare Benefits Schedule (MBS)',
    href: 'https://www.aihw.gov.au/reports/primary-health-care/medicare-subsidised-general-practice-services',
  },
  {
    label: 'AIHW National Health Priority Areas and Burden of Disease datasets',
    href: 'https://www.aihw.gov.au/reports-data/health-conditions-disability-deaths',
  },
];

const CANADA_DATA_SOURCES: { label: string; href: string }[] = [
  {
    label: 'Canadian Index of Multiple Deprivation (CIMD) — Statistics Canada',
    href: 'https://www150.statcan.gc.ca/n1/pub/45-20-0001/452000012019002-eng.htm',
  },
  {
    label: 'Index of Remoteness — Statistics Canada',
    href: 'https://www150.statcan.gc.ca/n1/pub/17-26-0001/172600012020001-eng.htm',
  },
  {
    label: 'Canadian Institute for Health Information (CIHI)',
    href: 'https://www.cihi.ca/en',
  },
  {
    label: 'Pan-Canadian Health Inequalities Reporting Initiative — Health Canada',
    href: 'https://www.canada.ca/en/public-health/services/publications/science-research-data/pan-canadian-health-inequalities-reporting-initiative.html',
  },
  {
    label: 'OCAP® principles framework',
    href: 'https://fnigc.ca/ocap/',
  },
];

const NEW_ZEALAND_DATA_SOURCES: { label: string; href: string }[] = [
  {
    label: 'NZDep — University of Otago',
    href: 'https://www.health.govt.nz/nz-health-statistics/health-statistics-and-data-sets/deprivation-data/nzdep-and-nzsei',
  },
  {
    label: 'Geographic Classification for Health (GCH) — Health New Zealand',
    href: 'https://www.tewhatuora.govt.nz/for-the-health-sector/health-sector-guidance/geographic-classification-for-health/',
  },
  {
    label: 'Health New Zealand Workforce and Access Data',
    href: 'https://www.tewhatuora.govt.nz/for-the-health-sector/data-statistics-and-insights',
  },
  {
    label: 'National Burden of Disease Reports — Ministry of Health',
    href: 'https://www.health.govt.nz/nz-health-statistics/health-statistics-and-data-sets/burden-disease-data-and-stats',
  },
];

const Global = () => {
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
            <Globe className="w-4 h-4 text-yellow-300" />
            International Data Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Global Health <span className="text-yellow-300">Equity.</span>
          </h1>
        </div>
      </section>

      {/* ═══════════ THE ARCHITECTURE ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 -left-28 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              The Architecture of{' '}
              <span className="text-[#005EB8]">International Deployment</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left md:text-justify">
              The PrioraOS architecture is designed for jurisdictional data abstraction. The four scoring dimensions, deprivation, workforce shortage, patient access, and geographic remoteness, exist in every public health system. Wherever a government publishes open data measuring them, the engine can be recalibrated without reconstructing the core algorithmic logic.
            </p>
            <div className="flex items-center gap-3 mb-4 pl-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                <Globe className="w-6 h-6 text-[#005EB8]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What International Deployment Involves</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify italic relative pl-6 border-l-4 border-[#005EB8]">
              International deployment involves a structured recalibration process: data source identification and licensing confirmation, boundary mapping and normalisation to the target geography, formula weight validation against local workforce conditions, regulatory framework mapping for locally aligned compliance reports, and a pilot deployment in a defined geographic area before national rollout.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ TARGET JURISDICTIONS ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005EB8] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-blue-100">
                <MapPin className="w-4 h-4" />
                International Data Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Expansion Roadmap</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {/* Australia */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6] group-hover:h-1.5 transition-all duration-500" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="text-3xl mb-4">🇦🇺</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Australia</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left md:text-justify">
                      Australia publishes the full equivalent of every EFE™ dimension through its national statistical and health agencies. The Socioeconomic Indexes for Areas (SEIFA) from the Australian Bureau of Statistics maps directly to the deprivation dimension. The ARIA+ remoteness classification, published jointly by the ABS and AIHW, maps to geographic remoteness. AIHW health workforce data and Medicare Benefits Schedule practice-level billing data provide the workforce shortage and patient access dimensions. Aboriginal and Torres Strait Islander health data from the AIHW adds a fifth structural dimension specific to the Australian context. The Primary Health Network structure provides a commissioning architecture equivalent to NHS ICBs.
                    </p>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Data sources:</h4>
                    <ul className="text-sm leading-relaxed mb-6 space-y-2 list-disc pl-5 marker:text-gray-400">
                      {AUSTRALIA_DATA_SOURCES.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#005EB8] underline-offset-2 hover:underline font-medium"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src="/16.png"
                      alt="SEIFA Report Cover"
                      className="rounded-xl border border-gray-100 object-contain w-full max-h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Canada */}
            <ScrollReveal delay={250}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#DA291C] to-[#C0392B] group-hover:h-1.5 transition-all duration-500" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-2 md:order-1">
                    <img
                      src="/17.png"
                      alt="CIMD Statistics Canada"
                      className="rounded-xl border border-gray-100 object-contain w-full max-h-[300px]"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="text-3xl mb-4">🇨🇦</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Canada</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left md:text-justify">
                      Statistics Canada&apos;s Canadian Index of Multiple Deprivation was explicitly modelled on the UK IMD and provides a direct structural equivalent for the deprivation dimension. The Index of Remoteness maps to geographic remoteness. The Canadian Institute for Health Information publishes workforce and patient access data at regional health authority level. The Pan-Canadian Health Inequalities Reporting Initiative provides condition prevalence data supporting specialty need flag application. Data partnerships with Indigenous communities follow OCAP principles for First Nations, Métis, and Inuit health data sovereignty.
                    </p>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Data sources:</h4>
                    <ul className="text-sm leading-relaxed mb-6 space-y-2 list-disc pl-5 marker:text-gray-400">
                      {CANADA_DATA_SOURCES.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-800 underline-offset-2 hover:underline font-medium"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* New Zealand */}
            <ScrollReveal delay={400}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2ECC71] to-[#27AE60] group-hover:h-1.5 transition-all duration-500" />
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="text-3xl mb-4">🇳🇿</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">New Zealand</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left md:text-justify">
                      The New Zealand Deprivation Index (NZDep), published by the University of Otago, provides a validated small-area deprivation measure equivalent to the UK IMD. The Geographic Classification for Health (GCH) maps to geographic remoteness. Health New Zealand publishes workforce and patient access data at district level. National Burden of Disease and Health Status Reports provide condition prevalence data prioritising Māori and Pacific health equity. The unified New Zealand health system structure closely mirrors the NHS model, reducing implementation complexity.
                    </p>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Data sources:</h4>
                    <ul className="text-sm leading-relaxed mb-6 space-y-2 list-disc pl-5 marker:text-gray-400">
                      {NEW_ZEALAND_DATA_SOURCES.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-800 underline-offset-2 hover:underline font-medium"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src="/19.png"
                      alt="NZDep Publication"
                      className="rounded-xl border border-gray-100 object-contain w-full max-h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="mt-12 text-sm text-gray-500 leading-relaxed italic text-left md:text-justify">
              The international deployment framework described above reflects the architectural capability of the PrioraOS framework to be recalibrated for jurisdictions with equivalent open government data infrastructure. Active deployment in Australia, Canada, and New Zealand has not yet been implemented. The data sources identified for each jurisdiction are indicative examples drawn from publicly available open government publications. Before any international deployment proceeds, a dedicated research and recalibration process will be conducted to determine the appropriate data inputs, boundary definitions, formula weights, and regulatory framework mapping for that jurisdiction. Nothing on this page constitutes a commitment to deploy in any specific jurisdiction or timeline.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ ENQUIRIES ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gray-600 leading-relaxed mb-10 text-center">
              We welcome enquiries from government agencies, health system administrators, and research institutions in all target jurisdictions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
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
      </section>
    </div>
  );
};

export default Global;
