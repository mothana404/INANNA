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
import { motion, AnimatePresence } from "framer-motion";
import WebsiteLayout from "../layouts/WebsiteLayout";
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
      <div className="min-h-screen bg-teal-50">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-20 pb-28"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                {t("ContactUsPage.title", "Contact Us")}
              </h1>
              <p className="text-teal-100 text-lg leading-relaxed max-w-xl mx-auto">
                {t(
                  "ContactUsPage.subtitle",
                  "We're here to help and answer any questions you might have. Please feel free to reach out to us"
                )}
              </p>
            </div>
          </div>

          {/* Contact Cards - Positioned on top of header */}
          <div className="absolute -bottom-16 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: FiPhone,
                      title: t("ContactUsPage.PhoneCards.title", "Phone"),
                      content: t(
                        "ContactUsPage.PhoneCards.number",
                        "+1 (555) 123-4567"
                      ),
                      subContent: t(
                        "ContactUsPage.PhoneCards.time",
                        "Mon-Fri, 9AM-6PM"
                      ),
                    },
                    {
                      icon: FiMail,
                      title: t("ContactUsPage.EmailCards.title", "Email"),
                      content: t(
                        "ContactUsPage.EmailCards.email",
                        "contact@innana.com"
                      ),
                      subContent: t(
                        "ContactUsPage.EmailCards.time",
                        "24/7 Support Available"
                      ),
                    },
                    {
                      icon: FiMapPin,
                      title: t("ContactUsPage.AddressCards.title", "Address"),
                      content: t(
                        "ContactUsPage.AddressCards.address",
                        "123 Medical Plaza, NY"
                      ),
                      subContent: t(
                        "ContactUsPage.AddressCards.location",
                        "Main Office Location"
                      ),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px -10px rgba(20, 184, 166, 0.4), 0 10px 20px -5px rgba(20, 184, 166, 0.2)"
                      }}
                      className="bg-white p-6 rounded-xl shadow-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-100 p-3 rounded-full flex-shrink-0 group-hover:bg-teal-200 transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-teal-800 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-teal-700 mb-1 font-medium">
                            {item.content}
                          </p>
                          <p className="text-xs text-teal-600">{item.subContent}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Adjusted spacing for overlapping cards */}
        <div className="container mx-auto px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            {/* Contact Form Section */}
            <div className="bg-white rounded-xl shadow-lg border border-teal-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Form Side */}
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-teal-800 mb-6 flex items-center">
                    <FiMessageSquare className="w-5 h-5 mr-2 text-teal-600" />
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
                          className={`w-full px-4 py-2.5 bg-teal-50 border border-teal-200 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                            transition-all duration-200 pl-10 text-sm text-teal-800
                            ${focused.name ? "bg-white border-teal-400" : ""}`}
                          placeholder="Full Name"
                          required
                        />
                        <FiUser
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                          transition-colors duration-200
                          ${focused.name ? "text-teal-600" : "text-teal-400"}`}
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
                          className={`w-full px-4 py-2.5 bg-teal-50 border border-teal-200 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                            transition-all duration-200 pl-10 text-sm text-teal-800
                            ${focused.email ? "bg-white border-teal-400" : ""}`}
                          placeholder="Email Address"
                          required
                        />
                        <FiMail
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                          transition-colors duration-200
                          ${focused.email ? "text-teal-600" : "text-teal-400"}`}
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
                        className={`w-full px-4 py-2.5 bg-teal-50 border border-teal-200 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                          transition-all duration-200 pl-10 text-sm text-teal-800
                          ${focused.phone ? "bg-white border-teal-400" : ""}`}
                        placeholder="Phone Number"
                      />
                      <FiPhone
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                        transition-colors duration-200
                        ${focused.phone ? "text-teal-600" : "text-teal-400"}`}
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
                        className={`w-full px-4 py-2.5 bg-teal-50 border border-teal-200 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                          transition-all duration-200 pl-10 text-sm text-teal-800
                          ${focused.subject ? "bg-white border-teal-400" : ""}`}
                        placeholder="Subject"
                        required
                      />
                      <FiAlertCircle
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4
                        transition-colors duration-200
                        ${focused.subject ? "text-teal-600" : "text-teal-400"}`}
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
                        className={`w-full px-4 py-2.5 bg-teal-50 border border-teal-200 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                          transition-all duration-200 text-sm resize-none text-teal-800
                          ${focused.message ? "bg-white border-teal-400" : ""}`}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-4 rounded-lg 
                               hover:from-teal-600 hover:to-teal-700 transition-all duration-300 
                               flex items-center justify-center space-x-2 text-sm font-semibold
                               shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                    >
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4" />
                    </motion.button>
                  </form>
                </div>

                {/* Info Side */}
                <div className="bg-teal-50 p-8 rounded-r-xl">
                  <h3 className="text-lg font-semibold text-teal-800 mb-6 flex items-center">
                    <FiClock className="w-5 h-5 mr-2 text-teal-600" />
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
                        className="flex justify-between text-sm pb-2 border-b border-teal-200 last:border-0"
                      >
                        <span className="text-teal-700">{schedule.day}</span>
                        <span className="text-teal-800 font-medium">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-teal-800 mb-4">
                      Additional Information
                    </h3>
                    <div className="text-sm text-teal-700 space-y-2 leading-relaxed">
                      <p>
                        For urgent matters, please contact our 24/7 support
                        line.
                      </p>
                      <p>Response Time: Within 24 business hours</p>
                      <p className="text-teal-600 font-medium mt-3">
                        All inquiries are handled with complete confidentiality.
                      </p>
                    </div>
                  </div>

                  {/* Additional Contact Info */}
                  <div className="mt-8 p-4 bg-white/50 rounded-lg border border-teal-200">
                    <h4 className="text-sm font-semibold text-teal-800 mb-2">
                      Emergency Contact
                    </h4>
                    <p className="text-sm text-teal-700">
                      For medical emergencies: <br />
                      <span className="font-semibold text-teal-800">+1 (800) 911-HELP</span>
                    </p>
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