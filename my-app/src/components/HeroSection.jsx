import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const heroRef = useRef(null);

  // Replace with your Firebase Storage URL
  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/my-gallery-2e2f2.appspot.com/o/HeroSectionVid.mp4?alt=media&token=6475158f-97ce-4bce-a931-da198f3bf2ad";

  // Optional: Add a fallback image URL from Firebase Storage
  const fallbackImageUrl =
    "https://cdn.vectorstock.com/i/500p/30/98/pastel-blue-gradient-backdrop-vector-55593098.jpg";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background - optimized for older devices */}
      {!videoError && (
        <video
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={fallbackImageUrl}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Fallback Image for video loading or error states */}
      {(videoError || !videoLoaded) && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fallbackImageUrl})` }}
        />
      )}

      {/* Dark Overlay with subtle blue tint - improved readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/30 to-black/70" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Title with subtle blue accent - better contrast */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
            Welcome to Our{' '}
            <span className="text-blue-300 drop-shadow-md">
              Platform
            </span>
          </h1>

          {/* Paragraph with better readability */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 mb-8 drop-shadow-md leading-relaxed">
            Experience the future of technology with our innovative solutions.
            We're here to transform your digital journey with cutting-edge tools
            and services.
          </p>

          {/* Subtle blue accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;