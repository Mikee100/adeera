import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Package,
  BarChart3,
  Bot,
  CreditCard,
  DollarSign,
  Settings,
  FileText,
  TrendingUp,
  Users,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import SEO from "@/components/SEO";

const featureSections = [
  {
    title: "Point of Sale (POS)",
    href: "/pos",
    icon: ShoppingCart,
    description: "Fast, flexible point of sale for every transaction.",
    items: [
      "Quick sales with product search and variations",
      "Cart and checkout — cash, M-Pesa, credit",
      "Receipts — view and print",
      "Sales history and filters",
      "Multi-branch — sell at any location",
    ],
  },
  {
    title: "Inventory & Products",
    href: "/inventory",
    icon: Package,
    description: "One place for products, variants, suppliers, and stock.",
    items: [
      "Unified product management",
      "Product variations and SKUs",
      "Suppliers management",
      "Stock levels and movements",
      "Reports: Product Sales, Inventory Levels, Low Stock Alerts, Product Performance, Inventory Turnover, Supplier Performance, Category Analysis, Movement, Aging, Stockout & Lost Sales, Inventory Valuation",
    ],
  },
  {
    title: "Transactions & Sales",
    icon: FileText,
    description: "Full visibility over sales and payments.",
    items: [
      "Sales history with filters",
      "M-Pesa transaction list and reconciliation",
      "Sales targets and tracking",
    ],
  },
  {
    title: "Reports & Analytics",
    href: "/analytics",
    icon: BarChart3,
    description: "Dashboard, analytics, and business intelligence.",
    items: [
      "Dashboard: revenue, trends, customer growth, segmentation, targets",
      "Dedicated Analytics and Reports",
      "Date ranges and exports",
    ],
  },
  {
    title: "AI Assistant",
    icon: Bot,
    description: "Get answers and charts from your data.",
    items: [
      "In-app chat assistant",
      "Ask questions, get chart suggestions (Line, Bar, Pie, Doughnut)",
      "Conversation history",
    ],
  },
  {
    title: "Operations",
    icon: Building2,
    description: "Expenses, credit, branches, and team.",
    items: [
      "Expense tracking and categorization",
      "Customer credit management",
      "Multi-branch management",
      "Users and role-based permissions",
      "Business info and branding",
    ],
  },
  {
    title: "Payments & Billing",
    href: "/payments",
    icon: DollarSign,
    description: "M-Pesa and Stripe — pay and get paid.",
    items: [
      "M-Pesa — accept and reconcile mobile money",
      "Stripe — subscriptions and invoices",
      "Plans: Basic, Pro, Enterprise",
    ],
  },
  {
    title: "Settings & Customization",
    icon: Settings,
    description: "Configure your workspace your way.",
    items: [
      "Business info, logo, section logos",
      "Notifications and preferences",
      "Integrations and PDF templates",
      "Security and password",
    ],
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO
        title="Features | POS, Inventory, Sales, Reports & AI | ADEERA Platform"
        description="Every tool you need in one place: POS, inventory, sales history, M-Pesa, reports, analytics, AI assistant, expenses, credit, multi-branch, and billing."
        keywords="POS features, inventory reports, sales history, M-Pesa, analytics, AI assistant, multi-branch, ADEERA Platform features"
        url="https://www.adeeraunitech.com/features"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ADEERA Platform",
          "applicationCategory": "BusinessApplication",
          "featureList": featureSections.map((s) => s.title).join(", "),
        }}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              All features
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Everything in one platform
            </h1>
            <p className="text-lg text-muted-foreground">
              From point of sale to inventory, reports, AI, and billing — no more juggling multiple tools.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featureSections.map((section, i) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-muted/20 bg-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                      {section.href && (
                        <Button variant="link" className="p-0 h-auto text-primary" asChild>
                          <Link to={section.href}>Learn more <ArrowRight className="ml-1 h-4 w-4 inline" /></Link>
                        </Button>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link to="/demo" className="flex items-center gap-2">
                See the platform in action <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
