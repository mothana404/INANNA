import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavbarLogo from '../assets/images/222527428.png';

const FooterLink = memo(({ to, children }) => (
  <Link 
    to={to} 
    className="text-gray-600 hover:text-blue-600 font-medium transition-all duration-300 
             block py-1.5 sm:py-2 hover:translate-x-2 sm:hover:translate-x-3 rtl:hover:-translate-x-2 rtl:sm:hover:-translate-x-3 transform
             hover:pl-3 sm:hover:pl-4 rtl:hover:pr-3 rtl:sm:hover:pr-4 rtl:hover:pl-0 group relative
             hover:bg-blue-50 rounded-md px-1 sm:px-2 text-sm sm:text-base
             active:bg-blue-100 active:scale-95"
  >
    <span className="relative">
      {children}
      <span className="absolute -left-3 sm:-left-4 rtl:-right-3 rtl:sm:-right-4 rtl:left-auto top-1/2 transform -translate-y-1/2 
                     text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs sm:text-sm">
        ▶
      </span>
    </span>
  </Link>
));

const FooterSection = memo(({ title, children }) => (
  <div className="space-y-4 sm:space-y-6">
    <h4 className="text-base sm:text-lg font-bold text-gray-800 tracking-wide pb-2 sm:pb-3 border-b-2 border-blue-100 flex items-center">
      <span className="w-1.5 sm:w-2 h-3 sm:h-4 bg-blue-500 rounded-full mr-2 sm:mr-3"></span>
      {title}
    </h4>
    {children}
  </div>
));

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const quickLinks = [
    { path: '/about', label: 'footer.quickLinks.about' },
    { path: '/products', label: 'footer.quickLinks.products' },
    { path: '/research', label: 'footer.quickLinks.research' },
    // { path: '/careers', label: 'footer.quickLinks.careers' },
    { path: '/news', label: 'footer.quickLinks.news' },
  ];

  const healthcareLinks = [
    { path: '/medical-resources', label: 'footer.healthcare.resources' },
    { path: '/documentation', label: 'footer.healthcare.documentation' },
    { path: '/publications', label: 'footer.healthcare.publications' },
    { path: '/safety', label: 'footer.healthcare.safety' },
  ];

//   const legalLinks = [
//     { path: '/privacy', label: 'footer.privacy' },
//     { path: '/terms', label: 'footer.terms' },
//     { path: '/sitemap', label: 'footer.sitemap' },
//   ];

  return (
    <footer className={`relative mt-auto bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-7 sm:mb-11">
            
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                {/* Logo Section */}
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <img 
                    src={NavbarLogo} 
                    alt="INNANA Pharmaceuticals Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    loading="lazy"
                  />
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                      INNANA
                    </h3>
                    <p className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                      PHARMACEUTICALS
                    </p>
                  </div>
                </div>
                
                <p className={`text-gray-600 leading-relaxed text-sm sm:text-base max-w-2xl ${isRTL ? 'font-arabic' : ''}`}>
                  {t('footer.companyDescription')}
                </p>
                
                {/* Tagline */}
                <div className="flex items-center space-x-2 sm:space-x-3 pt-2">
                  <div className="w-8 sm:w-12 h-px bg-blue-200"></div>
                  <p className={`text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider ${isRTL ? 'font-arabic' : ''}`}>
                    {t('footer.tagline')}
                  </p>
                  <div className="flex-1 h-px bg-blue-100"></div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <FooterSection title={t('footer.quickLinks.title')}>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <FooterLink to={link.path}>
                      {t(link.label)}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Healthcare Links */}
            <FooterSection title={t('footer.healthcare.title')}>
              <ul className="space-y-2 sm:space-y-3">
                {healthcareLinks.map((link, index) => (
                  <li key={index}>
                    <FooterLink to={link.path}>
                      {t(link.label)}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-100 pt-6 sm:pt-8">
            <div className="flex flex-col space-y-4 sm:space-y-6 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
              
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className={`text-gray-500 font-medium text-sm sm:text-base ${isRTL ? 'font-arabic' : ''}`}>
                  {t('footer.copyright')}
                </p>
              </div>
              
              {/* Legal Links */}
              {/* <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 lg:gap-6">
                {legalLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path} 
                    className={`text-gray-500 hover:text-blue-600 font-medium transition-all duration-300 
                             text-sm border-b border-transparent hover:border-blue-400 pb-1
                             hover:translate-y-0.5 transform text-center sm:text-left
                             active:scale-95 ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </div> */}
            </div>
            
            {/* Bottom Accent */}
            {/* <div className="mt-6 sm:mt-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <div className="mt-1 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div> */}
          </div>
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>
    </footer>
  );
};

export default memo(Footer);