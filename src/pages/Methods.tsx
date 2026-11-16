import { usePageMeta } from '../hooks/usePageMeta';

/* How community need is measured: the methods page that goes live with the
   Health Inequalities Data Hub on locumstation.co.uk (16 Nov 2026). Off until
   VITE_SHOW_METHODS=1 (App.tsx). The text is the founders' draft for review;
   keep it at the level already published on locumstation.co.uk, so it never
   gives enough to copy the engine. */

const MEASURES = [
  { name: 'Deprivation', weight: '30%', source: 'English Indices of Deprivation 2025 (MHCLG), for the neighbourhood of the session' },
  { name: 'Staff Shortage Index', weight: '30%', source: 'NHS England, General Practice Workforce' },
  { name: 'Patient-to-clinician ratio', weight: '25%', source: 'NHS England, Patients Registered at a GP Practice, with the workforce figures' },
  { name: 'Geographic rurality', weight: '15%', source: 'ONS Rural-Urban Classification 2021' },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
  </section>
);

const Methods = () => {
  usePageMeta('How We Measure Community Need | PrioraOS',
    'The data sources, weights and limits behind the Equity Fulfilment Engine, which scores temporary clinical sessions by the measured need of the community they serve.');
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-yellow-300 mb-3">Methods</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">How we measure community need</h1>
          <p className="text-lg text-blue-50 leading-relaxed">
            Locum Station scores every temporary clinical session published on it by the measured need of the community it
            serves. The score comes from the Equity Fulfilment Engine™ (EFE™), and every input to it is official data
            published under the Open Government Licence v3.0.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Section title="The four measures">
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Measure</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Weight</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {MEASURES.map(m => (
                  <tr key={m.name} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 text-left">{m.name}</th>
                    <td className="px-4 py-3 tabular-nums">{m.weight}</td>
                    <td className="px-4 py-3">{m.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Each measure is scaled from 0 to 100 and the weighted measures are added to give a score from 0 to 100.
            Deprivation and staff shortage carry the greatest weight because unmet need is greatest where the two occur together.
          </p>
          <p>
            In the most deprived 10% of neighbourhoods, the score is worked out twice: once with all four measures, and once
            without rurality, with the other three reweighted. The higher of the two applies, so a deprived urban area is not
            marked down for being urban.
          </p>
        </Section>

        <Section title="Grades">
          <p>
            The score sets a grade: A (75 to 100, critical need), B (50 to 74), C (35 to 49) and D (0 to 34). Sessions are shown
            to clinicians grade A first. The rate of pay plays no part in the ordering.
          </p>
        </Section>

        <Section title="Core20PLUS5 flag">
          <p>
            Where a session's specialty matches one of the Core20PLUS5 clinical areas, and the practice serving its location
            records that condition above the England level in a deprived area, the session carries a flag naming the measured
            prevalence.
          </p>
        </Section>

        <Section title="Keeping it traceable">
          <ul className="list-disc pl-5 space-y-2">
            <li>Each session keeps the score it was given when it was published, so a score can always be traced to the editions it used.</li>
            <li>New editions are loaded as they are published, and the edition behind each figure is stated.</li>
            <li>No patient-identifiable data is used at any stage.</li>
          </ul>
        </Section>

        <Section title="Limits">
          <p>
            The score describes an area, not the care any practice gives, and it is not a clinical assessment or a health needs
            analysis. Workforce figures count the GPs a practice reports, not the wider clinical team. Neighbourhood data is
            published for areas of about 1,500 people, and official figures are published some months after the period they
            describe.
          </p>
          <p>
            To report an error or ask about the method, email{' '}
            <a href="mailto:contact@prioraos.com" className="text-[#005EB8] underline">contact@prioraos.com</a>.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default Methods;
