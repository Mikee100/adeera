import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { HelmetProvider } from "react-helmet-async";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Crm from "./pages/services/Crm";
import Cloud from "./pages/services/Cloud";
import Security from "./pages/services/Security";
import Demo from "@/pages/Demo";
import { ThemeProvider } from '@/components/theme-provider';
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import CookieConsent from '@/components/CookieConsent';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CookieConsent />
          <Router>
            <ScrollToTop />
            <ScrollToTopOnRouteChange />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="partnerships" element={<Partnerships />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="services/crm" element={<Crm />} />
                <Route path="services/cloud" element={<Cloud />} />
                <Route path="services/security" element={<Security />} />
                <Route path="/demo" element={<Demo />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
