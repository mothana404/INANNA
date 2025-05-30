import Navbar from '../components/website/Navbar';
// import Footer from '../components/website/Footer';

const WebsiteLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default WebsiteLayout;