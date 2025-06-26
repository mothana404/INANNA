import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
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
      description: 'Fast-acting pain relief for headaches and body pain',
      dosageForm: 'Tablets',
    },
    {
      id: 2,
      name: 'ColdGuard Max',
      category: 'Cold & Flu',
      image: 'https://www.elfarmaceutico.es/uploads/s1/19/82/7/6a53a676f3fed105a87ca28ac057bc8b.jpeg',
      description: 'Complete cold & flu symptom relief',
      dosageForm: 'Capsules',
    },
    {
      id: 3,
      name: 'AllerClear',
      category: 'Allergy Relief',
      image: 'https://botplusweb.farmaceuticos.com/Documentos/AEMPS/Fotos/290995/full/78565_materialas.jpg',
      description: '24-hour allergy symptom relief',
      dosageForm: 'Tablets',
    },
    {
      id: 4,
      name: 'DigestEase',
      category: 'Digestive Health',
      image: 'https://cdn.aldawaeya.com/content/images/thumbs/628/628f4f365b3c8e3674b4982d_coxicel-200-mg-hard-caps-30s.png',
      description: 'Fast relief from acid reflux and indigestion',
      dosageForm: 'Chewable Tablets',
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('products.featuredTitle', 'Featured Products')}
          </h2>
          <p className="text-gray-600">
            {t('products.featuredDescription', 'Discover our innovative pharmaceutical solutions')}
          </p>
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
              bulletActiveClass: '!bg-blue-600',
              bulletClass: 'inline-block h-2 w-2 rounded-full bg-blue-200 mx-1',
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full`}>
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    
                    {/* Product Details */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm text-gray-500">
                        <svg 
                          className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12 px-4">
          <button 
            onClick={() => window.location.href = '/products'}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;