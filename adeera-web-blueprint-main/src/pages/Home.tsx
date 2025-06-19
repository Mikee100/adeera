import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cloud,
  Users,
  Globe,
  ArrowRight,
  ChevronRight,
  Check,
  Zap,
  BarChart,
  Lock,
  Server,
  Play,
  Award,
  Rocket,
  Globe2,
  ShieldCheck,
  BarChart2,
  Star,
  Quote,
  Mail,
  Phone,
  MapPin,
  Clock,
  TrendingUp,
  Database,
  Cpu,
  Wifi,
  Smartphone,
  Monitor,
  Headphones,
  MessageCircle,
  Calendar,
  Target,
  Users2,
  Building2,
  Shield,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "@/components/SEO";
import { useEffect, useState } from "react";

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
        transition: {
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <Card className="h-full text-center hover:shadow-xl transition-all duration-500 group border border-muted/20 bg-gradient-to-b from-background to-muted/5 hover:to-primary/5">
        <CardHeader className="pb-3">
          <motion.div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"
          >
            <service.icon className="h-6 w-6 text-primary" />
          </motion.div>
          <CardTitle className="mt-4 text-lg font-semibold text-foreground">
            {service.title}
          </CardTitle>
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
              Learn more{" "}
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
        transition: { type: "spring", stiffness: 400 },
      }}
      className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl bg-background hover:bg-muted/10 transition-colors duration-300 border border-muted/20 shadow-sm"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold mb-2 text-base sm:text-lg text-foreground">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
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
        transition: { type: "spring", stiffness: 400 },
      }}
      className="bg-background p-6 rounded-xl border border-muted/20 shadow-sm text-center hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-2 bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent"></h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 400 },
      }}
      className="bg-background p-6 rounded-xl border border-muted/20 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.position}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TechStackItem = ({ icon: Icon, name, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400 },
      }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors duration-300"
    >
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">{name}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const CaseStudyCard = ({ caseStudy, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-background rounded-xl border border-muted/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <caseStudy.icon className="h-16 w-16 text-primary" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
            {caseStudy.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {caseStudy.duration}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {caseStudy.title}
        </h3>
        <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
        <div className="space-y-2">
          {caseStudy.results.map((result, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm text-muted-foreground">{result}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 border border-muted/20"
    >
      <div className="text-center mb-6">
        <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">Stay Updated</h3>
        <p className="text-sm sm:text-base text-muted-foreground">Get the latest insights on digital transformation and SaaS trends in Africa</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-muted/20 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
          required
        />
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
          Subscribe
        </Button>
      </form>
    </motion.div>
  );
};

const Home = () => {
  const services = [
    {
      icon: Users,
      title: "CRM Integration",
      description:
        "Seamless Salesforce, HubSpot, and Zoho CRM deployments tailored for African markets.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description:
        "Comprehensive protection with endpoint security and threat intelligence.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "AWS, Azure, and Google Cloud migrations with local support.",
    },
    {
      icon: Globe2,
      title: "SaaS Marketplace",
      description:
        "Curated SaaS products for HR, accounting, and e-commerce needs.",
    },
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "African Market Expertise",
      description:
        "Deep understanding of local business challenges and digital transformation needs",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Rapid Deployment",
      description:
        "Quick implementation with minimal disruption to your operations",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enterprise Security",
      description:
        "Bank-grade security protocols to protect your data and systems",
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Scalable Solutions",
      description:
        "Grow with confidence as our solutions scale with your business",
    },
  ];

  const stats = [
    {
      value: 100,
      suffix: "+",
      label: "Businesses Empowered",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: 24,
      suffix: "/7",
      label: "Support Availability",
      icon: <Server className="h-6 w-6" />,
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Uptime Guarantee",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      value: 5,
      suffix: "x",
      label: "Faster Deployment",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "ADEERA transformed our entire operation. Their CRM integration saved us 40% in operational costs within the first quarter.",
      name: "Sarah Mwangi",
      position: "CEO, TechStart Kenya",
    },
    {
      quote:
        "The cybersecurity solutions they implemented gave us peace of mind. Our data has never been more secure.",
      name: "David Ochieng",
      position: "CTO, FinTech Solutions",
    },
    {
      quote:
        "Local support with global standards. ADEERA understands our unique challenges and delivers solutions that work.",
      name: "Grace Akinyi",
      position: "Operations Director, Retail Chain",
    },
  ];

  const techStack = [
    {
      icon: Cloud,
      name: "Cloud Infrastructure",
      description: "AWS, Azure, Google Cloud with local edge computing",
    },
    {
      icon: Shield,
      name: "Security & Compliance",
      description: "SOC 2, GDPR, local data protection standards",
    },
    {
      icon: Database,
      name: "Data Management",
      description: "Real-time analytics and business intelligence",
    },
    {
      icon: Cpu,
      name: "AI & Machine Learning",
      description: "Predictive analytics and automation",
    },
    {
      icon: Wifi,
      name: "API Integration",
      description: "Seamless third-party system connections",
    },
    {
      icon: Smartphone,
      name: "Mobile Solutions",
      description: "Cross-platform mobile applications",
    },
  ];

  const caseStudies = [
    {
      icon: Building2,
      category: "Manufacturing",
      duration: "3 months",
      title: "Digital Transformation for Kenya's Largest Manufacturer",
      description:
        "Implemented comprehensive ERP and CRM systems across 15 locations.",
      results: [
        "45% increase in operational efficiency",
        "30% reduction in inventory costs",
        "Real-time visibility across all facilities",
      ],
    },
    {
      icon: Globe2,
      category: "E-commerce",
      duration: "2 months",
      title: "Multi-Country E-commerce Platform",
      description:
        "Built scalable e-commerce solution serving 5 African countries.",
      results: [
        "200% increase in online sales",
        "99.9% uptime across all regions",
        "Integrated payment systems for local markets",
      ],
    },
    {
      icon: Shield,
      category: "Financial Services",
      duration: "4 months",
      title: "Bank-Grade Security Implementation",
      description: "Enhanced cybersecurity infrastructure for regional bank.",
      results: [
        "Zero security breaches in 18 months",
        "Compliance with all regulatory requirements",
        "Advanced threat detection and response",
      ],
    },
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO 
        title="ADEERA UNITECH | Enterprise SaaS Solutions for African Businesses"
        description="Transform your business with ADEERA's enterprise-grade SaaS solutions — CRM integration, cybersecurity, cloud solutions, and SaaS marketplace. Optimized for Africa's unique business landscape. ISO 27001 certified, 24/7 support."
        keywords="SaaS, CRM, cybersecurity, cloud solutions, African business, enterprise software, digital transformation, Salesforce, HubSpot, AWS, Azure, Kenya, Nairobi, business software, cloud migration, data security, API integration, mobile solutions"
        url="https://www.adeeraunitech.com/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ADEERA UNITECH",
          "url": "https://www.adeeraunitech.com",
          "description": "Enterprise SaaS solutions for African businesses",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.adeeraunitech.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ADEERA UNITECH LIMITED",
            "url": "https://www.adeeraunitech.com",
            "logo": "https://www.adeeraunitech.com/logo.png",
            "description": "Enterprise SaaS solutions for African businesses",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "areaServed": "KE"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Enterprise SaaS Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CRM Integration",
                    "description": "Seamless Salesforce, HubSpot, and Zoho CRM deployments tailored for African markets"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity",
                    "description": "Comprehensive protection with endpoint security and threat intelligence"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Solutions",
                    "description": "AWS, Azure, and Google Cloud migrations with local support"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SaaS Marketplace",
                    "description": "Curated SaaS products for HR, accounting, and e-commerce needs"
                  }
                }
              ]
            }
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-26 overflow-hidden bg-gradient-to-br from-background to-primary/5">
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
                  Transform Your Business With{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Cloud Power
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                >
                  ADEERA UNITECH delivers enterprise-grade SaaS solutions — from
                  CRM to cybersecurity — optimized for Africa's unique business
                  landscape.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <Button size="lg" asChild className="group">
                    <Link to="/demo" className="flex items-center">
                      Get Free Demo{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group">
                    <Link to="/pricing" className="flex items-center">
                      View Pricing{" "}
                      <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-4"
                >
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      ISO 27001 Certified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      24/7 Support
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      99.9% Uptime
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-background p-3 sm:p-4 rounded-xl shadow-lg border border-muted/20 max-w-[200px] sm:max-w-none"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                      <BarChart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm sm:text-base">30% Growth</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Average client impact
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All other sections inside a single container for consistent layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
       <section className="relative py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
  {/* Decorative background shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
  >
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
      <Award className="h-4 w-4 mr-2" />
      Our Solutions
    </span>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Powerful SaaS for Modern Businesses
    </h2>
    <p className="text-muted-foreground mx-auto text-base sm:text-lg">
      We partner with global leaders to bring world-class software to African enterprises, with local support and customization.
    </p>
  </motion.div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-primary/10 p-6 flex flex-col items-center text-center transition-all duration-300 group"
        >
          <div className="mb-4">
            {/* Replace with your icon or image */}
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary text-3xl group-hover:bg-primary/20 transition">
              <service.icon className="w-8 h-8" />
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-muted-foreground text-sm">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Stats Section */}
        <section className="py-16 md:py-28">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Driving Digital Transformation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
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
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <Cpu className="h-4 w-4 mr-2" />
              Technology Stack
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Built on World-Class Technology</h2>
            <p className="text-muted-foreground mx-auto text-base sm:text-lg">
              We leverage cutting-edge technologies to deliver robust, scalable, and secure solutions for African businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">The ADEERA Advantage</h2>
              <p className="text-muted-foreground mb-8 text-base sm:text-lg">
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
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <Target className="h-4 w-4 mr-2" />
              Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-muted-foreground mx-auto text-base sm:text-lg">
              Discover how African businesses are transforming their operations
              with ADEERA's solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <MessageCircle className="h-4 w-4 mr-2" />
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mx-auto text-lg">
              Hear from business leaders across Africa who have transformed
              their operations with ADEERA.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup />
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <Phone className="h-4 w-4 mr-2" />
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mx-auto text-lg">
              Our team is here to help you navigate your digital transformation
              journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 rounded-xl bg-background border border-muted/20"
            >
              <Phone className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">+254 700 000 000</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Mon-Fri 8AM-6PM EAT
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 rounded-xl bg-background border border-muted/20"
            >
              <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">hello@adeera.co.ke</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We'll respond within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 rounded-xl bg-background border border-muted/20 sm:col-span-2 lg:col-span-1"
            >
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">Nairobi, Kenya</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Schedule a meeting
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
       <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-700">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto text-center text-white px-4"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight drop-shadow">
      Ready to Accelerate Your Digital Transformation?
    </h2>
    <p className="text-lg sm:text-xl mb-8 text-white/90 font-medium">
      Join hundreds of African businesses growing faster with <span className="font-bold text-yellow-300">ADEERA's SaaS solutions</span>.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="group bg-yellow-400 text-primary font-semibold hover:bg-yellow-300 shadow-lg hover:shadow-xl text-base px-8"
        asChild
      >
        <Link to="/demo" className="flex items-center">
          Get Started Free
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      <Button
  size="lg"
  variant="outline"
  className="group border-primary text-primary hover:bg-primary/10 text-base px-8"
  asChild
>
  <Link to="/contact" className="flex items-center">
    Talk to an Expert
    <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</Button>
    </div>
  </motion.div>
</section>
      </div>
    </div>
  );
};

export default Home;
