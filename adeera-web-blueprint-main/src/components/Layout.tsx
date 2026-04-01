import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ProductTour } from './ProductTour';
import { LiveChat } from './LiveChat';


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] -translate-y-[200%] focus:translate-y-0 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring transition-transform"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ProductTour />
      <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-[100]">
       
        <LiveChat />
      </div>
    </div>
  );
};

export default Layout;
