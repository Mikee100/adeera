import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Globe, MapPin, Send, Clock, Check } from 'lucide-react';
import SEO from '@/components/SEO';

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'adeeraunitech@gmail.com', href: 'mailto:adeeraunitech@gmail.com' },
  { icon: Phone, title: 'Phone', value: '+254 700 000000', href: 'tel:+254700000000' },
  { icon: Globe, title: 'Website', value: 'adeeraunitech.com', href: 'https://www.adeeraunitech.com/' },
  { icon: MapPin, title: 'Location', value: 'Nairobi, Kenya', href: 'https://maps.google.com/?q=Nairobi' }
];

const businessHours = [
  { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM EAT' },
  { days: 'Saturday', hours: '9:00 AM – 2:00 PM EAT' },
  { days: 'Sunday', hours: 'Closed' }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  return (
    <div>
      <SEO
        title="Contact ADEERA UNITECH | POS & Business OS for African Retail"
        description="Get in touch with ADEERA UNITECH — questions about the POS, pricing, or partnerships. Based in Nairobi, Kenya."
        keywords="contact ADEERA, POS support Kenya, business software support Nairobi"
        url="https://www.adeeraunitech.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact ADEERA UNITECH",
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
              "telephone": "+254-700-000000",
              "email": "adeeraunitech@gmail.com"
            },
            "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" }
          }
        }}
      />

      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Questions about the POS, pricing, or partnerships — reach out and we'll get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-sm font-medium text-foreground mb-4">Contact information</h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm"
                    >
                      <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Business hours
                </h2>
                <div className="space-y-2">
                  {businessHours.map((item) => (
                    <div key={item.days} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.days}</span>
                      <span className="text-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              {submitSuccess ? (
                <div className="text-center py-12">
                  <Check className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Message sent</h3>
                  <p className="text-sm text-muted-foreground mb-6">We'll get back to you soon.</p>
                  <Button variant="outline" onClick={() => setSubmitSuccess(false)}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tell us about your business or inquiry..."
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (
                      <span className="flex items-center gap-2">Send message <Send className="h-4 w-4" /></span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
