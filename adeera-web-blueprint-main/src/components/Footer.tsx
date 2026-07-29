import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const socials = [
  { href: "https://twitter.com/", label: "Twitter", icon: <Twitter className="h-4 w-4" /> },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { href: "https://facebook.com/", label: "Facebook", icon: <Facebook className="h-4 w-4" /> },
];

const product = [
  { name: "Platform", href: "/platform" },
  { name: "Retail POS", href: "/pos" },
  { name: "Restaurant POS", href: "/pos#restaurant" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img src="/Adeera_logo.jpg" alt="Adeera" className="h-8 w-8 rounded-full" />
              <span className="text-lg font-semibold tracking-tight">ADEERA</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              POS, inventory, and business management built for African retail and hospitality.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Product</h3>
            <ul className="mt-4 space-y-2.5">
              {product.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <a href="mailto:adeeraunitech@gmail.com" className="hover:text-foreground transition-colors">adeeraunitech@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                <a href="tel:+254700000000" className="hover:text-foreground transition-colors">+254 700 000000</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Adeera Unitech Limited.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
