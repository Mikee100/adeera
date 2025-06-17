import SEO from '@/components/SEO';

const TermsOfService = () => (
  <div className="container mx-auto px-4 py-16 max-w-3xl">
    <SEO 
      title="Terms of Service | ADEERA UNITECH | Service Agreement"
      description="ADEERA UNITECH terms of service and service agreement. Understand our service terms, conditions, and user agreements for SaaS solutions."
      keywords="terms of service, service agreement, user agreement, Kenya business terms, SaaS terms, legal terms, service conditions"
      url="https://www.adeeraunitech.com/terms-of-service"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "description": "Service terms and conditions",
        "url": "https://www.adeeraunitech.com/terms-of-service"
      }}
    />
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">
      Welcome to ADEERA UNITECH LIMITED. By accessing or using our SaaS platform, you agree to be bound by these Terms of Service.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Use of Service</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You must be at least 18 years old to use our services.</li>
      <li>You agree to provide accurate information and keep your account secure.</li>
      <li>You are responsible for all activity under your account.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Acceptable Use</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Do not use our platform for unlawful or harmful activities.</li>
      <li>Do not attempt to disrupt or compromise our systems.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
    <p className="mb-4">
      All content, trademarks, and data on this platform are the property of ADEERA UNITECH LIMITED or its licensors.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Termination</h2>
    <p className="mb-4">
      We may suspend or terminate your access if you violate these terms.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
    <p className="mb-4">
      ADEERA UNITECH LIMITED is not liable for any indirect or consequential damages arising from your use of the platform.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Changes to Terms</h2>
    <p className="mb-4">
      We may update these Terms of Service from time to time. Continued use of the platform means you accept the new terms.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>
      If you have any questions about these Terms, contact us at <a href="mailto:contact@adeeraunitech.com" className="text-primary underline">contact@adeeraunitech.com</a>.
    </p>
    <p className="mt-8 text-sm text-muted-foreground">Last updated: June 2025</p>
  </div>
);

export default TermsOfService;