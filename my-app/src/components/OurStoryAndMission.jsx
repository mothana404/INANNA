import React, { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

const OurStoryAndMission = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable animations on mobile
  const shouldAnimate = !shouldReduceMotion && !isMobile;

  // Static background for mobile, animated for desktop
  const backgroundOrbs = shouldAnimate ? {
    animate: {
      opacity: [0.3, 0.4, 0.3],
      transition: {
        duration: 20, // Much slower
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  } : {};

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };  
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-blue-100/20">
      {/* Background Elements - Optimized */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Use static divs on mobile, animated on desktop */}
        {!isMobile ? (
          <>
            <motion.div
              variants={backgroundOrbs}
              initial="initial"
              animate="animate"
              className="absolute top-20 left-[20%] w-72 h-72 bg-blue-200/20 rounded-full blur-2xl will-change-auto"
            />
            <motion.div
              variants={backgroundOrbs}
              initial="initial"
              animate="animate"
              className="absolute bottom-20 right-[20%] w-96 h-96 bg-blue-300/15 rounded-full blur-2xl will-change-auto"
            />
          </>
        ) : (
          // Static background for mobile
          <>
            <div className="absolute top-20 left-[20%] w-48 h-48 bg-blue-200/10 rounded-full blur-xl" />
            <div className="absolute bottom-20 right-[20%] w-64 h-64 bg-blue-300/10 rounded-full blur-xl" />
          </>
        )}

        {/* Remove pattern on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,_#4299e1_1px,_transparent_1px)] [background-size:20px_20px]" />
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            variants={contentVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Title */}
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 ${isRTL ? "font-arabic" : ""}`}>
              {t("mission.title")}
            </h2>

            {/* Subtitle */}
            <h3 className={`text-xl md:text-2xl text-blue-600 font-medium mb-8 ${isRTL ? "font-arabic" : ""}`}>
              {t("mission.subtitle")}
            </h3>

            {/* Description */}
            <p className={`text-lg md:text-xl text-gray-600 leading-relaxed mb-12 ${isRTL ? "font-arabic" : ""}`}>
              {t("mission.description")}
            </p>

            {/* Values or Key Points - Simplified for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    // Remove backdrop-blur on mobile for performance
                  className={`${
                    isMobile 
                      ? "bg-white/80 rounded-xl p-6 shadow-md" 
                      : "bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-blue-100/20"
                  }`}
                >
                  <h4 className={`text-xl font-semibold text-gray-800 mb-3 ${isRTL ? "font-arabic" : ""}`}>
                    {t(`mission.values.${index}.title`)}
                  </h4>
                  <p className={`text-gray-600 ${isRTL ? "font-arabic" : ""}`}>
                    {t(`mission.values.${index}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Line - Simplified animation */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      
      {/* Floating Elements - Desktop only */}
      {!isMobile && (
        <div className="hidden lg:block">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-16 h-16 border-2 border-blue-200/40 rounded-lg"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-10 w-12 h-12 border-2 border-blue-300/30 rounded-full"
          />
        </div>
      )}

      {/* Subtle Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
    </section>
  );
};

export default memo(OurStoryAndMission);
