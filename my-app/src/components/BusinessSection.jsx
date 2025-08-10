// components/BusinessSection.jsx

import React, { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FiPackage, 
  FiActivity, 
  FiGlobe, 
  FiShield,
} from "react-icons/fi";

const BusinessCard = memo(({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 
               hover:shadow-md transition-all duration-300"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-gray-50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
));

const BusinessSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

const businessAreas = [
    {
      icon: FiPackage,
      title: t('business.areas.manufacturing.title', 'Manufacturing Excellence'),
      description: t('business.areas.manufacturing.description', 
        'State-of-the-art facilities producing high-quality pharmaceutical products under strict quality control.')
    },
    {
      icon: FiActivity, // Changed from FiMicroscope
      title: t('business.areas.research.title', 'Research & Development'),
      description: t('business.areas.research.description',
        'Innovative research programs focused on developing breakthrough medications and treatments.')
    },
    {
      icon: FiGlobe,
      title: t('business.areas.distribution.title', 'Global Distribution'),
      description: t('business.areas.distribution.description',
        'Extensive distribution network ensuring our products reach patients worldwide.')
    },
    {
      icon: FiShield,
      title: t('business.areas.quality.title', 'Quality Assurance'),
      description: t('business.areas.quality.description',
        'Rigorous quality control processes meeting international standards and regulations.')
    }
];

  return (
    <section className="py-16 bg-gray-50" id="business-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('business.title', 'Our Business')}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('business.description', 
              'Delivering excellence in pharmaceutical solutions through our integrated business operations.')}
          </p>
        </motion.div>

        {/* Business Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {businessAreas.map((area, index) => (
            <BusinessCard
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>

        {/* Key Metrics */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
        >
          <h3 className={`text-2xl font-semibold text-gray-900 mb-6 text-center ${isRTL ? 'font-arabic' : ''}`}>
            {t('business.metrics.title', 'Key Business Metrics')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '500+', label: t('business.metrics.products', 'Products') },
              { number: '50+', label: t('business.metrics.markets', 'Markets') },
              { number: '5000+', label: t('business.metrics.employees', 'Employees') },
              { number: '10+', label: t('business.metrics.facilities', 'Facilities') }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{metric.number}</div>
                <div className="text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default memo(BusinessSection);