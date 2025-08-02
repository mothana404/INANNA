import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const quickLinks = [
    { path: '/about', label: 'footer.quickLinks.about' },
    { path: '/products', label: 'footer.quickLinks.products' },
    { path: '/research', label: 'footer.quickLinks.research' },
    { path: '/careers', label: 'footer.quickLinks.careers' },
    { path: '/news', label: 'footer.quickLinks.news' },
  ];

  const healthcareLinks = [
    { path: '/medical-resources', label: 'footer.healthcare.resources' },
    { path: '/documentation', label: 'footer.healthcare.documentation' },
    { path: '/publications', label: 'footer.healthcare.publications' },
    { path: '/safety', label: 'footer.healthcare.safety' },
  ];

  const legalLinks = [
    { path: '/privacy', label: 'footer.privacy' },
    { path: '/terms', label: 'footer.terms' },
    { path: '/sitemap', label: 'footer.sitemap' },
  ];

  return (
    <footer className={`relative mt-auto ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800"></div>
      
      {/* Darker teal overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
      
      {/* Main footer content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            
            {/* Company Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                {/* Logo Section */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-400 rounded-lg transform rotate-45 flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <div className="w-3 h-3 bg-teal-800 rounded-full transform -rotate-45"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent tracking-tight">
                      INNANA
                    </h3>
                    <p className="text-xs font-bold text-teal-200 tracking-widest uppercase">
                      PHARMACEUTICALS
                    </p>
                  </div>
                </div>
                
                <p className="text-teal-50/95 leading-relaxed text-base max-w-2xl">
                  {t('footer.companyDescription')}
                </p>
                
                {/* Tagline */}
                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-12 h-px bg-teal-300"></div>
                  <p className="text-teal-200 font-semibold text-sm uppercase tracking-wider">
                    {t('footer.tagline', 'We Genuinely Care')}
                  </p>
                  <div className="flex-1 h-px bg-teal-400/50"></div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white tracking-wide pb-3 border-b-2 border-teal-400/60 flex items-center">
                <span className="w-2 h-4 bg-teal-300 rounded-full mr-3"></span>
                {t('footer.quickLinks.title')}
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-teal-100 hover:text-teal-200 font-medium transition-all duration-300 
                               block py-2 hover:translate-x-3 rtl:hover:-translate-x-3 transform
                               hover:pl-4 rtl:hover:pr-4 rtl:hover:pl-0 group relative
                               hover:bg-teal-600/30 rounded-md px-2"
                    >
                      <span className="relative">
                        {t(link.label)}
                        <span className="absolute -left-4 rtl:-right-4 rtl:left-auto top-1/2 transform -translate-y-1/2 
                                       text-teal-300 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
                          ▶
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Healthcare Professionals */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white tracking-wide pb-3 border-b-2 border-teal-400/60 flex items-center">
                <span className="w-2 h-4 bg-teal-300 rounded-full mr-3"></span>
                {t('footer.healthcare.title')}
              </h4>
              <ul className="space-y-4">
                {healthcareLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-teal-100 hover:text-teal-200 font-medium transition-all duration-300 
                               block py-2 hover:translate-x-3 rtl:hover:-translate-x-3 transform
                               hover:pl-4 rtl:hover:pr-4 rtl:hover:pl-0 group relative
                               hover:bg-teal-600/30 rounded-md px-2"
                    >
                      <span className="relative">
                        {t(link.label)}
                        <span className="absolute -left-4 rtl:-right-4 rtl:left-auto top-1/2 transform -translate-y-1/2 
                                       text-teal-300 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
                          ▶
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information Section */}
          {/* <div className="border-t border-teal-400/30 pt-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-4 text-center md:text-left">
                <div className="bg-teal-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-teal-800/70 transition-all duration-300 border border-teal-500/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/20">
                  <h5 className="text-base font-bold text-teal-200 uppercase tracking-wide flex items-center justify-center md:justify-start mb-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    Emergency
                  </h5>
                  <div className="space-y-2">
                    <p className="text-sm text-teal-300 font-medium">24/7 Emergency Line</p>
                    <a href={`tel:${t('footer.contact.emergency')}`} 
                       className="text-white font-bold hover:text-teal-200 transition-colors text-lg block">
                      {t('footer.contact.emergency')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <div className="bg-teal-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-teal-800/70 transition-all duration-300 border border-teal-500/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/20">
                  <h5 className="text-base font-bold text-teal-200 uppercase tracking-wide flex items-center justify-center md:justify-start mb-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    Email
                  </h5>
                  <div className="space-y-2">
                    <p className="text-sm text-teal-300 font-medium">General Inquiries</p>
                    <a href={`mailto:${t('footer.contact.email')}`} 
                       className="text-white font-bold hover:text-teal-200 transition-colors block">
                      {t('footer.contact.email')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <div className="bg-teal-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-teal-800/70 transition-all duration-300 border border-teal-500/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/20">
                  <h5 className="text-base font-bold text-teal-200 uppercase tracking-wide flex items-center justify-center md:justify-start mb-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </div>
                    Location
                  </h5>
                  <div className="space-y-2">
                    <p className="text-sm text-teal-300 font-medium">Global Headquarters</p>
                    <address className="text-white font-medium not-italic leading-relaxed">
                      {t('footer.contact.address')}
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Bottom Section */}
          <div className="border-t border-teal-400/30 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-teal-200 font-medium">
                  {t('footer.copyright')}
                </p>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                {legalLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path} 
                    className="text-teal-200 hover:text-teal-100 font-medium transition-colors duration-300 
                             text-sm border-r border-teal-400/30 pr-6 last:border-r-0 last:pr-0
                             hover:translate-y-0.5 transform"
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Monochromatic teal bottom accent */}
            <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full"></div>
            <div className="mt-1 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;