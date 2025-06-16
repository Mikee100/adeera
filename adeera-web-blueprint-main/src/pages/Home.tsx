import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Users, Globe, ArrowRight, ChevronRight, Check, Zap, BarChart, Lock, Server, Play, Award, Rocket, Globe2, ShieldCheck, BarChart2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';


const AnimatedCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 400 }
      }}
    >
      <Card className="h-full text-center hover:shadow-xl transition-all duration-500 group border border-muted/20 bg-gradient-to-b from-background to-muted/5 hover:to-primary/5">
        <CardHeader className="pb-3">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"
          >
            <service.icon className="h-6 w-6 text-primary" />
          </motion.div>
          <CardTitle className="mt-4 text-lg font-semibold text-foreground">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">
            {service.description}
          </CardDescription>
          <Button 
            variant="link" 
            className="mt-4 text-primary p-0 h-auto group-hover:underline hover:text-primary/80"
            asChild
          >
            <Link to="/services" className="flex items-center justify-center">
              Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeatureItem = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="flex items-start gap-5 p-6 rounded-xl bg-background hover:bg-muted/10 transition-colors duration-300 border border-muted/20 shadow-sm"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const StatCard = ({ value, label, icon, suffix }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="bg-background p-6 rounded-xl border border-muted/20 shadow-sm text-center hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-2 bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent">
   
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const Home = () => {
  const services = [
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamless Salesforce, HubSpot, and Zoho CRM deployments tailored for African markets.',
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive protection with endpoint security and threat intelligence.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and Google Cloud migrations with local support.',
    },
    {
      icon: Globe2,
      title: 'SaaS Marketplace',
      description: 'Curated SaaS products for HR, accounting, and e-commerce needs.',
    },
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'African Market Expertise',
      description: 'Deep understanding of local business challenges and digital transformation needs',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your operations',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols to protect your data and systems',
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: 'Scalable Solutions',
      description: 'Grow with confidence as our solutions scale with your business',
    },
  ];

  const stats = [
    {
      value: 100,
      suffix: "+",
      label: "Businesses Empowered",
      icon: <Users className="h-6 w-6" />
    },
    {
      value: 24,
      suffix: "/7",
      label: "Support Availability",
      icon: <Server className="h-6 w-6" />
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Uptime Guarantee",
      icon: <BarChart className="h-6 w-6" />
    },
    {
      value: 5,
      suffix: "x",
      label: "Faster Deployment",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5">
      <Helmet>
        <title>ADEERA UNITECH | Enterprise SaaS Solutions for Africa</title>
        <meta name="description" content="Transform your business with ADEERA's enterprise-grade SaaS solutions — from CRM to cybersecurity — optimized for Africa's unique business landscape." />
        <meta name="keywords" content="SaaS, CRM, cybersecurity, cloud solutions, African business, enterprise software, digital transformation" />
        <meta name="author" content="ADEERA UNITECH LIMITED" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ADEERA UNITECH | Enterprise SaaS Solutions for Africa" />
        <meta property="og:description" content="Transform your business with ADEERA's enterprise-grade SaaS solutions — from CRM to cybersecurity — optimized for Africa's unique business landscape." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adeera.vercel.app" />
        <meta property="og:image" content="https://adeera.vercel.app/og-image.jpg" />
        <meta property="og:site_name" content="ADEERA UNITECH" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adeera" />
        <meta name="twitter:title" content="ADEERA UNITECH | Enterprise SaaS Solutions for Africa" />
        <meta name="twitter:description" content="Transform your business with ADEERA's enterprise-grade SaaS solutions — from CRM to cybersecurity — optimized for Africa's unique business landscape." />
        <meta name="twitter:image" content="https://adeera.vercel.app/og-image.jpg" />
        
        {/* Language Alternates */}
        <link rel="alternate" hrefLang="en" href="https://adeera.vercel.app" />
        <link rel="alternate" hrefLang="fr" href="https://adeera.vercel.app/fr" />
        <link rel="canonical" href="https://adeera.vercel.app" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ADEERA UNITECH LIMITED",
            "url": "https://adeera.vercel.app",
            "logo": "https://adeera.vercel.app/logo.png",
            "description": "Transform your business with ADEERA's enterprise-grade SaaS solutions — from CRM to cybersecurity — optimized for Africa's unique business landscape.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kenya",
              "addressLocality": "Nairobi"
            },
            "sameAs": [
              "https://twitter.com/adeera",
              "https://linkedin.com/company/adeera"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "offers": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background to-primary/5">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[100px] opacity-20 animate-float-slow" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-[120px] opacity-20 animate-float-medium" />
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-accent/10 rounded-full filter blur-[80px] opacity-20 animate-float-fast" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2"
            >
              <div className="space-y-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  <Zap className="h-4 w-4 mr-2 animate-pulse" />
                  SaaS Solutions for Africa
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                >
                  Transform Your Business With <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Cloud Power</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                >
                  ADEERA UNITECH delivers enterprise-grade SaaS solutions — from CRM to 
                  cybersecurity — optimized for Africa's unique business landscape.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <Button size="lg" asChild className="group">
                    <Link to="/demo" className="flex items-center">
                      Get Free Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group">
                    <Link to="/pricing" className="flex items-center">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex justify-center relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Africa"
                  className="rounded-2xl shadow-2xl object-cover aspect-[16/10] w-full max-w-xl border border-border/50"
                />
                {/* Floating card element */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg border border-muted/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">30% Growth</p>
                      <p className="text-sm text-muted-foreground">Average client impact</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  <section className="py-16 md:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
    >
      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
        <Award className="h-4 w-4 mr-2" />
        Our Solutions
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful SaaS for Modern Businesses</h2>
      <p className="text-muted-foreground mx-auto text-lg">
        We partner with global leaders to bring world-class software to African enterprises, with local support and customization.
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full text-center transition-all duration-300 hover:shadow-md border border-gray-200">
            <CardHeader className="pb-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4 text-lg font-medium">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                {service.description}
              </CardDescription>
              <Button 
                variant="link" 
                className="mt-4 text-primary p-0 h-auto hover:underline"
                asChild
              >
                <Link to="/services" className="flex items-center justify-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[15%] w-80 h-80 bg-primary/10 rounded-full filter blur-[100px] opacity-20 animate-float-slow" />
          <div className="absolute bottom-1/3 right-[20%] w-96 h-96 bg-secondary/10 rounded-full filter blur-[120px] opacity-15 animate-float-medium" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Driving Digital Transformation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Measurable results that demonstrate our commitment to African businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard 
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                suffix={stat.suffix}
              />
            ))}
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 h-1.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-video border border-muted/20"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <Check className="h-4 w-4 mr-2" />
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The ADEERA Advantage</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We combine global technology standards with deep local expertise to deliver solutions that just work.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <FeatureItem 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Digital Transformation?</h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Join hundreds of African businesses growing faster with ADEERA's SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl" asChild>
                <Link to="/demo" className="flex items-center">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
                <Link to="/contact" className="flex items-center">
                  Talk to an Expert <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;