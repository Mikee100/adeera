import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Smartphone,
  CreditCard,
  FileText,
  Shield,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";
import SEO from "@/components/SEO";

const plans = [
  { name: "Basic", desc: "For getting started. Core POS, inventory, and sales." },
  { name: "Pro", desc: "More products, users, and branches. Full reports and analytics." },
  { name: "Enterprise", desc: "Scale without limits. Advanced features and support." },
];

const Payments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO
        title="Payments & Billing | M-Pesa, Stripe & Plans | ADEERA Platform"
        description="Accept M-Pesa at the till and manage subscriptions with Stripe. ADEERA offers Basic, Pro, and Enterprise plans. Invoices and billing in one place."
        keywords="M-Pesa, Stripe, subscription billing, business plans, invoices, ADEERA pricing"
        url="https://www.adeeraunitech.com/payments"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ADEERA Platform",
          "applicationCategory": "BusinessApplication",
          "description": "M-Pesa and Stripe billing with Basic, Pro, Enterprise plans",
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
              Payments & Billing
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              M-Pesa at the till. Stripe for your subscription.
            </h1>
            <p className="text-lg text-muted-foreground">
              Accept mobile money with M-Pesa and keep every transaction in sync. 
              Manage your subscription and invoices with Stripe — simple, secure, and scalable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-muted/20 bg-card p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">M-Pesa</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Accept M-Pesa at checkout</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> M-Pesa transaction list</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Reconcile with sales</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-muted/20 bg-card p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Stripe billing</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Subscriptions and plans</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Invoices</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Secure payments</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-muted/20 bg-card p-8 md:p-10 mb-12"
          >
            <h2 className="text-xl font-semibold mb-6 text-foreground">Plans that scale</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div key={plan.name} className="p-4 rounded-xl bg-muted/20 border border-muted/20">
                  <h3 className="font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Contact us for pricing and limits. We’ll find the right plan for your business.
            </p>
          </motion.div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/pricing" className="flex items-center gap-2">
                View pricing <ArrowRight className="h-4 w-4" />
              </Link>
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

export default Payments;
