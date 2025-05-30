// components/website/OurStoryAndMission.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, FlaskConical, Users } from 'lucide-react';
import Image from '../../assets/images/photo1592323818181f9b967ff537c.avif';

const OurStoryAndMission = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: t('ourStory.values.value1.title', 'Patient-First'),
      description: t('ourStory.values.value1.description', 'Every innovation prioritizes patient health and well-being.'),
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
      title: t('ourStory.values.value2.title', 'Research-Driven'),
      description: t('ourStory.values.value2.description', 'Cutting-edge science fuels our drug development.'),
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t('ourStory.values.value3.title', 'Global Collaboration'),
      description: t('ourStory.values.value3.description', 'Partnerships amplify our impact worldwide.'),
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
            {t('ourStory.label', 'Who We Are')}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-blue-900">
            {t('ourStory.mainTitle', 'Transforming Lives Through Medicine')}
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            {t('ourStory.subtitle', 'MedPharma pioneers innovative therapies to address global health challenges.')}
          </p>
        </motion.div>

        {/* Story Section with Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src={Image}
              alt={t('ourStory.imageAlt', 'MedPharma research laboratory')}
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              {t('ourStory.story.title', 'Our Journey')}
            </h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                {t('ourStory.story.p1', 'Established in 2020, MedPharma was born from a vision to revolutionize healthcare through innovative pharmaceuticals. Our founders, a team of scientists and healthcare experts, identified critical gaps in treatment options for chronic and infectious diseases, sparking our mission to deliver life-changing therapies.')}
              </p>
              <p>
                {t('ourStory.story.p2', 'From our first breakthrough in targeted drug delivery systems, we’ve grown into a global leader with state-of-the-art laboratories and a robust pipeline of 10+ drugs in clinical trials. Our commitment to rigorous research and patient-centric solutions drives every milestone, from securing 15 patents to partnering with top medical institutions worldwide.')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission and Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">
            {t('ourStory.mission.title', 'Our Mission & Values')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
                aria-labelledby={`value-${index}`}
              >
                <div className="flex items-center mb-3">
                  {value.icon}
                  <h4
                    id={`value-${index}`}
                    className="ml-3 text-lg font-semibold text-blue-900"
                  >
                    {value.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            {t('ourStory.cta.title', 'Join Our Mission')}
          </h3>
          <p className="text-gray-600 text-sm mb-6 max-w-xl mx-auto">
            {t('ourStory.cta.description', 'Partner with us to advance healthcare innovation and improve lives globally.')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            aria-label={t('ourStory.cta.button1', 'Get Involved')}
          >
            {t('ourStory.cta.button1', 'Get Involved')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStoryAndMission;