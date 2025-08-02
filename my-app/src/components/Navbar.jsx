import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import NavbarLogo from '../assets/images/222527428.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigationLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/products', label: 'nav.products' },
    { path: '/global-operations', label: 'nav.globalOperations' },
    { path: '/about', label: 'nav.aboutUs' },
    // { path: '/investors', label: 'nav.investors' },
  ];

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    
    return (
      <Link
        to={to}
        className={`
          relative
          px-4
          py-2.5
          text-sm
          font-medium
          transition-all
          duration-300
          group
          rounded-lg
          ${isScrolled || !isHomePage 
            ? `${isActive ? 'text-teal-800 bg-teal-100' : 'text-teal-700 hover:text-teal-800 hover:bg-teal-50'}` 
            : `${isActive ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
        `}
      >
        {children}
        <span 
          className={`
            absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 rounded-full
            ${isActive ? 'w-6' : 'w-0 group-hover:w-6'}
            ${isScrolled || !isHomePage ? 'bg-teal-500' : 'bg-white'}
          `} 
        />
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <div
        className={`
          max-w-7xl
          mx-auto
          rounded-2xl
          transition-all
          duration-500
          backdrop-blur-xl
          border
          ${isScrolled || !isHomePage
            ? 'bg-white/95 shadow-2xl border-teal-100/50 shadow-teal-500/10'
            : 'bg-transparent border-white/10 shadow-lg shadow-black/5'}
        `}
      >
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className={`
                w-8 h-8 rounded-lg transform rotate-45 flex items-center justify-center transition-all duration-300 shadow-lg
                ${isScrolled || !isHomePage 
                  ? 'bg-gradient-to-br from-teal-400 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-600 shadow-teal-500/30' 
                  : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30 shadow-white/10'}
              `}>
                <div className={`
                  w-2 h-2 rounded-full transform -rotate-45 transition-colors duration-300
                  ${isScrolled || !isHomePage ? 'bg-white' : 'bg-white'}
                `}></div>
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:block">
                <div className={`
                  text-lg font-bold tracking-tight transition-all duration-300
                  ${isScrolled || !isHomePage 
                    ? 'text-teal-800' 
                    : 'text-white'}
                `}>
                  INNANA
                </div>
                <div className={`
                  text-xs font-semibold tracking-wider uppercase transition-colors duration-300
                  ${isScrolled || !isHomePage ? 'text-teal-600' : 'text-white/80'}
                `}>
                  PHARMACEUTICALS
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigationLinks.map(({ path, label }) => (
              <NavLink key={path} to={path}>
                {t(label)}
              </NavLink>
            ))}

            <div className="ml-8 flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                to="/contact"
                className={`
                  px-6
                  py-2.5
                  text-sm
                  font-semibold
                  rounded-full
                  transition-all
                  duration-300
                  transform
                  hover:scale-105
                  hover:shadow-lg
                  border
                  ${isScrolled || !isHomePage
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 border-teal-500 hover:shadow-teal-500/30'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 hover:border-white/30 hover:shadow-white/10'}
                `}
              >
                {t('nav.contactButton')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              lg:hidden rounded-full p-2 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-offset-2
              ${isScrolled || !isHomePage 
                ? 'text-teal-700 hover:bg-teal-50 focus:ring-teal-500' 
                : 'text-white hover:bg-white/10 focus:ring-white/20'}
            `}
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            transition-all
            duration-300
            ease-in-out
            overflow-hidden
            ${isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-6">
            <div className={`
              border-t pt-4 space-y-2
              ${isScrolled || !isHomePage ? 'border-teal-100' : 'border-white/20'}
            `}>
              {navigationLinks.map(({ path, label }) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`
                      block px-4 py-3 rounded-lg transition-all duration-300 font-medium
                      ${isScrolled || !isHomePage 
                        ? `${isActive ? 'text-teal-800 bg-teal-100' : 'text-teal-700 hover:bg-teal-50 hover:text-teal-800'}` 
                        : `${isActive ? 'text-white bg-white/10' : 'text-white/90 hover:bg-white/10 hover:text-white'}`}
                    `}
                  >
                    {t(label)}
                  </Link>
                );
              })}
              
              <div className="mt-6 space-y-4">
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
                <Link
                  to="/contact"
                  className={`
                    block px-4 py-3 text-center rounded-lg font-semibold transform hover:scale-105 transition-all duration-300
                    ${isScrolled || !isHomePage
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700'
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'}
                  `}
                >
                  {t('nav.contactButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;