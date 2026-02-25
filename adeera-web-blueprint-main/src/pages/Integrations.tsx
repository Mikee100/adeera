import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plug, ArrowRight, Cloud, Shield, Users } from "lucide-react";
import SEO from "@/components/SEO";

const comingSoon = [
  { icon: Users, title: "CRM integrations", desc: "Connect with Salesforce, HubSpot, Zoho and more." },
  { icon: Cloud, title: "Cloud & infrastructure", desc: "AWS, Azure, Google Cloud and migration support." },
  { icon: Shield, title: "Security & compliance", desc: "Enterprise security and compliance add-ons." },
];

const Integrations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
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

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <Plug className="h-4 w-4 mr-2" />
              Integrations & enterprise add-ons
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Coming soon
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We focus on the <strong>ADEERA Platform</strong> — POS, inventory, sales, reports, M-Pesa, and AI — so you get one system that works today. CRM, cloud, and security integrations are on our roadmap for later.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/platform" className="flex items-center gap-2">
                  See the Platform <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">All features</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-muted/20 bg-card p-8 md:p-10 mb-12"
          >
            <h2 className="text-xl font-semibold mb-6 text-foreground text-center">Planned integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comingSoon.map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-muted/20 border border-muted/20 text-center">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Need something specific? <Link to="/contact" className="text-primary hover:underline">Get in touch</Link> and we’ll let you know when it’s available.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
