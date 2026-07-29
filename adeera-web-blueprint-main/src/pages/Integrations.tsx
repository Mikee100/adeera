import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Cloud, Shield, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const comingSoon = [
  { icon: Users, title: "CRM integrations", desc: "Connect with Salesforce, HubSpot, Zoho and more." },
  { icon: Cloud, title: "Cloud & infrastructure", desc: "AWS, Azure, Google Cloud and migration support." },
  { icon: Shield, title: "Security & compliance", desc: "Enterprise security and compliance add-ons." },
];

const Integrations = () => {
  return (
    <div>
      <SEO
        title="Integrations | Enterprise add-ons — Coming soon | ADEERA"
        description="We focus on the ADEERA Platform today. CRM, cloud, and security integrations are coming soon. Explore the platform and features."
        keywords="integrations, CRM, cloud, security, ADEERA Platform, coming soon"
        url="https://www.adeeraunitech.com/integrations"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Integrations — Coming soon",
          "description": "Enterprise add-ons and integrations for the ADEERA Platform",
          "url": "https://www.adeeraunitech.com/integrations",
        }}
      />

      <section className="pt-32 pb-16 md:pt-40 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Integrations — coming soon
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We focus on the ADEERA Platform today — POS, inventory, sales, reports, M-Pesa, and AI —
              so you get one system that works. CRM, cloud, and security add-ons are on the roadmap.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link to="/platform" className="flex items-center gap-2">
                  See the platform <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">All features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground text-center mb-10">Planned integrations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 max-w-2xl mx-auto text-center">
            {comingSoon.map((item) => (
              <div key={item.title}>
                <item.icon className="h-5 w-5 text-primary mx-auto" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Need something specific? <Link to="/contact" className="text-primary hover:underline">Get in touch</Link> and we'll let you know when it's available.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
