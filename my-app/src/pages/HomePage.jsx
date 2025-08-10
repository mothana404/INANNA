//src/pages/website/HomePage.jsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import OurStoryAndMission from '../components/OurStoryAndMission';
import InvestorsSection from '../components/InvestorsSection';
import GlobalOperationsSection from '../components/GlobalOperationsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurStoryAndMission />
      <FeaturedProducts />
      <InvestorsSection />
      <GlobalOperationsSection />
      <Footer />
    </div>
  );
};

export default HomePage;