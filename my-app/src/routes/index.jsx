// src/routes/index.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebsiteRoutes from './WebsiteRoutes';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;