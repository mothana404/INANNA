// components/InvestorsSection.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiTrendingUp, FiBarChart2, FiPieChart, FiGlobe, FiArrowUpRight, FiCheck } from "react-icons/fi";

const StatCard = ({ icon: Icon, value, label, trend }) => (
  <motion.div 
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-300" />
    
    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-3 sm:mb-4 relative z-10" />
    <div className="relative z-10">
      <div className="flex items-baseline gap-2">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</div>
        {trend && (
          <span className="flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
            <FiArrowUpRight className="w-3 h-3 mr-1" />
            {trend}
          </span>
        )}
      </div>
      <div className="text-sm sm:text-base text-gray-600 mt-1">{label}</div>
    </div>
  </motion.div>
);

const InvestorsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            {t("investors.title")}
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
            {t("investors.subtitle")}
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <StatCard icon={FiTrendingUp} value="$8.2B" label={t("investors.stats.marketCap")} trend="+12%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <StatCard icon={FiBarChart2} value="$42.15" label={t("investors.stats.stockPrice")} trend="+5.3%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <StatCard icon={FiPieChart} value="$2.80" label={t("investors.stats.dividend")} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <StatCard icon={FiGlobe} value="50+" label={t("investors.stats.countries")} />
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Financial Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t("investors.financial.title")}</h3>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <FiBarChart2 className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.financial.revenue.title")}</h4>
                <p className="text-sm sm:text-base text-gray-600">{t("investors.financial.revenue.description")}</p>
                <div className="flex items-center gap-2 mt-2">
                  <FiCheck className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">{t("investors.financial.revenue.label")}</span>
                </div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.financial.margin.title")}</h4>
                <p className="text-sm sm:text-base text-gray-600">{t("investors.financial.margin.description")}</p>
                <div className="flex items-center gap-2 mt-2">
                  <FiCheck className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">{t("investors.financial.margin.label")}</span>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.financial.rnd.title")}</h4>
                <p className="text-sm sm:text-base text-gray-600">{t("investors.financial.rnd.description")}</p>
                <div className="flex items-center gap-2 mt-2">
                  <FiCheck className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">{t("investors.financial.rnd.label")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t("investors.highlights.title")}</h3>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <FiTrendingUp className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.highlights.market.title")}</h4>
                <p className="text-sm sm:text-base text-gray-600">{t("investors.highlights.market.description")}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded text-blue-700">{t("investors.highlights.market.tag1")}</span>
                  <span className="text-xs bg-white px-2 py-1 rounded text-blue-700">{t("investors.highlights.market.tag2")}</span>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.highlights.innovation.title")}</h4>
                <p className="text-sm sm:text-base text-gray-600">{t("investors.highlights.innovation.description")}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded text-purple-700">{t("investors.highlights.innovation.tag1")}</span>
                  <span className="text-xs bg-white px-2 py-1 rounded text-purple-700">{t("investors.highlights.innovation.tag2")}</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.highlights.growth.title")}</h4>
                <p className="text-sm sm:text-base text-gray-600">{t("investors.highlights.growth.description")}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded text-green-700">{t("investors.highlights.growth.tag1")}</span>
                  <span className="text-xs bg-white px-2 py-1 rounded text-green-700">{t("investors.highlights.growth.tag2")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -mr-16 -mt-16 opacity-50" />
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 relative z-10">{t("investors.governance.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">12</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.governance.board.title")}</h4>
              <p className="text-sm sm:text-base text-gray-600">{t("investors.governance.board.description")}</p>

            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-green-600">A+</span>
                              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.governance.esg.title")}</h4>
              <p className="text-sm sm:text-base text-gray-600">{t("investors.governance.esg.description")}</p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{t("investors.governance.esg.tag1")}</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{t("investors.governance.esg.tag2")}</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FiCheck className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("investors.governance.risk.title")}</h4>
              <p className="text-sm sm:text-base text-gray-600">{t("investors.governance.risk.description")}</p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{t("investors.governance.risk.compliance")}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;