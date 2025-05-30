// components/ContactInfo.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Emergency Contact',
      content: '+1 (800) 123-4567',
      description: '24/7 Emergency Support Line',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      content: 'info@yourcompany.com',
      description: "We'll respond within 24 hours",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      content: '123 Pharmaceutical Street, Medical City, MC 12345',
      description: 'Monday - Friday, 9:00 AM - 5:00 PM',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t('contact.info.title', 'Get in Touch')}
        </h2>
        <p className="text-gray-600">
          {t('contact.info.description', "Whether you're a healthcare professional, business partner, or patient, we're here to help. Choose the most convenient way to reach us.")}
        </p>
      </div>

      {/* <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
              <div className="text-blue-600">{method.icon}</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
              <p className="text-blue-600 font-medium">{method.content}</p>
              <p className="text-gray-500 text-sm">{method.description}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* Additional Info Box */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          {t('contact.info.medicalSupport', 'Medical Information Support')}
        </h3>
        <p className="text-blue-800">
          {t('contact.info.medicalSupportDesc', 'For healthcare professionals seeking medical information about our products, please use our dedicated medical information service.')}
        </p>
        <a 
          href="#medical-info"
          className="inline-flex items-center text-blue-600 font-medium mt-4 hover:text-blue-700"
        >
          {t('contact.info.learnMore', 'Learn More')}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;