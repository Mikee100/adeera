import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { CheckCircle, BarChart2, Users, Zap, Shield, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Seamless Integrations",
    desc: "Connect with Salesforce, HubSpot, Zoho, and more. No code required.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: "Advanced Analytics",
    desc: "Custom dashboards and real-time reporting to drive smarter decisions.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Automated Lead Management",
    desc: "Capture, score, and nurture leads automatically to boost conversions.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Workflow Automation",
    desc: "Automate repetitive tasks and focus on what matters most.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Enterprise-Grade Security",
    desc: "Your data is protected with bank-grade encryption and compliance.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "Omnichannel Communication",
    desc: "Engage customers via email, SMS, WhatsApp, and more from one place.",
  },
];

const stats = [
  { label: "Active Users", value: "5,000+" },
  { label: "Integrations", value: "20+" },
  { label: "Avg. Uptime", value: "99.99%" },
  { label: "Support", value: "24/7" },
];

const useCases = [
  {
    title: "Sales Teams",
    desc: "Track deals, automate follow-ups, and close more sales with pipeline management.",
  },
  {
    title: "Customer Support",
    desc: "Centralize customer data and resolve issues faster with integrated ticketing.",
  },
  {
    title: "Marketing",
    desc: "Segment audiences, run campaigns, and measure ROI with built-in analytics.",
  },
  {
    title: "SMEs & Enterprises",
    desc: "Flexible for startups and scalable for large organizations across Africa.",
  },
];

const faqs = [
  {
    q: "Is my data secure?",
    a: "Absolutely. We use bank-grade encryption, regular security audits, and comply with global standards.",
  },
  {
    q: "Can I migrate from my current CRM?",
    a: "Yes! Our team will help you migrate your data from Salesforce, HubSpot, Zoho, or spreadsheets.",
  },
  {
    q: "Do you offer local support?",
    a: "Yes, we provide local onboarding and 24/7 support tailored for African businesses.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, you can try all features free for 14 days. No credit card required.",
  },
];

const Crm = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRM Integration & Support",
    "description": "We deploy and support Salesforce, HubSpot, and Zoho CRMs — empowering African businesses to manage customer relationships, sales pipelines, and marketing automation.",
    "provider": {
      "@type": "Organization",
      "name": "ADEERA UNITECH",
      "url": "https://adeera.vercel.app"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CRM Solutions",
      "itemListElement": features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": feature.title,
          "description": feature.desc,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web"
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500+"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background">
      <Helmet>
        <title>CRM Solutions | ADEERA UNITECH</title>
        <meta name="description" content="Modern CRM solutions for African businesses. Integrate, automate, and grow with Adeera's comprehensive CRM services." />
        <meta property="og:title" content="CRM Solutions | ADEERA UNITECH" />
        <meta property="og:description" content="Modern CRM solutions for African businesses. Integrate, automate, and grow with Adeera's comprehensive CRM services." />
        <meta property="og:image" content="https://adeera.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CRM Solutions | ADEERA UNITECH" />
        <meta name="twitter:description" content="Modern CRM solutions for African businesses. Integrate, automate, and grow with Adeera's comprehensive CRM services." />
        <meta name="twitter:image" content="https://adeera.vercel.app/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-8 bg-gradient-to-r from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              CRM Solutions <span className="text-foreground">for Africa's Digital Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Integrate, automate, and grow your business with Adeera's modern CRM platform—built for Africa's unique needs.
            </p>
            <Link to="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">
                Request a Demo
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/crm-customer-relationship-management-concept-illustration_114360-16461.jpg?w=700"
              alt="CRM Illustration"
              className="rounded-2xl shadow-2xl object-cover w-full max-w-md border border-primary/10"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/80 dark:bg-background/80 rounded-xl p-6 shadow">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Adeera CRM?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white/70 dark:bg-background/80 rounded-xl p-8 shadow hover:shadow-lg transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((u, i) => (
            <div key={i} className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 shadow flex flex-col">
              <h4 className="font-semibold text-primary mb-2">{u.title}</h4>
              <p className="text-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg bg-white/70 dark:bg-background/80">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-foreground focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                {openFaq === i ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-muted-foreground animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-primary/90 rounded-2xl p-10 md:p-16 shadow-xl flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
          <p className="text-white/90 mb-8 max-w-xl">
            Start your free trial or schedule a personalized demo with our CRM experts. See how Adeera can help you grow.
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Crm;