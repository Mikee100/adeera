import SEO from '@/components/SEO';
import { useState } from "react";
import { CheckCircle, Smartphone, Monitor, Database, Zap, Shield, ChevronDown, ChevronUp, Tablet, Receipt, Barcode } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Tablet className="h-6 w-6 text-primary" />,
    title: "Touch-Optimized Interface",
    desc: "Designed for speed. Large, intuitive tiles for quick product selection and rapid checkout.",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Offline Operations",
    desc: "Connectivity issues? No problem. Continue selling offline and sync when back online.",
  },
  {
    icon: <Barcode className="h-6 w-6 text-primary" />,
    title: "Barcode & QR Scanning",
    desc: "Full support for external hardware and mobile camera scanning for instant item lookup.",
  },
  {
    icon: <Receipt className="h-6 w-6 text-primary" />,
    title: "Thermal Receipt Printing",
    desc: "Seamless Bluetooth and USB integration for professional customer receipts and X/Z reports.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Staff Account Management",
    desc: "Secure permissions for cashiers with detailed audit trails for every transaction and refund.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: "Mobile Sales App",
    desc: "Sell from anywhere. Turn any Android or iOS device into a powerful POS terminal.",
  },
];

const stats = [
  { label: "Active Terminals", value: "300+" },
  { label: "Avg. Checkout Time", value: "< 5s" },
  { label: "System Uptime", value: "99.99%" },
  { label: "Local Support", value: "24/7" },
];

const useCases = [
  {
    title: "Retail Stores",
    desc: "From boutiques to supermarkets, manage thousands of SKUs with ease and efficiency.",
  },
  {
    title: "Pharmacies",
    desc: "Specialized batch tracking and expiry date monitoring integrated directly into checkout.",
  },
  {
    title: "Cafes & Restaurants",
    desc: "Quick modification of items and integrated kitchen order tracking for fast-paced service.",
  },
  {
    title: "Service Centers",
    desc: "Track work orders and parts usage while managing customer payments in one place.",
  },
];

const faqs = [
  {
    q: "Does it work without internet?",
    a: "Yes! Adeera Smart POS has full offline capabilities. You can process sales, and once you connect to the internet, all data is automatically synced to the cloud.",
  },
  {
    q: "Can I use my existing hardware?",
    a: "Our POS is built to be flexible. We support standard Bluetooth and USB thermal printers, barcode scanners, and cash drawers. You can also use your existing Android or iOS tablets.",
  },
  {
    q: "How many branches can I manage?",
    a: "Unlimited. You can manage multiple branches from a single centralized dashboard, tracking stock and sales for each location in real-time.",
  },
  {
    q: "Are the sales reports automated?",
    a: "Yes. You get automated X-reports (daily) and Z-reports (end of shift), along with deep analytics on top-selling items and staff performance.",
  },
];

const PosPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Smart POS System | Mobile & Desktop Sales | ADEERA"
        description="Transform your retail experience with Adeera Smart POS. Offline-ready, touch-optimized, and deeply integrated with M-Pesa. Build for speed and reliability."
        keywords="POS system Kenya, Smart POS Africa, retail software Nairobi, mobile POS, cloud POS offline, inventory POS"
        url="https://www.adeeraunitech.com/services/pos"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Speed, Power, and <span className="text-primary text-glow">Simplicity</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The Adeera Smart POS is the heartbeat of your retail operation. Built for the modern African entrepreneur, it works seamlessly across desktop and mobile, ensuring you never miss a sale—even when the internet is down.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-8 shadow-xl" asChild>
                  <Link to="/contact">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Hardware Guide
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-500"></div>
              <img 
                src="/services-pos.png" 
                alt="Adeera Smart POS Interface"
                className="relative rounded-3xl shadow-2xl border border-primary/10 w-full object-cover transform transition-transform duration-700 hover:rotate-2 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-primary/5 shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for Performance</h2>
            <p className="text-lg text-muted-foreground">Every feature is designed to cut down checkout times and provide absolute clarity on your sales data.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-primary/5 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center leading-tight">Built for Every Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center font-glow">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-primary/10 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-8 py-6 text-left font-bold text-foreground focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary text-white p-12 md:p-20 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your retail sales?</h2>
            <p className="text-lg opacity-90 mb-10 leading-relaxed">
              Join hundreds of businesses that have scaled with Adeera's modern POS system. Get started today with a personalized demo.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-12 text-lg font-bold shadow-2xl animate-pulse" asChild>
              <Link to="/contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PosPage;
