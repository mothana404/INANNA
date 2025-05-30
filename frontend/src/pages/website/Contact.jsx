// pages/Contact.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactInfo from "../../components/website/ContactInfo";
import ContactForm from "../../components/website/ContactForm";
import GlobalOffices from "../../components/website/GlobalOffices";
import Navbar from "../../components/website/Navbar";
import Footer from "../../components/website/Footer";
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      title: t('contact.info.emergency.title', 'Emergency Contact'),
      content: '+1 (800) 123-4567',
      description: t('contact.info.emergency.description', '24/7 Support Line'),
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      title: t('contact.info.email.title', 'Email Us'),
      content: 'info@medpharma.com',
      description: t('contact.info.email.description', 'Response within 24 hours'),
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: t('contact.info.visit.title', 'Visit Us'),
      content: '123 Health St, MedCity, MC 12345',
      description: t('contact.info.visit.description', 'Mon-Fri, 9 AM - 5 PM'),
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-10">
        {/* Hero Section */}
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            {t('contact.info.title', 'Get in Touch')}
          </h2>
          <p className="text-sm text-gray-600 max-w-xl">
            {t('contact.info.description', 'Connect with us for inquiries, partnerships, or support.')}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-blue-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              aria-labelledby={`contact-method-${index}`}
            >
              {/* Creative Gradient Underline */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></div>
              <div className="flex items-start space-x-3 group">
                <div className="flex-shrink-0">{method.icon}</div>
                <div>
                  <h3
                    id={`contact-method-${index}`}
                    className="text-base font-semibold text-blue-900"
                  >
                    {method.title}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {method.content}
                  </p>
                  <p className="text-gray-500 text-xs">{method.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 rounded-lg p-4 mt-6"
        >
          <h3 className="text-base font-semibold text-blue-900 mb-1">
            {t('contact.info.medicalSupport', 'Medical Information Support')}
          </h3>
          <p className="text-blue-800 text-sm">
            {t('contact.info.medicalSupportDesc', 'Healthcare professionals can access our dedicated medical information service.')}
          </p>
          <a
            href="#medical-info"
            className="inline-flex items-center text-blue-600 text-sm font-medium mt-2 hover:text-blue-700"
            aria-label={t('contact.info.learnMore', 'Learn More')}
          >
            {t('contact.info.learnMore', 'Learn More')}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
          </div>
        </div>

        <GlobalOffices />
      </div>
      <Footer />
    </>
  );
};

export default Contact;