import React, { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiHeart, FiUsers, FiGlobe, FiSun, FiArrowRight } from "react-icons/fi";

const ImpactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50"
      id="impact-section"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-30 transform translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-5xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Making a Difference
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming lives through innovative healthcare solutions and
            sustainable practices
          </p>
        </motion.div>

        {/* Main Impact Visual */}
        <div className="relative mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h3 className="text-3xl font-bold mb-8">
                  Global Impact Overview
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <span className="text-4xl font-bold text-blue-600">
                      10M+
                    </span>
                    <p className="text-gray-600">
                      Lives touched through healthcare initiatives
                    </p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-4xl font-bold text-blue-600">
                      50+
                    </span>
                    <p className="text-gray-600">Countries reached worldwide</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-4xl font-bold text-blue-600">
                      30%
                    </span>
                    <p className="text-gray-600">
                      Reduction in environmental impact
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] bg-blue-600">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-90" />
                <div className="relative h-full p-12 lg:p-16 text-white">
                  <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
                  <p className="text-lg mb-8 opacity-90">
                    We're dedicated to creating sustainable healthcare solutions
                    that benefit communities worldwide while protecting our
                    environment.
                  </p>
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center text-white font-semibold"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Areas */}
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {[
            {
              icon: FiHeart,
              title: "Healthcare Access",
              description:
                "Providing affordable medications and improving healthcare accessibility in underserved regions.",
              stat: "10M+ Lives Impacted",
              alignment: "left",
              image:
                "https://images.unsplash.com/photo-1704694671866-f83e0b91df09?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              icon: FiUsers,
              title: "Community Development",
              description:
                "Supporting local healthcare initiatives and educational programs for sustainable growth.",
              stat: "500+ Programs",
              alignment: "right",
              image:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              icon: FiSun,
              title: "Environmental Sustainability",
              description:
                "Implementing eco-friendly practices and reducing our environmental footprint.",
              stat: "30% Reduction",
              alignment: "left",
              image:
                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                item.alignment === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Section */}
              <div
                className={`w-full lg:w-1/2 px-4 sm:px-6 lg:px-0 ${
                  item.alignment === "right"
                    ? "lg:pl-8 xl:pl-12"
                    : "lg:pr-8 xl:pr-12"
                }`}
              >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">{item.description}</p>
                <span className="text-3xl font-bold text-blue-600 block">
                  {item.stat}
                </span>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
                <div className="h-[250px] sm:h-[280px] lg:h-[300px] bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <h3 className="text-3xl font-bold mb-6">Join Our Mission</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Together, we can create a healthier, more sustainable future for
            all.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold 
                     hover:bg-blue-700 transition-colors duration-300"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ImpactSection);
