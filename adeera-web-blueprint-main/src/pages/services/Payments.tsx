import SEO from '@/components/SEO';
import { useState } from "react";
import { CheckCircle, Wallet, Smartphone, ShieldCheck, Zap, Shield, ChevronDown, ChevronUp, CreditCard, Banknote, Landmark, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: "M-Pesa STK Push",
    desc: "Seamless, one-tap mobile payments. Just enter the number and the user gets a prompt on their phone.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    title: "Card Processing",
    desc: "Accept Visa, Mastercard, and American Express with competitive local transaction rates.",
  },
  {
    icon: <Banknote className="h-6 w-6 text-primary" />,
    title: "Cash Management",
    desc: "Unified reconciliation for physical cash sales, automatically tracked against bank deposits.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Fraud Prevention",
    desc: "Built-in security protocols to detect and prevent unauthorized or duplicate transactions.",
  },
  {
    icon: <Landmark className="h-6 w-6 text-primary" />,
    title: "Direct Bank Settlement",
    desc: "Funds are settled directly into your commercial bank account with daily transparency reports.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Multi-Currency Ready",
    desc: "Perfect for businesses serving international clients. Accept USD, EUR, and local KES effortlessly.",
  },
];

const stats = [
  { label: "Uptime", value: "99.99%" },
  { label: "Security Level", value: "PCI DSS" },
  { label: "M-Pesa Flow", value: "Instant" },
  { label: "Settlement", value: "T+1" },
];

const useCases = [
  {
    title: "E-Commerce",
    desc: "Integrated checkout for your website that supports instant payment before shipment.",
  },
  {
    title: "Brick-and-Mortar",
    desc: "Accept mobile and card payments at the point of sale with instant reconciliation.",
  },
  {
    title: "B2B Collections",
    desc: "Send digital invoices with embedded payment links to collect from suppliers and partners.",
  },
  {
    title: "Field Sales",
    desc: "Empower your field agents to collect secure payments on-the-go with our mobile app.",
  },
];

const faqs = [
  {
    q: "How soon do I get my money?",
    a: "We offer standardized T+1 settlement, meaning your funds are processed and available in your designated bank account on the next business day.",
  },
  {
    q: "Is it secure for my customers?",
    a: "Absolutely. We use industry-standard encryption and are fully compliant with PCI DSS regulations. No card details are ever stored on your local devices.",
  },
  {
    q: "Do I need a special bank account?",
    a: "No, you can use any commercial bank account in Kenya or your primary business region to receive settlements from the Adeera ecosystem.",
  },
  {
    q: "What are the transaction fees?",
    a: "Our fees are highly competitive and tailored to your business volume. We offer transparent pricing with no hidden monthly maintenance costs.",
  },
];

const PaymentsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Integrated Payments | M-Pesa & Card Processing | ADEERA"
        description="Streamline your revenue with Adeera's integrated payment system. M-Pesa STK push, card payments, and instant reconciliation for African businesses."
        keywords="M-Pesa payment gateway, credit card processing Kenya, mobile payments Nairobi, integrated payments Africa, secure B2B payments"
        url="https://www.adeeraunitech.com/services/payments"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Unified Payments, <span className="text-primary text-glow">Zero Friction</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect your business to your customers' wallets. Adeera's payment infrastructure brings M-Pesa, card, and bank processing together, ensuring every transaction is fast, secure, and automatically reconciled.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-8 shadow-xl" asChild>
                  <Link to="/contact">Discuss Integration</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Pricing & Fees
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-500"></div>
              <img 
                src="/services-payments.png" 
                alt="Adeera Secure Payment Ecosystem"
                className="relative rounded-3xl shadow-2xl border border-primary/10 w-full object-cover transform transition-transform duration-700 hover:rotate-1 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bank-Grade Security for Every Transaction</h2>
            <p className="text-lg text-muted-foreground">Accepting payments shouldn't be complicated. We've built a robust infrastructure so you can focus on selling.</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Modernize Your Cashflow Today</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Ready to integrate the most reliable payment gateway in the region? Our dev-friendly APIs and simple onboarding get you running in hours.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 font-bold text-lg shadow-2xl" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PaymentsPage;
