import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
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
      <main id="main-content" className="flex-1 px-4 sm:px-6 lg:px-8" tabIndex={-1}>
        <Outlet />
      </main>
      <div className="px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
      <LiveChat />
    </div>
  );
};

export default Layout;
