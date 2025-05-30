// src/routes/index.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import WebsiteRoutes from './WebsiteRoutes';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/*" element={<WebsiteRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;