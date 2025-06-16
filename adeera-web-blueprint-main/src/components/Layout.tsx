import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ProductTour } from './ProductTour';
import { LiveChat } from './LiveChat';
import  ScrollToTop  from './ScrollToTop';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ProductTour />
      <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-[100]">
        <ScrollToTop />
        <LiveChat />
      </div>
    </div>
  );
};

export default Layout;
