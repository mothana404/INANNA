// components/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/White logo - no background.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={FooterLogo}
              alt="Company Logo" 
              className="h-12"
            />
            <p className="text-gray-400">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              {['about', 'products', 'research', 'careers', 'news'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(`footer.quickLinks.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Professionals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.healthcare.title')}</h3>
            <ul className="space-y-2">
              {['resources', 'documentation', 'publications', 'safety'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/healthcare/${item}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(`footer.healthcare.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
  <i className="fas fa-phone mr-2" />
  <span className="direction-ltr inline-block" style={{ direction: 'ltr' }}>
    {t('footer.contact.emergency')}
  </span>
</p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2" />
                {t('footer.contact.email')}
              </p>
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2" />
                {t('footer.contact.address')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                {t('footer.terms')}
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
                {t('footer.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;