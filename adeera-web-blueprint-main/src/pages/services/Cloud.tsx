import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Cloud as CloudIcon, Server, Shield, Zap, Database, BarChart2, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <CloudIcon className="h-6 w-6 text-primary" />,
    title: "Multi-Cloud Migrations",
    desc: "Seamlessly move your workloads to AWS, Azure, or Google Cloud with zero downtime.",
  },
  {
    icon: <Server className="h-6 w-6 text-primary" />,
    title: "Scalable Infrastructure",
    desc: "Auto-scale resources to match your business growth and traffic spikes.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Enterprise Security",
    desc: "Protect your data with advanced firewalls, encryption, and compliance.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "24/7 Monitoring & Support",
    desc: "Our cloud experts monitor your systems around the clock and respond instantly.",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Automated Backups",
    desc: "Daily backups and disaster recovery ensure your data is always safe.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: "Cost Optimization",
    desc: "Smart resource allocation and analytics to minimize your cloud spend.",
  },
];

const stats = [
  { label: "Cloud Migrations", value: "100+" },
  { label: "Uptime Guarantee", value: "99.99%" },
  { label: "Data Centers", value: "15+" },
  { label: "Support", value: "24/7" },
];

const useCases = [
  {
    title: "Startups & SMEs",
    desc: "Launch and scale apps quickly without worrying about infrastructure management.",
  },
  {
    title: "Enterprises",
    desc: "Migrate legacy systems, enable remote work, and ensure compliance at scale.",
  },
  {
    title: "E-Commerce",
    desc: "Handle high-traffic sales events with auto-scaling and secure payment integrations.",
  },
  {
    title: "Fintech & Health",
    desc: "Meet strict security and data residency requirements with our compliant cloud.",
  },
];

const faqs = [
  {
    q: "Which cloud providers do you support?",
    a: "We support AWS, Microsoft Azure, Google Cloud, and hybrid/multi-cloud setups.",
  },
  {
    q: "Can you migrate my on-premise servers?",
    a: "Yes! We handle full migrations from on-premise or other clouds, including data and apps.",
  },
  {
    q: "How secure is my data?",
    a: "Your data is protected with encryption at rest and in transit, firewalls, and regular audits.",
  },
  {
    q: "Do you offer managed services?",
    a: "Absolutely. We offer fully managed cloud, including monitoring, patching, and support.",
  },
];

const Cloud = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background">
      <Helmet>
        <title>Cloud Services | Adeera</title>
        <meta name="description" content="Cloud migration, hosting, and support for African businesses. Secure, scalable, and reliable SaaS cloud solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-8 bg-gradient-to-r from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Cloud Services <span className="text-foreground">for Modern African Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Migrate, scale, and secure your business in the cloud with Adeera’s expert team and global partnerships. Focus on growth—we’ll handle the infrastructure.
            </p>
            <Link to="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">
                Get a Free Cloud Assessment
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-893.jpg?w=700"
              alt="Cloud Hosting Illustration"
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Adeera Cloud?</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to move to the cloud?</h2>
          <p className="text-white/90 mb-8 max-w-xl">
            Start your cloud journey with Adeera. Get a free assessment or schedule a personalized demo with our experts.
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

export default Cloud;