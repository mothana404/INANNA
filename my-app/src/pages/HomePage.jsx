//src/pages/website/HomePage.jsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import OurStoryAndMission from '../components/OurStoryAndMission';
import Investors from '../components/Investors';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurStoryAndMission />
      <FeaturedProducts />
      {/* <Investors /> */}
      <Footer />
    </div>
  );
};

export default HomePage;