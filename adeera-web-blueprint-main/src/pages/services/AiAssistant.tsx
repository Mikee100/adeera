import SEO from '@/components/SEO';
import { useState } from "react";
import { CheckCircle, Cpu, MessageSquare, Bot, LineChart, Zap, Shield, ChevronDown, ChevronUp, BrainCircuit, CalendarCheck, BarChart4, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "WhatsApp Booking Automation",
    desc: "Let your AI assistant handle customer inquiries and bookings 24/7 directly on WhatsApp.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />,
    title: "Predictive Analytics",
    desc: "Anticipate customer demand and optimize your inventory with AI-driven forecasting models.",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-primary" />,
    title: "Smart Re-Scheduling",
    desc: "Automatically handle booking changes and cancellations with zero manual intervention.",
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-primary" />,
    title: "Daily Insight Reports",
    desc: "Get summarized reports on your sales performance and customer trends delivered to your inbox.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Customer Sentiment Analysis",
    desc: "Understand how your customers feel about your brand with natural language processing.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "Data-Driven Decisions",
    desc: "Transform raw data into actionable growth strategies with our localized AI models.",
  },
];

const stats = [
  { label: "Bookings Handled", value: "10k+" },
  { label: "Response Time", value: "Instant" },
  { label: "Customer Satisfaction", value: "4.9/5" },
  { label: "Efficiency Gain", value: "40%+" },
];

const useCases = [
  {
    title: "Clinics & Studios",
    desc: "Automate patient bookings and follow-ups while providing instant answers to FAQs.",
  },
  {
    title: "Professional Services",
    desc: "Let AI filter leads and schedule consultations based on your real-time availability.",
  },
  {
    title: "Retail Outlets",
    desc: "Use AI to analyze purchasing patterns and trigger automated loyalty campaigns.",
  },
  {
    title: "Logistics Companies",
    desc: "Automate tracking inquiries and fleet routing optimizations for cost efficiency.",
  },
];

const faqs = [
  {
    q: "How does the WhatsApp bot work?",
    a: "Our bot integrates directly with your WhatsApp Business API. It can answer common questions, check your booking system's availability, and process requests instantly.",
  },
  {
    q: "Is my business data secure with AI?",
    a: "Yes. Your data remains yours alone. Our AI models are private, and we use enterprise-level encryption to ensure no sensitive information is ever shared.",
  },
  {
    q: "What kind of insights can I get?",
    a: "You'll get deep insights into peak hours, popular services, customer return rates, and predictive models for next month's sales.",
  },
  {
    q: "Do I need technical skills to use it?",
    a: "Not at all. The Adeera AI Assistant is designed to be plug-and-play. All configurations are handled via a simple dashboard, and the AI takes care of the rest.",
  },
];

const AiPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Business Assistant | WhatsApp Automation & Data Insights | ADEERA"
        description="Scale your impact with Adeera's AI Business Assistant. Automate bookings on WhatsApp and get data-driven insights to grow your African business."
        keywords="business AI Kenya, WhatsApp bot Nairobi, automated bookings Africa, predictive analytics tech, AI assistant for SMEs"
        url="https://www.adeeraunitech.com/services/ai"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-indigo-600 bg-clip-text text-transparent">
                Artificial Intelligence, <span className="text-indigo-600 text-glow">Real Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Unlock the power of automated intelligence. The Adeera AI Assistant is your 24/7 digital partner, handling customer interactions and providing deep data-driven insights while you focus on scaling your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-8 shadow-xl bg-indigo-600 hover:bg-indigo-700 font-bold" asChild>
                  <Link to="/contact">Explore AI Solutions</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Demo Reports
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-500"></div>
              <img 
                src="/services-ai.png" 
                alt="Adeera AI Assistant Intelligence Dashboard"
                className="relative rounded-3xl shadow-2xl border border-indigo-500/10 w-full object-cover transform transition-transform duration-700 hover:rotate-1 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-indigo-500/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-500/5 shadow-sm">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Intelligent Automation</h2>
            <p className="text-lg text-muted-foreground">Stop doing repetitive tasks and start using your data to predict the future of your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 container mx-auto px-4 text-center">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Embrace the Future of Business</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Take the tedious work off your plate and let Adeera's AI Assistant handle the details. Build a more response, data-driven company today.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 shadow-2xl font-bold text-lg" asChild>
            <Link to="/contact">Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AiPage;
