import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Zap,
  BarChart,
  Lock,
  MessageCircle,
  Smartphone,
  Building2,
  TrendingUp,
  Database,
  Users,
  Shield,
  Layout,
  Globe,
  Star,
  Quote,
  Mail,
  ChevronRight,
  Award,
  Play
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "@/components/SEO";
import HeroDashboard from "../../images/Screenshot 2026-03-11 195212.png";
import InventoryFeature from "../../images/Screenshot 2026-03-11 195157.png";

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
        <p className="text-muted-foreground leading-relaxed">{description}</p>
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

  return (
    <div className="min-h-screen">
      <SEO
        title="ADEERA | Modern SaaS for Retail & Multi-Branch Business"
        description="Empower your business with ADEERA. The all-in-one POS, inventory, and analytics platform built for growth."
      />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-28 md:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -ml-24 -mb-24" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-white opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-bold text-primary tracking-wide uppercase">
                  Retail & POS Platform for African Businesses
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-gradient">
                Run Your Entire Retail Business
                <br />
                <span className="text-primary">From One Powerful System.</span>
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                ADEERA connects your POS, inventory, branches, and analytics in a single place —
                so you always know what&apos;s selling, what&apos;s in stock, and how your business is growing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-10 text-lg md:text-xl font-black shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 group"
                  asChild
                >
                  <Link to="/demo">
                    See ADEERA in Action
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-10 text-lg md:text-xl font-semibold glass transition-all hover:bg-primary/5 hover:border-primary/30"
                  asChild
                >
                  <a
                    href="https://wa.me/yournumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-6 h-6 text-primary" />
                    Talk to Our Team
                  </a>
                </Button>
              </div>

              <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Check className="text-primary w-5 h-5" />
                  <span>Access Anywhere</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Check className="text-primary w-5 h-5" />
                  <span>Streamline Operations</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Check className="text-primary w-5 h-5" />
                  <span>Make More Money</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-10 mb-20">
        <div className="container mx-auto px-4">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-white/40 grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <span className="text-5xl md:text-6xl font-black text-primary">20K+</span>
              <span className="text-lg font-bold text-muted-foreground uppercase tracking-widest">Businesses</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-2 border-y md:border-y-0 md:border-x border-border/50 py-8 md:py-0"
            >
              <span className="text-5xl md:text-6xl font-black text-primary">5+</span>
              <span className="text-lg font-bold text-muted-foreground uppercase tracking-widest">Global Reach</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <span className="text-5xl md:text-6xl font-black text-primary">1K+</span>
              <span className="text-lg font-bold text-muted-foreground uppercase tracking-widest">Resellers</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Perfect For"
            title="Tailored for Your Business."
            description="Whether you run a single shop or a multi-branch enterprise, ADEERA adapts to your unique workflow."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Smartphone, title: "Pharmacy" },
              { icon: Layout, title: "Furniture Store" },
              { icon: Building2, title: "Hardwares" },
              { icon: Zap, title: "Electronics" },
              { icon: Star, title: "Fashion & Beauty" }
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

      {/* Dashboard Showcase */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16 px-4">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-gradient">Your Business at Your Fingertips.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Experience the power of ADEERA's intuitive dashboard on any device. Manage sales, track inventory, and get real-time insights from anywhere in the world.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group lg:px-20"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative glass p-4 rounded-[2.5rem] shadow-2xl border-white/40 overflow-hidden">
              <img
                src={HeroDashboard}
                alt="ADEERA dashboard showing sales, branches, and revenue analytics"
                className="rounded-[1.5rem] w-full shadow-inner border border-white/20"
              />
            </div>

            {/* Floating Elements for Premium Feel */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 md:right-10 w-32 md:w-48 glass p-4 rounded-2xl shadow-xl border-white/40 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-primary w-5 h-5" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Daily Sales</span>
              </div>
              <div className="text-2xl font-black text-primary">+24.5%</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-4 md:left-10 w-32 md:w-48 glass p-4 rounded-2xl shadow-xl border-white/40 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-primary w-5 h-5" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Customers</span>
              </div>
              <div className="text-2xl font-black text-primary">1,280</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 border-y border-border/50 bg-muted/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-sm font-bold text-center text-muted-foreground uppercase tracking-[0.3em] mb-12">Trusted by 4,000+ businesses globally</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl md:text-3xl font-black italic tracking-tighter text-foreground">FINTECH.CO</div>
            <div className="text-2xl md:text-3xl font-black italic tracking-tighter text-foreground">RETAILMAX</div>
            <div className="text-2xl md:text-3xl font-black italic tracking-tighter text-foreground">SHOPFLOW</div>
            <div className="text-2xl md:text-3xl font-black italic tracking-tighter text-foreground">PAYSAFE</div>
            <div className="text-2xl md:text-3xl font-black italic tracking-tighter text-foreground">GROWTHQ</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-24 -mt-24" />

        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Powerful Features"
            title="Everything You Need to Scale."
            description="Built to handle the complexity of modern retail, ADEERA provides the tools you need to stay ahead of the competition."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Smartphone}
              title="Vibrant POS"
              description="A faster checkout experience with digital receipts, offline mode, and integrated M-Pesa payments."
              delay={0.1}
            />
            <FeatureCard
              icon={Database}
              title="Inventory Tracking"
              description="Never run out of stock. Get real-time alerts and automated purchase orders across all branches."
              delay={0.2}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Sales Analytics"
              description="Beautiful reports that show your profit margins, top-selling items, and staff performance."
              delay={0.3}
            />
            <FeatureCard
              icon={Users}
              title="Customer CRM"
              description="Build lasting relationships. Track purchase history and reward your most loyal customers."
              delay={0.4}
            />
            <FeatureCard
              icon={Building2}
              title="Multi-Branch"
              description="Manage multiple locations from one login. Move stock or check sales in any branch instantly."
              delay={0.5}
            />
            <FeatureCard
              icon={Shield}
              title="Bank-Grade Security"
              description="Your data is safe with us. End-to-end encryption and regular backups ensure peace of mind."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* High-Impact Feature Highlight */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Master Your Inventory, Everywhere.</h2>
              <div className="space-y-6 text-white/90">
                {[
                  "Real-time sync across all locations",
                  "Automated stock valuation & aging",
                  "Supplier management & purchase orders",
                  "Barcode scanning & label printing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="secondary" className="mt-12 rounded-full h-14 px-8 font-bold hover:scale-105 transition-transform" asChild>
                <Link to="/features">Explore Features</Link>
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
                alt="ADEERA inventory tracking screens across multiple branches"
                className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-24 -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Customer Stories"
            title="Trusted by Visionary Owners."
            description="Join a growing community of entrepreneurs who are scaling their businesses with ADEERA's intuitive platform."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally a POS that understands the African market. M-Pesa integration is a game-changer for my retail shops.",
                author: "Muthoni Kamau",
                role: "CEO, Kamau Retail",
                initials: "MK"
              },
              {
                quote: "The multi-branch feature saved me hours of manual tracking. I can see what's happening in Eldoret while I'm in Nairobi.",
                author: "David Ouma",
                role: "Founder, QuickMart Plus",
                initials: "DO"
              },
              {
                quote: "The AI insights actually helped me identify slow-moving stock I would have otherwise missed. Highly recommended.",
                author: "Sarah Juma",
                role: "Operations, Trendy Threads",
                initials: "SJ"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border/50 flex flex-col justify-between hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex gap-1 text-primary mb-8">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-xl leading-relaxed italic text-foreground mb-10">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-border/30 pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-black text-lg">{t.author}</h4>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-20" />
        <div className="absolute inset-0 bg-grid-white/10 -z-10" />

        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">Ready to Power <br />Your Business?</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
              Start your free demo today and discover why ADEERA is the chosen platform for modern retail across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full h-20 px-12 text-2xl font-black hover:scale-105 transition-transform shadow-2xl" asChild>
                <Link to="/demo">Try for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-20 px-12 text-2xl font-black border-4 hover:bg-white/10 border-white/20 text-white transition-all" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="mt-12 text-sm opacity-60 font-bold uppercase tracking-widest">No credit card required • Cancel anytime</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
