// components/website/GlobalOffices.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const GlobalOffices = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const offices = [
    {
      region: t('contact.offices.northAmerica.region', 'North America'),
      address: t('contact.offices.northAmerica.address', '123 Pharmaceutical St, Medical City, MC 12345'),
      phone: '+1 (800) 123-4567',
      email: 'na@medpharma.com',
    },
    {
      region: t('contact.offices.europe.region', 'Europe'),
      address: t('contact.offices.europe.address', '45 Healthcare Blvd, Medical District, MD 67890'),
      phone: '+44 (20) 1234-5678',
      email: 'eu@medpharma.com',
    },
    {
      region: t('contact.offices.asiaPacific.region', 'Asia Pacific'),
      address: t('contact.offices.asiaPacific.address', '78 Medicine Rd, Health City, HC 13579'),
      phone: '+65 6789-0123',
      email: 'apac@medpharma.com',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            {t('contact.offices.title', 'Our Global Reach')}
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            {t('contact.offices.subtitle', 'Contact our global offices for innovative medical solutions.')}
          </p>
        </motion.div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative bg-blue-50 rounded-lg p-5 border border-transparent hover:shadow-md transition-shadow duration-300 overflow-hidden"
              aria-labelledby={`office-${index}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Creative Gradient Border */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></div>
              <h3
                id={`office-${index}`}
                className="text-base font-semibold text-blue-900 mb-3"
              >
                {office.region}
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start">
                  <MapPin className={`w-4 h-4 text-blue-600 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5`} />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className={`w-4 h-4 text-blue-600 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <p>{office.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className={`w-4 h-4 text-blue-600 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                    {office.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalOffices;