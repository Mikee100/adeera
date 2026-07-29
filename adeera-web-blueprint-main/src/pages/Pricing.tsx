import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    <div>
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

      <section className="pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Plans for every business
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with Basic and upgrade as you grow. Need a custom plan? We'll find the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-6 flex flex-col ${
                  plan.highlighted ? "border-primary" : "border-border"
                }`}
              >
                <plan.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h2 className="mt-4 text-lg font-semibold text-foreground">{plan.name}</h2>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-2.5 flex-1 text-sm text-muted-foreground mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to={plan.href} className="flex items-center justify-center gap-2">
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 text-sm">
            All plans include secure hosting, updates, and support. Contact us for detailed pricing and limits.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
