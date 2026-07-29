import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  Bot,
  CreditCard,
  Settings,
  ArrowRight,
  Check,
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

const dashboardScreens = [
  { src: "/screenshots/adeera/dashboard.png", alt: "ADEERA dashboard with today's revenue and priorities", caption: "Today at a glance — revenue, sales, low-stock items, and priorities." },
  { src: "/screenshots/adeera/dashboard-trends.png", alt: "ADEERA branch sales comparison chart", caption: "Branch sales comparison over time." },
  { src: "/screenshots/adeera/sales-targets.png", alt: "ADEERA sales targets by day, week, and month", caption: "Daily, weekly, and monthly sales targets with progress." },
  { src: "/screenshots/adeera/inventory.png", alt: "ADEERA products and inventory with variations", caption: "Products, variations, and stock levels in one view." },
  { src: "/screenshots/adeera/sales-history.png", alt: "ADEERA sales history with M-Pesa transaction IDs", caption: "Full transaction history, including split and M-Pesa payments." },
  { src: "/screenshots/adeera/analytics.png", alt: "ADEERA analytics and profit insights", caption: "Analytics and profit insights by branch and product." },
  { src: "/screenshots/adeera/reports.png", alt: "ADEERA reports", caption: "Exportable reports across sales, stock, and performance." },
  { src: "/screenshots/adeera/credit.png", alt: "ADEERA customer credit tracking", caption: "Customer credit accounts and balances." },
  { src: "/screenshots/adeera/settings.png", alt: "ADEERA business settings", caption: "Business info, branches, users, and permissions." },
];

const platformVideos = [
  { title: "Setup tour", src: "/videos/adeera/setup-tour.mp4", poster: "/videos/adeera/setup-tour-poster.png" },
  { title: "Architecture tour", src: "/videos/adeera/architecture-tour.mp4", poster: "/videos/adeera/architecture-tour-poster.png" },
  { title: "Extended tour", src: "/videos/adeera/extended-tour.mp4", poster: "/videos/adeera/extended-tour-poster.png" },
];

const Platform = () => {
  return (
    <div>
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

      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              The ADEERA Platform
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              One system for point of sale, inventory, sales, reports, M-Pesa, and AI —
              multi-tenant, multi-branch, and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-20">
            {modules.map((mod) => (
              <div key={mod.title}>
                <mod.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{mod.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-20 border-t border-border pt-10">
            <h2 className="text-lg font-semibold mb-6 text-foreground">Platform capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {platformFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16 border-t border-border pt-10">
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              The real dashboard
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
              No mockups — these are screenshots of a live ADEERA Business OS account.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardScreens.map((s) => (
                <div key={s.src} className="space-y-2">
                  <img src={s.src} alt={s.alt} className="rounded-xl border border-border shadow-sm w-full" />
                  <p className="text-xs text-muted-foreground">{s.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4 border-t border-border pt-10">
            <h2 className="text-lg font-semibold mb-6 text-foreground">
              Video tours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platformVideos.map((v) => (
                <div key={v.src} className="space-y-2">
                  <video controls poster={v.poster} className="w-full rounded-xl border border-border shadow-sm">
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <p className="text-xs font-medium text-foreground">{v.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
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
