import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Building2, Crown } from "lucide-react";
import SEO from "@/components/SEO";

const plans = [
  {
    name: "Basic",
    icon: Zap,
    desc: "For getting started",
    features: ["Core POS & sales", "Inventory basics", "Sales history", "Single branch", "Email support"],
    cta: "Start free trial",
    href: "/demo",
    highlighted: false,
  },
  {
    name: "Pro",
    icon: Crown,
    desc: "For growing businesses",
    features: ["Everything in Basic", "More products & users", "Multiple branches", "Full reports & analytics", "AI Assistant", "M-Pesa", "Priority support"],
    cta: "Get Pro",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    desc: "Scale without limits",
    features: ["Everything in Pro", "Unlimited scale", "Advanced permissions", "Dedicated support", "Custom needs"],
    cta: "Contact sales",
    href: "/contact",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO
        title="Pricing | Plans for Every Business | ADEERA Platform"
        description="ADEERA Platform pricing: Basic, Pro, and Enterprise plans. Start with a free trial. Contact us for custom pricing and limits."
        keywords="ADEERA pricing, POS pricing, business management SaaS pricing, Basic Pro Enterprise"
        url="https://www.adeeraunitech.com/pricing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ADEERA Platform",
          "description": "POS, inventory, sales, reports, and AI in one platform",
          "brand": { "@type": "Brand", "name": "ADEERA UNITECH" },
          "offers": [
            { "@type": "Offer", "name": "Basic" },
            { "@type": "Offer", "name": "Pro" },
            { "@type": "Offer", "name": "Enterprise" },
          ],
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
              Pricing
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Plans for every business
            </h1>
            <p className="text-lg text-muted-foreground">
              Start with Basic and upgrade as you grow. Need a custom plan? We’ll find the right fit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-6 md:p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                    : "border-muted/20 bg-card"
                }`}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <plan.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h2>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 flex-1 text-sm text-muted-foreground mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to={plan.href} className="flex items-center justify-center gap-2">
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 text-sm">
            All plans include secure hosting, updates, and support. Contact us for detailed pricing and limits.
          </p>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/demo">Start free trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
