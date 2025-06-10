import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Users, Globe, ArrowRight, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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
    >
      <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 group border border-gray-200 hover:border-primary/20">
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
            className="mt-4 text-primary p-0 h-auto group-hover:underline"
            asChild
          >
            <Link to="/services">
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
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
      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
    >
      <div className="text-2xl flex-shrink-0">{emoji}</div>
      <div>
        <h3 className="font-semibold mb-2 text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

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

  const features = [
    {
      emoji: '🌍',
      title: 'African Focus',
      description: 'We understand the local market needs and infrastructure challenges',
    },
    {
      emoji: '💼',
      title: 'Partner-Driven',
      description: 'We are committed to long-term alliances with global tech leaders',
    },
    {
      emoji: '🔒',
      title: 'Secure & Scalable',
      description: 'Security-first architecture with growth in mind',
    },
    {
      emoji: '🚀',
      title: 'Future-Proof Strategy',
      description: 'Built for today\'s needs and tomorrow\'s demands',
    },
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
 <section className="relative py-20 md:py-12 overflow-hidden">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background/80 to-primary/5 z-0" />
  
  {/* Subtle grid pattern */}
  <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)]" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
      {/* Text Content */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, x: -20 }}
        animate={heroInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Empowering Africa's <span className="text-primary">Digital Future</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            ADEERA UNITECH delivers cutting-edge software solutions — from CRM to 
            cybersecurity and cloud computing — tailored for Africa's growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" asChild className="group">
              <Link to="/services" className="flex items-center">
                Explore Services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/partnerships" className="flex items-center">
                Partner With Us <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
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
            src='https://www.corporatevision-news.com/wp-content/uploads/2023/04/SaaS-Business.jpg'
            alt="Digital Africa"
            className="rounded-xl shadow-xl object-cover aspect-[16/10] w-full max-w-xl border border-border/50 dark:border-border/30"
          />
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-xl z-[-1]" />
          <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-primary/5 blur-xl z-[-1]" />
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* Services Preview */}
      <section className="py-16 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future-Ready Software Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We're building partnerships with global vendors to bring advanced technology to African businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Local Partner With Global Ambitions</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                We combine local expertise with global technology standards to deliver exceptional value.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  emoji={feature.emoji}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 md:mt-16 bg-background border rounded-xl p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                {[
                  "Localized support teams across major African markets",
                  "24/7 security monitoring for all deployed solutions",
                  "Regular technology updates and training",
                  "Transparent pricing with no hidden costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-background rounded-2xl p-8 md:p-12 shadow-lg border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join the growing number of African businesses embracing digital transformation with ADEERA UNITECH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link to="/contact" className="flex items-center">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo" className="flex items-center">
                  Request Demo
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