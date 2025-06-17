import SEO from '@/components/SEO';

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-16 max-w-3xl">
    <SEO 
      title="Privacy Policy | ADEERA UNITECH | Data Protection & Security"
      description="ADEERA UNITECH privacy policy. Learn how we protect your data and maintain security standards. ISO 27001 certified data protection practices."
      keywords="privacy policy, data protection, security policy, Kenya data protection, GDPR compliance, data security, privacy rights"
      url="https://www.adeeraunitech.com/privacy-policy"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "Data protection and privacy policy",
        "url": "https://www.adeeraunitech.com/privacy-policy"
      }}
    />
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">
      At ADEERA UNITECH LIMITED, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our SaaS platform and services.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Personal information (such as name, email, company) you provide when registering or contacting us.</li>
      <li>Usage data and analytics to improve our services.</li>
      <li>Cookies and similar technologies for authentication and analytics.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To provide, operate, and maintain our SaaS platform.</li>
      <li>To communicate with you about updates, support, and marketing.</li>
      <li>To improve our services and user experience.</li>
      <li>To comply with legal obligations.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You can access, update, or delete your personal information at any time.</li>
      <li>You can opt out of marketing communications.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>
      If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@adeeraunitech.com" className="text-primary underline">contact@adeeraunitech.com</a>.
    </p>
    <p className="mt-8 text-sm text-muted-foreground">Last updated: June 2025</p>
  </div>
);

export default PrivacyPolicy;