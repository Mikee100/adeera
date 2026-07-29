import { Button } from '@/components/ui/button';
import { Building2, Target, Users, Globe, MapPin, Calendar, ArrowRight, Wallet, WifiOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const DashboardShot = "/screenshots/adeera/dashboard-trends.png";
const InventoryShot = "/screenshots/adeera/inventory.png";

const About = () => {
  const stats = [
    { number: 'M-Pesa', label: 'Native integration', icon: Wallet },
    { number: 'Offline', label: 'POS keeps working', icon: WifiOff },
    { number: 'Multi-branch', label: 'One account, many locations', icon: Building2 },
    { number: 'Nairobi', label: 'Built & supported locally', icon: MapPin },
  ];

  const foundation = [
    { icon: Building2, title: 'Mission', desc: 'Deliver software that genuinely changes how small and growing businesses operate.' },
    { icon: Target, title: 'Vision', desc: 'Become the leading software platform for retail and hospitality in Africa.' },
    { icon: Users, title: 'Values', desc: 'Innovation, integrity, and inclusive growth for businesses of every size.' },
    { icon: Globe, title: 'Impact', desc: "Bridging the digital divide, one business at a time." },
  ];

  const timeline = [
    { year: '2023', title: 'Adeera Unitech founded', description: 'Launched with a mission to build a unified business suite for the African market.' },
    { year: '2024', title: 'The POS ships', description: 'Deployed the retail and restaurant point-of-sale tills, with real-time inventory and sales.' },
    { year: '2024', title: 'M-Pesa integration', description: 'Full M-Pesa and card processing integration, built directly into checkout.' },
    { year: '2025', title: 'AI assistant', description: 'Introduced the in-app AI assistant for querying sales data and generating charts.' },
  ];

  return (
    <div>
      <SEO
        title="About ADEERA UNITECH | POS & Business OS for African Retail"
        description="ADEERA UNITECH builds the POS and business management platform African retailers actually use — offline-ready checkout, real-time inventory, and M-Pesa built in from day one."
        keywords="about ADEERA, African tech company, POS provider Kenya, business management software Africa, digital transformation Kenya"
        url="https://www.adeeraunitech.com/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About ADEERA UNITECH",
          "description": "POS and business management platform for African retail",
          "url": "https://www.adeeraunitech.com/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "ADEERA UNITECH LIMITED",
            "url": "https://www.adeeraunitech.com",
            "logo": "https://www.adeeraunitech.com/logo.png",
            "description": "ADEERA builds POS, inventory, and business management software for African retail and hospitality businesses.",
            "foundingDate": "2023",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "KE",
              "addressLocality": "Nairobi"
            },
            "sameAs": [
              "https://twitter.com/adeeraunitech",
              "https://linkedin.com/company/adeeraunitech"
            ]
          }
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                Unified tech for African growth
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Adeera is building the future of African commerce — one platform to manage,
                pay, and scale, instead of a pile of disconnected tools.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link to="/platform" className="flex items-center gap-2">
                    Explore the platform <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
            <img
              src={DashboardShot}
              alt="Real ADEERA dashboard showing branch sales comparison"
              className="rounded-xl border border-border shadow-sm w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <div className="mt-4 text-lg font-semibold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Our story</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                ADEERA UNITECH was born from a simple observation: African businesses deserve
                more than fragmented tools. We saw retailers struggling to bridge their sales,
                stock, and payments — and decided to fix it.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Based in Nairobi, we build technology that understands the local landscape —
                not a foreign platform adapted after the fact.
              </p>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Nairobi, Kenya</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Founded 2023</span>
              </div>
            </div>
            <img
              src={InventoryShot}
              alt="Real ADEERA products and inventory screen"
              className="rounded-xl border border-border shadow-sm w-full"
            />
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-10">Our foundation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {foundation.map((item) => (
              <div key={item.title}>
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-10">Our journey</h2>
          <div className="max-w-2xl divide-y divide-border border-t border-border">
            {timeline.map((item) => (
              <div key={item.title} className="py-6 flex gap-6">
                <div className="w-14 flex-shrink-0 text-sm font-medium text-primary">{item.year}</div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Ready to see it for yourself?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Retail till, restaurant till, and the dashboard that ties them together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/platform" className="flex items-center gap-2">
                Explore the platform <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/partnerships">Partner with us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
