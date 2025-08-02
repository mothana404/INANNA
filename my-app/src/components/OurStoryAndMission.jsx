import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const OurStoryAndMission = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-teal-50/30 via-white to-teal-100/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs - Teal Theme */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-[20%] w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-[20%] w-96 h-96 bg-teal-300/15 rounded-full blur-3xl"
        />

        {/* Additional Teal Orbs */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-[10%] w-48 h-48 bg-teal-400/10 rounded-full blur-2xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />

        {/* Subtle Teal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/5 to-white/20" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("mission.title")}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t("mission.description")}
            </motion.p>

            {/* Decorative Line - Teal Theme */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full shadow-sm shadow-teal-500/20"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      
      {/* Floating Shapes - Teal Theme */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border-3 border-teal-200/40 rounded-lg"
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 border-3 border-teal-300/30 rounded-full"
        animate={{
          rotate: -360,
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-1/3 right-[15%] w-8 h-8 bg-teal-400/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[15%] w-6 h-6 bg-teal-500/15 rounded-full"
        animate={{
          x: [0, 15, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* Subtle Teal Accent Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      />
    </section>
  );
};

export default OurStoryAndMission;