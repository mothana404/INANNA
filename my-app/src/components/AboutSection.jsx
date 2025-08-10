// components/AboutSection.jsx

import React, { memo } from "react";
import { motion } from "framer-motion";
import { FiAward, FiHeart, FiTrendingUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const StatCard = memo(({ icon: Icon, number, text }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 
                  hover:shadow-md transition duration-300">
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 
                      rounded-full flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{number}</div>
        <div className="text-sm text-gray-600">{text}</div>
      </div>
    </div>
  </div>
));

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative bg-white overflow-hidden" id="about-section">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ${isRTL ? 'font-arabic' : ''}`}>
                <span className="block">INNANA</span>
                <span className="block text-blue-600 text-3xl sm:text-4xl mt-3">
                  {t('about.subtitle', 'Advancing Healthcare Through Innovation')}
                </span>
              </h2>
              <p className={`mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ${isRTL ? 'font-arabic' : ''}`}>
                {t('about.description', 
                  'Leading the way in pharmaceutical excellence, delivering innovative solutions that improve lives across the globe.'
                )}
              </p>
            </motion.div>
          </main>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              icon={FiHeart}
              number="30+"
              text={t('about.stats.years', 'Years of Excellence')}
            />
            <StatCard 
              icon={FiTrendingUp}
              number="50+"
              text={t('about.stats.countries', 'Countries Served')}
            />
            <StatCard 
              icon={FiAward}
              number="100+"
              text={t('about.stats.products', 'Products Developed')}
            />
          </div>
        </div>
      </div> */}

      {/* Mission Statement */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:text-center"
          >
            <h3 className={`text-3xl font-bold text-gray-900 sm:text-4xl ${isRTL ? 'font-arabic' : ''}`}>
              {t('about.mission.title', 'Our Mission')}
            </h3>
            <p className={`mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {t('about.mission.description',
                'To develop and deliver innovative pharmaceutical solutions that address unmet medical needs, while maintaining the highest standards of quality, safety, and ethical practice.'
              )}
            </p>
          </motion.div>
        </div>
      </div> */}

      {/* Core Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className={`text-3xl font-bold text-gray-900 ${isRTL ? 'font-arabic' : ''}`}>
                {t('about.values.title', 'Our Core Values')}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('about.values.innovation.title', 'Innovation')}
                </h4>
                <p className="text-gray-600">
                  {t('about.values.innovation.description', 
                    'Continuously pushing boundaries to develop breakthrough solutions.'
                  )}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('about.values.quality.title', 'Quality')}
                </h4>
                <p className="text-gray-600">
                  {t('about.values.quality.description', 
                    'Maintaining the highest standards in all our products and processes.'
                  )}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('about.values.integrity.title', 'Integrity')}
                </h4>
                <p className="text-gray-600">
                  {t('about.values.integrity.description', 
                    'Operating with transparency and ethical principles.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);