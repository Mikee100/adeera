import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Globe, MapPin, Send, Clock, User, Building } from 'lucide-react';
import SEO from '@/components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://api.adeeraunitech.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      const err = await response.json();
      console.error('Submission failed:', err);
    }
  } catch (error) {
    console.error('Submission error:', error);
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
   { icon: Mail, title: 'Email', value: 'info@adeeraunitech.com', href: 'https://mail.google.com/mail/?view=cm&to=info@adeeraunitech.com' },
    { icon: Phone, title: 'Phone', value: '+254-700-000000', href: 'tel:+254700000000' },
    { icon: Globe, title: 'Website', value: 'adeeraunitech.com', href: 'https://adeeraunitech.com' },
    { icon: MapPin, title: 'Location', value: 'Nairobi, Kenya', href: 'https://maps.google.com/?q=Nairobi' }
  ];

  const businessHours = [
    { days: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EAT' },
    { days: 'Saturday', hours: '9:00 AM - 2:00 PM EAT' },
    { days: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen py-16 md:py-14 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <SEO 
        title="Contact ADEERA UNITECH | Get Expert SaaS Consultation | Kenya"
        description="Contact ADEERA UNITECH for expert SaaS consultation, CRM integration, cybersecurity, and cloud solutions. Get in touch with our team in Nairobi, Kenya."
        keywords="contact ADEERA, SaaS consultation Kenya, tech support Kenya, business consultation Nairobi, enterprise software support, Kenya tech company contact"
        url="https://www.adeeraunitech.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact ADEERA UNITECH",
          "description": "Get expert SaaS consultation and support",
          "url": "https://www.adeeraunitech.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "ADEERA UNITECH LIMITED",
            "url": "https://www.adeeraunitech.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "areaServed": "KE",
              "availableLanguage": ["English", "Swahili"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "telephone": "+254-700-000000",
              "email": "info@adeeraunitech.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            }
          }
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Let's Build Something Great Together
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach out to discuss how we can help transform your business with our tailored solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 rounded-full bg-primary" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors border border-transparent hover:border-primary/20"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <div className="p-6 bg-muted/30 dark:bg-gray-800 border-b flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <div className="p-6 space-y-4">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <span className="text-muted-foreground">{item.days}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-6 bg-muted/30 dark:bg-gray-800 border-b">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="w-2 h-8 rounded-full bg-primary" />
                Send us a Message
              </h2>
              <p className="text-muted-foreground mt-2">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <Button onClick={() => setSubmitSuccess(false)}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-1">
                        <User className="h-4 w-4" /> Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-1">
                        <Mail className="h-4 w-4" /> Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-1">
                      <Building className="h-4 w-4" /> Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full group" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;