import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
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
        services: "Solutions",
          partnerships: "Partnerships",
          contact: "Contact",
          pos: "Smart POS",
          inventory: "Inventory Management",
          payments: "Integrated Payments",
          ai: "AI Business Assistant"
        },
        login: "Log in",
        company: "UNITECH LIMITED",
        getStarted: "Get Started",
      }
    },
    fr: {
      translation: {
        nav: {
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
        services: "Solutions",
          partnerships: "Partenariats",
          contact: "Contact",
          pos: "Smart POS",
          inventory: "Gestion des stocks",
          payments: "Paiements Intégrés",
          ai: "Assistant IA Business"
        },
        login: "Connexion",
        company: "UNITECH LIMITED",
        getStarted: "Commencer",
      }
    },
    es: {
      translation: {
        nav: {
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
        services: "Soluciones",
          partnerships: "Alianzas",
          contact: "Contacto",
          pos: "Smart POS",
          inventory: "Gestión de Inventario",
          payments: "Pagos Integrados",
          ai: "Asistente AI Business"
        },
        login: "Iniciar sesión",
        company: "UNITECH LIMITED",
        getStarted: "Comenzar",
      }
    }
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;