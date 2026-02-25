import { Link } from "react-router-dom";
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Play, Check, Zap, Users, BarChart2, Cloud, Lock, Mail } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [videoPlaying, setVideoPlaying] = useState(false);
const [open, setOpen] = useState(false);

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });

  const coreFeatures = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Point of Sale",
      description: "Fast checkout with cart, receipts, and sales history. Cash, M-Pesa, and credit.",
      benefit: "Ring up sales in seconds"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inventory & Reports",
      description: "Unified products, suppliers, and 11+ reports from stock levels to valuation.",
      benefit: "One place for stock and insights"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Dashboard & Analytics",
      description: "Revenue charts, trends, customer growth, and sales targets at a glance.",
      benefit: "See how your business is doing"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "AI Assistant",
      description: "Ask questions in plain language. Get answers and charts from your data.",
      benefit: "Insights without the spreadsheet"
    }
  ];

  const useCases = [
    {
      industry: "Retail & Shops",
      solution: "POS, inventory, and receipts. M-Pesa and cash at the till."
    },
    {
      industry: "Multi-Branch",
      solution: "One platform for all locations. Sales history and stock per branch."
    },
    {
      industry: "Growing Business",
      solution: "From Basic to Pro to Enterprise. Add users, branches, and reports as you scale."
    },
    {
      industry: "Reports & Insights",
      solution: "Dashboard, AI assistant, and 11+ inventory reports. No more guesswork."
    }
  ];

  const testimonials = [
    {
      quote: "One platform for our till, stock, and reports. M-Pesa and receipts in one place.",
      author: "Sarah K., Retail Manager",
      stats: "No more spreadsheets"
    },
    {
      quote: "The AI assistant and dashboard gave us visibility we never had. We see trends before they hurt.",
      author: "Michael T., Multi-branch Owner",
      stats: "Faster decisions"
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('https://api.adeeraunitech.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, requestType: 'demo', message: formData.message || `Demo request — ${formData.company || 'N/A'} (${formData.role || 'N/A'})` }),
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', company: '', role: '', message: '' } as typeof formData);
        setTimeout(() => { setOpen(false); setSubmitSuccess(false); }, 2000);
      } else {
        const err = await response.json().catch(() => ({}));
        setSubmitError((err as { message?: string }).message || 'Something went wrong. Please try again or email us.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection or email us at adeeraunitech@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Request a demo</DialogTitle>
          {submitSuccess ? (
            <div className="py-6 text-center text-green-600 dark:text-green-400">
              <Check className="h-12 w-12 mx-auto mb-2" />
              <p className="font-medium">Thank you! We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="demo-name">Name *</Label>
                <Input id="demo-name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="demo-email">Email *</Label>
                <Input id="demo-email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="demo-company">Company</Label>
                <Input id="demo-company" name="company" value={formData.company} onChange={handleInputChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="demo-role">Role</Label>
                <Input id="demo-role" name="role" value={formData.role} onChange={handleInputChange} placeholder="e.g. Owner, Manager" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="demo-message">Message (optional)</Label>
                <textarea id="demo-message" name="message" value={formData.message} onChange={handleInputChange} rows={3} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              {submitError && <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send request'}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <SEO 
        title="Request Demo | See the ADEERA Platform | Free Trial"
        description="See the ADEERA Platform in action: POS, inventory, sales, reports, M-Pesa, and AI. Book a demo or start your free trial."
        keywords="ADEERA demo, POS demo, platform trial, free trial, book demo, Kenya"
        url="https://www.adeeraunitech.com/demo"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SaaS Demo Request",
          "description": "Free demo and consultation for SaaS solutions",
          "provider": {
            "@type": "Organization",
            "name": "ADEERA UNITECH LIMITED",
            "url": "https://www.adeeraunitech.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KES",
            "description": "Free consultation and demo"
          },
          "about": {
            "@type": "SoftwareApplication",
            "name": "ADEERA Platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "featureList": coreFeatures.map(feature => feature.title).join(", ")
          },
          "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "author": {
              "@type": "Person",
              "name": testimonial.author.split(",")[0]
            },
            "reviewBody": testimonial.quote
          }))
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            No credit card required
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            See the <span className="text-primary">ADEERA Platform</span> in action
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            POS, inventory, sales, reports, M-Pesa & AI — one platform. Book a demo or start your free trial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Play className="w-4 h-4 mr-2" /> Live Demo
            </Button>
            <Button size="lg" variant="outline"  onClick={() => setOpen(true)}>
              <Zap className="w-4 h-4 mr-2" /> Quick Tour
            </Button>
          </div>
          
          
          {/* Interactive Demo Preview */}
          <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            {!videoPlaying ? (
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <button 
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-all">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md text-sm font-medium">
                  Interactive Preview
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-black">
                {/* Video player would go here */}
                <div className="h-full flex items-center justify-center text-white">
                  [Product Demo Video]
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Demo Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex overflow-x-auto py-4">
            {[
              { id: "features", label: "Key Features" },
              { id: "usecases", label: "Use Cases" },
              { id: "testimonials", label: "Success Stories" },
              { id: "pricing", label: "Pricing" },
              { id: "integrations", label: "Integrations" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 whitespace-nowrap font-medium ${activeTab === tab.id ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-gray-700"}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Dynamic Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Section */}
        {activeTab === "features" && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get with the Platform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                POS, inventory, reports, M-Pesa, and an AI assistant — all in one place.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <p className="text-sm font-medium text-primary flex items-center">
                    <Check className="w-4 h-4 mr-1" /> {feature.benefit}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to see it in action?</h3>
                  <p className="text-gray-700 mb-4">
                    Our product specialists can walk you through a personalized demo tailored to your business needs.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setOpen(true)}>
                    Schedule a Custom Demo
                  </Button>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">What's included:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-1 pl-1">
                          <li>30-minute 1-on-1 session</li>
                          <li>Answers to your specific questions</li>
                          <li>Custom workflow demonstration</li>
                          <li>Free trial setup assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Use Cases Section */}
        {activeTab === "usecases" && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Your Business</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Retail, multi-branch, or growing — the platform scales with you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{useCase.industry}</h3>
                  <p className="text-gray-600 mb-4">{useCase.solution}</p>
                  <Button variant="outline" size="sm">
                    View Case Study
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Don't see your specific use case?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Our platform is highly customizable. Let's discuss how we can tailor the solution to your unique requirements.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Our Solutions Team
              </Button>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {activeTab === "testimonials" && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of businesses accelerating their growth with our platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-900 italic mb-2">"{testimonial.quote}"</p>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-3 py-2 rounded-md inline-block">
                    <span className="text-sm font-medium text-primary">{testimonial.stats}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">
                View More Customer Stories
              </Button>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-24 bg-primary rounded-2xl text-white p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to run your business from one platform?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Start your free trial or book a demo. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact"><Mail className="w-4 h-4 mr-2" /> Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;