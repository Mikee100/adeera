import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ADEERA UNITECH | Enterprise SaaS Solutions for African Businesses',
  description = 'Transform your business with ADEERA\'s enterprise-grade SaaS solutions — CRM integration, cybersecurity, cloud solutions, and SaaS marketplace. Optimized for Africa\'s unique business landscape.',
  keywords = 'SaaS, CRM, cybersecurity, cloud solutions, African business, enterprise software, digital transformation, Salesforce, HubSpot, AWS, Azure, Kenya, Nairobi, business software, cloud migration, data security, API integration, mobile solutions',
  image = 'https://www.adeeraunitech.com/og-image.jpg',
  url = 'https://www.adeeraunitech.com',
  type = 'website',
  author = 'ADEERA UNITECH LIMITED',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  const fullTitle = title.includes('ADEERA') ? title : `${title} | ADEERA UNITECH`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ADEERA UNITECH LIMITED",
    "url": "https://www.adeeraunitech.com",
    "logo": "https://www.adeeraunitech.com/logo.png",
    "description": "Enterprise SaaS solutions for African businesses",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "KE"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      {noindex || nofollow ? (
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="ADEERA UNITECH" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@adeeraunitech" />
      <meta name="twitter:creator" content="@adeeraunitech" />
      
      {/* Additional Meta Tags */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.2921;36.8219" />
      <meta name="ICBM" content="-1.2921, 36.8219" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 