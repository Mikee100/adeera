import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  Bot,
  CreditCard,
  Settings,
  Building2,
  ArrowRight,
  Check,
  Shield,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";

const modules = [
  { icon: LayoutDashboard, title: "Dashboard", desc: "KPIs, revenue charts, trends, customer growth, and sales targets at a glance." },
  { icon: ShoppingCart, title: "Point of Sale", desc: "Fast checkout, cart, receipts, and sales history. Cash, M-Pesa, and credit." },
  { icon: Package, title: "Inventory & Products", desc: "Unified products, variants, suppliers, stock levels, and 11+ inventory reports." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Business intelligence, analytics, and custom reports with date ranges." },
  { icon: Bot, title: "AI Assistant", desc: "In-app chat that answers questions and generates charts and insights." },
  { icon: CreditCard, title: "Expenses & Credit", desc: "Track expenses and manage customer credit in one place." },
  { icon: Settings, title: "Settings & Billing", desc: "Business info, users, branches, permissions, Stripe billing, and invoices." },
];

const platformFeatures = [
  "Multi-tenant — each business has its own secure workspace",
  "Multi-branch — run multiple locations with one account",
  "Role-based permissions — control who sees what",
  "M-Pesa integration — accept and reconcile mobile money",
  "Stripe billing — subscriptions and invoices",
  "Scalable plans — Basic, Pro, and Enterprise",
];

const Platform = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO
        title="The ADEERA Platform | One System for POS, Inventory, Sales & Insights"
        description="The ADEERA Platform is a single, integrated system for point of sale, inventory, sales, reports, M-Pesa, and AI. Multi-tenant, multi-branch, built for growing businesses."
        keywords="ADEERA Platform, POS, point of sale, inventory management, sales reports, M-Pesa, retail management, business management SaaS, multi-branch, AI assistant"
        url="https://www.adeeraunitech.com/platform"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ADEERA Platform",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Integrated POS, inventory, sales, reports, and AI for retail and business management",
          "url": "https://www.adeeraunitech.com/platform",
          "featureList": "Point of Sale, Inventory Management, Sales History, Reports & Analytics, AI Assistant, M-Pesa, Multi-branch, Billing",
        }}
      />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              One platform, everything you need
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              The ADEERA Platform
            </h1>
            <p className="text-lg text-muted-foreground">
              A single, integrated system for point of sale, inventory, sales, reports, M-Pesa, and AI. 
              Built for retail and growing businesses — multi-tenant, multi-branch, and secure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl border border-muted/20 bg-card hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <mod.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{mod.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{mod.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-muted/20 bg-card p-8 md:p-10"
          >
            <h2 className="text-xl font-semibold mb-6 text-foreground">Platform capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {platformFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/features" className="flex items-center gap-2">
                See all features <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/demo">Book a demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
