import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiGlobe,
  FiAward,
  FiTrendingUp,
  FiHeart,
  FiShield,
  FiTarget,
  FiStar,
  FiMapPin,
  FiCalendar,
  FiArrowRight,
  FiPlay,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import WebsiteLayout from '../layouts/WebsiteLayout';

const AboutUsPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeLeader, setActiveLeader] = useState(0);

  const stats = [
    {
      icon: FiUsers,
      value: t('about.stats.employees.value'),
      label: t('about.stats.employees.label')
    },
    {
      icon: FiGlobe,
      value: t('about.stats.countries.value'),
      label: t('about.stats.countries.label')
    },
    {
      icon: FiAward,
      value: t('about.stats.patents.value'),
      label: t('about.stats.patents.label')
    },
    {
      icon: FiTrendingUp,
      value: t('about.stats.revenue.value'),
      label: t('about.stats.revenue.label')
    }
  ];

  const values = [
    {
      icon: FiHeart,
      title: t('about.values.care.title'),
      description: t('about.values.care.description')
    },
    {
      icon: FiShield,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: FiTarget,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: FiStar,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    }
  ];

  const leadership = [
    {
      name: t('about.leadership.ceo.name'),
      position: t('about.leadership.ceo.position'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: t('about.leadership.ceo.bio'),
      experience: t('about.leadership.ceo.experience')
    },
    {
      name: t('about.leadership.coo.name'),
      position: t('about.leadership.coo.position'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b8ac?w=400&h=400&fit=crop&crop=face',
      bio: t('about.leadership.coo.bio'),
      experience: t('about.leadership.coo.experience')
    },
    {
      name: t('about.leadership.cto.name'),
      position: t('about.leadership.cto.position'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: t('about.leadership.cto.bio'),
      experience: t('about.leadership.cto.experience')
    },
    {
      name: t('about.leadership.cfo.name'),
      position: t('about.leadership.cfo.position'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: t('about.leadership.cfo.bio'),
      experience: t('about.leadership.cfo.experience')
    }
  ];

  const timeline = [
    {
      year: '1985',
      title: t('about.timeline.founded.title'),
      description: t('about.timeline.founded.description')
    },
    {
      year: '1992',
      title: t('about.timeline.expansion.title'),
      description: t('about.timeline.expansion.description')
    },
    {
      year: '2001',
      title: t('about.timeline.ipo.title'),
      description: t('about.timeline.ipo.description')
    },
    {
      year: '2015',
      title: t('about.timeline.breakthrough.title'),
      description: t('about.timeline.breakthrough.description')
    },
    {
      year: '2020',
      title: t('about.timeline.pandemic.title'),
      description: t('about.timeline.pandemic.description')
    },
    {
      year: '2025',
      title: t('about.timeline.future.title'),
      description: t('about.timeline.future.description')
    }
  ];

  const facilities = [
    {
      location: t('about.facilities.headquarters.location'),
      type: t('about.facilities.headquarters.type'),
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
      description: t('about.facilities.headquarters.description')
    },
    {
      location: t('about.facilities.research.location'),
      type: t('about.facilities.research.type'),
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      description: t('about.facilities.research.description')
    },
    {
      location: t('about.facilities.manufacturing.location'),
      type: t('about.facilities.manufacturing.type'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: t('about.facilities.manufacturing.description')
    }
  ];

  return (
    <WebsiteLayout>
      <div className="min-h-screen bg-gradient-to-br from-teal-50/30 via-white to-teal-100/20">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-24 pb-20 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {t('about.hero.title')}
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed mb-8">
                  {t('about.hero.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    className="flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-50 transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPlay className="w-5 h-5" />
                    {t('about.hero.watchVideo')}
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-teal-700 transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('about.hero.learnMore')}
                    <FiArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
                    alt="INNANA Pharmaceuticals Building"
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="relative -mt-10 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {t('about.story.title')}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('about.story.subtitle')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                    alt="Laboratory Research"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('about.story.section1.title')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.story.section1.description')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.story.section1.mission')}
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1 space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('about.story.section2.title')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.story.section2.description')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.story.section2.vision')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                    alt="Modern Pharmaceutical Facility"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50/50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.values.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.values.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-8 shadow-lg border border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 text-center group"
                  >
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.leadership.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.leadership.subtitle')}
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {leadership.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                                        className={`cursor-pointer transition-all duration-300 ${
                      activeLeader === index 
                        ? 'transform scale-105' 
                        : 'hover:transform hover:scale-102'
                    }`}
                    onClick={() => setActiveLeader(index)}
                  >
                    <div className="text-center">
                      <div className="relative mb-4">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
                        />
                        {activeLeader === index && (
                          <div className="absolute inset-0 rounded-full border-4 border-teal-500"></div>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-teal-600 font-medium text-sm">{leader.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Active Leader Details */}
              <motion.div
                key={activeLeader}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <img
                      src={leadership[activeLeader].image}
                      alt={leadership[activeLeader].name}
                      className="w-48 h-48 rounded-2xl mx-auto object-cover shadow-lg"
                    />
                  </div>
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {leadership[activeLeader].name}
                      </h3>
                      <p className="text-teal-600 font-semibold text-lg mb-4">
                        {leadership[activeLeader].position}
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {leadership[activeLeader].bio}
                    </p>
                    <div className="bg-teal-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t('about.leadership.experience')}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {leadership[activeLeader].experience}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50/50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.timeline.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.timeline.subtitle')}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>
                
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-8"
                    >
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                        {item.year}
                      </div>
                      
                      {/* Timeline Content */}
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Facilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.facilities.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.facilities.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.location}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <FiMapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{facility.location}</span>
                      </div>
                      <h3 className="text-xl font-bold">{facility.type}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition & Awards Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50/50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.awards.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.awards.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiAward className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`about.awards.award${index}.title`)}
                  </h3>
                  <p className="text-teal-600 font-medium text-sm mb-2">
                    {t(`about.awards.award${index}.year`)}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {t(`about.awards.award${index}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('about.cta.title')}
              </h2>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                {t('about.cta.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('about.cta.joinUs')}
                  <FiArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('about.cta.contactUs')}
                  <FiArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </WebsiteLayout>
  );
};

export default AboutUsPage;