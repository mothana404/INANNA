import React, { useState, memo } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import WebsiteLayout from "../layouts/WebsiteLayout";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';  // Import EmailJS

const InputField = memo(({ icon: Icon, type, name, value, onChange, placeholder, required }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-blue-400" />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg 
                focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
                bg-white text-gray-900 text-base placeholder-gray-400 
                transition duration-300 hover:border-blue-300"
      placeholder={placeholder}
      required={required}
    />
  </div>
));

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          setPopupVisible(true);
          setTimeout(() => setPopupVisible(false), 3000);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
          });
      }, (error) => {
          console.log(error.text);
      });
  };

  const ContactCard = memo(({ icon: Icon, title, content }) => (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex items-center space-x-4">
      <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full flex-shrink-0">
        <Icon className="w-5 h-5 text-blue-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  ));

  return (
    <WebsiteLayout>
      <div className="min-h-screen bg-gray-50">
        {popupVisible && (
          <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2">
            {t('contact.popup', 'Your message has been sent successfully!')}
          </div>
        )}
        
        {/* Header Section */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                {t('contact.title')}
              </h1>
              <p className={`text-lg text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                {t('contact.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="container mx-auto px-4 -mt-6 mb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactCard
              icon={FiPhone}
              title={t('contact.phone.title')}
              content={t('contact.phone.content')}
            />
            <ContactCard
              icon={FiMail}
              title={t('contact.email.title')}
              content={t('contact.email.content')}
            />
            <ContactCard
              icon={FiMessageSquare}
              title={t('contact.address.title')}
              content={t('contact.address.content')}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Company Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                  {t('contact.about.title')}
                </h2>
                <div className={`prose prose-lg text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                  <p className="mb-6">
                    {t('contact.about.description1')}
                  </p>
                  <p className="mb-6">
                    {t('contact.about.description2')}
                  </p>
                  <p>
                    {t('contact.about.description3')}
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10"
              >
                <h3 className={`text-2xl font-semibold text-gray-900 mb-8 flex items-center ${isRTL ? 'font-arabic' : ''}`}>
                  <FiMessageSquare className="w-6 h-6 mr-3 text-blue-500" />
                  {t('contact.form.title')}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField
                      icon={FiUser}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                    <InputField
                      icon={FiMail}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </div>

                  <InputField
                    icon={FiPhone}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="block w-full px-4 py-4 border border-gray-200 rounded-lg 
                              focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
                              bg-white text-gray-900 text-base placeholder-gray-400 
                              transition duration-300 hover:border-blue-300 resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 
                             transition duration-300 flex items-center justify-center space-x-2
                             text-base font-semibold shadow-lg shadow-blue-500/25 
                             hover:shadow-blue-500/40"
                  >
                    <span>{t('contact.form.submit')}</span>
                    <FiSend className="w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default memo(ContactUs);