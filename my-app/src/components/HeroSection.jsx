import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { memo, useState, useEffect, useRef, useCallback } from 'react';

// Memoized Button Component
const ActionButton = memo(({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
));

const HeroSection = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(true);

  // Detect mobile and connection quality
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Check connection quality for mobile
      if (mobile && 'connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
          setShouldShowVideo(false);
        }
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Optimized video loading
  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.warn);
    }
  }, []);

  // Lazy load video on mobile
  useEffect(() => {
    if (!shouldShowVideo) return;

    const video = videoRef.current;
    if (!video) return;

    // Add intersection observer for mobile to only load when visible
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.load();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(video);
      return () => observer.disconnect();
    } else {
      // Desktop - load immediately
      video.load();
    }
  }, [isMobile, shouldShowVideo]);

  const stats = [
    { number: '50+', label: t('hero.stats.countries') },
    { number: '1000+', label: t('hero.stats.products') },
    { number: '30+', label: t('hero.stats.experience') }
  ];

  // Fallback background for when video is disabled or not loaded
  const fallbackBackground = "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background or Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {shouldShowVideo ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload={isMobile ? "none" : "metadata"}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              poster="/video-poster.jpg"
              onLoadedData={handleVideoLoad}
              onError={() => setShouldShowVideo(false)}
              style={{
                // Mobile optimizations
                ...(isMobile && {
                  transform: 'scale(1.02)', // Reduced scale for mobile
                  willChange: 'auto', // Let browser optimize
                })
              }}
            >
              <source 
                src="https://firebasestorage.googleapis.com/v0/b/my-gallery-2e2f2.appspot.com/o/HeroSectionVid.mp4?alt=media&token=6475158f-97ce-4bce-a931-da198f3bf2ad" 
                type="video/mp4" 
              />
            </video>
            
            {/* Fallback background while video loads */}
            <div className={`absolute inset-0 ${fallbackBackground} transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`} />
          </>
        ) : (
          /* Static background fallback */
          <div className={`absolute inset-0 ${fallbackBackground}`} />
        )}

        {/* Optimized overlays - lighter for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto text-center pt-12 sm:pt-16">

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mt-4 sm:mt-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block drop-shadow-lg"
              >
                {t('hero.title1')}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg"
              >
                {t('hero.title2')}
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4 mt-4 sm:mt-6 drop-shadow-lg"
            >
              {t('hero.description')}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-6 sm:pt-8"
            >
              <ActionButton
                to="/products"
                className="group w-full sm:w-auto bg-blue-600/90 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold flex items-center justify-center space-x-2 backdrop-blur-sm text-sm sm:text-base"
              >
                <span>{t('hero.ourProducts')}</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </ActionButton>
              
              <button 
                className="group w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 hover:border-white/70 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <FiPlay className="w-4 h-4" />
                <span>{t('hero.watchVideo')}</span>
              </button>
            </motion.div>

            {/* Stats Section - Hidden on mobile for better performance */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="hidden lg:grid grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm lg:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Reduced floating elements for better performance */}
            <div className="hidden xl:block">
              <div className="absolute top-1/4 left-10 w-16 h-16 bg-blue-400/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-1/3 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);