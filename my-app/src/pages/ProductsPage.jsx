import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WebsiteLayout from '../layouts/WebsiteLayout';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const products = [
    {
      id: 1,
      name: "CardioGuard Plus",
      description: "Advanced cardiovascular protection formula with proven efficacy in managing heart health and blood pressure regulation.",
      category: "cardiovascular",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
      type: "Prescription",
      availability: "In Stock"
    },
    {
      id: 2,
      name: "NeuroBalance",
      description: "Comprehensive neurological support supplement designed to enhance cognitive function and neural health.",
      category: "neurological",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      type: "Prescription",
      availability: "In Stock"
    },
    {
      id: 3,
      name: "ImmunoShield Pro",
      description: "Premium immune system booster with natural ingredients to strengthen your body's defense mechanisms.",
      category: "immunology",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
      type: "Over the Counter",
      availability: "In Stock"
    },
    {
      id: 4,
      name: "DigestEase Ultra",
      description: "Advanced digestive health formula for optimal gut health and nutrient absorption.",
      category: "gastroenterology",
      image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=400&h=300&fit=crop",
      type: "Supplement",
      availability: "Pre-order"
    },
    {
      id: 5,
      name: "RespiClear",
      description: "Respiratory support medication for clear breathing and lung health maintenance.",
      category: "respiratory",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop",
      type: "Prescription",
      availability: "In Stock"
    },
    {
      id: 6,
      name: "DermaCare Advanced",
      description: "Professional-grade dermatological treatment for various skin conditions and overall skin health.",
      category: "dermatology",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
      type: "Prescription",
      availability: "In Stock"
    }
  ];

  const categories = [
    { id: 'all', name: t('allProducts') },
    { id: 'cardiovascular', name: t('cardiovascular') },
    { id: 'neurological', name: t('neurological') },
    { id: 'immunology', name: t('immunology') },
    { id: 'gastroenterology', name: t('gastroenterology') },
    { id: 'respiratory', name: t('respiratory') },
    { id: 'dermatology', name: t('dermatology') }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <WebsiteLayout>
      <div className="min-h-screen bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-blue-50/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-100/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 pt-20 lg:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 lg:mb-6">
                {t('productsPage.ourPharmaceuticalProducts')}
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                {t('productsPage.discoverOurRange')}
              </p>
            </div>

            <div className="mb-8 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 lg:gap-3 min-w-max pb-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className={`
                      px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium text-sm lg:text-base
                      transition-all duration-300 whitespace-nowrap
                      ${selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                      }
                    `}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                    >
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-blue-600">{product.type}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full capitalize">
                            {product.category}
                          </span>
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                            product.availability === 'In Stock' 
                              ? 'bg-green-50 text-green-600' 
                              : 'bg-yellow-50 text-yellow-600'
                          }`}>
                            {product.availability}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm">
                          {t('productsPage.viewDetails')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8 lg:mt-12 flex justify-center items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`
                        px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
                        ${currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-200'
                        }
                      `}
                    >
                      {t('productsPage.previous')}
                    </button>
                    
                    <div className="hidden sm:flex gap-1">
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`
                            w-10 h-10 rounded-lg font-medium text-sm transition-all duration-300
                            ${currentPage === index + 1
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                              : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                            }
                          `}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>

                    <div className="flex sm:hidden items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {t('productsPage.page')} {currentPage} {t('productsPage.of')} {totalPages}
                      </span>
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`
                        px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
                        ${currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-200'
                        }
                      `}
                    >
                      {t('productsPage.next')}
                    </button>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1 order-1 lg:order-2">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 lg:p-6 lg:sticky lg:top-24">
                  <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    {t('productsPage.filterProducts')}
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{t('productsPage.productType')}</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        <span className="text-sm text-gray-600">{t('productsPage.prescription')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        <span className="text-sm text-gray-600">{t('productsPage.overTheCounter')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        <span className="text-sm text-gray-600">{t('productsPage.supplements')}</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{t('productsPage.availability')}</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        <span className="text-sm text-gray-600">{t('productsPage.inStock')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        <span className="text-sm text-gray-600">{t('productsPage.preOrder')}</span>
                      </label>
                    </div>
                  </div>

                  <button className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 border-b border-gray-200 mb-4">
                    {t('productsPage.clearAllFilters')}
                  </button>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{t('productsPage.productOverview')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{t('productsPage.totalProducts')}</span>
                        <span className="font-semibold text-blue-600">{products.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{t('productsPage.categories')}</span>
                        <span className="font-semibold text-blue-600">{categories.length - 1}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{t('productsPage.showing')}</span>
                        <span className="font-semibold text-blue-600">{filteredProducts.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                    <h4 className="font-semibold mb-2 text-sm">{t('productsPage.needAssistance')}</h4>
                    <p className="text-xs text-white/90 mb-3">{t('productsPage.helpMessage')}</p>
                    <button className="bg-white text-blue-600 px-4 py-1.5 rounded text-xs font-medium hover:bg-gray-50 transition-colors duration-200 w-full">
                      {t('productsPage.contactSupport')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('productsPage.browseByCategory')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group relative bg-white rounded-lg p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 capitalize">
                      {category.name}
                    </h3>
                    <div className="mt-2 h-1 w-8 bg-blue-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </WebsiteLayout>
  );
};

export default ProductsPage;