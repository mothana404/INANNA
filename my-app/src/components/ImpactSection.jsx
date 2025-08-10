// components/ImpactSection.jsx

import React, { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FiHeart, 
  FiUsers, 
  FiGlobe, 
  FiSun 
} from "react-icons/fi";

const ImpactItem = memo(({ icon: Icon, title, description, stats }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start space-x-6 p-4 border-b border-gray-100 last:border-b-0"
  >
    <div className="flex-shrink-0">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <div className="flex-grow">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="text-2xl font-bold text-blue-600">{stats}</span>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </motion.div>
));

const ImpactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-16 bg-white" id="impact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('impact.title', 'Our Impact')}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('impact.description', 
              'Making a meaningful difference in healthcare and communities worldwide')}
          </p>
        </motion.div>

        {/* Impact Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Main Impact Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8"
          >
            <h3 className={`text-2xl font-semibold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('impact.overview.title', 'Transforming Healthcare Globally')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('impact.overview.description1',
                'Through innovative pharmaceutical solutions and strategic initiatives, we\'re making healthcare more accessible and sustainable for communities worldwide.')}
            </p>
            <p className="text-gray-600">
              {t('impact.overview.description2',
                'Our commitment extends beyond medicine to encompass environmental responsibility and community development, ensuring a holistic approach to global health.')}
            </p>
          </motion.div>

          {/* Right Column - Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <div className="space-y-6">
              <ImpactItem
                icon={FiHeart}
                title={t('impact.healthcare.title', 'Healthcare Access')}
                description={t('impact.healthcare.description', 
                  'Providing affordable medications to underserved communities')}
                stats={t('impact.healthcare.stats', '10M+')}
              />
              <ImpactItem
                icon={FiUsers}
                title={t('impact.community.title', 'Community Development')}
                description={t('impact.community.description', 
                  'Supporting local healthcare initiatives and education programs')}
                stats={t('impact.community.stats', '500+')}
              />
              <ImpactItem
                icon={FiSun}
                title={t('impact.environmental.title', 'Sustainability')}
                description={t('impact.environmental.description', 
                  'Implementing sustainable manufacturing practices')}
                stats={t('impact.environmental.stats', '30%')}
              />
              <ImpactItem
                icon={FiGlobe}
                title={t('impact.global.title', 'Global Reach')}
                description={t('impact.global.description', 
                  'Participating in worldwide health programs')}
                stats={t('impact.global.stats', '50+')}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(ImpactSection);