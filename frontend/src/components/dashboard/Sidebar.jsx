import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'HomeIcon' },
    { path: '/dashboard/products', label: 'Products', icon: 'BoxIcon' },
    { path: '/dashboard/messages', label: 'Messages', icon: 'MessageIcon' },
    { path: '/dashboard/settings', label: 'Settings', icon: 'SettingsIcon' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 ${
              location.pathname === item.path ? 'bg-gray-700' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};