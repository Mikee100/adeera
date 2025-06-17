export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: 'website' | 'article' | 'product';
  structuredData?: object;
}

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: 'ADEERA UNITECH | Enterprise SaaS Solutions for African Businesses',
    description: 'Transform your business with ADEERA\'s enterprise-grade SaaS solutions — CRM integration, cybersecurity, cloud solutions, and SaaS marketplace. Optimized for Africa\'s unique business landscape. ISO 27001 certified, 24/7 support.',
    keywords: 'SaaS, CRM, cybersecurity, cloud solutions, African business, enterprise software, digital transformation, Salesforce, HubSpot, AWS, Azure, Kenya, Nairobi, business software, cloud migration, data security, API integration, mobile solutions',
    image: 'https://www.adeeraunitech.com/og-image.jpg',
    url: 'https://www.adeeraunitech.com/',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ADEERA UNITECH",
      "url": "https://www.adeeraunitech.com",
      "description": "Enterprise SaaS solutions for African businesses",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.adeeraunitech.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  
  about: {
    title: 'About ADEERA UNITECH | Leading SaaS Solutions Provider in Africa',
    description: 'Discover ADEERA UNITECH\'s mission to empower African businesses through innovative SaaS solutions. Learn about our expertise in CRM, cybersecurity, and cloud technologies.',
    keywords: 'about ADEERA, African tech company, SaaS provider Kenya, enterprise software Africa, digital transformation Kenya, tech innovation Africa',
    image: 'https://www.adeeraunitech.com/about-og.jpg',
    url: 'https://www.adeeraunitech.com/about',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About ADEERA UNITECH",
      "description": "Leading SaaS solutions provider in Africa",
      "url": "https://www.adeeraunitech.com/about"
    }
  },
  
  services: {
    title: 'Our Services | CRM, Cybersecurity & Cloud Solutions | ADEERA UNITECH',
    description: 'Comprehensive SaaS services including CRM integration, cybersecurity solutions, cloud migration, and enterprise software development. Tailored for African businesses.',
    keywords: 'SaaS services, CRM services, cybersecurity services, cloud services, enterprise software services, digital transformation services, Kenya tech services',
    image: 'https://www.adeeraunitech.com/services-og.jpg',
    url: 'https://www.adeeraunitech.com/services',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ADEERA UNITECH Services",
      "description": "Comprehensive SaaS services for African businesses",
      "provider": {
        "@type": "Organization",
        "name": "ADEERA UNITECH LIMITED"
      },
      "areaServed": "KE",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Enterprise SaaS Solutions"
      }
    }
  },
  
  crm: {
    title: 'CRM Integration Services | Salesforce, HubSpot & Zoho | ADEERA UNITECH',
    description: 'Expert CRM integration services for Salesforce, HubSpot, and Zoho. Custom CRM solutions tailored for African business needs with local support and training.',
    keywords: 'CRM integration, Salesforce Kenya, HubSpot integration, Zoho CRM, CRM consulting, customer relationship management, business automation, Kenya CRM services',
    image: 'https://www.adeeraunitech.com/crm-og.jpg',
    url: 'https://www.adeeraunitech.com/services/crm',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "CRM Integration Services",
      "description": "Expert CRM integration for Salesforce, HubSpot, and Zoho",
      "provider": {
        "@type": "Organization",
        "name": "ADEERA UNITECH LIMITED"
      },
      "serviceType": "CRM Integration",
      "areaServed": "KE"
    }
  },
  
  cybersecurity: {
    title: 'Cybersecurity Solutions | Enterprise Security Services | ADEERA UNITECH',
    description: 'Comprehensive cybersecurity solutions including endpoint protection, threat intelligence, and security consulting. Protect your business with enterprise-grade security.',
    keywords: 'cybersecurity Kenya, enterprise security, endpoint protection, threat intelligence, security consulting, data protection, network security, Kenya cybersecurity services',
    image: 'https://www.adeeraunitech.com/security-og.jpg',
    url: 'https://www.adeeraunitech.com/services/cybersecurity',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cybersecurity Solutions",
      "description": "Comprehensive cybersecurity and enterprise security services",
      "provider": {
        "@type": "Organization",
        "name": "ADEERA UNITECH LIMITED"
      },
      "serviceType": "Cybersecurity",
      "areaServed": "KE"
    }
  },
  
  cloud: {
    title: 'Cloud Solutions | AWS, Azure & Google Cloud Migration | ADEERA UNITECH',
    description: 'Expert cloud migration and management services for AWS, Azure, and Google Cloud. Optimize your infrastructure with our cloud consulting and support.',
    keywords: 'cloud migration Kenya, AWS Kenya, Azure Kenya, Google Cloud Kenya, cloud consulting, infrastructure optimization, cloud management, Kenya cloud services',
    image: 'https://www.adeeraunitech.com/cloud-og.jpg',
    url: 'https://www.adeeraunitech.com/services/cloud',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cloud Solutions",
      "description": "Expert cloud migration and management services",
      "provider": {
        "@type": "Organization",
        "name": "ADEERA UNITECH LIMITED"
      },
      "serviceType": "Cloud Computing",
      "areaServed": "KE"
    }
  },
  
  contact: {
    title: 'Contact ADEERA UNITECH | Get Expert SaaS Consultation | Kenya',
    description: 'Contact ADEERA UNITECH for expert SaaS consultation, CRM integration, cybersecurity, and cloud solutions. Get in touch with our team in Nairobi, Kenya.',
    keywords: 'contact ADEERA, SaaS consultation Kenya, tech support Kenya, business consultation Nairobi, enterprise software support, Kenya tech company contact',
    image: 'https://www.adeeraunitech.com/contact-og.jpg',
    url: 'https://www.adeeraunitech.com/contact',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact ADEERA UNITECH",
      "description": "Get expert SaaS consultation and support",
      "url": "https://www.adeeraunitech.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "ADEERA UNITECH LIMITED",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "KE"
        }
      }
    }
  },
  
  demo: {
    title: 'Request Demo | ADEERA UNITECH SaaS Solutions | Free Consultation',
    description: 'Request a free demo of ADEERA\'s SaaS solutions. Experience our CRM, cybersecurity, and cloud services firsthand. Book your consultation today.',
    keywords: 'SaaS demo, free consultation, CRM demo, cybersecurity demo, cloud demo, business software demo, Kenya tech demo, enterprise software trial',
    image: 'https://www.adeeraunitech.com/demo-og.jpg',
    url: 'https://www.adeeraunitech.com/demo',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SaaS Demo Request",
      "description": "Free demo and consultation for SaaS solutions",
      "provider": {
        "@type": "Organization",
        "name": "ADEERA UNITECH LIMITED"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "KES",
        "description": "Free consultation and demo"
      }
    }
  },
  
  partnerships: {
    title: 'Partnerships | Become an ADEERA UNITECH Partner | Kenya Tech Ecosystem',
    description: 'Join ADEERA UNITECH\'s partner network. Collaborate with us to deliver innovative SaaS solutions across Africa. Partnership opportunities for tech companies.',
    keywords: 'tech partnerships Kenya, SaaS partnerships, business partnerships Africa, technology collaboration, Kenya tech ecosystem, enterprise partnerships',
    image: 'https://www.adeeraunitech.com/partnerships-og.jpg',
    url: 'https://www.adeeraunitech.com/partnerships',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ADEERA UNITECH LIMITED",
      "description": "SaaS solutions provider seeking partnerships",
      "url": "https://www.adeeraunitech.com/partnerships",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Partnership Opportunities"
      }
    }
  },
  
  privacy: {
    title: 'Privacy Policy | ADEERA UNITECH | Data Protection & Security',
    description: 'ADEERA UNITECH privacy policy. Learn how we protect your data and maintain security standards. ISO 27001 certified data protection practices.',
    keywords: 'privacy policy, data protection, security policy, Kenya data protection, GDPR compliance, data security, privacy rights',
    image: 'https://www.adeeraunitech.com/privacy-og.jpg',
    url: 'https://www.adeeraunitech.com/privacy-policy',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Data protection and privacy policy",
      "url": "https://www.adeeraunitech.com/privacy-policy"
    }
  },
  
  terms: {
    title: 'Terms of Service | ADEERA UNITECH | Service Agreement',
    description: 'ADEERA UNITECH terms of service and service agreement. Understand our service terms, conditions, and user agreements for SaaS solutions.',
    keywords: 'terms of service, service agreement, user agreement, Kenya business terms, SaaS terms, legal terms, service conditions',
    image: 'https://www.adeeraunitech.com/terms-og.jpg',
    url: 'https://www.adeeraunitech.com/terms-of-service',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service",
      "description": "Service terms and conditions",
      "url": "https://www.adeeraunitech.com/terms-of-service"
    }
  }
};

export const getSEOConfig = (page: string): SEOConfig => {
  return seoConfig[page] || seoConfig.home;
}; 