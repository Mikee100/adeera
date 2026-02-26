import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const socials = [
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z" /></svg>
    ),
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z" /></svg>
    ),
  },
  {
    href: "https://facebook.com/",
    label: "Facebook",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z" /></svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-muted/10 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 pt-20 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-colors" />
                <img
                  src="/Adeera_logo.jpg"
                  alt="Adeera Logo"
                  className="relative h-12 w-12 object-contain rounded-full border border-white/20 shadow-sm bg-white"
                />
              </div>
              <div className="flex flex-col leading-none">
                <div className="text-3xl font-black tracking-tighter text-gradient">
                  ADEERA
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground opacity-70">
                  Unitech Limited
                </div>
              </div>
            </Link>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The all-in-one business management software built for the next generation of African retail.
            </p>
            <div className="flex space-x-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h3 className="font-bold text-lg mb-6 text-foreground">Solutions</h3>
              <ul className="space-y-4">
                <li><Link to="/pos" className="text-muted-foreground hover:text-primary transition-colors font-medium">Point of Sale</Link></li>
                <li><Link to="/inventory" className="text-muted-foreground hover:text-primary transition-colors font-medium">Inventory</Link></li>
                <li><Link to="/analytics" className="text-muted-foreground hover:text-primary transition-colors font-medium">Analytics</Link></li>
                <li><Link to="/payments" className="text-muted-foreground hover:text-primary transition-colors font-medium">Payments</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-foreground">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About Us</Link></li>
                <li><Link to="/integrations" className="text-muted-foreground hover:text-primary transition-colors font-medium">Integrations</Link></li>
                <li><Link to="/partnerships" className="text-muted-foreground hover:text-primary transition-colors font-medium">Partnerships</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold text-lg mb-6 text-foreground">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:adeeraunitech@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="tel:+254700000000" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    Sales: +254 700 000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-muted-foreground text-sm font-medium">
              © 2026 ADEERA UNITECH LIMITED.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <Globe className="w-4 h-4 text-primary" />
            <span>Region: East Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;