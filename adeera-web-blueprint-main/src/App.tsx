import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Platform from "@/pages/Platform";
import Features from "@/pages/Features";
import Integrations from "@/pages/Integrations";
import Pos from "@/pages/Pos";
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
                <Route path="integrations" element={<Integrations />} />
                <Route path="pos" element={<Pos />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="partnerships" element={<Partnerships />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="/demo" element={<Demo />} />

                {/* Retired pages — redirect to their nearest real replacement */}
                <Route path="services" element={<Navigate to="/integrations" replace />} />
                <Route path="services/crm" element={<Navigate to="/integrations" replace />} />
                <Route path="services/cloud" element={<Navigate to="/integrations" replace />} />
                <Route path="services/security" element={<Navigate to="/integrations" replace />} />
                <Route path="services/pos" element={<Navigate to="/pos" replace />} />
                <Route path="services/inventory" element={<Navigate to="/features" replace />} />
                <Route path="services/payments" element={<Navigate to="/features" replace />} />
                <Route path="services/ai" element={<Navigate to="/features" replace />} />
                <Route path="inventory" element={<Navigate to="/features" replace />} />
                <Route path="analytics" element={<Navigate to="/features" replace />} />
                <Route path="payments" element={<Navigate to="/features" replace />} />
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
