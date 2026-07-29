import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Target, Users, Globe, MapPin, Calendar, ArrowRight, Wallet, WifiOff, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const DashboardShot = "/screenshots/adeera/dashboard-trends.png";
const InventoryShot = "/screenshots/adeera/inventory.png";

const About = () => {
  const stats = [
    { number: 'M-Pesa', label: 'Native Integration', icon: Wallet },
    { number: 'Offline', label: 'POS Keeps Working', icon: WifiOff },
    { number: 'Multi-branch', label: 'One Account, Many Locations', icon: Building2 },
    { number: 'Nairobi', label: 'Built & Supported Locally', icon: MapPin }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Adeera Unitech Founded',
      description: 'Launched with a mission to build the first truly unified business suite for the African market.'
    },
    {
      year: '2024',
      title: 'The POS Revolution',
      description: 'Deployed our flagship Smart POS system, bringing real-time inventory and sales to hundreds of retailers.'
    },
    {
      year: '2024',
      title: 'Seamless Payments',
      description: 'Full M-Pesa and card processing integration, allowing businesses to accept payments directly in-flow.'
    },
    {
      year: '2025',
      title: 'AI-Powered Business Assistant',
      description: 'Introduced the Adeera AI Assistant, automating customer bookings and providing data-driven growth insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Unified Tech for <span className="text-primary text-glow">African Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Adeera is building the future of African commerce. We're breaking down technology silos with a single, high-performance ecosystem designed to help you manage, pay, and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/platform">
                    Explore the Platform
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 blur-3xl rounded-full"></div>
              <img
                src={DashboardShot}
                alt="Real ADEERA dashboard showing branch sales comparison"
                className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover border border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ADEERA UNITECH LIMITED was born from a simple yet powerful observation: African businesses deserve more than fragmented tools. We saw retailers struggling to bridge their sales, stock, and payments—and we decided to fix it.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Based in Nairobi, we are building a world-class technology suite that understands the local landscape. We're not just providing software; we're providing a foundation for scalable, data-driven entrepreneurship across the continent.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Founded 2023</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={InventoryShot}
                alt="Real ADEERA products and inventory screen"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Vision Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Foundation</h2>
            <p className="text-muted-foreground">The core principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Building2 className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To deliver and develop life changing software solutions for small market enterprises and enterprises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Target className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become the leading software solutions provider in Africa and Beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Users className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Innovation, integrity, and inclusive growth for all African businesses, regardless of size or industry.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Globe className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bridging the digital divide and accelerating Africa's technological transformation, one business at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our mission to transform African business technology</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-0 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"></div>
            <CardContent className="relative p-12">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                See the platform for yourself — retail till, restaurant till, and the dashboard that ties it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <Link to="/platform">
                    Explore All Features
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
