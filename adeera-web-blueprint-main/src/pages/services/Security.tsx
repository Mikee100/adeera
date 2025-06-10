import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Shield, Eye, AlertTriangle, Lock, Server, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Bank-Grade Encryption",
    desc: "All your data is encrypted at rest and in transit using industry-leading standards.",
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Threat Intelligence",
    desc: "Real-time monitoring and AI-powered threat detection to stop attacks before they happen.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    title: "Incident Response",
    desc: "Rapid response and recovery plans to minimize downtime and data loss.",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Endpoint Protection",
    desc: "Secure every device and user with advanced endpoint security and access controls.",
  },
  {
    icon: <Server className="h-6 w-6 text-primary" />,
    title: "Compliance & Audits",
    desc: "Meet GDPR, POPIA, and other global standards with regular security audits.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "User Training",
    desc: "Empower your team with security awareness training and best practices.",
  },
];

const stats = [
  { label: "Threats Blocked", value: "1M+" },
  { label: "Avg. Response Time", value: "5 min" },
  { label: "Compliance Rate", value: "100%" },
  { label: "Support", value: "24/7" },
];

const useCases = [
  {
    title: "Financial Services",
    desc: "Protect sensitive transactions and customer data with multi-layered security.",
  },
  {
    title: "Healthcare",
    desc: "Ensure patient data privacy and meet strict regulatory requirements.",
  },
  {
    title: "E-Commerce",
    desc: "Prevent fraud and secure online payments for your customers.",
  },
  {
    title: "Remote Teams",
    desc: "Enable secure access for distributed teams and remote workforces.",
  },
];

const faqs = [
  {
    q: "How do you protect my data?",
    a: "We use bank-grade encryption, firewalls, and continuous monitoring to keep your data safe at all times.",
  },
  {
    q: "Can you help with compliance?",
    a: "Yes! We help you meet GDPR, POPIA, and other global standards with automated compliance tools and audits.",
  },
  {
    q: "What happens if there’s a breach?",
    a: "Our incident response team acts immediately to contain, investigate, and resolve any security incidents.",
  },
  {
    q: "Do you offer security training?",
    a: "Absolutely. We provide ongoing security awareness training for your staff to reduce human risk.",
  },
];

const Security = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background">
      <Helmet>
        <title>Cybersecurity | Adeera</title>
        <meta name="description" content="Enterprise cybersecurity for African businesses. Protect your data and systems with Adeera." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Cybersecurity <span className="text-foreground">for Modern African Enterprises</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your business, customers, and reputation with Adeera’s advanced cybersecurity solutions—built for Africa’s digital future.
            </p>
            <Link to="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">
                Request a Security Assessment
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/cyber-security-concept-illustration_114360-7962.jpg?w=700"
              alt="Cybersecurity Illustration"
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Adeera Security?</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to secure your business?</h2>
          <p className="text-white/90 mb-8 max-w-xl">
            Start your cybersecurity journey with Adeera. Request a free assessment or schedule a personalized demo with our experts.
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

export default Security;