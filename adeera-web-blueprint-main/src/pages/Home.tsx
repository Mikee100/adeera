import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Boxes,
  Calculator,
  Wallet,
  Users,
  Bot,
  CreditCard,
  Building2,
  Smartphone,
  BarChart3,
  WifiOff,
  UploadCloud,
  RefreshCw,
  Check,
  Shirt,
  UtensilsCrossed,
  Laptop,
  Package,
  Wrench,
  Pill,
  ShoppingBasket,
  Scissors,
  Wine,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

const modules = [
  { icon: ShoppingCart, title: "Point of sale", desc: "Retail and restaurant tills, offline-ready." },
  { icon: Boxes, title: "Inventory", desc: "Real-time stock across every branch." },
  { icon: Calculator, title: "Accounting", desc: "Expenses, reconciliation, and financial reports." },
  { icon: Wallet, title: "Payroll", desc: "Manage staff pay from the same platform." },
  { icon: Users, title: "CRM", desc: "Track customers and manage relationships." },
  { icon: Bot, title: "AI assistant", desc: "Ask questions, get answers and charts." },
  { icon: CreditCard, title: "Payments", desc: "M-Pesa, cash, credit, and billing." },
  { icon: Building2, title: "Multi-branch", desc: "One account, every location." },
  { icon: Smartphone, title: "Mobile app", desc: "Sell and check reports from your phone." },
  { icon: BarChart3, title: "Analytics & reports", desc: "Dashboards and exportable reports." },
];

const traditional = [
  "Point of sale software",
  "Accounting software",
  "CRM software",
  "Inventory software",
  "Payroll software",
];

const offlineSteps = [
  { icon: WifiOff, title: "Sell offline", desc: "The till keeps ringing up sales with no internet connection." },
  { icon: UploadCloud, title: "Data queues locally", desc: "Every sale is stored safely on the device." },
  { icon: RefreshCw, title: "Syncs automatically", desc: "The moment you're back online, everything reconciles." },
];

const dashboardShots = [
  { src: "/screenshots/adeera/dashboard.png", alt: "ADEERA dashboard with today's revenue and priorities" },
  { src: "/screenshots/adeera/inventory.png", alt: "ADEERA inventory and stock levels" },
  { src: "/screenshots/adeera/sales-history.png", alt: "ADEERA sales history with M-Pesa transactions" },
];

const industries = [
  { icon: Shirt, title: "Fashion" },
  { icon: UtensilsCrossed, title: "Restaurants" },
  { icon: Laptop, title: "Electronics" },
  { icon: Package, title: "Wholesale" },
  { icon: Wrench, title: "Hardware" },
  { icon: Pill, title: "Pharmacy" },
  { icon: ShoppingBasket, title: "Supermarkets" },
  { icon: Scissors, title: "Salons" },
  { icon: Wine, title: "Liquor stores" },
];

const plans = [
  { name: "Basic", desc: "For getting started", features: ["Core POS & sales", "Inventory basics", "Single branch"] },
  { name: "Pro", desc: "For growing businesses", features: ["Everything in Basic", "Multiple branches", "AI Assistant, M-Pesa"], highlighted: true },
  { name: "Enterprise", desc: "Scale without limits", features: ["Everything in Pro", "Unlimited scale", "Dedicated support"] },
];

const BrowserFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-xl border border-border shadow-sm overflow-hidden bg-card">
    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border bg-muted/40">
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
    </div>
    <img src={src} alt={alt} className="w-full" />
  </div>
);

const Home = () => {
  return (
    <div>
      <SEO
        title="ADEERA | POS & Business OS for African Retail"
        description="Run your entire business from one platform — POS, inventory, accounting, payroll, CRM, and AI, built for African retail."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Run your entire business from one platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
            >
              ADEERA combines point of sale, inventory, accounting, CRM, and AI into
              one operating system built for African businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" asChild>
                <Link to="/demo" className="flex items-center gap-2">
                  Start free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link to="/demo" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <Play className="h-3.5 w-3.5" /> Watch a 2-min demo
              </Link>
            </motion.div>
            <p className="mt-4 text-sm text-muted-foreground">Built for retail and hospitality businesses across Kenya</p>
          </div>

          <motion.div {...fadeUp} className="mt-16 max-w-4xl mx-auto">
            <BrowserFrame src="/screenshots/adeera/dashboard.png" alt="Real ADEERA dashboard showing today's revenue and priorities" />
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Everything your business runs on</h2>
            <p className="mt-3 text-muted-foreground">One login. One platform. Every module.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {modules.map((m, i) => (
              <motion.div key={m.title} {...fadeUp} transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}>
                <m.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">One platform beats five subscriptions</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="rounded-xl border border-border p-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">The traditional way</h3>
              <ul className="space-y-3 mb-6">
                {traditional.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground">{t}</li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground">Five subscriptions. Five logins. Five databases.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-xl border border-primary bg-primary/5 p-8">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wide mb-6">The ADEERA way</h3>
              <ul className="space-y-3 mb-6">
                {["One login", "One platform", "One source of truth"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground">Everything, in one place.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offline story */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Never lose a sale to bad internet</h2>
            <p className="mt-3 text-muted-foreground">
              Connectivity in African retail is real, not theoretical. ADEERA is built for it from day one.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 max-w-3xl mx-auto">
            {offlineSteps.map((s, i) => (
              <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard showcase */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">See your whole business, at a glance</h2>
            <p className="mt-3 text-muted-foreground">Real screenshots from a live ADEERA account — no mockups.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardShots.map((s, i) => (
              <motion.div key={s.src} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="rounded-xl border border-border overflow-hidden shadow-sm">
                <img src={s.src} alt={s.alt} className="w-full" />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/platform" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              See the full dashboard and video tours <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Built for every kind of business</h2>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-6 gap-y-10 max-w-3xl mx-auto text-center">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} {...fadeUp} transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}>
                <ind.icon className="h-5 w-5 text-primary mx-auto" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-medium text-foreground">{ind.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Plans for every business</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-xl border p-6 ${plan.highlighted ? "border-primary" : "border-border"}`}>
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/pricing" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              See full pricing <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to run your business on ADEERA?</h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/demo">Start free</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link to="/demo">Book a demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
