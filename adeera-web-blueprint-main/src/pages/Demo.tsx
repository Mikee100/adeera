import { Link } from "react-router-dom";
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Play, Check, ShoppingCart, Package, LayoutDashboard, Bot } from "lucide-react";

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
      icon: ShoppingCart,
      title: "Point of Sale",
      description: "Fast checkout with cart, receipts, and sales history. Cash, M-Pesa, and credit.",
    },
    {
      icon: Package,
      title: "Inventory & Reports",
      description: "Unified products, suppliers, and 11+ reports from stock levels to valuation.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard & Analytics",
      description: "Revenue charts, trends, customer growth, and sales targets at a glance.",
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Ask questions in plain language. Get answers and charts from your data.",
    }
  ];

  const useCases = [
    { industry: "Retail & Shops", solution: "POS, inventory, and receipts. M-Pesa and cash at the till." },
    { industry: "Multi-Branch", solution: "One platform for all locations. Sales history and stock per branch." },
    { industry: "Growing Business", solution: "From Basic to Pro to Enterprise. Add users, branches, and reports as you scale." },
    { industry: "Reports & Insights", solution: "Dashboard, AI assistant, and 11+ inventory reports. No more guesswork." },
  ];

  const productVideos = [
    { title: "Retail till — making a sale", src: "/videos/adeera-pos-general/making-a-sale.mp4", poster: "/videos/adeera-pos-general/making-a-sale-poster.png" },
    { title: "Restaurant till — table service", src: "/videos/adeera-pos-restaurant/table-service-flow.mp4", poster: "/videos/adeera-pos-restaurant/table-service-flow-poster.png" },
    { title: "Dashboard setup tour", src: "/videos/adeera/setup-tour.mp4", poster: "/videos/adeera/setup-tour-poster.png" },
  ];

  const tabs = [
    { id: "features", label: "Key features" },
    { id: "usecases", label: "Use cases" },
    { id: "watch", label: "Watch it live" },
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
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Request a demo</DialogTitle>
          {submitSuccess ? (
            <div className="py-6 text-center text-primary">
              <Check className="h-10 w-10 mx-auto mb-2" />
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
              {submitError && <p className="text-sm text-destructive">{submitError}</p>}
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
          "provider": { "@type": "Organization", "name": "ADEERA UNITECH LIMITED", "url": "https://www.adeeraunitech.com" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KES", "description": "Free consultation and demo" },
          "about": {
            "@type": "SoftwareApplication",
            "name": "ADEERA Platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "featureList": coreFeatures.map(feature => feature.title).join(", ")
          }
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              See the ADEERA Platform in action
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              POS, inventory, sales, reports, M-Pesa & AI — one platform. Book a demo or watch it live.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" onClick={() => setVideoPlaying(true)}>
                <Play className="w-4 h-4 mr-2" /> Watch demo
              </Button>
              <Button size="lg" variant="outline" onClick={() => setOpen(true)}>
                Request a demo
              </Button>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto overflow-hidden rounded-xl border border-border shadow-sm">
            {!videoPlaying ? (
              <div
                className="relative aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${productVideos[0].poster})` }}
              >
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                  aria-label="Play product video"
                >
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary-foreground" />
                  </div>
                </button>
                <div className="absolute bottom-3 left-3 bg-background/90 px-3 py-1 rounded-md text-sm font-medium text-foreground">
                  {productVideos[0].title}
                </div>
              </div>
            ) : (
              <video controls autoPlay className="aspect-video w-full bg-black">
                <source src={productVideos[0].src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 whitespace-nowrap text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground"}`}
              >
                {tab.label}
              </button>
            ))}
            <Link to="/pricing" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link to="/integrations" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
              Integrations
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "features" && (
          <section>
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-semibold text-foreground">What you get with the platform</h2>
              <p className="mt-3 text-muted-foreground">
                POS, inventory, reports, M-Pesa, and an AI assistant — all in one place.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-16">
              {coreFeatures.map((feature) => (
                <div key={feature.title}>
                  <feature.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-10 flex flex-col md:flex-row items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ready to see it in action?</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  A 30-minute session, answers to your specific questions, and a custom workflow demonstration.
                </p>
              </div>
              <Button onClick={() => setOpen(true)}>Schedule a custom demo</Button>
            </div>
          </section>
        )}

        {activeTab === "usecases" && (
          <section>
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Built for your business</h2>
              <p className="mt-3 text-muted-foreground">
                Retail, multi-branch, or growing — the platform scales with you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-16">
              {useCases.map((useCase) => (
                <div key={useCase.industry}>
                  <h3 className="text-sm font-semibold text-foreground">{useCase.industry}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{useCase.solution}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-10 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Don't see your specific use case?</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                Tell us about your business and we'll walk you through how the platform fits.
              </p>
              <Button onClick={() => setOpen(true)}>Contact our solutions team</Button>
            </div>
          </section>
        )}

        {activeTab === "watch" && (
          <section>
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Watch it live</h2>
              <p className="mt-3 text-muted-foreground">
                Real screen recordings of the retail till, the restaurant till, and the dashboard —
                no actors, no staged footage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {productVideos.map((v) => (
                <div key={v.src} className="rounded-xl border border-border overflow-hidden">
                  <video controls poster={v.poster} className="aspect-video w-full bg-black">
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <p className="p-3 text-sm font-medium text-foreground">{v.title}</p>
                </div>
              ))}
            </div>

            <div className="text-center flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link to="/pos">See the POS in depth</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/platform">See the dashboard in depth</Link>
              </Button>
            </div>
          </section>
        )}
      </div>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Ready to run your business from one platform?
          </h2>
          <p className="mt-3 text-muted-foreground">No credit card required</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={() => setOpen(true)}>Request a demo</Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
