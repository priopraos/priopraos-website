import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta, useNoIndex } from '../hooks/usePageMeta';

/* An unknown address used to redirect to the home page, which search engines
   read as a duplicate of it. Say plainly that the page does not exist. */
const NotFound = () => {
  usePageMeta('Page not found | PrioraOS');
  useNoIndex();
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-24">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#005EB8]">404</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-3 text-gray-600">The page you were looking for does not exist or has moved.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 bg-[#005EB8] hover:bg-[#003087] text-white font-semibold px-6 py-3 rounded-xl">
          Go to the home page <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
