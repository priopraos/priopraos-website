import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* A notice, not a consent request (October 2026). prioraos.com sets no
   tracking, advertising or analytics cookies, so there is nothing to accept or
   decline. The old banner said "We use cookies to improve your experience...
   By continuing, you agree", which described cookies the site does not set.
   One setting in local storage remembers that the notice has been seen. */
const STORAGE_KEY = 'priora_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch { /* storage unavailable: show nothing rather than show it on every page */ }
  }, []);

  const acknowledge = () => {
    try { localStorage.setItem(STORAGE_KEY, 'acknowledged'); } catch { /* nothing to remember it in */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div role="region" aria-label="Cookies" className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl" style={{ background: 'linear-gradient(to right, #003087, #005EB8, #0072CE)' }}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-blue-100 leading-relaxed">
          prioraos.com does not use tracking, advertising or analytics cookies. We keep one setting in
          your browser to remember that you have seen this notice. See our{' '}
          <Link to="/privacy" className="underline text-white hover:text-yellow-300 transition-colors font-medium">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acknowledge}
            className="px-4 py-2 text-sm rounded bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
