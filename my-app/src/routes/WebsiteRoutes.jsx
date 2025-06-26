// src/routes/WebsiteRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/website/HomePage';
import FeaturedProducts from '../components/website/FeaturedProducts';
import ContactUs from '../pages/website/ContactUsPage';

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/products" element={<FeaturedProducts />} />
    </Routes>
  );
};

export default WebsiteRoutes;