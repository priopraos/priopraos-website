import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'priora_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl" style={{ background: 'linear-gradient(to right, #003087, #005EB8, #0072CE)' }}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-blue-100 leading-relaxed">
          We use cookies to improve your experience on our site. By continuing, you agree to our{' '}
          <Link to="/privacy" className="underline text-white hover:text-yellow-300 transition-colors font-medium">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm rounded border border-blue-300 text-blue-100 hover:border-white hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
