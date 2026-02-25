import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Platform from "@/pages/Platform";
import Features from "@/pages/Features";
import Pos from "@/pages/Pos";
import Inventory from "@/pages/Inventory";
import Analytics from "@/pages/Analytics";
import Payments from "@/pages/Payments";
import Pricing from "@/pages/Pricing";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { HelmetProvider } from "react-helmet-async";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
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
                <Route path="platform" element={<Platform />} />
                <Route path="features" element={<Features />} />
                <Route path="pos" element={<Pos />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="payments" element={<Payments />} />
                <Route path="pricing" element={<Pricing />} />
               
                <Route path="services" element={<Navigate to="/integrations" replace />} />
                <Route path="services/crm" element={<Navigate to="/integrations" replace />} />
                <Route path="services/cloud" element={<Navigate to="/integrations" replace />} />
                <Route path="services/security" element={<Navigate to="/integrations" replace />} />
                <Route path="partnerships" element={<Partnerships />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="demo" element={<Demo />} />
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
