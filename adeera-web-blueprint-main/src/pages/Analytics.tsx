import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Bot,
  PieChart,
  Target,
  Users,
  ArrowRight,
  Check,
  LayoutDashboard,
} from "lucide-react";
import SEO from "@/components/SEO";

const dashboardItems = [
  "Revenue and sales charts",
  "Sales trends and monthly views",
  "Customer growth and segmentation",
  "Sales targets and progress",
  "Priority alerts and insights",
];

const aiItems = [
  "In-app chat assistant",
  "Ask questions in plain language",
  "Generate charts (Line, Bar, Pie, Doughnut)",
  "Conversation history",
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO
        title="Analytics & AI | Dashboard, Reports & AI Assistant | ADEERA Platform"
        description="ADEERA analytics: dashboard with revenue, trends, customer growth, and sales targets. Plus an AI assistant that answers questions and generates charts from your data."
        keywords="business analytics, dashboard, sales reports, AI assistant, chart generation, business intelligence, ADEERA"
        url="https://www.adeeraunitech.com/analytics"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ADEERA Analytics & AI",
          "applicationCategory": "BusinessApplication",
          "description": "Dashboard, reports, and AI assistant for business insights",
          "featureList": "Dashboard, Revenue charts, Sales trends, Customer segmentation, Sales targets, AI Assistant, Chart generation",
        }}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Analytics & AI
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Insights and an AI that gets it
            </h1>
            <p className="text-lg text-muted-foreground">
              Your dashboard shows revenue, trends, customer growth, and sales targets at a glance. 
              Need more? Ask the AI assistant — get answers and charts from your data in seconds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-muted/20 bg-card p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Dashboard & reports</h2>
              <ul className="space-y-2 text-muted-foreground">
                {dashboardItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-muted/20 bg-card p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">AI Assistant</h2>
              <ul className="space-y-2 text-muted-foreground">
                {aiItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/demo" className="flex items-center gap-2">
                See it in action <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">All features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
