// components/GlobalOperationsSection.jsx

import React, { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FiGlobe, 
  FiMapPin, 
  FiTruck, 
  FiActivity,
  FiServer
} from "react-icons/fi";

const GlobalOperationsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="global-operations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FiGlobe className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('global.title')}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('global.description')}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Manufacturing Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiServer className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('global.manufacturing.title')}
                </h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>{t('global.manufacturing.description1')}</p>
                <p>{t('global.manufacturing.description2')}</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <div className="text-gray-600">{t('global.manufacturing.facilities')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">{t('global.manufacturing.operations')}</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">{t('global.manufacturing.locations')}</h4>
              <ul className="space-y-4">
                {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5 text-blue-600" />
                    <span>{t(`global.manufacturing.region${index + 1}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Distribution Network */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-6">
              <FiTruck className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                {t('global.distribution.title')}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">{t('global.distribution.logistics')}</h4>
                <p className="text-gray-600">{t('global.distribution.logistics.description')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">{t('global.distribution.partners')}</h4>
                <p className="text-gray-600">{t('global.distribution.partners.description')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">{t('global.distribution.compliance')}</h4>
                <p className="text-gray-600">{t('global.distribution.compliance.description')}</p>
              </div>
            </div>
          </motion.div>

          {/* Quality Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiActivity className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('global.quality.title')}
                </h3>
              </div>
              <p className="text-gray-600">{t('global.quality.description')}</p>
              <ul className="space-y-4">
                {[
                  'ISO 9001:2015 Certified Operations',
                  'Regular Quality Audits',
                  'Advanced Testing Facilities',
                  'Continuous Monitoring Systems'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm">{index + 1}</span>
                    </span>
                    <span className="text-gray-600">{t(`global.quality.item${index + 1}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-6">
                {t('global.quality.standards')}
              </h4>
              <div className="space-y-4 text-gray-600">
                <p>
                  {t('global.quality.paragraph1')}
                </p>
                <p>
                  {t('global.quality.paragraph2')}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(GlobalOperationsSection);