import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Receipt,
  History,
  Banknote,
  Building2,
  ArrowRight,
  Check,
  Zap,
  UtensilsCrossed,
  Users,
  ClipboardList,
  ChefHat,
  CalendarCheck,
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

const retailScreens = [
  { src: "/screenshots/adeera-pos-general/checkout-catalog.png", alt: "ADEERA POS product catalog with variants and stock levels", caption: "Product grid with variants, stock levels, and barcode search." },
  { src: "/screenshots/adeera-pos-general/cart-built.png", alt: "ADEERA POS cart with items added", caption: "A sale in progress — cart updates live as items are added." },
  { src: "/screenshots/adeera-pos-general/checkout-payment.png", alt: "ADEERA POS checkout showing payment methods including cash and M-Pesa", caption: "Checkout with cash, M-Pesa, and credit payment methods." },
  { src: "/screenshots/adeera-pos-general/split-payment.png", alt: "ADEERA POS split payment across cash and M-Pesa", caption: "Split a single sale across cash and M-Pesa." },
  { src: "/screenshots/adeera-pos-general/receipt.png", alt: "ADEERA POS completed sale receipt", caption: "Completed sale summary, ready to print or reprint." },
  { src: "/screenshots/adeera-pos-general/branch-switcher.png", alt: "ADEERA POS multi-branch switcher", caption: "Switch branches from the same terminal." },
];

const restaurantBenefits = [
  { icon: Users, title: "Waiter check-in", desc: "Each waiter checks in with a PIN, so every ticket is attributable." },
  { icon: ClipboardList, title: "Table service orders", desc: "Orders bound to numbered tables, with per-item quantity and discounts." },
  { icon: ChefHat, title: "Kitchen display board", desc: "Live lanes for Open, Sent to Kitchen, Served, and Closed with on-time timers." },
  { icon: CalendarCheck, title: "Reservations", desc: "Book tables ahead and track booked, arrived, seated, and no-show." },
];

const restaurantScreens = [
  { src: "/screenshots/adeera-pos-restaurant/table-floor-plan.png", alt: "ADEERA restaurant POS table floor plan", caption: "Visual floor plan with seat maps and table occupancy." },
  { src: "/screenshots/adeera-pos-restaurant/menu-ordering.png", alt: "ADEERA restaurant POS menu and current order", caption: "Menu browsing and order building for an open table." },
  { src: "/screenshots/adeera-pos-restaurant/kitchen-display.png", alt: "ADEERA restaurant POS kitchen display board", caption: "Kitchen display board — tickets move through live lanes." },
  { src: "/screenshots/adeera-pos-restaurant/orders-board.png", alt: "ADEERA restaurant POS orders board", caption: "Orders board with cook, serve, and void actions." },
  { src: "/screenshots/adeera-pos-restaurant/payment.png", alt: "ADEERA restaurant POS settling a bill", caption: "Settling the bill — cash, card, M-Pesa, or split." },
  { src: "/screenshots/adeera-pos-restaurant/reservations.png", alt: "ADEERA restaurant POS reservations", caption: "Reservations with booked, arrived, seated, and no-show tracking." },
];

const Pos = () => {
  return (
    <div>
      <SEO
        title="Point of Sale (POS) | Retail & Restaurant Till | ADEERA Platform"
        description="ADEERA POS: fast retail checkout with cash, M-Pesa, and credit, plus a dedicated restaurant mode with table service, kitchen dispatch, and reservations. Multi-branch, offline-ready."
        keywords="POS, point of sale, restaurant POS, table service, kitchen display, checkout, M-Pesa POS, sales receipt, multi-branch POS, retail POS, ADEERA"
        url="https://www.adeeraunitech.com/pos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ADEERA Point of Sale",
          "applicationCategory": "BusinessApplication",
          "description": "Retail and restaurant POS with M-Pesa, cash, credit, table service, and kitchen dispatch",
          "featureList": "Quick sales, Cart, Cash/M-Pesa/Credit checkout, Receipts, Sales history, Multi-branch, Waiter check-in, Table service, Kitchen display, Reservations",
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                Fast, flexible point of sale
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Ring up sales with product search and variations. Accept cash, M-Pesa, and credit.
                One desktop app, two modes — retail till or restaurant table service.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link to="/demo">Request a demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/features">All features</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/services-pos.png"
                alt="Cashier using the ADEERA POS on a tablet at checkout"
                className="rounded-xl border border-border shadow-sm w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
            {benefits.map((b) => (
              <div key={b.title}>
                <b.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-6 text-foreground">What you can do</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Product search and add to cart</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Product variations (size, color, etc.)</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Cash payment</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> M-Pesa payment and reconciliation</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Credit / customer account</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> View and print receipts</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Sales history with filters</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0" /> Multi-branch sales</li>
          </ul>
        </div>
      </section>

      {/* Live demo */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold mb-1 text-foreground">
                Live sales workflow preview
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                A streamlined checkout flow with inline customer and discounts, keyboard shortcuts,
                and fast product search. This is a front-end demo of how the sales app behaves.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center rounded-md border border-border px-2 py-1">⌘/Ctrl + K — Search</span>
              <span className="inline-flex items-center rounded-md border border-border px-2 py-1">⌘/Ctrl + D — Discount</span>
              <span className="inline-flex items-center rounded-md border border-border px-2 py-1">F2 — Customer</span>
            </div>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <SalesDemo />
          </div>
        </div>
      </section>

      {/* Retail screens */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-2 text-foreground">
            Real ADEERA POS screens — retail till
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            Screenshots and a screen recording of the real retail till: product browsing, checkout,
            split payments, receipts, and branch switching.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {retailScreens.map((s) => (
              <div key={s.src} className="space-y-2">
                <img src={s.src} alt={s.alt} className="rounded-xl border border-border shadow-sm w-full" />
                <p className="text-xs text-muted-foreground">{s.caption}</p>
              </div>
            ))}
          </div>
          <video
            controls
            poster="/videos/adeera-pos-general/making-a-sale-poster.png"
            className="w-full rounded-xl border border-border shadow-sm"
          >
            <source src="/videos/adeera-pos-general/making-a-sale.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Restaurant POS */}
      <section id="restaurant" className="py-16 border-t border-border scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <UtensilsCrossed className="h-4 w-4" />
            <span className="text-sm font-medium">Restaurant mode</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Table service for restaurants &amp; bars
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            The same desktop app switches into a dedicated restaurant mode for table service:
            a floor plan, waiter check-in, kitchen dispatch, and reservations — not just a
            retail checkout with menu items bolted on.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {restaurantBenefits.map((b) => (
              <div key={b.title}>
                <b.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {restaurantScreens.map((s) => (
              <div key={s.src} className="space-y-2">
                <img src={s.src} alt={s.alt} className="rounded-xl border border-border shadow-sm w-full" />
                <p className="text-xs text-muted-foreground">{s.caption}</p>
              </div>
            ))}
          </div>
          <video
            controls
            poster="/videos/adeera-pos-restaurant/table-service-flow-poster.png"
            className="w-full rounded-xl border border-border shadow-sm"
          >
            <source src="/videos/adeera-pos-restaurant/table-service-flow.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
