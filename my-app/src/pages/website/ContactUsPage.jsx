// src/pages/website/ContactUsPage.jsx
import React, { useState } from "react";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiAlertCircle,
  FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";
import WebsiteLayout from "../../layouts/WebsiteLayout";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <WebsiteLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-3">{t('ContactUsPage.title', 'Contact Us')}</h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
                {t('ContactUsPage.subtitle', "We're here to help and answer any questions you might have. Please feel free to reach out to us")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 -mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: FiPhone,
                  title: t('ContactUsPage.PhoneCards.title', "Phone"),
                  content: t('ContactUsPage.PhoneCards.number', "+1 (555) 123-4567"),
                  subContent: t('ContactUsPage.PhoneCards.time', "Mon-Fri, 9AM-6PM"),
                },
                {
                  icon: FiMail,
                  title: t('ContactUsPage.EmailCards.title', "Email"),
                  content: t('ContactUsPage.EmailCards.email', "contact@medpharm.com"),
                  subContent: t('ContactUsPage.EmailCards.time', "24/7 Support Available"),
                },
                {
                  icon: FiMapPin,
                  title: t('ContactUsPage.EmailCards.title', "Address"),
                  content: t('ContactUsPage.EmailCards.address', "123 Medical Plaza, NY"),
                  subContent: t('ContactUsPage.EmailCards.location', "Main Office Location"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-50 p-3 rounded-full flex-shrink-0">
                      <item.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {item.content}
                      </p>
                      <p className="text-xs text-gray-500">{item.subContent}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Form Side */}
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <FiMessageSquare className="w-5 h-5 mr-2 text-gray-700" />
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={() => handleBlur("name")}
                          className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-gray-400 
                            transition-all duration-200 pl-10 text-sm
                            ${focused.name ? "bg-white" : ""}`}
                          placeholder="Full Name"
                          required
                        />
                        <FiUser
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                          transition-colors duration-200
                          ${focused.name ? "text-gray-700" : "text-gray-400"}`}
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={() => handleBlur("email")}
                          className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-gray-400 
                            transition-all duration-200 pl-10 text-sm
                            ${focused.email ? "bg-white" : ""}`}
                          placeholder="Email Address"
                          required
                        />
                        <FiMail
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                          transition-colors duration-200
                          ${focused.email ? "text-gray-700" : "text-gray-400"}`}
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={() => handleBlur("phone")}
                        className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md 
                          focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-gray-400 
                          transition-all duration-200 pl-10 text-sm
                          ${focused.phone ? "bg-white" : ""}`}
                        placeholder="Phone Number"
                      />
                      <FiPhone
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                        transition-colors duration-200
                        ${focused.phone ? "text-gray-700" : "text-gray-400"}`}
                      />
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus("subject")}
                        onBlur={() => handleBlur("subject")}
                        className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md 
                          focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-gray-400 
                          transition-all duration-200 pl-10 text-sm
                          ${focused.subject ? "bg-white" : ""}`}
                        placeholder="Subject"
                        required
                      />
                      <FiAlertCircle
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                        transition-colors duration-200
                        ${focused.subject ? "text-gray-700" : "text-gray-400"}`}
                      />
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={() => handleBlur("message")}
                        rows="4"
                        className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md 
                          focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-gray-400 
                          transition-all duration-200 text-sm resize-none
                          ${focused.message ? "bg-white" : ""}`}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full bg-gray-800 text-white py-2.5 px-4 rounded-md hover:bg-gray-600 
                        transition-colors duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4" />
                    </motion.button>
                  </form>
                </div>

                {/* Info Side */}
                <div className="bg-gray-50 p-8 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <FiClock className="w-5 h-5 mr-2" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm pb-2 border-b border-gray-200 last:border-0"
                      >
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="text-gray-900 font-medium">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Additional Information
                    </h3>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        For urgent matters, please contact our 24/7 support
                        line.
                      </p>
                      <p>Response Time: Within 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-16"></div>
      </div>
    </WebsiteLayout>
  );
};

export default ContactUs;
