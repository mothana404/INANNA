import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/website/HomePage';
import Contact from '../pages/website/ContactUsPage';
import FeaturedProducts from '../components/website/FeaturedProducts';
// import WebsiteLayout from '../layouts/WebsiteLayout';
// import AboutPage from '../pages/website/AboutPage';
// import ContactPage from '../pages/website/ContactPage';
// import ProductsPage from '../pages/website/ProductsPage';

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<FeaturedProducts />} />
    </Routes>
  );
};

export default WebsiteRoutes;