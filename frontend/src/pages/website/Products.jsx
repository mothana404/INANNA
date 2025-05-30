import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab } from '@headlessui/react';
import Footer from '../../components/website/Footer';
import Navbar from '../../components/website/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    className: "mx-[-8px]"
  };

const categories = [
  {
    id: 'otc',
    name: t('products.categories.otc', 'Over-the-Counter Medicines'),
    subcategories: [
      {
        id: 'pain',
        name: t('products.subcategories.pain', 'Pain & Fever'),
        products: [
          {
            id: 1,
            name: 'Pain Relief Plus',
            description: 'Fast-acting pain relief for headaches and body pain',
            image: '/images/products/pain-relief.jpg',
            activeIngredient: 'Acetaminophen',
            dosageForm: 'Tablets',
            strength: '500mg',
          },
          {
            id: 2,
            name: 'Pain Relief Extra',
            description: 'Maximum strength pain relief for severe pain',
            image: '/images/products/pain-relief-extra.jpg',
            activeIngredient: 'Acetaminophen + Caffeine',
            dosageForm: 'Tablets',
            strength: '500mg + 65mg',
          },
          {
            id: 3,
            name: 'Ibuprofen Plus',
            description: 'Anti-inflammatory pain relief',
            image: '/images/products/ibuprofen.jpg',
            activeIngredient: 'Ibuprofen',
            dosageForm: 'Tablets',
            strength: '400mg',
          },
          {
            id: 4,
            name: 'Muscle Relief Gel',
            description: 'Topical pain relief for muscle aches',
            image: '/images/products/muscle-gel.jpg',
            activeIngredient: 'Diclofenac',
            dosageForm: 'Gel',
            strength: '1%',
          },
        ]
      },
      {
        id: 'cold',
        name: t('products.subcategories.cold', 'Cold & Flu'),
        products: [
          {
            id: 5,
            name: 'ColdGuard Max',
            description: 'Complete cold & flu symptom relief',
            image: '/images/products/cold.jpg',
            activeIngredient: 'Pseudoephedrine',
            dosageForm: 'Capsules',
            strength: '30mg',
          },
          {
            id: 6,
            name: 'Flu Relief Night',
            description: 'Nighttime cold & flu relief for better rest',
            image: '/images/products/flu-night.jpg',
            activeIngredient: 'Diphenhydramine',
            dosageForm: 'Liquid',
            strength: '25mg/5ml',
          },
          {
            id: 7,
            name: 'Throat Soother',
            description: 'Soothing relief for sore throat',
            image: '/images/products/throat.jpg',
            activeIngredient: 'Benzocaine',
            dosageForm: 'Lozenges',
            strength: '15mg',
          },
          {
            id: 8,
            name: 'Nasal Decongestant',
            description: 'Fast-acting nasal congestion relief',
            image: '/images/products/nasal.jpg',
            activeIngredient: 'Oxymetazoline',
            dosageForm: 'Nasal Spray',
            strength: '0.05%',
          },
        ]
      },
      {
        id: 'allergy',
        name: t('products.subcategories.allergy', 'Allergy'),
        products: [
          {
            id: 9,
            name: 'AllerClear 24H',
            description: '24-hour allergy relief',
            image: '/images/products/allergy.jpg',
            activeIngredient: 'Cetirizine',
            dosageForm: 'Tablets',
            strength: '10mg',
          },
          {
            id: 10,
            name: 'Allergy Relief Nasal',
            description: 'Nasal allergy symptom relief',
            image: '/images/products/allergy-nasal.jpg',
            activeIngredient: 'Fluticasone',
            dosageForm: 'Nasal Spray',
            strength: '50mcg',
          },
          {
            id: 11,
            name: 'Eye Allergy Relief',
            description: 'Relieves itchy, allergy eyes',
            image: '/images/products/eye-allergy.jpg',
            activeIngredient: 'Ketotifen',
            dosageForm: 'Eye Drops',
            strength: '0.025%',
          },
        ]
      },
    ]
  },
  {
    id: 'rx',
    name: t('products.categories.rx', 'Prescription Medicines'),
    subcategories: [
      {
        id: 'cardio',
        name: t('products.subcategories.cardio', 'Cardiovascular'),
        products: [
          {
            id: 12,
            name: 'CardioHealth',
            description: 'Treatment for hypertension',
            image: '/images/products/cardio.jpg',
            activeIngredient: 'Amlodipine',
            dosageForm: 'Tablets',
            strength: '5mg',
          },
          {
            id: 13,
            name: 'CardioPlus',
            description: 'Beta blocker for heart conditions',
            image: '/images/products/cardio-plus.jpg',
            activeIngredient: 'Metoprolol',
            dosageForm: 'Tablets',
            strength: '50mg',
          },
          {
            id: 14,
            name: 'LipidCare',
            description: 'Cholesterol management',
            image: '/images/products/lipid.jpg',
            activeIngredient: 'Atorvastatin',
            dosageForm: 'Tablets',
            strength: '20mg',
          },
        ]
      },
      {
        id: 'diabetes',
        name: t('products.subcategories.diabetes', 'Diabetes'),
        products: [
          {
            id: 15,
            name: 'GlucoBalance',
            description: 'Diabetes management medication',
            image: '/images/products/diabetes.jpg',
            activeIngredient: 'Metformin',
            dosageForm: 'Tablets',
            strength: '500mg',
          },
          {
            id: 16,
            name: 'InsulinPlus',
            description: 'Long-acting insulin',
            image: '/images/products/insulin.jpg',
            activeIngredient: 'Insulin Glargine',
            dosageForm: 'Injectable',
            strength: '100units/ml',
          },
          {
            id: 17,
            name: 'DiabetesCare Plus',
            description: 'Advanced diabetes control',
            image: '/images/products/diabetes-plus.jpg',
            activeIngredient: 'Sitagliptin',
            dosageForm: 'Tablets',
            strength: '100mg',
          },
        ]
      },
    ]
  },
  {
    id: 'medical-devices',
    name: t('products.categories.devices', 'Medical Devices'),
    subcategories: [
      {
        id: 'diagnostic',
        name: t('products.subcategories.diagnostic', 'Diagnostic Devices'),
        products: [
          {
            id: 18,
            name: 'GlucoCheck Pro',
            description: 'Professional glucose monitoring system',
            image: '/images/products/glucose-monitor.jpg',
            type: 'Digital Device',
            usage: 'Professional Use',
          },
          {
            id: 19,
            name: 'BP Monitor Elite',
            description: 'Advanced blood pressure monitoring',
            image: '/images/products/bp-monitor.jpg',
            type: 'Digital Device',
            usage: 'Home Use',
          },
          {
            id: 20,
            name: 'Heart Monitor Pro',
            description: 'ECG monitoring device',
            image: '/images/products/ecg.jpg',
            type: 'Digital Device',
            usage: 'Professional Use',
          },
        ]
      },
      {
        id: 'therapeutic',
        name: t('products.subcategories.therapeutic', 'Therapeutic Devices'),
        products: [
          {
            id: 21,
            name: 'Pain Relief TENS',
            description: 'Electronic nerve stimulation device',
            image: '/images/products/tens.jpg',
            type: 'Electronic Device',
            usage: 'Home Use',
          },
          {
            id: 22,
            name: 'Nebulizer Plus',
            description: 'Advanced nebulizer system',
            image: '/images/products/nebulizer.jpg',
            type: 'Respiratory Device',
            usage: 'Home Use',
          },
          {
            id: 23,
            name: 'Sleep Apnea Device',
            description: 'CPAP machine for sleep apnea',
            image: '/images/products/cpap.jpg',
            type: 'Respiratory Device',
            usage: 'Home Use',
          },
        ]
      },
    ]
  }
];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative pt-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8 md:py-12 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('products.hero.title', 'Pharmaceutical Excellence')}
                </h1>
                <p className="text-lg text-gray-600">
                  {t('products.hero.description', 
                    'Discover our comprehensive range of pharmaceutical products designed to improve global health and well-being.'
                  )}
                </p>
              </div>

              <div className="md:w-1/2 flex gap-6">
                <div className="flex-1 bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">
                    {t('products.stats.activeProducts', 'Active Products')}
                  </div>
                </div>
                <div className="flex-1 bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                  <div className="text-sm text-gray-600">
                    {t('products.stats.countries', 'Countries Served')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tab.Group onChange={setSelectedCategory} defaultIndex={0}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Categories Navigation */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    {t('products.categories.title', 'Product Categories')}
                  </h2>
                  <Tab.List className="flex flex-col space-y-2">
                    {categories.map((category) => (
                      <Tab
                        key={category.id}
                        className={({ selected }) =>
                          `${
                            selected
                              ? 'bg-blue-100 text-blue-800'
                              : 'text-gray-600 hover:bg-gray-50'
                          } px-4 py-2 rounded-lg text-sm font-medium text-start transition-colors duration-150 focus:outline-none`
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                {/* Healthcare Professional Box */}
                <div className="bg-blue-50 rounded-xl p-6 mt-6">
                  <h3 className="text-blue-900 font-semibold mb-2">
                    {t('products.hcp.title', 'Healthcare Professionals')}
                  </h3>
                  <p className="text-sm text-blue-800 mb-4">
                    {t('products.hcp.description', 
                      'Access detailed product information, prescribing information, and resources.'
                    )}
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    {t('products.hcp.login', 'HCP Login')} →
                  </button>
                </div>
              </div>

              {/* Products Display */}
              <div className="lg:w-3/4">
                <Tab.Panels>
                  {categories.map((category) => (
                    <Tab.Panel key={category.id}>
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                        
                        <div className="space-y-12">
                          {category.subcategories.map((subcategory) => (
                            <div key={subcategory.id}>
                              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                {subcategory.name}
                              </h3>
                              
                              {subcategory.products.length > 0 ? (
                                <div className="px-8">
                                  <Slider {...sliderSettings}>
                                    {subcategory.products.map((product) => (
                                      <div key={product.id} className="px-2">
                                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 h-full bg-white">
                                          <div className="flex items-start space-x-4">
                                            <div className="w-24 h-24 bg-gray-50 rounded-lg flex-shrink-0">
                                              <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain p-2"
                                              />
                                            </div>
                                            <div className="flex-1">
                                              <h4 className="font-semibold text-gray-900">
                                                {product.name}
                                              </h4>
                                              <p className="text-sm text-gray-600 mt-1">
                                                {product.description}
                                              </p>
                                              <div className="mt-2 space-y-1">
                                                {product.activeIngredient && (
                                                  <p className="text-sm text-gray-500">
                                                    <span className="font-medium">Active: </span>
                                                    {product.activeIngredient}
                                                  </p>
                                                )}
                                                {product.dosageForm && (
                                                  <p className="text-sm text-gray-500">
                                                    <span className="font-medium">Form: </span>
                                                    {product.dosageForm}
                                                  </p>
                                                )}
                                                {product.strength && (
                                                  <p className="text-sm text-gray-500">
                                                    <span className="font-medium">Strength: </span>
                                                    {product.strength}
                                                  </p>
                                                )}
                                                {product.type && (
                                                  <p className="text-sm text-gray-500">
                                                    <span className="font-medium">Type: </span>
                                                    {product.type}
                                                  </p>
                                                )}
                                                {product.usage && (
                                                  <p className="text-sm text-gray-500">
                                                    <span className="font-medium">Usage: </span>
                                                    {product.usage}
                                                  </p>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </Slider>
                                </div>
                              ) : (
                                <p className="text-gray-500 italic">
                                  {t('products.noProducts', 'No products available in this category')}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                {t('products.quality.title', 'Quality Assurance')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('products.quality.description', 
                  'All our products meet the highest quality standards and regulatory requirements.'
                )}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                {t('products.research.title', 'Research & Development')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('products.research.description', 
                  'Continuous innovation and development of new therapeutic solutions.'
                )}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                {t('products.safety.title', 'Safety Information')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('products.safety.description', 
                  'Access important safety information and adverse event reporting.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;