export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#003087] flex flex-col items-center justify-center px-6 text-center">
      {/* Logo mark */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
          <img src="/prioraos_logo.png" alt="PrioraOS Logo" className="h-12 sm:h-16 w-auto" />
          <div className="text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-white">Priora</span><span className="text-yellow-400">OS</span>
          </div>
        </div>
      </div>

      {/* Message */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-lg mb-4">
        We'll be back shortly
      </h1>
      <p className="text-white/70 text-lg max-w-md leading-relaxed mb-10">
        PrioraOS is currently undergoing scheduled maintenance. We apologise for
        any inconvenience and will be back online as soon as possible.
      </p>

      {/* Contact nudge */}
      <a
        href="mailto:contact@prioraos.com"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#003087] font-semibold rounded-xl hover:bg-white/90 transition-colors text-sm"
      >
        contact@prioraos.com
      </a>

      {/* Footer note */}
      <p className="mt-12 text-white/40 text-xs">
        &copy; {new Date().getFullYear()} PrioraOS Ltd. All rights reserved.
      </p>
    </div>
  );
}
