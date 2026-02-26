import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Search,
  Receipt,
  History,
  Smartphone,
  Banknote,
  CreditCard,
  Building2,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";
import SEO from "@/components/SEO";
import SalesDemo from "@/components/pos/SalesDemo";

const benefits = [
  { icon: Zap, title: "Fast checkout", desc: "Search products, add to cart, and complete sales in seconds." },
  { icon: Banknote, title: "Multiple payment methods", desc: "Cash, M-Pesa, and credit — all in one flow." },
  { icon: Receipt, title: "Professional receipts", desc: "View and print receipts for every sale." },
  { icon: History, title: "Sales history", desc: "Filter and search past transactions by date, branch, or customer." },
  { icon: Building2, title: "Multi-branch", desc: "Sell at any location; switch branches without leaving the app." },
];

const Pos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEO
        title="Point of Sale (POS) | Fast Checkout, M-Pesa & Receipts | ADEERA Platform"
        description="ADEERA POS: quick sales, cart, checkout with cash, M-Pesa, and credit. Receipts, sales history, and multi-branch support. Built for retail and growing businesses."
        keywords="POS, point of sale, checkout, M-Pesa POS, sales receipt, multi-branch POS, retail POS, ADEERA"
        url="https://www.adeeraunitech.com/pos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ADEERA Point of Sale",
          "applicationCategory": "BusinessApplication",
          "description": "Fast POS with M-Pesa, cash, credit, receipts, and multi-branch",
          "featureList": "Quick sales, Cart, Cash/M-Pesa/Credit checkout, Receipts, Sales history, Multi-branch",
        }}
      />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Point of Sale
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Fast, flexible Point of Sale
            </h1>
            <p className="text-lg text-muted-foreground">
              Ring up sales quickly with product search and variations. Accept cash, M-Pesa, and credit.
              Print receipts, track every transaction, and run multiple branches from one platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((b, i) => (
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
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-muted/20 bg-card p-8 md:p-10 mb-12"
          >
            <h2 className="text-xl font-semibold mb-6 text-foreground">What you can do</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Product search and add to cart</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Product variations (size, color, etc.)</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Cash payment</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> M-Pesa payment and reconciliation</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Credit / customer account</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> View and print receipts</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Sales history with filters</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Multi-branch sales</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-muted/30 bg-card/80 p-6 md:p-8 mb-14"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-foreground">
                  Live sales workflow preview
                </h2>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Try a streamlined checkout flow with inline customer and discounts,
                  keyboard shortcuts, and fast product search that works with barcodes
                  and variants. This is a front-end demo of how the sales app behaves.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center rounded-full border px-2 py-1">
                  ⌘ / Ctrl + K — Focus search
                </span>
                <span className="inline-flex items-center rounded-full border px-2 py-1">
                  ⌘ / Ctrl + D — Cycle discount
                </span>
                <span className="inline-flex items-center rounded-full border px-2 py-1">
                  F2 — Set customer
                </span>
              </div>
            </div>
            <SalesDemo />
          </motion.div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/demo" className="flex items-center gap-2">
                Try the POS <ArrowRight className="h-4 w-4" />
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

export default Pos;
