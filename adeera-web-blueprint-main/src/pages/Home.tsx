import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Zap,
  Smartphone,
  Building2,
  Database,
  Layout,
  Star,
  WifiOff,
  UtensilsCrossed,
  Bot,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "@/components/SEO";

const HeroDashboard = "/screenshots/adeera/dashboard.png";
const InventoryFeature = "/screenshots/adeera/inventory.png";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ badge, title, description }) => (
  <div className="text-center max-w-3xl mx-auto mb-16 px-4">
    {badge && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wider uppercase"
      >
        {badge}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-gradient"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg text-muted-foreground leading-relaxed"
    >
      {description}
    </motion.p>
  </div>
);

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Smartphone,
      title: "Adeera POS — Retail",
      description: "Fast checkout with product search, variations, and offline support. Cash, M-Pesa, and credit in one flow.",
    },
    {
      icon: UtensilsCrossed,
      title: "Adeera POS — Restaurant",
      description: "A dedicated table-service mode: waiter check-in, floor plan, kitchen dispatch, and reservations.",
    },
    {
      icon: Database,
      title: "Real-Time Inventory",
      description: "Products, variations, and stock levels synced across every branch, with low-stock alerts.",
    },
    {
      icon: Wallet,
      title: "Integrated Payments",
      description: "Accept M-Pesa, cash, and credit, with automatic reconciliation in your dashboard.",
    },
  ];

  const whyAdeera = [
    { icon: WifiOff, title: "Works offline", desc: "The retail and restaurant tills keep taking sales without internet, then sync when you're back online." },
    { icon: Building2, title: "Multi-branch, multi-tenant", desc: "Run several locations from one account, with role-based permissions per user." },
    { icon: Wallet, title: "M-Pesa native", desc: "Accept and reconcile mobile money at the till, not through a bolted-on plugin." },
    { icon: Bot, title: "AI assistant, in-app", desc: "Ask questions about your sales data in plain language and get chart suggestions back." },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="ADEERA | Modern SaaS for Retail & Multi-Branch Business"
        description="Empower your business with ADEERA. The all-in-one POS, inventory, and analytics platform built for growth."
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -ml-24 -mb-24" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-bold text-primary tracking-wide uppercase">
                  Modern Retail & POS Platform
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-gradient">
                Run Your Entire Business
                <br />
                <span className="text-primary italic">From One Powerful Ecosystem.</span>
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Adeera connects your POS, inventory, payments, and AI-driven growth insights in a single place — 
                designed for African scale. Effortless management, unified results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-10 text-lg md:text-xl font-black shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 group"
                  asChild
                >
                  <Link to="/demo">
                    Book a Free Demo
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-10 text-lg md:text-xl font-semibold glass transition-all hover:bg-primary/5 hover:border-primary/30"
                  asChild
                >
                  <Link to="/pricing" className="flex items-center gap-2">
                    Explore Plans
                  </Link>
                </Button>
              </div>

              <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Check className="text-primary w-5 h-5" />
                  <span>Built for Africa</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Check className="text-primary w-5 h-5" />
                  <span>M-Pesa Integrated</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Check className="text-primary w-5 h-5" />
                  <span>Works offline</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Unified Ecosystem"
            title="A Suite Built for Scale."
            description="Adeera provides a seamless workflow between your hardware and software, automating the hard parts of retail management."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16 px-4">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-gradient">Your Business at Your Fingertips.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              This is a real screenshot from a live ADEERA account — revenue, sales targets, low-stock
              items, and today's priorities in one dashboard.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group lg:px-20"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-white/40 overflow-hidden">
              <img
                src={HeroDashboard}
                alt="Real ADEERA dashboard showing today's revenue, sales, and priorities"
                className="rounded-[1.5rem] w-full shadow-inner border border-white/20"
              />
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Button variant="link" className="text-primary" asChild>
              <Link to="/platform" className="flex items-center gap-1 justify-center">
                See the full dashboard and video tours <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Versatility"
            title="Tailored for Your Vertical."
            description="Whether you run a single pharmacy or a nationwide hardware chain, ADEERA adapts to your specific needs."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Smartphone, title: "Pharma & Beauty" },
              { icon: Layout, title: "Furniture Store" },
              { icon: Building2, title: "Hardware & Tools" },
              { icon: Zap, title: "Electronics" },
              { icon: Star, title: "Fashion Retail" }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Highlight */}
      <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-grid-white/5 opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white mb-6 uppercase tracking-wider">
                 Power Feature
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Master Your Inventory, <br/><span className="text-white/60">Everywhere.</span></h2>
              <div className="space-y-6">
                {[
                  "Real-time sync across all locations",
                  "Automated stock valuation & aging",
                  "Supplier management & purchase orders",
                  "Barcode scanning & label printing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="secondary" className="mt-12 rounded-full h-14 px-8 font-black hover:scale-105 transition-transform" asChild>
                <Link to="/features">Explore Inventory Depth</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[100px] -z-10" />
              <img
                src={InventoryFeature}
                alt="ADEERA inventory features"
                className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Adeera */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why Adeera"
            title="Built for how African retail actually runs."
            description="No vendor-name-dropping — just what the product actually does."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAdeera.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
                <item.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 opacity-40"></div>
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">Ready to Power <br />Your Business?</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
              Start your free demo today and join Africa's most intelligent business ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full h-20 px-12 text-2xl font-black hover:scale-105 transition-transform shadow-2xl" asChild>
                <Link to="/demo">Try for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-20 px-12 text-2xl font-black border-4 hover:bg-white/10 border-white/20 text-white transition-all" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="mt-12 text-sm opacity-60 font-bold uppercase tracking-widest">No credit card required • Local support 24/7</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
