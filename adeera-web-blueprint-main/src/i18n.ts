import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        platform: "Platform",
        features: "Features",
        pos: "POS",
        inventory: "Inventory",
        analytics: "Analytics",
        payments: "Payments",
        about: "About",
        demo: "Demo",
        pricing: "Pricing",
        integrations: "Integrations",
        services: "Services",
        crm: "CRM Solutions",
        cloud: "Cloud Services",
        security: "Cybersecurity",
        partnerships: "Partnerships",
        contact: "Contact",
        getStarted: "Get Started",
        login: "Log in",
        company: "UNITECH LIMITED",
      }
    },
    fr: {
      translation: {
        home: "Accueil",
        platform: "Plateforme",
        features: "Fonctionnalités",
        pos: "PDV",
        inventory: "Stock",
        analytics: "Analytiques",
        payments: "Paiements",
        about: "À propos",
        demo: "Démo",
        pricing: "Tarifs",
        services: "Services",
        crm: "Solutions CRM",
        cloud: "Services Cloud",
        security: "Cybersécurité",
        partnerships: "Partenariats",
        contact: "Contact",
        getStarted: "Commencer",
        login: "Connexion",
        company: "UNITECH LIMITED",
      }
    },
    es: {
      translation: {
        home: "Inicio",
        platform: "Plataforma",
        features: "Funcionalidades",
        pos: "TPV",
        inventory: "Inventario",
        analytics: "Analíticas",
        payments: "Pagos",
        about: "Acerca de",
        demo: "Demo",
        pricing: "Precios",
        integrations: "Integraciones",
        services: "Servicios",
        crm: "Soluciones CRM",
        cloud: "Servicios en la Nube",
        security: "Ciberseguridad",
        partnerships: "Alianzas",
        contact: "Contacto",
        getStarted: "Comenzar",
        login: "Iniciar sesión",
        company: "UNITECH LIMITED",
      }
    }
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;