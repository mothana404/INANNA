import React, { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative bg-white" id="about-section">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#3B82F6"
              d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,67.6,24.2C65.3,36.6,51,47.3,36.5,53.9C22,60.5,7.3,63,-8.9,63.9C-25.1,64.8,-42.8,64.1,-54.6,55.3C-66.4,46.5,-72.3,29.5,-74.3,12.1C-76.3,-5.3,-74.4,-23,-65.7,-35.8C-57,-48.6,-41.5,-56.5,-27,-60.7C-12.5,-64.9,1.1,-65.4,12.8,-62.1C24.5,-58.8,39.1,-75.1,47.5,-67.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 -ml-20 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#3B82F6"
              d="M38.5,-47.1C50.9,-36.9,62.3,-25.2,65.8,-11.1C69.3,3,64.8,19.5,56.2,33.8C47.6,48.1,34.8,60.3,19.5,65.9C4.1,71.5,-13.9,70.5,-30.4,64.1C-46.9,57.7,-61.9,45.9,-69.7,29.8C-77.5,13.7,-78,-6.7,-71.1,-23.5C-64.2,-40.3,-49.8,-53.5,-34.9,-62.6C-19.9,-71.7,-4.4,-76.7,6.9,-72.8C18.2,-68.9,26.1,-57.2,38.5,-47.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`text-5xl font-extrabold leading-tight ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                <span className="block text-gray-900">
                  {t("about.header.part1")}
                </span>
                <span className="block text-blue-600">
                  {t("about.header.part2")}
                </span>
              </h1>
              <div className="mt-6 h-1 w-20 bg-blue-600"></div>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t("about.description")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium 
                         hover:bg-blue-700 transition-colors duration-300"
              >
                {t("about.learnMore")}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                <img
                  src="https://images.unsplash.com/photo-1626420925443-c6421f87daa9?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={t("about.imageAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("about.vision.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("about.vision.description")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("about.values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("about.values.innovation.title"),
                description: t("about.values.innovation.description"),
              },
              {
                title: t("about.values.excellence.title"),
                description: t("about.values.excellence.description"),
              },
              {
                title: t("about.values.integrity.title"),
                description: t("about.values.integrity.description"),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);
