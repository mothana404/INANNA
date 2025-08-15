import React, { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FiShield, 
  FiCheckCircle, 
  FiAward, 
  FiFileText 
} from "react-icons/fi";

const PolicyItem = memo(({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start space-x-4"
  >
    <div className="flex-shrink-0 mt-1">
      <FiCheckCircle className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
));

const PublicPolicySection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-16 bg-white" id="public-policy-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('policy.title')}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('policy.description')}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Policy Framework */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <FiShield className="w-8 h-8 text-blue-600" />
                <h3 className={`text-2xl font-semibold ${isRTL ? 'font-arabic' : ''}`}>
                  {t('policy.framework.title')}
                </h3>
              </div>
              <div className="space-y-6">
                <PolicyItem
                  title={t('policy.framework.quality.title')}
                  description={t('policy.framework.quality.description')}
                />
                <PolicyItem
                  title={t('policy.framework.compliance.title')}
                  description={t('policy.framework.compliance.description')}
                />
                <PolicyItem
                  title={t('policy.framework.ethics.title')}
                  description={t('policy.framework.ethics.description')}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Key Initiatives */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <FiAward className="w-8 h-8 text-blue-600" />
                <h3 className={`text-2xl font-semibold ${isRTL ? 'font-arabic' : ''}`}>
                  {t('policy.initiatives.title')}
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FiFileText className="w-6 h-6 text-blue-600 mt-1" />
                  <span className="text-gray-600">
                    {t('policy.initiatives.item1')}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiFileText className="w-6 h-6 text-blue-600 mt-1" />
                  <span className="text-gray-600">
                    {t('policy.initiatives.item2')}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiFileText className="w-6 h-6 text-blue-600 mt-1" />
                  <span className="text-gray-600">
                    {t('policy.initiatives.item3')}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiFileText className="w-6 h-6 text-blue-600 mt-1" />
                  <span className="text-gray-600">
                    {t('policy.initiatives.item4')}
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Commitment Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('policy.commitment.title')}
              </h4>
              <p className="text-gray-600">
                {t('policy.commitment.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PublicPolicySection);