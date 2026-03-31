import SEO from '@/components/SEO';
import { useState } from "react";
import { CheckCircle, Database, LayoutDashboard, Zap, Shield, ChevronDown, ChevronUp, Box, MapPin, BarChart3, ArrowLeftRight, BellRing } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Multi-Branch Sync",
    desc: "Real-time stock synchronization across all your physical locations and warehouses.",
  },
  {
    icon: <Box className="h-6 w-6 text-primary" />,
    title: "Variant Management",
    desc: "Easily manage products with multiple sizes, colors, and materials under a single SKU.",
  },
  {
    icon: <BellRing className="h-6 w-6 text-primary" />,
    title: "Smart Low-Stock Alerts",
    desc: "Automated notifications when items reach a custom threshold, so you never run out of best-sellers.",
  },
  {
    icon: <ArrowLeftRight className="h-6 w-6 text-primary" />,
    title: "Inter-Branch Transfers",
    desc: "Seamlessly move stock between locations with full tracking and digital dispatch notes.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Stock Valuation",
    desc: "Instant insight into your inventory value (FIFO/LIFO) and investment health.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Audit & Loss Tracking",
    desc: "Comprehensive logs of all adjustments, damages, and returns to minimize shrinkage.",
  },
];

const stats = [
  { label: "SKUs Managed", value: "50k+" },
  { label: "Branches Supported", value: "Unlimited" },
  { label: "Shrinkage Reduction", value: "35%" },
  { label: "Sync Latency", value: "< 1s" },
];

const useCases = [
  {
    title: "Fashion & Apparel",
    desc: "Manage complex matrices of sizes and colors while tracking seasonal trends across stores.",
  },
  {
    title: "Hardware Stores",
    desc: "Track thousands of small parts and bulk items with unit-of-measure conversions.",
  },
  {
    title: "Supermarkets",
    desc: "High-volume stock rotation with perishability tracking and automated reordering.",
  },
  {
    title: "Wholesalers",
    desc: "Manage bulk stock levels, case quantities, and individual break-bulk sales efficiently.",
  },
];

const faqs = [
  {
    q: "Can I manage different prices per branch?",
    a: "Yes! Adeera allows you to set branch-specific pricing and tax rules while maintaining a single centralized product catalog.",
  },
  {
    q: "How do stock alerts work?",
    a: "You can set custom 'Minimum Stock Levels' for every item. When stock hits that level, the system sends an email or push notification to your designated manager.",
  },
  {
    q: "Does it support barcode labels?",
    a: "Absolutely. You can generate and print professional barcode labels for any item directly from the dashboard, compatible with standard label printers.",
  },
  {
    q: "Can I import my existing product list?",
    a: "Yes, we provide a simple Excel/CSV bulk import tool that handles thousands of products, categories, and initial stock levels in minutes.",
  },
];

const InventoryPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Inventory Management System | Multi-Branch Stock Control | ADEERA"
        description="Master your stock with Adeera's real-time inventory management. Multi-branch sync, low-stock alerts, and variant management for African businesses."
        keywords="inventory management Kenya, stock control software Nairobi, multi-branch inventory, warehouse management Africa, retail stock sync"
        url="https://www.adeeraunitech.com/services/inventory"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Control Your Stock, <span className="text-primary text-glow">Master Your Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Adeera's Inventory Management system provides complete visibility across all your physical and digital storefronts. Stop guessing what's in the back and start making data-driven decisions that eliminate stock-outs and reduce waste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-8 shadow-xl" asChild>
                  <Link to="/contact">Get a Free Audit</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Demo Dashboard
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-500"></div>
              <img 
                src="/services-inventory.png" 
                alt="Adeera Inventory Management Dashboard"
                className="relative rounded-3xl shadow-2xl border border-primary/10 w-full object-cover transform transition-transform duration-700 hover:-rotate-1 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Scaling Operations</h2>
            <p className="text-lg text-muted-foreground">From a single shop to a cross-country chain, Adeera scales with your complexity.</p>
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

      {/* Use Case Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

      {/* Final CTA */}
      <section className="py-20 container mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Losing Money to Stock-outs</h2>
          <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
            Take total control of your supply chain today. See how Adeera can transform your inventory workflow.
          </p>
          <Button size="lg" className="rounded-full px-12 shadow-2xl font-bold text-lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InventoryPage;
