//src/layout/WebsiteLayout.jsx
import Footer from '../components/website/Footer';
import Navbar from '../components/website/Navbar';

const WebsiteLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;