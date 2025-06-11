import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        services: "Services",
        crm: "CRM Solutions",
        cloud: "Cloud Services",
        security: "Cybersecurity",
        partnerships: "Partnerships",
        contact: "Contact",
        getStarted: "Get Started",
        company: "UNITECH LIMITED",
      }
    },
    fr: {
      translation: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        crm: "Solutions CRM",
        cloud: "Services Cloud",
        security: "Cybersécurité",
        partnerships: "Partenariats",
        contact: "Contact",
        getStarted: "Commencer",
        company: "UNITECH LIMITED",
      }
    },
    es: {
      translation: {
        home: "Inicio",
        about: "Acerca de",
        services: "Servicios",
        crm: "Soluciones CRM",
        cloud: "Servicios en la Nube",
        security: "Ciberseguridad",
        partnerships: "Alianzas",
        contact: "Contacto",
        getStarted: "Comenzar",
        company: "UNITECH LIMITED",
      }
    }
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;