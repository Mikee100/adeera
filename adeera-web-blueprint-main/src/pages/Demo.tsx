import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Play, Check, Zap, Shield, Users, BarChart2, Cloud, Lock, Mail } from "lucide-react";

import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [videoPlaying, setVideoPlaying] = useState(false);
const [open, setOpen] = useState(false);

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: ""
  });

  const coreFeatures = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Get instant insights with our powerful dashboard that updates in real-time.",
      benefit: "Make data-driven decisions faster"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Invite unlimited team members with role-based access controls.",
      benefit: "Improve cross-team productivity"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Storage",
      description: "Secure, scalable storage with automatic backups and versioning.",
      benefit: "Never lose important data again"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption and 2FA.",
      benefit: "Sleep well knowing your data is safe"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      solution: "Automated inventory tracking and customer behavior analysis"
    },
    {
      industry: "Healthcare",
      solution: "HIPAA-compliant patient data management with audit trails"
    },
    {
      industry: "Education",
      solution: "Student performance tracking and personalized learning plans"
    },
    {
      industry: "Finance",
      solution: "Real-time financial reporting and forecasting tools"
    }
  ];

  const testimonials = [
    {
      quote: "Adeera reduced our reporting time by 80% and gave us insights we never knew we needed.",
      author: "Sarah K., CFO at TechCorp",
      stats: "3x ROI in first 6 months"
    },
    {
      quote: "The onboarding was seamless and our team adopted it faster than any other tool we've used.",
      author: "Michael T., Operations Director",
      stats: "90% team adoption in 2 weeks"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log("Form submitted:", formData);
  };

  // JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "ADEERA UNITECH Product Demo",
    "description": "Experience our enterprise-grade SaaS solutions with a personalized demo. See how our CRM, cybersecurity, and cloud services can transform your business.",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "organizer": {
      "@type": "Organization",
      "name": "ADEERA UNITECH",
      "url": "https://adeera.vercel.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01T00:00:00Z",
      "url": "https://adeera.vercel.app/demo"
    },
    "performer": {
      "@type": "Organization",
      "name": "ADEERA UNITECH",
      "url": "https://adeera.vercel.app"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "ADEERA Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Helmet>
        <title>Request a Demo | ADEERA UNITECH</title>
        <meta name="description" content="Experience our enterprise-grade SaaS solutions with a personalized demo. See how our CRM, cybersecurity, and cloud services can transform your business." />
        <meta property="og:title" content="Request a Demo | ADEERA UNITECH" />
        <meta property="og:description" content="Experience our enterprise-grade SaaS solutions with a personalized demo. See how our CRM, cybersecurity, and cloud services can transform your business." />
        <meta property="og:image" content="https://adeera.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Request a Demo | ADEERA UNITECH" />
        <meta name="twitter:description" content="Experience our enterprise-grade SaaS solutions with a personalized demo. See how our CRM, cybersecurity, and cloud services can transform your business." />
        <meta name="twitter:image" content="https://adeera.vercel.app/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
<>
  <Dialog open={open} onOpenChange={setOpen}>
   
    <DialogContent>
      <DialogTitle>Quick Tour</DialogTitle>
      <div className="space-y-3">
        <p>Welcome! Here's what you can do on Adeera:</p>
        <ul className="list-disc ml-5">
          <li>📊 View real-time analytics</li>
          <li>🔒 Manage your data securely</li>
          <li>🤝 Collaborate with your team</li>
          <li>⚡ Get instant support</li>
        </ul>
      </div>
    </DialogContent>
  </Dialog>
</>
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            No credit card required
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Experience the power of <span className="text-primary"></span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            See how our platform can streamline your workflows, provide actionable insights, and drive growth for your business.
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
      </section>

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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features Designed for Growth</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the tools that will help you work smarter, not harder.
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
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Your Industry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how businesses like yours are achieving remarkable results.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="secondary">
                <Mail className="w-4 h-4 mr-2" /> Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;