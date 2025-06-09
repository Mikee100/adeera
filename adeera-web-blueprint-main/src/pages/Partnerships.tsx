
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake, CheckCircle, Mail, Phone, Globe, ArrowRight } from 'lucide-react';

const Partnerships = () => {
  const partnershipModels = [
    {
      title: 'Authorized Reseller',
      description: 'Become our official reseller and expand your market reach across Africa',
      benefits: ['Revenue sharing', 'Marketing support', 'Training programs', 'Dedicated account management']
    },
    {
      title: 'Implementation Partner',
      description: 'Join our network of certified implementation specialists',
      benefits: ['Technical certification', 'Project referrals', 'Implementation support', 'Best practice sharing']
    },
    {
      title: 'Support-Only Partner',
      description: 'Provide ongoing support and maintenance services to our clients',
      benefits: ['Support contracts', 'Technical resources', 'Escalation procedures', 'Performance metrics']
    },
    {
      title: 'Referral Partner',
      description: 'Earn commissions by referring clients to our solutions',
      benefits: ['Commission structure', 'Sales materials', 'Lead tracking', 'Partner portal access']
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Delivering <span className="text-primary">the Future</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're actively seeking partnerships with global software providers to expand across Africa
          </p>
        </div>

        {/* Partnership Opportunity */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Partnership Opportunity</h2>
            <p className="text-muted-foreground mb-6">
              Whether you offer CRM, cybersecurity, cloud, or other SaaS products, let's collaborate to 
              expand your footprint across Africa. We understand the local market and can help you 
              navigate the unique challenges and opportunities in the African tech landscape.
            </p>
          </div>
        </div>

        {/* Partnership Models */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipModels.map((model, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{model.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Partner With ADEERA UNITECH?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold mb-2">Local Market Expertise</h3>
              <p className="text-muted-foreground">Deep understanding of African business culture and infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2">Growing Market</h3>
              <p className="text-muted-foreground">Access to rapidly expanding African technology market</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold mb-2">Trusted Relationships</h3>
              <p className="text-muted-foreground">Strong network of businesses and technology leaders</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Let's Talk Partnership</CardTitle>
              <CardDescription className="text-center">
                Ready to explore partnership opportunities? Get in touch with our team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@adeeraunitech.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+254-700-000000</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <span>www.adeeraunitech.com</span>
              </div>
              
              <Button size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Start Partnership Discussion <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
