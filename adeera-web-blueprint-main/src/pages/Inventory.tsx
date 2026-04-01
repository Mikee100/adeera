import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Package,
  Layers,
  Users,
  BarChart3,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Check,
  FileText,
} from "lucide-react";
import SEO from "@/components/SEO";

const reports = [
  "Product Sales",
  "Inventory Levels",
  "Low Stock Alerts",
  "Product Performance",
  "Inventory Turnover",
  "Supplier Performance",
  "Product Category Analysis",
  "Inventory Movement",
  "Inventory Aging",
  "Stockout & Lost Sales",
  "Inventory Valuation",
];

const Inventory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO
        title="Inventory & Products | Stock, Suppliers & Reports | ADEERA Platform"
        description="Unified product and inventory management: products, variants, suppliers, stock levels, and 11+ reports from product sales to inventory valuation. One place for your stock."
        keywords="inventory management, product management, stock levels, suppliers, inventory reports, low stock, valuation, ADEERA"
        url="https://www.adeeraunitech.com/inventory"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ADEERA Inventory",
          "applicationCategory": "BusinessApplication",
          "description": "Unified products, suppliers, and inventory reports",
          "featureList": reports.join(", "),
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
              Inventory & Products
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              One place for products and stock
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage products, variants, suppliers, and stock levels in a single system. 
              Get the reports you need — from product sales to inventory valuation and low-stock alerts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Package, title: "Unified products", desc: "All products and variants in one view. SKUs, prices, and stock." },
              { icon: Users, title: "Suppliers", desc: "Manage suppliers and link them to products and orders." },
              { icon: FileText, title: "11+ reports", desc: "From sales to valuation, aging, and lost sales — full visibility." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-muted/20 bg-card hover:shadow-lg transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-muted/20 bg-card p-8 md:p-10 mb-12"
          >
            <h2 className="text-xl font-semibold mb-6 text-foreground">Inventory & product reports</h2>
            <p className="text-muted-foreground mb-6">
              From stock levels to valuation and lost sales — every report you need in one place.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-muted-foreground">
              {reports.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/features" className="flex items-center gap-2">
                All features <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/demo">Book a demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventory;
