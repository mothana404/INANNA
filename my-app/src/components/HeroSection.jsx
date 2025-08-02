import { useTranslation } from 'react-i18next';
import HeoSectionVid from '../assets/videos/HeroSectionVid.mp4';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HeoSectionVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full">
        {/* Content Wrapper with padding for navbar */}
        <div className="container mx-auto px-4 h-screen flex items-center ">
          {/* Content Box - Adjusted for better mobile positioning */}
          <div className="w-full max-w-3xl mx-auto md:mt-0"> {/* Added margin-top for mobile */}
            {/* Text Content */}
            <div className="text-center space-y-6 pb-12"> {/* Added vertical padding */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
                {t('hero.title', 'Leading the Future of Healthcare')}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-delay">
                {t('hero.description', 'Innovative pharmaceutical solutions for a healthier tomorrow')}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-in-delay-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  {t('hero.ourProducts', 'Discover Our Products')}
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/10">
                  {t('hero.learnMoreBtn', 'Learn More')}
                </button>
              </div>
            </div>

            {/* Optional: Stats Section */}
            {/* <div className="hidden md:grid grid-cols-3 gap-8 mt-16 text-center">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-300">Countries Worldwide</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-gray-300">Products</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <svg 
            className="w-6 h-6 text-white"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;