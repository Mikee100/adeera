import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Smartphone,
  Building2,
  Database,
  WifiOff,
  UtensilsCrossed,
  Bot,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const DashboardShot = "/screenshots/adeera/dashboard.png";
const InventoryShot = "/screenshots/adeera/inventory.png";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const products = [
  {
    icon: Smartphone,
    title: "Retail POS",
    description: "Fast checkout with product search, variations, and offline support. Cash, M-Pesa, and credit in one flow.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant POS",
    description: "A dedicated table-service mode: waiter check-in, floor plan, kitchen dispatch, and reservations.",
  },
  {
    icon: Database,
    title: "Real-time inventory",
    description: "Products, variations, and stock levels synced across every branch, with low-stock alerts.",
  },
  {
    icon: Wallet,
    title: "Integrated payments",
    description: "Accept M-Pesa, cash, and credit, with automatic reconciliation in your dashboard.",
  },
];

const whyAdeera = [
  { icon: WifiOff, title: "Works offline", desc: "The retail and restaurant tills keep taking sales without internet, then sync when you're back online." },
  { icon: Building2, title: "Multi-branch, multi-tenant", desc: "Run several locations from one account, with role-based permissions per user." },
  { icon: Wallet, title: "M-Pesa native", desc: "Accept and reconcile mobile money at the till, not through a bolted-on plugin." },
  { icon: Bot, title: "AI assistant, in-app", desc: "Ask questions about your sales data in plain language and get chart suggestions back." },
];

const Home = () => {
  return (
    <div>
      <SEO
        title="ADEERA | POS & Business OS for African Retail"
        description="Retail and restaurant POS, real-time inventory, and M-Pesa payments in one platform. Built for African retail."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight"
            >
              Run your business from one platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-5 text-lg text-muted-foreground leading-relaxed"
            >
              POS, inventory, and payments in one place — a retail till, a restaurant till,
              and the dashboard that ties them together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button size="lg" asChild>
                <Link to="/demo" className="flex items-center gap-2">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">See pricing</Link>
              </Button>
            </motion.div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Works offline</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> M-Pesa native</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Multi-branch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {products.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <p.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard showcase */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              A real dashboard, not a mockup
            </h2>
            <p className="mt-3 text-muted-foreground">
              Revenue, sales targets, and low-stock items — a screenshot from a live ADEERA account.
            </p>
          </div>
          <motion.div {...fadeUp} className="overflow-hidden rounded-xl border border-border shadow-sm">
            <img
              src={DashboardShot}
              alt="Real ADEERA dashboard showing today's revenue, sales, and priorities"
              className="w-full"
            />
          </motion.div>
          <div className="mt-6 text-center">
            <Link to="/platform" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              See the full dashboard and video tours <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inventory — single accent section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Master your inventory, everywhere
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Real-time sync across all locations",
                  "Automated stock valuation & aging",
                  "Supplier management & purchase orders",
                  "Barcode scanning & label printing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-80" />
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link to="/features">Explore inventory</Link>
              </Button>
            </motion.div>
            <motion.div {...fadeUp} className="overflow-hidden rounded-xl border border-white/10 shadow-sm">
              <img src={InventoryShot} alt="ADEERA products and inventory screen" className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Adeera */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Built for how African retail actually runs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {whyAdeera.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Start selling smarter today
          </h2>
          <p className="mt-3 text-muted-foreground">No credit card required · Local support</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/demo">Get a demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
