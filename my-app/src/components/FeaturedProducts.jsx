import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedProducts = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

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
    <section className="relative py-10 overflow-hidden">
      {/* Background Elements - Teal Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-white" />
        
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/15 rounded-full blur-3xl"
        />

        {/* Additional floating elements */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('products.featuredTitle', 'Featured Products')}
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('products.featuredDescription', 'Discover our innovative pharmaceutical solutions')}
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>

        {/* Products Slider */}
        <div className="w-full">
          <Swiper
            modules={[Pagination, Mousewheel]}
            slidesPerView={1}
            direction="horizontal"
            mousewheel={false}
            spaceBetween={24}
            dir="ltr"
            pagination={{
              clickable: true,
              bulletActiveClass: '!bg-teal-600',
              bulletClass: 'inline-block h-2 w-2 rounded-full bg-teal-200 mx-1 hover:bg-teal-300 transition-colors duration-200',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!px-4 !pb-14"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 border border-teal-100/50 hover:border-teal-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-teal-50/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-full border border-teal-200/50 backdrop-blur-sm`}>
                      {product.category}
                    </div>
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/5 to-transparent"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 max-h-40">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Product Details */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                        <svg 
                          className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'} text-teal-500`}
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
                        {product.dosageForm}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12 px-4">
          <motion.button 
            onClick={() => window.location.href = '/products'}
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('products.viewAll', 'View All Products')}
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

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-3 h-3 bg-teal-400/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-2 h-2 bg-teal-500/25 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default FeaturedProducts;