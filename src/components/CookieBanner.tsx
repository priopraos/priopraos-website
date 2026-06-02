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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          We use cookies to improve your experience on our site. By continuing, you agree to our{' '}
          <Link to="/privacy" className="underline text-white hover:text-gray-200 transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm rounded border border-gray-500 text-gray-300 hover:border-gray-300 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
