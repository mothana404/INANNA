import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { memo, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductCard = memo(({ product, index, isRTL }) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-blue-100/50 hover:border-blue-200 h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    {/* Product Image */}
    <div className="relative h-48 bg-blue-50/30">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
        draggable="false"
        loading="lazy"
      />
      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} 
        bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1.5 
        rounded-full border border-blue-200/50 backdrop-blur-sm`}
      >
        {product.category}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent"></div>
    </div>

    {/* Product Info */}
    <div className="p-6">
      <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
        {product.name}
      </h3>
      <p className={`text-gray-600 text-sm mb-4 line-clamp-2 ${isRTL ? 'font-arabic' : ''}`}>
        {product.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="flex items-center text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
          <svg 
            className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'} text-blue-500`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
            />
          </svg>
          <span className={isRTL ? 'font-arabic' : ''}>
            {product.dosageForm}
          </span>
        </span>
      </div>
    </div>
  </motion.div>
));

const FeaturedProducts = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const products = [
    {
      id: 1,
      name: 'Pain Relief Plus',
      category: 'Pain Management',
      image: 'https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/160516-800-450?v=638580327209570000&width=800&height=450&aspect=true',
      description: 'Fast-acting pain relief for headaches and body pain Fast-acting pain relief for headaches and body painFast-acting pain relief for headaches and body pain',
      dosageForm: 'Tablets',
    },
    {
      id: 2,
      name: 'ColdGuard Max',
      category: 'Cold & Flu',
      image: 'https://www.elfarmaceutico.es/uploads/s1/19/82/7/6a53a676f3fed105a87ca28ac057bc8b.jpeg',
      description: 'Fast-acting pain relief for headaches and body pain Fast-acting pain relief for headaches and body painFast-acting pain relief for headaches and body pain',
      dosageForm: 'Capsules',
    },
    {
      id: 3,
      name: 'AllerClear',
      category: 'Allergy Relief',
      image: 'https://botplusweb.farmaceuticos.com/Documentos/AEMPS/Fotos/290995/full/78565_materialas.jpg',
      description: 'Fast-acting pain relief for headaches and body pain Fast-acting pain relief for headaches and body painFast-acting pain relief for headaches and body pain',
      dosageForm: 'Tablets',
    },
    {
      id: 4,
      name: 'DigestEase',
      category: 'Digestive Health',
      image: 'https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/160516-800-450?v=638580327209570000&width=800&height=450&aspect=true',
      description: 'Fast-acting pain relief for headaches and body pain Fast-acting pain relief for headaches and body painFast-acting pain relief for headaches and body pain',
      dosageForm: 'Chewable Tablets',
    },
  ];

return (
    <section className="relative py-16 overflow-hidden">
      {/* Background remains the same */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-4" dir={isRTL ? 'rtl' : 'ltr'}>
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('products.featuredTitle')}
          </motion.h2>
          <motion.p 
            className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('products.featuredDescription')}
          </motion.p>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>

        {/* Products Slider - Always LTR */}
        <div className="w-full" dir="ltr">
          <Swiper
            modules={[Pagination, Mousewheel]}
            slidesPerView={1}
            direction="horizontal"
            mousewheel={false}
            spaceBetween={24}
            pagination={{
              clickable: true,
              bulletActiveClass: '!bg-blue-600',
              bulletClass: 'inline-block h-2 w-2 rounded-full bg-blue-200 mx-1 hover:bg-blue-300 transition-colors duration-200',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!px-4 !pb-14"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-blue-100/50 hover:border-blue-200 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-blue-50/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1.5 rounded-full border border-blue-200/50 backdrop-blur-sm">
                      {product.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6" dir={isRTL ? 'rtl' : 'ltr'}>
                    <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                      {product.name}
                    </h3>
                    <p className={`text-gray-600 text-sm mb-4 line-clamp-2 ${isRTL ? 'font-arabic' : ''}`}>
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                        <svg 
                          className="w-4 h-4 mr-1 text-blue-500"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                          />
                        </svg>
                        <span className={isRTL ? 'font-arabic' : ''}>
                          {product.dosageForm}
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 px-4" dir={isRTL ? 'rtl' : 'ltr'}>
          <motion.button 
            onClick={() => window.location.href = '/products'}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 
              text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 
              transition-all duration-300 shadow-lg shadow-blue-500/25 
              hover:shadow-blue-500/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={isRTL ? 'font-arabic' : ''}>
              {t('products.viewAll')}
            </span>
            <svg 
              className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturedProducts);