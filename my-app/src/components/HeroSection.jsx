import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { memo, useState, useEffect } from 'react';

// Memoized Stats Component
const StatsItem = memo(({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="text-center group"
  >
    <div className="relative">
      <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
        {number}
      </div>
      <div className="absolute -inset-2 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
    </div>
    <div className="text-blue-200 text-sm lg:text-base font-medium">
      {label}
    </div>
  </motion.div>
));

// Memoized Button Component
const ActionButton = memo(({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
));

const HeroSection = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { number: '50+', label: t('hero.stats.countries') },
    { number: '1000+', label: t('hero.stats.products') },
    { number: '30+', label: t('hero.stats.experience') }
  ];

  // Simplified animation variants for mobile
  const mobileAnimationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const desktopAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const animationVariants = isMobile ? mobileAnimationVariants : desktopAnimationVariants;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - Video for desktop, image for mobile */}
      <div className="absolute inset-0 w-full h-full">
        {!isMobile ? (
          <>
            <video
              autoPlay
              loop
                            muted
              playsInline
              className="w-full h-full object-cover scale-105"
              poster="/video-poster.jpg"
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src={'https://firebasestorage.googleapis.com/v0/b/my-gallery-2e2f2.appspot.com/o/HeroSectionVid.mp4?alt=media&token=6475158f-97ce-4bce-a931-da198f3bf2ad'} type="video/mp4" />
            </video>
          </>
        ) : (
          // Use a static image for mobile to improve performance
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/my-gallery-2e2f2.appspot.com/o/HeroSectionVid.mp4?alt=media&token=6475158f-97ce-4bce-a931-da198f3bf2ad" 
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        )}

        {/* Simplified overlays for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        {/* Remove backdrop blur on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        )}
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto text-center pt-20 sm:pt-16">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mt-6">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.1 : 0.3 }}
                className="block drop-shadow-lg"
              >
                {t('hero.title1')}
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.2 : 0.5 }}
                className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg"
              >
                {t('hero.title2')}
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.3 : 0.7 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4 mt-6 drop-shadow-lg"
            >
              {t('hero.description')}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.4 : 0.9 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-4 sm:pt-8"
            >
              <ActionButton
                to="/products"
                className="group w-full sm:w-auto bg-blue-600/90 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 font-semibold flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>{t('hero.ourProducts')}</span>
                <FiArrowRight className={`w-4 h-4 ${!isMobile ? 'group-hover:translate-x-1' : ''} transition-transform duration-300`} />
              </ActionButton>
              
              <button 
                className="group w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 hover:border-white/70 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
              >
                <FiPlay className="w-4 h-4" />
                <span>{t('hero.watchVideo')}</span>
              </button>
            </motion.div>

            {/* Stats Section - Hidden on mobile for better performance */}
            {!isMobile && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="hidden md:grid grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-20"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm lg:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Floating Elements - Only on desktop */}
            {!isMobile && (
              <div className="hidden lg:block">
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse-slow" />
                <div className="absolute top-1/3 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-300/20 rounded-full blur-xl animate-pulse-slow" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Stats - Displayed separately at the bottom for mobile */}
      {isMobile && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
                    <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-white/70 text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Performance optimization
export default memo(HeroSection);