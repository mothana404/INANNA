import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUsPage";
import FeaturedProducts from "./components/FeaturedProducts";
import "./App.css";
import "./i18n";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<FeaturedProducts />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
