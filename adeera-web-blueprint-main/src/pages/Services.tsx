import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Shield, Cloud, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'CRM Integration & Support',
      description: 'We deploy and support Salesforce, HubSpot, and Zoho CRMs — empowering African businesses to manage customer relationships, sales pipelines, and marketing automation.',
      features: ['Salesforce Implementation', 'HubSpot Configuration', 'Zoho CRM Setup', 'Training & Support', 'Custom Integrations'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop',
      gradient: 'from-blue-500/10 to-blue-600/5'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'From endpoint protection to threat detection and network security, we aim to partner with leading security vendors to offer tools that protect your data and users.',
      features: ['Endpoint Protection', 'Threat Detection', 'Network Security', 'Security Audits', 'Compliance Support'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
      gradient: 'from-red-500/10 to-red-600/5'
    },
    {
      icon: Cloud,
      title: 'Cloud Consulting & Infrastructure',
      description: 'Migration planning, cost optimization, and cloud-native development support — using AWS, Azure, and Google Cloud for digital transformation.',
      features: ['Cloud Migration', 'Cost Optimization', 'Infrastructure Design', 'DevOps Support', 'Cloud-Native Development'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
      gradient: 'from-purple-500/10 to-purple-600/5'
    },
    {
      icon: ShoppingCart,
      title: 'SaaS Marketplace (Coming Soon)',
      description: 'An online hub to access curated SaaS products for HR, accounting, customer support, and e-commerce — all in one place.',
      features: ['HR Solutions', 'Accounting Tools', 'Customer Support', 'E-commerce Platforms', 'One-Stop Shopping'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop',
      gradient: 'from-green-500/10 to-green-600/5',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Future-Ready <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Software Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive technology services designed specifically for African businesses
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-80`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                        Coming Soon
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 group/item">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 rounded-2xl p-8 md:p-12 mb-20 border border-border/50">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Implementation Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures successful technology adoption and business transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: '1', 
                  title: 'Discovery', 
                  description: 'Understanding your business needs and current infrastructure',
                  color: 'from-blue-500 to-blue-600'
                },
                { 
                  step: '2', 
                  title: 'Planning', 
                  description: 'Designing the optimal solution architecture and timeline',
                  color: 'from-purple-500 to-purple-600'
                },
                { 
                  step: '3', 
                  title: 'Implementation', 
                  description: 'Deploying and configuring your chosen solutions',
                  color: 'from-green-500 to-green-600'
                },
                { 
                  step: '4', 
                  title: 'Support', 
                  description: 'Ongoing training, maintenance, and optimization',
                  color: 'from-orange-500 to-orange-600'
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${process.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  <h3 className="font-bold mb-3 text-lg group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Let's discuss how our solutions can streamline your operations, enhance security, and drive sustainable growth in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/contact">
                    Schedule a Consultation 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link to="/partnerships">
                    Explore Partnerships
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;