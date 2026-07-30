import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Boxes,
  Wallet,
  TrendingUp,
  Check,
  Play,
  Shirt,
  UtensilsCrossed,
  Laptop,
  Package,
  Wrench,
  Pill,
  ShoppingBasket,
  Scissors,
  Wine,
  Zap,
  Crown,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

const pillars = [
  {
    icon: ShoppingCart,
    title: "Sell",
    desc: "A fast point of sale that works on any device, at any counter, even when the connection drops.",
  },
  {
    icon: Boxes,
    title: "Track",
    desc: "Stock and sales across every branch in one view, so low-stock alerts reach you before customers do.",
  },
  {
    icon: Wallet,
    title: "Get paid",
    desc: "Cash, M-Pesa, and credit in one till — reconciled automatically, no end-of-day guesswork.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    desc: "Plain-language reports and a light CRM that tell you what's actually working, branch by branch.",
  },
];

const industries = [
  { icon: Shirt, label: "Fashion" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Laptop, label: "Electronics" },
  { icon: Package, label: "Wholesale" },
  { icon: Wrench, label: "Hardware" },
  { icon: Pill, label: "Pharmacy" },
  { icon: ShoppingBasket, label: "Supermarkets" },
  { icon: Scissors, label: "Salons" },
  { icon: Wine, label: "Liquor stores" },
];

const plans = [
  {
    icon: Zap,
    name: "Basic",
    desc: "For getting started",
    features: ["Core POS & sales", "Inventory basics", "Single branch", "Offline mode", "Email support"],
    cta: "Start free",
    href: "/demo",
  },
  {
    icon: Crown,
    name: "Pro",
    desc: "For growing businesses",
    features: ["Everything in Basic", "Multiple branches", "AI Assistant & CRM", "M-Pesa reconciliation", "Priority support"],
    cta: "Start free",
    href: "/demo",
    highlighted: true,
  },
  {
    icon: Building2,
    name: "Enterprise",
    desc: "Scale without limits",
    features: ["Everything in Pro", "Unlimited branches", "Dedicated support", "Custom needs"],
    cta: "Talk to sales",
    href: "/contact",
  },
];

const Home = () => {
  return (
    <div>
      <SEO
        title="ADEERA | Run your shop. Online or offline."
        description="ADEERA is the business OS built for African retail — one system for selling, stock, and staff, that keeps working even when the internet doesn't."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest uppercase text-amber-700 dark:text-amber-500 before:content-[''] before:w-4 before:h-px before:bg-amber-700 dark:before:bg-amber-500">
                POS · Inventory · Payments · CRM
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[52px] font-heading font-extrabold text-foreground leading-[1.12]">
                Run your shop.<br />
                Online or <span className="text-amber-700 dark:text-amber-500">offline</span>.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-md">
                ADEERA is the business OS built for African retail — one system for
                selling, stock, and staff, that keeps working even when the internet doesn't.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-7">
                <Button size="lg" asChild>
                  <Link to="/demo" className="flex items-center gap-2">
                    Start free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Link to="/demo" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity">
                  <Play className="h-3.5 w-3.5" /> Watch a 2-min demo
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl border border-border shadow-[0_30px_60px_-30px_rgba(0,37,79,0.35)] overflow-hidden bg-card">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                </div>
                <img
                  src="/screenshots/adeera/dashboard.png"
                  alt="Real ADEERA dashboard showing today's revenue and priorities"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-left-6 rounded-xl border border-primary bg-background px-4 py-2.5 shadow-md flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-mono font-semibold text-primary">Works offline</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Built for retail &amp; hospitality across</span>
          <div className="flex flex-wrap gap-2.5">
            {["FASHION", "RESTAURANTS", "ELECTRONICS", "PHARMACY", "SUPERMARKETS"].map((chip) => (
              <span key={chip} className="font-mono text-xs font-medium tracking-wide text-foreground bg-muted rounded-full border border-border px-3.5 py-1.5">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mb-14">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-amber-700 dark:text-amber-500 before:content-[''] before:inline-block before:w-4 before:h-px before:bg-amber-700 dark:before:bg-amber-500 before:mr-2.5">
              The four things a shop needs
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-foreground">Everything runs from one system</h2>
            <p className="mt-3.5 text-muted-foreground text-base">
              No separate apps for the till, the stockroom, and the books. ADEERA keeps them in sync — literally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 border-r border-b border-border hover:bg-muted/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center mb-5">
                  <p.icon className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dive: offline */}
      <section className="py-24 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-amber-700 dark:text-amber-500 before:content-[''] before:inline-block before:w-4 before:h-px before:bg-amber-700 dark:before:bg-amber-500 before:mr-2.5">
                Built for the realities on the ground
              </span>
              <h2 className="mt-3.5 text-2xl sm:text-3xl font-heading font-extrabold text-foreground leading-tight">
                Never lose a sale to bad internet.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                ADEERA keeps ringing up sales when the connection cuts out, then syncs
                everything the moment it's back — no lost transactions, no double entries,
                no closing the shop early.
              </p>
              <Link to="/pos#restaurant" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity">
                See how the POS works <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl border border-border shadow-sm overflow-hidden bg-card">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <img
                src="/screenshots/adeera-pos-general/shift-menu.png"
                alt="Real ADEERA POS shift menu showing online status, last sync time, and the offline sales queue"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep dive: multi-branch */}
      <section className="py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1 rounded-2xl border border-border shadow-sm overflow-hidden bg-card">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <img
                src="/screenshots/adeera-pos-general/branch-switcher.png"
                alt="Real ADEERA POS multi-branch switcher"
                className="w-full"
              />
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-amber-700 dark:text-amber-500 before:content-[''] before:inline-block before:w-4 before:h-px before:bg-amber-700 dark:before:bg-amber-500 before:mr-2.5">
                One view, every branch
              </span>
              <h2 className="mt-3.5 text-2xl sm:text-3xl font-heading font-extrabold text-foreground leading-tight">
                One number for every store.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                See sales, stock, and staff across all your locations from a single
                dashboard — switch between branches the way you'd walk between rooms.
              </p>
              <Link to="/platform" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity">
                Explore multi-branch tools <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center mb-14">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-amber-700 dark:text-amber-500">
              Simple pricing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-foreground">Pick a plan, grow into it</h2>
            <p className="mt-3.5 text-muted-foreground">Every plan includes offline mode. Upgrade as you add branches and staff.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative rounded-2xl border bg-card p-8 flex flex-col ${
                  plan.highlighted ? "border-primary shadow-[0_24px_60px_-30px_rgba(0,37,79,0.35)]" : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-7 font-mono text-[11px] font-semibold tracking-wide bg-amber-500 text-amber-950 px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <plan.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-0 flex-1 mb-7">
                  {plan.features.map((f, j) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm py-2.5 ${j > 0 ? "border-t border-dashed border-border" : ""}`}>
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "default" : "outline"} asChild>
                  <Link to={plan.href}>{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/pricing" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              See full pricing details <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-amber-400">
            No card required to start
          </span>
          <h2 className="mt-3.5 text-3xl sm:text-4xl font-heading font-extrabold">Ready to run your shop your way?</h2>
          <p className="mt-3.5 text-primary-foreground/70 text-base">Set up your first till in minutes.</p>
          <Button size="lg" className="mt-8 bg-amber-500 hover:bg-amber-400 text-amber-950" asChild>
            <Link to="/demo">Start free today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
