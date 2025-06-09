
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Shield, Cloud, ShoppingCart, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'CRM Integration & Support',
      description: 'We deploy and support Salesforce, HubSpot, and Zoho CRMs — empowering African businesses to manage customer relationships, sales pipelines, and marketing automation.',
      features: ['Salesforce Implementation', 'HubSpot Configuration', 'Zoho CRM Setup', 'Training & Support', 'Custom Integrations']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'From endpoint protection to threat detection and network security, we aim to partner with leading security vendors to offer tools that protect your data and users.',
      features: ['Endpoint Protection', 'Threat Detection', 'Network Security', 'Security Audits', 'Compliance Support']
    },
    {
      icon: Cloud,
      title: 'Cloud Consulting & Infrastructure',
      description: 'Migration planning, cost optimization, and cloud-native development support — using AWS, Azure, and Google Cloud for digital transformation.',
      features: ['Cloud Migration', 'Cost Optimization', 'Infrastructure Design', 'DevOps Support', 'Cloud-Native Development']
    },
    {
      icon: ShoppingCart,
      title: 'SaaS Marketplace (Coming Soon)',
      description: 'An online hub to access curated SaaS products for HR, accounting, customer support, and e-commerce — all in one place.',
      features: ['HR Solutions', 'Accounting Tools', 'Customer Support', 'E-commerce Platforms', 'One-Stop Shopping'],
      comingSoon: true
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Future-Ready <span className="text-primary">Software Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology services designed specifically for African businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`h-full ${service.comingSoon ? 'relative overflow-hidden' : ''}`}>
              {service.comingSoon && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
              )}
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Implementation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm">Understanding your business needs and current infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">Designing the optimal solution architecture and timeline</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground text-sm">Deploying and configuring your chosen solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground text-sm">Ongoing training, maintenance, and optimization</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can transform your business operations and drive growth.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
