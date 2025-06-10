import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-16 max-w-3xl">
    <Helmet>
      <title>Privacy Policy | Adeera</title>
      <meta name="description" content="Read the privacy policy for Adeera SaaS platform." />
    </Helmet>
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