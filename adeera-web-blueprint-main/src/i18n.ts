import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          services: "Solutions",
          partnerships: "Partnerships",
          contact: "Contact",
          pos: "Smart POS",
          inventory: "Inventory Management",
          payments: "Integrated Payments",
          ai: "AI Business Assistant"
        },
        company: "UNITECH LIMITED",
        getStarted: "Get Started",
      }
    },
    fr: {
      translation: {
        nav: {
          home: "Accueil",
          about: "À propos",
          services: "Solutions",
          partnerships: "Partenariats",
          contact: "Contact",
          pos: "Smart POS",
          inventory: "Gestion des stocks",
          payments: "Paiements Intégrés",
          ai: "Assistant IA Business"
        },
        company: "UNITECH LIMITED",
        getStarted: "Commencer",
      }
    },
    es: {
      translation: {
        nav: {
          home: "Inicio",
          about: "Acerca de",
          services: "Soluciones",
          partnerships: "Alianzas",
          contact: "Contacto",
          pos: "Smart POS",
          inventory: "Gestión de Inventario",
          payments: "Pagos Integrados",
          ai: "Asistente AI Business"
        },
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