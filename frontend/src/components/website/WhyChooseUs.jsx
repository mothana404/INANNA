// components/website/WhyChooseUs.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      titleKey: 'whyChooseUs.research.title',
      descriptionKey: 'whyChooseUs.research.title',
    },
    {
      titleKey: 'whyChooseUs.quality.title',
      descriptionKey: 'whyChooseUs.quality.description',
    },
    {
      titleKey: 'whyChooseUs.impact.title',
      descriptionKey: 'whyChooseUs.impact.description',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.02,
      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            {t('whyChooseUs.title', 'Why Partner with MedPharma')}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('whyChooseUs.subtitle', 'We deliver innovative, high-quality pharmaceutical solutions with a global impact.')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-white rounded-lg p-6 border border-transparent hover:border-blue-100 transition-all duration-300 overflow-hidden"
              aria-labelledby={`feature-${index}`}
            >
              {/* Creative Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              <h3
                id={`feature-${index}`}
                className="text-lg font-semibold text-blue-900 mb-2"
              >
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(feature.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#about"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            aria-label={t('whyChooseUs.learnMore', 'Discover More About MedPharma')}
          >
            {t('whyChooseUs.learnMore', 'Discover More')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;