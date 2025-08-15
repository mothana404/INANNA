import React, { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FiPackage,
  FiActivity,
  FiGlobe,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const StatisticItem = memo(({ number, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-center"
  >
    <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </motion.div>
));

const BusinessSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const FeatureCard = memo(({ icon: Icon, title, description, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div
        className="absolute inset-0 bg-blue-50 rounded-3xl transform 
                    group-hover:scale-105 transition-transform duration-300"
      />
      <div className="relative p-8 flex flex-col h-full">
        <div className="flex items-center space-x-4 mb-6 gap-2">
          <div
            className="p-4 bg-white rounded-2xl shadow-md group-hover:bg-blue-600 
                      transition-colors duration-300"
          >
            <Icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <motion.button
          whileHover={{ x: 10 }}
          className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
        >
          {t("business.learnMore")}
          <FiArrowRight className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  ));

  const businessAreas = [
    {
      icon: FiPackage,
      title: t("business.areas.manufacturing.title"),
      description: t("business.areas.manufacturing.description"),
    },
    {
      icon: FiActivity,
      title: t("business.areas.research.title"),
      description: t("business.areas.research.description"),
    },
    {
      icon: FiGlobe,
      title: t("business.areas.distribution.title"),
      description: t("business.areas.distribution.description"),
    },
    {
      icon: FiShield,
      title: t("business.areas.quality.title"),
      description: t("business.areas.quality.description"),
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="business-section">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50 rounded-full 
                       transform -translate-x-1/2 opacity-30"
        />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full 
                       transform translate-x-1/2 opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2
            className={`text-4xl font-bold text-gray-900 mb-6 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            <span className="block">{t("business.header.part1")}</span>
            <span className="block text-blue-600">
              {t("business.header.part2")}
            </span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6" />
          <p
            className={`text-xl text-gray-600 leading-relaxed ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("business.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessAreas.map((area, index) => (
            <FeatureCard
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t("business.cta.title")}
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium
                     hover:bg-blue-700 transition-colors duration-300"
          >
            {t("business.cta.button")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(BusinessSection);
