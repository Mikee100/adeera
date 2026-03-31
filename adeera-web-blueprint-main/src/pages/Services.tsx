import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Smartphone, Database, Zap, Cpu, ArrowRight, CheckCircle, BarChart3, Receipt, Wallet, Users, LayoutDashboard, Settings } from 'lucide-react';
import SEO from '@/components/SEO';

const Services = () => {
  const coreProducts = [
    {
      id: 'pos',
      icon: Smartphone,
      title: 'Adeera Smart POS',
      description: 'The heartbeat of your retail operation. A high-performance, touch-optimized sales interface that works seamlessly on desktop and mobile.',
      features: ['Offline Sales Support', 'Barcode & QR Scanning', 'Thermal Receipt Printing', 'Quick Checkout Tiles', 'Multi-payment Reconciliation'],
      image: '/services-pos.png',
      gradient: 'from-blue-600/10 to-blue-700/5'
    },
    {
      id: 'inventory',
      icon: Database,
      title: 'Real-Time Inventory',
      description: 'Never lose track of your stock again. Advanced multi-branch inventory management with real-time synchronization.',
      features: ['Multi-Variation Support', 'Low Stock Smart Alerts', 'Branch-to-Branch Transfers', 'Bulk Import/Export', 'Audit Logs & History'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop',
      gradient: 'from-teal-500/10 to-teal-600/5'
    },
    {
      id: 'payments',
      icon: Wallet,
      title: 'Integrated Payments',
      description: 'Deep M-Pesa and card integration that brings all your revenue into a single, unified business dashboard.',
      features: ['Direct M-Pesa STK Push', 'Credit & Debit Cards', 'Cash Management', 'Transaction Auto-Matching', 'Settlement Analytics'],
      image: 'https://images.unsplash.com/photo-1556742049-360e206037f5?w=600&h=300&fit=crop',
      gradient: 'from-green-500/10 to-green-600/5'
    },
    {
      id: 'ai',
      icon: Cpu,
      title: 'Adeera AI Assistant',
      description: 'Your 24/7 business partner. Automate customer interactions and gain predictive insights through power of AI.',
      features: ['WhatsApp Booking Bot', 'Demand Forecasting', 'Customer Sentiment Analysis', 'Automated Daily Reports', 'Smart Re-scheduling'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
      gradient: 'from-blue-500/10 to-indigo-600/5'
    }
  ];

  const managementModules = [
    {
      id: 'expenses',
      icon: BarChart3,
      title: 'Expenses & Budgeting',
      description: 'Track every cent with branch-wise expense categorization and automated financial reporting.',
      features: ['Categorized Expense Logs', 'Profit & Loss Reports', 'Multi-Branch Comparison']
    },
    {
      id: 'sales',
      icon: LayoutDashboard,
      title: 'Sales Performance',
      description: 'Set and track sales targets for locations and individual staff members to drive growth.',
      features: ['Daily/Monthly Targets', 'Staff Benchmarking', 'Growth Analytics']
    },
    {
      id: 'suppliers',
      icon: Users,
      title: 'Supplier Management',
      description: 'Centralize your supply chain with vendor profiles, purchase history, and debt tracking.',
      features: ['Vendor Ledger', 'Purchase Order History', 'Debt Notifications']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SEO 
        title="Our Services | CRM, Cybersecurity & Cloud Solutions | ADEERA UNITECH"
        description="Comprehensive SaaS services including CRM integration, cybersecurity solutions, cloud migration, and enterprise software development. Tailored for African businesses."
        keywords="SaaS services, CRM services, cybersecurity services, cloud services, enterprise software services, digital transformation services, Kenya tech services"
        url="https://www.adeeraunitech.com/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "ADEERA UNITECH Services",
          "description": "Comprehensive SaaS services for African businesses",
          "provider": {
            "@type": "Organization",
            "name": "ADEERA UNITECH LIMITED",
            "url": "https://www.adeeraunitech.com"
          },
          "areaServed": "KE",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Adeera Product Suite",
            "itemListElement": coreProducts.map((product, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": product.title,
                "description": product.description,
                "featureList": product.features.join(", ")
              }
            }))
          }
        }}
      />
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

          {/* Core Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {coreProducts.map((product, index) => (
              <Card key={index} id={product.id} className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50 backdrop-blur-sm scroll-mt-24">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-80 animate-gradient-shift`}></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
                      <product.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-md leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group/item">
                        <CheckCircle className="h-4 w-4 text-primary/80 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specialized Management Modules */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Specialized Management Modules</h2>
              <p className="text-muted-foreground text-lg">Integrated tools to handle every aspect of your enterprise</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {managementModules.map((module, index) => (
                <div key={index} id={module.id} className="p-8 rounded-3xl bg-white border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 scroll-mt-24">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <module.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((f, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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