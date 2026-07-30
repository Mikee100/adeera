import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    href: "/pricing",
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
    <div>
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

      <section className="pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Everything in one platform
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              From point of sale to inventory, reports, AI, and billing — no more juggling multiple tools.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border border-t border-border">
            {featureSections.map((section) => (
              <div key={section.title} className="py-10 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className="sm:w-48 flex-shrink-0 flex items-center gap-2.5 sm:block">
                  <section.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h2 className="sm:mt-3 text-base font-semibold text-foreground">{section.title}</h2>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {section.href && (
                    <Button variant="link" className="p-0 h-auto text-primary text-sm mt-3" asChild>
                      <Link to={section.href}>Learn more <ArrowRight className="ml-1 h-3.5 w-3.5 inline" /></Link>
                    </Button>
                  )}
                </div>
              </div>
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
