import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake, CheckCircle, Mail, Phone, Globe, ArrowRight, Star, Users, TrendingUp, Shield } from 'lucide-react';

const Partnerships = () => {
  const partnershipModels = [
    {
      icon: TrendingUp,
      title: 'Authorized Reseller',
      description: 'Expand your market reach across Africa',
      benefits: ['Dedicated marketing support', 'Comprehensive training programs', 'Dedicated account management'],
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Implementation Partner',
      description: 'Join our network of certified implementation specialists',
      benefits: ['Technical certification program', 'Priority project referrals', 'End-to-end implementation support', 'Best practice sharing network'],
      color: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Support-Only Partner',
      description: 'Provide ongoing support and maintenance services to our clients',
      benefits: ['Guaranteed support contracts', 'Advanced technical resources', '24/7 escalation procedures', 'Performance-based incentives'],
      color: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-600'
    },
    {
      icon: Star,
      title: 'Referral Partner',
      description: 'Earn commissions by referring clients to our solutions',
      benefits: ['Competitive commission structure', 'Professional sales materials', 'Real-time lead tracking', 'Exclusive partner portal access'],
      color: 'from-orange-500/20 to-orange-600/20',
      iconColor: 'text-orange-600'
    }
  ];

  const whyPartnerData = [
    {
      emoji: '🌍',
      title: 'Local Market Expertise',
      description: 'Deep understanding of African business culture, regulations, and infrastructure challenges'
    },
    {
      emoji: '🚀',
      title: 'Explosive Growth Market',
      description: 'Access to the fastest-growing technology market with 1.3 billion potential customers'
    },
    {
      emoji: '🤝',
      title: 'Trusted Network',
      description: 'Established relationships with C-level executives and technology leaders across Africa'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-full transform -rotate-6"></div>
            <Handshake className="relative h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Join Us in Delivering <span className="text-primary">the Future</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're actively seeking partnerships with global software providers to revolutionize technology adoption across Africa
          </p>
        </div>

        {/* Partnership Opportunity Banner */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="relative p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partnership Opportunity</h2>
            <p className="text-base md:text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
              Whether you offer CRM, cybersecurity, cloud, or other SaaS products, let's collaborate to 
              expand your footprint across Africa. We understand the local market and can help you 
              navigate the unique challenges and unlock unprecedented opportunities in the African tech landscape.
            </p>
          </div>
        </div>

        {/* Partnership Models */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partnership Models</h2>
            <p className="text-lg text-muted-foreground">Choose the model that aligns with your business goals</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipModels.map((model, index) => {
              const IconComponent = model.icon;
              return (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${model.color} border`}>
                        <IconComponent className={`h-6 w-6 ${model.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {model.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {model.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      {model.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3 group/item">
                          <div className="mt-1">
                            <CheckCircle className="h-4 w-4 text-primary group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Partner With ADEERA UNITECH?</h2>
            <p className="text-lg text-muted-foreground">Experience the advantages of working with Africa's leading tech partner</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPartnerData.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"></div>
            <CardHeader className="relative z-10 text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                Let's Talk Partnership
              </CardTitle>
              <CardDescription className="text-base">
                Ready to explore partnership opportunities? Our team is standing by to discuss how we can grow together.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/50">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium text-sm">contact@adeeraunitech.com</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/50">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-medium text-sm">+254-700-000000</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/50">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium text-sm">www.adeeraunitech.com</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-base py-4 group" asChild>
                <Link to="/contact">
                  Start Partnership Discussion 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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