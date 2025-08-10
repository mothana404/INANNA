// components/InvestorsSection.jsx
import { motion } from "framer-motion";
import { FiTrendingUp, FiBarChart2, FiPieChart, FiGlobe } from "react-icons/fi";

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
    <Icon className="w-8 h-8 text-blue-500 mb-4" />
    <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const InvestorsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Investor Relations
          </motion.h2>
          <p className="text-xl text-gray-600">
            Delivering sustainable growth and long-term value to our shareholders through innovation and market leadership.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <StatCard icon={FiTrendingUp} value="$8.2B" label="Market Cap" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <StatCard icon={FiBarChart2} value="$42.15" label="Stock Price" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Financial Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Overview</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Revenue Growth</h4>
                <p className="text-gray-600">Achieved 15.3% year-over-year revenue growth with strong performance across all regions.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Operating Margin</h4>
                <p className="text-gray-600">Maintained industry-leading operating margin of 32.5% through operational excellence.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">R&D Investment</h4>
                <p className="text-gray-600">Invested $1.2B in research and development, representing 18% of annual revenue.</p>
              </div>
            </div>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Highlights</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Market Leadership</h4>
                <p className="text-gray-600">Leading market position in key therapeutic areas with established global presence.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation Pipeline</h4>
                <p className="text-gray-600">25+ compounds in development, including 5 in late-stage clinical trials.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Strategic Growth</h4>
                <p className="text-gray-600">Expanding market presence through strategic acquisitions and partnerships.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Governance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Board Composition</h4>
              <p className="text-gray-600">12 independent directors with diverse industry expertise</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ESG Commitment</h4>
              <p className="text-gray-600">Top-tier ESG ratings with clear sustainability targets</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Risk Management</h4>
              <p className="text-gray-600">Robust framework ensuring operational excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;