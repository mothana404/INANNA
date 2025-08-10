import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavbarLogo from '../assets/images/222527428.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      requestAnimationFrame(() => setIsScrolled(scrolled));
    }
  }, [isScrolled]);

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
  ];

  // Earth/Globe Icon Component
  const EarthIcon = ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path 
        d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
        strokeWidth="1.5" 
      />
    </svg>
  );

  // Language Switcher Component
  const LanguageSwitcher = ({ isMobile = false }) => {
    const currentLang = i18n.language;
    
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
      document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    };

    return (
      <div className={`flex items-center ${isMobile ? 'space-x-2' : 'space-x-1'}`}>
        <EarthIcon className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4'} flex-shrink-0`} />
        <div className={`flex items-center ${isMobile ? 'space-x-2' : 'space-x-1'}`}>
          <button
            onClick={() => changeLanguage('en')}
            className={`
              px-2 py-1 text-xs font-semibold rounded transition-all duration-200
              ${currentLang === 'en' 
                ? (isScrolled || !isHomePage 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-blue-800')
                : (isScrolled || !isHomePage 
                    ? 'text-blue-600 hover:bg-blue-50' 
                    : 'text-white/80 hover:bg-white/10')}
            `}
          >
            EN
          </button>
          <span className={`text-xs ${isScrolled || !isHomePage ? 'text-blue-400' : 'text-white/60'}`}>
            |
          </span>
          <button
            onClick={() => changeLanguage('ar')}
            className={`
              px-2 py-1 text-xs font-semibold rounded transition-all duration-200
              ${currentLang === 'ar' 
                ? (isScrolled || !isHomePage 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-blue-800')
                : (isScrolled || !isHomePage 
                    ? 'text-blue-600 hover:bg-blue-50' 
                    : 'text-white/80 hover:bg-white/10')}
            `}
          >
            عربي
          </button>
        </div>
      </div>
    );
  };

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    
    return (
      <Link
        to={to}
        className={`
          relative px-3 lg:px-4 py-2 lg:py-2.5
          text-sm font-medium transition-all duration-300
          group rounded-lg whitespace-nowrap
          ${isScrolled || !isHomePage 
            ? `${isActive ? 'text-blue-800 bg-blue-100' : 'text-blue-700 hover:text-blue-800 hover:bg-blue-50'}` 
            : `${isActive ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
        `}
      >
        {children}
        <span 
          className={`
            absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 
            transition-all duration-300 rounded-full
            ${isActive ? 'w-6' : 'w-0 group-hover:w-6'}
            ${isScrolled || !isHomePage ? 'bg-blue-500' : 'bg-white'}
          `} 
        />
      </Link>
    );
  };
// ... continuing from Part 1

  return (
    <nav className="fixed w-full z-50 px-2 sm:px-4 lg:px-8 pt-2 sm:pt-3">
      <div
        className={`
          max-w-7xl mx-auto rounded-xl lg:rounded-2xl
          transition-all duration-500 backdrop-blur-xl border
          ${isScrolled || !isHomePage
            ? 'bg-white/95 shadow-2xl border-blue-100/50 shadow-blue-500/10'
            : 'bg-transparent border-white/10 shadow-lg shadow-black/5'}
        `}
      >
        <div className="flex justify-between items-center h-14 sm:h-16 px-3 sm:px-6">
          {/* Logo with Website Name */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Logo Image */}
              <div className="relative">
                <img 
                  src={NavbarLogo} 
                  alt="INNANA Logo" 
                  className={`
                    w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300 
                    ${isScrolled || !isHomePage 
                      ? 'drop-shadow-lg' 
                      : 'drop-shadow-2xl'}
                  `}
                />
                {(!isScrolled && isHomePage) && (
                  <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </div>
              
              {/* Website Name */}
              <div className="hidden sm:block">
                <div className={`
                  text-lg sm:text-xl font-bold tracking-tight transition-all duration-300
                  ${isScrolled || !isHomePage 
                    ? 'text-blue-800' 
                    : 'text-white drop-shadow-lg'}
                `}>
                  INNANA
                </div>
                <div className={`
                  text-xs font-semibold tracking-wider uppercase transition-colors duration-300
                  ${isScrolled || !isHomePage ? 'text-blue-600' : 'text-white/90'}
                `}>
                  PHARMACEUTICALS
                </div>
              </div>

              {/* Mobile Website Name */}
              <div className="block sm:hidden">
                <div className={`
                  text-base font-bold tracking-tight transition-all duration-300
                  ${isScrolled || !isHomePage 
                    ? 'text-blue-800' 
                    : 'text-white drop-shadow-lg'}
                `}>
                  INNANA
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
            {navigationLinks.map(({ path, label }) => (
              <NavLink key={path} to={path}>
                {t(label)}
              </NavLink>
            ))}

            <div className="ml-4 xl:ml-8 flex items-center gap-3 xl:gap-4">
              {/* Desktop Language Switcher */}
              <div className={`
                flex items-center px-3 py-2 rounded-lg transition-all duration-300
                ${isScrolled || !isHomePage
                  ? 'bg-blue-50/50 border border-blue-100'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20'}
              `}>
                <LanguageSwitcher />
              </div>

              <Link
                to="/contact"
                className={`
                  px-4 xl:px-6 py-2 xl:py-2.5
                  text-sm font-semibold rounded-full
                  transition-all duration-300
                  transform hover:scale-105
                  hover:shadow-lg border whitespace-nowrap
                  ${isScrolled || !isHomePage
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-blue-500 hover:shadow-blue-500/30'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 hover:border-white/30 hover:shadow-white/10'}
                `}
              >
                {t('nav.contactButton')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Language Switcher */}
            <div className={`
              flex items-center px-2 py-1.5 rounded-lg transition-all duration-300
              ${isScrolled || !isHomePage
                ? 'bg-blue-50/50 border border-blue-100'
                : 'bg-white/10 backdrop-blur-sm border border-white/20'}
            `}>
              <LanguageSwitcher />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                rounded-full p-2 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isScrolled || !isHomePage 
                  ? 'text-blue-700 hover:bg-blue-50 focus:ring-blue-500' 
                  : 'text-white hover:bg-white/10 focus:ring-white/20'}
              `}
            >
              <span className="sr-only">Toggle Navigation</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            transition-all
            duration-300
            ease-in-out
            overflow-hidden
            ${isMobileMenuOpen ? 'max-h-96 opacity-100 pb-3 sm:pb-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-3 sm:px-6">
            <div className={`
              border-t pt-3 sm:pt-4 space-y-1 sm:space-y-2
              ${isScrolled || !isHomePage ? 'border-blue-100' : 'border-white/20'}
            `}>
              {navigationLinks.map(({ path, label }) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`
                      block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg 
                      transition-all duration-300 font-medium text-sm sm:text-base
                      ${isScrolled || !isHomePage 
                        ? `${isActive ? 'text-blue-800 bg-blue-100' : 'text-blue-700 hover:bg-blue-50 hover:text-blue-800'}` 
                        : `${isActive ? 'text-white bg-white/10' : 'text-white/90 hover:bg-white/10 hover:text-white'}`}
                    `}
                  >
                    {t(label)}
                  </Link>
                );
              })}
              
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {/* Mobile Language Switcher in Menu */}
                <div className="px-3 sm:px-4">
                  <div className={`
                    flex items-center justify-center p-3 rounded-lg
                    ${isScrolled || !isHomePage 
                      ? 'bg-blue-50 border border-blue-100' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'}
                  `}>
                    <LanguageSwitcher isMobile={true} />
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`
                    block px-3 sm:px-4 py-2.5 sm:py-3 
                    text-center rounded-lg font-semibold 
                    transform hover:scale-105 transition-all duration-300 
                    text-sm sm:text-base
                    ${isScrolled || !isHomePage
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
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

export default memo(Navbar);