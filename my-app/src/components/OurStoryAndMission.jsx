import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const OurStoryAndMission = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50/40 via-white to-blue-100/30">
      {/* Blue accent elements for theme enhancement */}
      <div className="absolute inset-0">
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
          <div
            className="text-center space-y-8"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Title with blue accent */}
            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 ${isRTL ? "font-arabic" : ""}`}>
                {t("mission.title")}
              </h2>
              {/* Blue underline accent */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
            </div>

            {/* Subtitle */}
            <h3 className={`text-xl md:text-2xl text-blue-600 font-medium mb-8 ${isRTL ? "font-arabic" : ""}`}>
              {t("mission.subtitle")}
            </h3>

            {/* Description with blue accent border */}
            <div className="relative">
              <p className={`text-lg md:text-xl text-gray-600 leading-relaxed mb-12 ${isRTL ? "font-arabic" : ""}`}>
                {t("mission.description")}
              </p>
              {/* Subtle blue side accents */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
            </div>

            {/* Enhanced Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-blue-100/25 border  border-blue-200/50 hover:shadow-blue-200/30 transition-all duration-300"
                >
                  
                  <h4 className={`text-xl font-semibold mb-3 text-blue-800 transition-colors duration-200 ${isRTL ? "font-arabic" : ""}`}>
                    {t(`mission.values.${index}.title`)}
                  </h4>
                  <p className={` text-gray-700 transition-colors duration-200 ${isRTL ? "font-arabic" : ""}`}>
                    {t(`mission.values.${index}.description`)}
                  </p>
                  
                  {/* Bottom blue accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-12 transition-all duration-300" />
                </div>
              ))}
            </div>

            {/* Enhanced Decorative Line */}
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Blue Theme Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-blue-50/20 to-transparent" />
      
      {/* Enhanced Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      {/* Blue corner details */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-400/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-400/30" />
    </section>
  );
};

export default memo(OurStoryAndMission);