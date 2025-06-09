
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Users, Globe, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Users,
      title: 'CRM Integration & Support',
      description: 'Deploy and support Salesforce, HubSpot, and Zoho CRMs for African businesses.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Endpoint protection, threat detection, and network security partnerships.',
    },
    {
      icon: Cloud,
      title: 'Cloud Consulting',
      description: 'Migration planning and cloud-native development with AWS, Azure, and Google Cloud.',
    },
    {
      icon: Globe,
      title: 'SaaS Marketplace',
      description: 'Coming soon - curated SaaS products for HR, accounting, and e-commerce.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Empowering Africa's <span className="text-primary">Digital Future</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ADEERA UNITECH LIMITED delivers cutting-edge software solutions, from CRM to 
              cybersecurity and cloud computing — tailored for Africa's growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Future-Ready Software Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building partnerships with global vendors to bring advanced technology to African businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">A Local Partner With Global Ambitions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🌍</div>
                  <div>
                    <h3 className="font-semibold mb-2">African Focus</h3>
                    <p className="text-muted-foreground">We understand the local market needs and infrastructure challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="font-semibold mb-2">Partner-Driven</h3>
                    <p className="text-muted-foreground">We are committed to long-term alliances with global tech leaders</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h3 className="font-semibold mb-2">Secure & Scalable</h3>
                    <p className="text-muted-foreground">Security-first architecture with growth in mind</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h3 className="font-semibold mb-2">Future-Proof Strategy</h3>
                    <p className="text-muted-foreground">Built for today's needs and tomorrow's demands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Join the growing number of African businesses embracing digital transformation with ADEERA UNITECH.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
