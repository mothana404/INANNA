import React, { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const OurStoryAndMission = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [hasAnimated, setHasAnimated] = useState(false);

  // Single intersection observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('story-mission-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Single simple animation - only on visibility
  const fadeInVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="story-mission-section"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50/40 via-white to-blue-100/30"
    >
      {/* Simplified Background - Static for performance */}
      <div className="absolute inset-0 z-0">
        {/* Static gradient orbs - no animation */}
        <div className="absolute top-20 left-[15%] w-64 h-64 bg-blue-200/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-blue-300/12 rounded-full blur-2xl" />
        
        {/* Simplified dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Blue accent elements for theme enhancement */}
      <div className="absolute inset-0 z-[1]">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-400/8 to-transparent" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-400/8 to-transparent" />
        
        {/* Side blue bars */}
        <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-blue-400/20 via-blue-500/30 to-blue-400/20 rounded-r" />
        <div className="absolute right-0 bottom-1/4 w-1 h-32 bg-gradient-to-b from-blue-400/20 via-blue-500/30 to-blue-400/20 rounded-l" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            variants={fadeInVariants}
            initial="initial"
            animate={hasAnimated ? "animate" : "initial"}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Title with blue accent */}
            <motion.div variants={itemVariants} className="relative">
              <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 ${isRTL ? "font-arabic" : ""}`}>
                {t("mission.title")}
              </h2>
              {/* Blue underline accent */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
            </motion.div>

            {/* Subtitle */}
            <motion.h3
              variants={itemVariants}
              className={`text-xl md:text-2xl text-blue-600 font-medium mb-8 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("mission.subtitle")}
            </motion.h3>

            {/* Description with blue accent border */}
            <motion.div variants={itemVariants} className="relative">
              <p className={`text-lg md:text-xl text-gray-600 leading-relaxed mb-12 ${isRTL ? "font-arabic" : ""}`}>
                {t("mission.description")}
              </p>
              {/* Subtle blue side accents */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
            </motion.div>

            {/* Enhanced Values Cards */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-blue-100/25 border border-blue-100/30 hover:border-blue-200/50 transition-colors duration-300"
                  >
                    {/* Blue accent number */}
                    <div className="absolute -top-3 -right-3 w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                      {index}
                    </div>
                    
                    {/* Blue accent dot */}
                    <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-200" />
                    
                    <h4 className={`text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-200 ${isRTL ? "font-arabic" : ""}`}>
                      {t(`mission.values.${index}.title`)}
                    </h4>
                    <p className={`text-gray-600 group-hover:text-gray-700 transition-colors duration-200 ${isRTL ? "font-arabic" : ""}`}>
                      {t(`mission.values.${index}.description`)}
                    </p>
                    
                    {/* Bottom blue accent line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-12 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Decorative Line */}
            <motion.div variants={itemVariants} className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full shadow-sm" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Blue Theme Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-blue-50/20 to-transparent" />
      
      {/* Enhanced Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
};

export default memo(OurStoryAndMission);