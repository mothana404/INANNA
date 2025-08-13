// components/InvestorsSection.jsx
import { motion } from "framer-motion";
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
            Investor Relations
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
            Delivering sustainable growth and long-term value to our shareholders through innovation and market leadership.
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
            <StatCard icon={FiTrendingUp} value="$8.2B" label="Market Cap" trend="+12%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <StatCard icon={FiBarChart2} value="$42.15" label="Stock Price" trend="+5.3%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <StatCard icon={FiPieChart} value="$2.80" label="Dividend/Share" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <StatCard icon={FiGlobe} value="50+" label="Countries" />
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Financial Overview</h3>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <FiBarChart2 className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Revenue Growth</h4>
                <p className="text-sm sm:text-base text-gray-600">Achieved 15.3% year-over-year revenue growth with strong performance across all regions.</p>
                <div className="flex items-center gap-2 mt-2">
                  <FiCheck className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">Q4 2023 Results</span>
                </div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Operating Margin</h4>
                <p className="text-sm sm:text-base text-gray-600">Maintained industry-leading operating margin of 32.5% through operational excellence.</p>
                <div className="flex items-center gap-2 mt-2">
                  <FiCheck className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">Above industry average</span>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">R&D Investment</h4>
                <p className="text-sm sm:text-base text-gray-600">Invested $1.2B in research and development, representing 18% of annual revenue.</p>
                <div className="flex items-center gap-2 mt-2">
                  <FiCheck className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">Industry leading</span>
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Investment Highlights</h3>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <FiTrendingUp className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Market Leadership</h4>
                <p className="text-sm sm:text-base text-gray-600">Leading market position in key therapeutic areas with established global presence.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded text-blue-700">#1 in Oncology</span>
                  <span className="text-xs bg-white px-2 py-1 rounded text-blue-700">#2 in Cardiology</span>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Innovation Pipeline</h4>
                <p className="text-sm sm:text-base text-gray-600">25+ compounds in development, including 5 in late-stage clinical trials.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded text-purple-700">Phase III: 5</span>
                                    <span className="text-xs bg-white px-2 py-1 rounded text-purple-700">Phase II: 8</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Strategic Growth</h4>
                <p className="text-sm sm:text-base text-gray-600">Expanding market presence through strategic acquisitions and partnerships.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded text-green-700">3 Acquisitions</span>
                  <span className="text-xs bg-white px-2 py-1 rounded text-green-700">12 Partnerships</span>
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
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 relative z-10">Corporate Governance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">12</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Board Composition</h4>
              <p className="text-sm sm:text-base text-gray-600">Independent directors with diverse industry expertise</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs text-white">+8</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-green-600">A+</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">ESG Commitment</h4>
              <p className="text-sm sm:text-base text-gray-600">Top-tier ESG ratings with clear sustainability targets</p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Carbon Neutral</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">2030 Goals</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FiCheck className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Risk Management</h4>
              <p className="text-sm sm:text-base text-gray-600">Robust framework ensuring operational excellence</p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">95% Compliance Rate</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;