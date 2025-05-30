// src/components/website/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import NavbarLogo from '../../assets/images/Black logo - no background.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img
              src={NavbarLogo}
              alt="Logo"
              className={`h-16 w-auto transition-all duration-300 ${
                isScrolled || !isHomePage ? 'brightness-100' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className={`nav-link ${
                isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors duration-300`}
            >
              {t('nav.home', 'Home')}
            </Link>
            <Link
              to="/products"
              className={`nav-link ${
                isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors duration-300`}
            >
              {t('nav.products', 'products')}
            </Link>
            <Link
              to="/global-operations"
              className={`nav-link ${
                isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors duration-300`}
            >
                {t('nav.globalOperations', 'Global Operations')}
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors duration-300`}
            >
                {t('nav.aboutUs', 'About Us')}
            </Link>
            {/* <Link
              to="/careers"
              className={`nav-link ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors duration-300`}
            >
              Careers
            </Link> */}
            <Link
              to="/investors"
              className={`nav-link ${
                isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              } hover:text-blue-600 transition-colors duration-300`}
            >
                {t('nav.investors', 'Investors')}
            </Link>

            {/* Right side items */}
            <div className="flex items-center gap-4">
              {/* Search Icon */}
              {/* <button 
                className={`${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-600 transition-colors duration-300`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button> */}

              <LanguageSwitcher />

              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                {t('nav.contactButton', 'Contact Us')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg
              className={`w-6 h-6 ${
                isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          } `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t('nav.home', 'Home')}
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t('nav.products', 'products')}
            </Link>
            <Link
              to="/global-operations"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t('nav.globalOperations', 'Global Operations')}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t('nav.aboutUs', 'About Us')}
            </Link>
            {/* <Link
              to="/careers"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              Careers
            </Link> */}
            <Link
              to="/investors"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t('nav.investors', 'Investors')}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md"
            >
              {t('nav.contactButton', 'Contact Us')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;