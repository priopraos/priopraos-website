import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Engine', to: '/engine' },
    { label: 'Locum Station', to: '/locum-station' },
    { label: 'Global', to: '/global' },
    { label: 'About', to: '/about' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-[#003087] via-[#005EB8] to-[#0072CE] text-white text-sm relative overflow-hidden z-[60]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-10">
            <Link
              to="/contact?type=institutional"
              className="flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors text-xs tracking-wide"
            >
              Schedule a Technical Briefing
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors font-medium"
              >
                Contact
              </Link>
              <span className="text-blue-400">|</span>
              <a
                href="https://locumstation.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-xs px-4 py-1.5 rounded-full transition-colors duration-200"
              >
                Visit Locum Station
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white border-b-2 border-blue-100 sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-lg' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group" aria-label="Go to homepage">
                <svg
                  viewBox="0 0 400 400"
                  className="h-16 w-16 group-hover:scale-105 transition-transform duration-300"
                >
                  <circle cx="200" cy="200" r="190" fill="#4A90E2"/>
                  <path d="M120 160 L200 130 L280 160" stroke="#FFD700" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="200" y="200" fontFamily="Inter, system-ui, sans-serif" fontSize="48" fontWeight="300" fill="white" textAnchor="middle">Priora</text>
                  <text x="200" y="250" fontFamily="Inter, system-ui, sans-serif" fontSize="48" fontWeight="bold" fill="#FFD700" textAnchor="middle">OS</text>
                  <circle cx="175" cy="280" r="6" fill="white"/>
                  <circle cx="200" cy="280" r="6" fill="#FFD700"/>
                  <circle cx="225" cy="280" r="6" fill="#2ECC71"/>
                </svg>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                    location.pathname === item.to
                      ? 'text-yellow-400 bg-blue-50 shadow-md'
                      : 'text-blue-900 hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-blue-600 hover:text-yellow-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t-2 border-blue-100 bg-white animate-fadeInDown">
              <div className="px-6 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                      location.pathname === item.to
                        ? 'text-yellow-400 bg-blue-50 shadow-md'
                        : 'text-blue-900 hover:text-yellow-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-blue-100">
                  <Link
                    to="/contact?type=institutional"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Schedule a Technical Briefing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
