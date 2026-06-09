import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Mail, ExternalLink, Building2, Stethoscope, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    role: '',
    enquiryType: '',
    message: '',
  });

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'institutional') {
      setFormData(prev => ({ ...prev, enquiryType: 'institutional-partnership' }));
    } else if (type === 'research') {
      setFormData(prev => ({ ...prev, enquiryType: 'research-collaboration' }));
    } else if (type === 'international') {
      setFormData(prev => ({ ...prev, enquiryType: 'international-deployment' }));
    }
  }, [searchParams]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please email us directly at contact@prioraos.com');
      }
    } catch {
      setError('Could not send your enquiry. Please email us at contact@prioraos.com');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <Mail className="w-4 h-4 text-yellow-300" />
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Get in <span className="text-yellow-300">Touch.</span>
          </h1>
        </div>
      </section>

      {/* ═══════════ CONTACT PANELS ═══════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Institutional and Partnership Enquiries */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#005EB8] to-[#41B6E6] group-hover:h-1.5 transition-all duration-500" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                    <Building2 className="w-6 h-6 text-[#005EB8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Institutional and Partnership Enquiries</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For NHS institutional partnerships, investor conversations, research collaborations, international deployment discussions, and media enquiries.
                </p>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Enquiry Received</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                      Thank you for getting in touch. We will respond to your enquiry as soon as possible.
                    </p>
                    <a
                      href="mailto:contact@prioraos.com"
                      className="inline-flex items-center gap-2 text-[#005EB8] font-semibold hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      contact@prioraos.com
                    </a>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#005EB8] focus:ring-2 focus:ring-[#005EB8]/20 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#005EB8] focus:ring-2 focus:ring-[#005EB8]/20 outline-none transition-all"
                      placeholder="you@organisation.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-1">
                      Organisation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      required
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#005EB8] focus:ring-2 focus:ring-[#005EB8]/20 outline-none transition-all"
                      placeholder="Your organisation"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#005EB8] focus:ring-2 focus:ring-[#005EB8]/20 outline-none transition-all"
                      placeholder="Your role"
                    />
                  </div>
                  <div>
                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                      Enquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#005EB8] focus:ring-2 focus:ring-[#005EB8]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select enquiry type</option>
                      <option value="institutional-partnership">Institutional Partnership</option>
                      <option value="international-deployment">International Deployment</option>
                      <option value="investment">Investment</option>
                      <option value="research-collaboration">Research Collaboration</option>
                      <option value="media">Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#005EB8] focus:ring-2 focus:ring-[#005EB8]/20 outline-none transition-all resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#005EB8] hover:bg-[#003087] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
                )}
              </div>
            </ScrollReveal>

            {/* Locum Station Enquiries */}
            <ScrollReveal delay={200}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 group-hover:h-1.5 transition-all duration-500" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50">
                    <Stethoscope className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">For Locum Station Enquiries</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For NHS providers and clinicians in the United Kingdom, use the Locum Station contact page or email our support team directly.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://locumstation.co.uk/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 transition-colors group/link"
                  >
                    <ExternalLink className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Get In Touch</p>
                      <p className="text-sm text-emerald-700">locumstation.co.uk/contact</p>
                    </div>
                  </a>
                  <a
                    href="mailto:support@locumstation.co.uk"
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 transition-colors group/link"
                  >
                    <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Support</p>
                      <p className="text-sm text-emerald-700">support@locumstation.co.uk</p>
                    </div>
                  </a>
                </div>
                <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Locum Station is the trading name under which PrioraOS operates within the United Kingdom's National Health Service.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
