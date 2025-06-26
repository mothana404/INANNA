//src/pages/website/HomePage.jsx
import Navbar from '../../components/website/Navbar';
import HeroSection from '../../components/website/HeroSection';
import Footer from '../../components/website/Footer';
import FeaturedProducts from '../../components/website/FeaturedProducts';
import WhyChooseUs from '../../components/website/WhyChooseUs';
import OurStoryAndMission from '../../components/website/OurStoryAndMission';
import Investors from '../../components/website/Investors';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurStoryAndMission />
      <FeaturedProducts />
      <Investors />
      <Footer />
    </div>
  );
};

export default HomePage;