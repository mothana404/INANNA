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
            {t('global.title', 'Global Operations')}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('global.description', 
              'Delivering excellence in pharmaceutical manufacturing and distribution across continents')}
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
                  {t('global.manufacturing.title', 'Manufacturing Excellence')}
                </h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>{t('global.manufacturing.description1',
                  'Our state-of-the-art manufacturing facilities operate across strategic locations worldwide, ensuring consistent supply and quality control.')}</p>
                <p>{t('global.manufacturing.description2',
                  'Each facility is equipped with cutting-edge technology and follows stringent GMP guidelines.')}</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <div className="text-gray-600">{t('global.manufacturing.facilities', 'Manufacturing Sites')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">{t('global.manufacturing.operations', 'Operations')}</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">{t('global.manufacturing.locations', 'Key Manufacturing Locations')}</h4>
              <ul className="space-y-4">
                {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5 text-blue-600" />
                    <span>{t(`global.manufacturing.region${index + 1}`, region)}</span>
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
                {t('global.distribution.title', 'Global Distribution Network')}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">{t('global.distribution.logistics', 'Logistics Excellence')}</h4>
                <p className="text-gray-600">{t('global.distribution.logistics.description',
                  'Advanced tracking systems and temperature-controlled supply chain ensuring product integrity.')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">{t('global.distribution.partners', 'Strategic Partners')}</h4>
                <p className="text-gray-600">{t('global.distribution.partners.description',
                  'Collaboration with leading logistics providers and local distributors worldwide.')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">{t('global.distribution.compliance', 'Compliance')}</h4>
                <p className="text-gray-600">{t('global.distribution.compliance.description',
                  'Meeting international regulations for pharmaceutical transportation and storage.')}</p>
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
                  {t('global.quality.title', 'Global Quality Assurance')}
                </h3>
              </div>
              <p className="text-gray-600">{t('global.quality.description',
                'Our comprehensive quality management system ensures consistent product quality across all global operations.')}</p>
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
                    <span className="text-gray-600">{t(`global.quality.item${index + 1}`, item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-6">
                {t('global.quality.standards', 'Global Quality Standards & Achievements')}
              </h4>
              <div className="space-y-4 text-gray-600">
                <p>
                  {t('global.quality.paragraph1',
                    'INNANA Pharmaceuticals maintains the highest quality standards across all global operations, earning recognition from leading international regulatory bodies including FDA, EMA, and WHO. Our facilities consistently achieve excellence in GMP compliance and environmental sustainability.')}
                </p>
                <p>
                  {t('global.quality.paragraph2',
                    'Our commitment to quality has earned us multiple international certifications and awards. We\'ve received the prestigious Global Manufacturing Excellence Award for three consecutive years, recognizing our innovative quality management systems and continuous improvement processes.')}
                </p>
                {/* <p>
                  {t('global.quality.paragraph3',
                    'Through strategic partnerships with leading research institutions and healthcare organizations, we continuously enhance our quality control processes. Our state-of-the-art laboratories employ advanced analytical techniques and automated monitoring systems, ensuring consistent product quality across all manufacturing sites.')}
                </p> */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {/* <div className="flex items-center space-x-2 text-blue-600">
                    <span className="font-semibold">
                      {t('global.quality.certifications', 'Key Certifications:')}
                    </span>
                    <span>ISO 9001:2015</span>
                    <span>•</span>
                    <span>GMP</span>
                    <span>•</span>
                    <span>ICH Q10</span>
                  </div> */}
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