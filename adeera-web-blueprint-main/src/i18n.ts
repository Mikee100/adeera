import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: "Home",
          platform: "Platform",
          pos: "POS",
          posRetail: "Retail Till",
          posRestaurant: "Restaurant Till",
          features: "Features",
          integrations: "Integrations",
          about: "About",
          demo: "Demo",
          pricing: "Pricing",
          services: "Solutions",
          partnerships: "Partnerships",
          contact: "Contact",
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
          pos: "Caisse (POS)",
          posRetail: "Caisse Commerce",
          posRestaurant: "Caisse Restaurant",
          features: "Fonctionnalités",
          integrations: "Intégrations",
          about: "À propos",
          demo: "Démo",
          pricing: "Tarifs",
          services: "Solutions",
          partnerships: "Partenariats",
          contact: "Contact",
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
          pos: "TPV",
          posRetail: "TPV Minorista",
          posRestaurant: "TPV Restaurante",
          features: "Funcionalidades",
          integrations: "Integraciones",
          about: "Acerca de",
          demo: "Demo",
          pricing: "Precios",
          services: "Soluciones",
          partnerships: "Alianzas",
          contact: "Contacto",
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