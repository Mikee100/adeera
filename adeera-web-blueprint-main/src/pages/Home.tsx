import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Users, Globe, ArrowRight, ChevronRight, Check, Zap, BarChart, Lock, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from "react-helmet-async";

const AnimatedCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full text-center hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-primary/30 bg-gradient-to-b from-background to-muted/10">
        <CardHeader className="pb-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <service.icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
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
            <Link to="/services">
              Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeatureItem = ({ emoji, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-start space-x-4 p-6 rounded-xl bg-background hover:bg-muted/50 transition-colors duration-200 border border-muted/30 shadow-sm"
    >
      <div className="text-3xl flex-shrink-0">{emoji}</div>
      <div>
        <h3 className="font-semibold mb-2 text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const StatCard = ({ value, label, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-background p-6 rounded-xl border border-muted/30 shadow-sm text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
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
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive protection with endpoint security and threat intelligence.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and Google Cloud migrations with local support.',
    },
    {
      icon: Globe,
      title: 'SaaS Marketplace',
      description: 'Curated SaaS products for HR, accounting, and e-commerce needs.',
    },
  ];

  const features = [
    {
      emoji: '🌍',
      title: 'African Market Expertise',
      description: 'Deep understanding of local business challenges and digital transformation needs',
    },
    {
      emoji: '⚡',
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your operations',
    },
    {
      emoji: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols to protect your data and systems',
    },
    {
      emoji: '📈',
      title: 'Scalable Solutions',
      description: 'Grow with confidence as our solutions scale with your business',
    },
  ];

  const stats = [
    {
      value: "100+",
      label: "Satisfied Clients",
      icon: <Users className="h-6 w-6" />
    },
    {
      value: "24/7",
      label: "Support Availability",
      icon: <Server className="h-6 w-6" />
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      icon: <BarChart className="h-6 w-6" />
    },
    {
      value: "5x",
      label: "Faster Deployment",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Empowering Africa's Digital Future | Adeera</title>
        <meta name="description" content="ADEERA UNITECH delivers cutting-edge SaaS solutions tailored for Africa's growing businesses." />
        <meta property="og:title" content="Empowering Africa's Digital Future | Adeera" />
        <meta property="og:description" content="ADEERA UNITECH delivers cutting-edge SaaS solutions tailored for Africa's growing businesses." />
        <meta property="og:image" content="https://www.corporatevision-news.com/wp-content/uploads/2023/04/SaaS-Business.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adeera" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-8 overflow-hidden bg-gradient-to-br from-background to-primary/5">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  SaaS Solutions for Africa
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transform Your Business With <span className="text-primary">Cloud Power</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  ADEERA UNITECH delivers enterprise-grade SaaS solutions — from CRM to 
                  cybersecurity — optimized for Africa's unique business landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
                </div>
                
                {/* Trust badges */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i+20}.jpg`}
                        alt="User"
                        className="h-10 w-10 rounded-full border-2 border-background"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Trusted by 100+ businesses across Africa</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span>5.0 (200+ reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Africa"
                  className="rounded-2xl shadow-2xl object-cover aspect-[16/10] w-full max-w-xl border border-border/50 dark:border-border/30"
                />
                {/* Floating card element */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg border border-muted/30"
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

      {/* Logo Cloud */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Trusted by innovative companies across Africa
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MTN_Logo.svg/2560px-MTN_Logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Airtel_Africa_Logo.svg/1200px-Airtel_Africa_Logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center"
                >
                  <img 
                    src={logo} 
                    alt="Partner logo" 
                    className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful SaaS for Modern Businesses</h2>
            <p className="text-muted-foreground mx-auto text-lg">
              We partner with global leaders to bring world-class software to African enterprises, with local support and customization.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

  {/* Enhanced Stats Section */}
<section className="relative py-16 md:py-28 overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-20 -translate-y-1/2" />
    <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-20" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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

    {/* Stats grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="h-full bg-background/80 backdrop-blur-sm border border-muted/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              {stat.icon}
            </div>
            <div className="text-center">
              <motion.p 
                className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Animated progress bar at bottom */}
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-video border border-muted/30"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
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
                    emoji={feature.emoji}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from businesses that have transformed with our solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ADEERA's CRM implementation revolutionized our customer management. Our sales team is now 40% more productive.",
                author: "Sarah Johnson",
                role: "CEO, Retail Chain",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "The cybersecurity solution protected us from a major attack that could have cost us millions. Worth every penny.",
                author: "David Okafor",
                role: "CTO, Fintech Startup",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "Their cloud migration service was seamless. We cut our IT costs by 30% while improving performance.",
                author: "Amina Diallo",
                role: "Operations Director, Logistics",
                avatar: "https://randomuser.me/api/portraits/women/63.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl border border-muted/30 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Digital Transformation?</h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Join hundreds of African businesses growing faster with ADEERA's SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/demo" className="flex items-center">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/contact" className="flex items-center">
                  Talk to an Expert
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