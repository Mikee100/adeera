import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Database, 
  Wallet, 
  Cpu, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const socials = [
  { href: "https://twitter.com/", label: "Twitter", icon: <Twitter className="h-5 w-5" /> },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
  { href: "https://facebook.com/", label: "Facebook", icon: <Facebook className="h-5 w-5" /> },
];

const solutions = [
  { name: "Smart POS", desc: "Sales at Speed", href: "/services/pos", icon: Smartphone },
  { name: "Inventory Management", desc: "Real-time Sync", href: "/services/inventory", icon: Database },
  { name: "Integrated Payments", desc: "Secure M-Pesa", href: "/services/payments", icon: Wallet },
  { name: "AI Business Assistant", desc: "Instant Insights", href: "/services/ai", icon: Cpu },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-slate-50 text-slate-600 pt-24 pb-10 overflow-hidden border-t border-primary/5">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src="/Adeera_logo.jpg" alt="Adeera Logo" className="h-12 w-12 rounded-full border border-primary/10 shadow-sm shadow-primary/5" />
              <div>
                <span className="text-2xl font-bold text-slate-950 tracking-widest">ADEERA</span>
                <p className="text-[10px] text-primary font-bold tracking-widest uppercase -mt-1">Unitech Limited</p>
              </div>
            </Link>
            <p className="text-slate-500 mb-8 leading-relaxed max-w-sm font-medium">
              The only platform designed for African scale. We unify your sales, stock, and payments into one intelligent ecosystem.
            </p>
            
            <div className="bg-white/80 backdrop-blur-md border border-primary/10 rounded-3xl p-7 shadow-xl shadow-primary/5">
              <h4 className="text-slate-950 font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50/50 border border-primary/20 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 placeholder:text-slate-400"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-2.5 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
              {isSubscribed && (
                <p className="text-primary text-xs mt-3 animate-in fade-in slide-in-from-top-1 duration-300">
                  Thanks for subscribing! Welcome to the ecosystem.
                </p>
              )}
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3 lg:ml-8">
            <h3 className="text-slate-950 font-bold mb-8 tracking-widest uppercase text-[11px] opacity-70">Expertise & Solutions</h3>
            <div className="grid grid-cols-1 gap-5">
              {solutions.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="group flex items-start gap-4 p-3 -m-3 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-primary/5 border border-transparent hover:border-primary/10"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-950 group-hover:text-primary transition-colors leading-tight">{item.name}</span>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-950 font-bold mb-6 tracking-wide uppercase text-sm">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-slate-500 font-medium hover:text-primary transition-all duration-300 border-l-2 border-transparent hover:border-primary/40 hover:pl-3"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-950 font-bold mb-6 tracking-wide uppercase text-sm">Contact & Support</h3>
            <ul className="space-y-5">
              <li>
                <a href="mailto:adeeraunitech@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-primary/5 shadow-sm flex items-center justify-center group-hover:bg-primary transition-all shadow-inner">
                    <Mail className="h-5 w-5 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-sm text-slate-900 group-hover:text-primary font-bold transition-colors">adeeraunitech@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+254700000000" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-primary/5 shadow-sm flex items-center justify-center group-hover:bg-primary transition-all shadow-inner">
                    <Phone className="h-5 w-5 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Phone</p>
                    <p className="text-sm text-slate-900 group-hover:text-primary font-bold transition-colors">+254-700-000000</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-white border border-primary/5 shadow-sm flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-sm text-slate-900 font-bold">Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">
            © {new Date().getFullYear()} ADEERA UNITECH LIMITED. All Rights Reserved.
          </p>
          
          <div className="flex space-x-7">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-all hover:scale-110 active:scale-95"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex space-x-8">
            <Link to="/privacy" className="text-xs text-slate-400 font-medium hover:text-slate-950 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-400 font-medium hover:text-slate-950 transition-colors">Terms of Service</Link>
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