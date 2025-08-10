import React, { useEffect, useRef, memo } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, useAnimation } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
};

const WhyChooseUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref, controls } = useScrollAnimation(0.1);

  // List of key points
  const points = [
    "quality",
    "research",
    "global",
    "products",
    "support",
    "sustainability",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Stats data
  const stats = [
    { value: "30+", label: isRTL ? "سنوات خبرة" : "Years Experience" },
    { value: "500+", label: isRTL ? "منتج" : "Products" },
    { value: "50+", label: isRTL ? "دولة" : "Countries" },
    { value: "99.9%", label: isRTL ? "رضا العملاء" : "Client Satisfaction" },
  ];

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.7 }}
            className={`relative hidden md:block ${isRTL ? "lg:order-2" : ""}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1740592755404-a9ae4c88b1a0?q=80&w=1170&auto=format&fit=crop"
                alt="Pharmaceutical Laboratory"
                className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className={`${isRTL ? "lg:order-1" : ""}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("whyChooseUs.title")}
              </h2>
              <p 
                className={`text-lg text-blue-600 font-medium ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("whyChooseUs.subtitle")}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg text-gray-600 leading-relaxed mb-8 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("whyChooseUs.description")}
            </motion.p>

            {/* Points List */}
            <motion.ul className="space-y-3 mb-8">
              {points.map((point) => (
                <motion.li
                  key={point}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span 
                    className={`text-gray-700 leading-relaxed ${
                      isRTL ? "font-arabic" : ""
                    }`}
                  >
                    {t(`whyChooseUs.points.${point}`)}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div 
                    className={`text-sm text-gray-600 ${
                      isRTL ? "font-arabic" : ""
                    }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(WhyChooseUs);