import { Routes, Route } from 'react-router-dom';
// import Dashboard from '../pages/dashboard/Dashboard';
// import Products from '../pages/dashboard/Products';
// import Messages from '../pages/dashboard/Messages';
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/messages" element={<Messages />} /> */}
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;