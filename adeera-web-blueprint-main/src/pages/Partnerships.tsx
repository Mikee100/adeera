import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Phone, Globe, ArrowRight, Star, Users, TrendingUp, Shield } from 'lucide-react';
import SEO from '@/components/SEO';

const partnershipModels = [
  {
    icon: TrendingUp,
    title: 'Authorized reseller',
    description: 'Expand your market reach across Africa',
    benefits: ['Dedicated marketing support', 'Training programs', 'Dedicated account management'],
  },
  {
    icon: Users,
    title: 'Implementation partner',
    description: 'Join our network of certified implementation specialists',
    benefits: ['Technical certification program', 'Priority project referrals', 'End-to-end implementation support'],
  },
  {
    icon: Shield,
    title: 'Support-only partner',
    description: 'Provide ongoing support and maintenance to our clients',
    benefits: ['Support contracts', 'Technical resources', 'Escalation procedures'],
  },
  {
    icon: Star,
    title: 'Referral partner',
    description: 'Earn commissions by referring clients to Adeera',
    benefits: ['Commission structure', 'Sales materials', 'Lead tracking'],
  },
];

const whyPartner = [
  { title: 'Local market expertise', description: 'Deep understanding of African business culture, regulations, and infrastructure challenges.' },
  { title: 'A growing market', description: 'Access to one of the fastest-growing retail technology markets on the continent.' },
  { title: 'A direct line to us', description: 'A small team you can actually reach — not a support queue.' },
];

const Partnerships = () => {
  return (
    <div>
      <SEO
        title="Partnerships | Become an ADEERA UNITECH Partner"
        description="Join ADEERA UNITECH's partner network — reseller, implementation, support, and referral partnerships for African retail technology."
        keywords="tech partnerships Kenya, POS partnerships, business partnerships Africa, Kenya tech ecosystem"
        url="https://www.adeeraunitech.com/partnerships"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ADEERA UNITECH LIMITED",
          "description": "POS and business software provider seeking partnerships",
          "url": "https://www.adeeraunitech.com/partnerships",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Partnership Opportunities",
            "itemListElement": partnershipModels.map((model) => ({
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": model.title, "description": model.description }
            }))
          }
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Partner with Adeera
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We're looking for resellers, implementation specialists, and referral partners
              to help bring Adeera to more African retail and hospitality businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-10">Partnership models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {partnershipModels.map((model) => (
              <div key={model.title}>
                <model.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{model.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{model.description}</p>
                <ul className="mt-4 space-y-2">
                  {model.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-10">Why partner with us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
            {whyPartner.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-semibold text-foreground">Let's talk partnership</h2>
            <p className="mt-3 text-muted-foreground">
              Ready to explore partnership opportunities? Reach out and we'll take it from there.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center justify-center gap-2"><Mail className="h-4 w-4 text-primary" /> adeeraunitech@gmail.com</span>
              <span className="flex items-center justify-center gap-2"><Phone className="h-4 w-4 text-primary" /> +254 700 000000</span>
              <span className="flex items-center justify-center gap-2"><Globe className="h-4 w-4 text-primary" /> adeeraunitech.com</span>
            </div>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Start a partnership discussion <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
