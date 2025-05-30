// components/website/Investors.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Pill, Building2, FileText } from 'lucide-react'; // Using Lucide icons

const Investors = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  // Chart data for revenue growth
  const growthData = {
    type: 'line',
    data: {
      labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024'],
      datasets: [
        {
          label: t('investors.charts.revenue', 'Revenue (in $M)'),
          data: [1.2, 1.8, 2.3, 2.8, 3.2],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: { font: { size: 12 }, color: '#1f2937' },
        },
        tooltip: { backgroundColor: '#1f2937' },
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#1f2937' } },
        y: { grid: { color: '#e5e7eb' }, ticks: { color: '#1f2937', stepSize: 0.5 } },
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const keyMetrics = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      label: t('investors.metrics.fundingRaised', 'R&D Funding'),
      value: '$25M',
      growth: '+150%',
      description: t('investors.metrics.fundingRaisedDesc', 'Invested in innovative drug development.'),
    },
    {
      icon: <Pill className="w-6 h-6 text-blue-600" />,
      label: t('investors.metrics.pipeline', 'Drug Pipeline'),
      value: '6',
      growth: '+2',
      description: t('investors.metrics.pipelineDesc', 'Drugs in clinical trials.'),
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      label: t('investors.metrics.partnerships', 'Partnerships'),
      value: '15+',
      growth: '+5',
      description: t('investors.metrics.partnershipsDesc', 'Global healthcare collaborations.'),
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      label: t('investors.metrics.patents', 'Patents'),
      value: '12',
      growth: '+8',
      description: t('investors.metrics.patentsDesc', 'Pharmaceutical patents filed.'),
    },
  ];

  const tabs = ['overview', 'financials'];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
            {t('investors.label', 'Investor Relations')}
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-blue-900">
            {t('investors.title', 'Invest in Medical Innovation')}
          </h1>
          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            {t('investors.subtitle', 'Support MedPharma’s mission to advance healthcare through innovative pharmaceuticals.')}
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-5 border border-blue-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-2">
                {metric.icon}
                <span className="ml-2 text-gray-700 text-sm font-medium">{metric.label}</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl font-bold text-blue-900">{metric.value}</span>
                <span className="text-green-600 text-xs font-semibold">{metric.growth}</span>
              </div>
              <p className="text-xs text-gray-600">{metric.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-6 justify-center" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  py-3 px-4 text-sm font-medium rounded-t-md
                  ${activeTab === tab ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-700'}
                `}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab}`}
              >
                {t(`investors.tabs.${tab}`, tab.charAt(0).toUpperCase() + tab.slice(1))}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-12" role="tabpanel" id={`panel-${activeTab}`}>
          {activeTab === 'overview' && (
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {t('investors.overview.title', 'Our Mission')}
                </h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>{t('investors.overview.p1', 'MedPharma develops life-changing therapies to address global health challenges.')}</p>
                  <p>{t('investors.overview.p2', 'Our focus on R&D drives sustainable growth in the pharmaceutical sector.')}</p>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">
                    {t('investors.overview.highlights', 'Key Highlights')}
                  </h4>
                  <ul className="space-y-2">
                    {['highlight1', 'highlight2', 'highlight3'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">
                          {t(`investors.overview.${item}`, {
                            highlight1: '6 drugs in clinical trials',
                            highlight2: '15+ global partnerships',
                            highlight3: '12 patents filed',
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {t('investors.charts.growthTitle', 'Revenue Growth')}
                </h3>
                {/* <div className="bg-white rounded-lg p-5 shadow-md border border-blue-100">
                  ```chartjs
                  {
                    "type": "line",
                    "data": {
                      "labels": ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024"],
                      "datasets": [
                        {
                          "label": "${t('investors.charts.revenue', 'Revenue (in $M)')}",
                          "data": [1.2, 1.8, 2.3, 2.8, 3.2],
                          "borderColor": "#2563eb",
                          "backgroundColor": "rgba(37, 99, 235, 0.2)",
                          "fill": true,
                          "tension": 0.4
                        }
                      ]
                    },
                    "options": {
                      "responsive": true,
                      "plugins": {
                        "legend": {
                          "position": "top",
                          "labels": {
                            "font": { "size": 12 },
                            "color": "#1f2937"
                          }
                        },
                        "tooltip": {
                          "backgroundColor": "#1f2937"
                        }
                      },
                      "scales": {
                        "x": {
                          "grid": { "display": false },
                          "ticks": { "color": "#1f2937" }
                        },
                        "y": {
                          "grid": { "color": "#e5e7eb" },
                          "ticks": { "color": "#1f2937", "stepSize": 0.5 }
                        }
                      }
                    }
                  }
                  ```
                </div> */}
              </div>
            </motion.div>
          )}
          {activeTab === 'financials' && (
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-4">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {t('investors.financials.title', 'Financial Overview')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('investors.financials.p1', 'Our financial performance reflects steady growth driven by innovative products.')}
              </p>
              <a
                href="#financials"
                className="inline-flex items-center text-blue-600 text-sm hover:text-blue-800"
              >
                {t('investors.financials.download', 'View Financial Reports')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            {t('investors.cta.title', 'Join Our Mission')}
          </h3>
          <p className="text-gray-600 text-sm mb-6 max-w-xl mx-auto">
            {t('investors.cta.description', 'Invest in MedPharma to support life-changing healthcare solutions.')}
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            >
              {t('investors.cta.button1', 'Contact Us')}
            </a>
            <a
              href="#deck"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100"
            >
              {t('investors.cta.button2', 'Investment Deck')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investors;