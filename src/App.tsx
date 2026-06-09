import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TheEngine from './pages/TheEngine';
import Global from './pages/Global';
import LocumStation from './pages/LocumStation';
import About from './pages/About';
import Contact from './pages/Contact';
import Maintenance from './pages/Maintenance';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookieBanner from './components/CookieBanner';

const STATUS_URL = 'https://api.locumstation.co.uk/api/prioraos-status';
const POLL_INTERVAL_MS = 60_000; // re-check every 60 s

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [maintenance, setMaintenance] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const check = () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      fetch(STATUS_URL, { cache: 'no-store', signal: controller.signal })
        .then(r => r.json())
        .then(d => { if (!cancelled) setMaintenance(!!d.maintenance_mode); })
        .catch(() => { if (!cancelled) setMaintenance(false); })
        .finally(() => clearTimeout(timeoutId));
    };

    check();
    const interval = setInterval(check, POLL_INTERVAL_MS);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  if (maintenance) return <Maintenance />;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engine" element={<TheEngine />} />
          <Route path="/global" element={<Global />} />
          <Route path="/locum-station" element={<LocumStation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
