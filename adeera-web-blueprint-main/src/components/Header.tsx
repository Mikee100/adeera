import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

const NAV_ITEMS = [
  {
    key: 'features',
    href: '/features',
    subItems: [
      { key: 'pos', href: '/pos' },
      { key: 'inventory', href: '/inventory' },
      { key: 'analytics', href: '/analytics' },
      { key: 'payments', href: '/payments' }
    ]
  },
  {
    key: 'company',
    href: '#',
    subItems: [
      { key: 'about', href: '/about' },
      { key: 'integrations', href: '/integrations' },
      { key: 'partnerships', href: '/partnerships' }
    ]
  },
  { key: 'pricing', href: '/pricing' },
  { key: 'contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'en');
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
    localStorage.setItem('lang', value);
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'glass shadow-lg border-b border-border/10'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-colors" />
              <img
                src="/Adeera_logo.jpg"
                alt="Adeera Logo"
                className="relative h-10 w-10 object-contain rounded-full border border-white/20 shadow-sm bg-white"
                style={{ minWidth: 40 }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="text-2xl font-black tracking-tighter text-gradient">
                ADEERA
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground opacity-70">
                Unitech Limited
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.key} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${location.pathname === item.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {t(item.key)}
                  {item.subItems && (
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {/* Dropdown menu */}
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-2xl glass shadow-2xl ring-1 ring-border/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
                    <div className="space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          to={subItem.href}
                          className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${location.pathname === subItem.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                            }`}
                        >
                          {t(subItem.key)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Auth */}
          <div className="hidden lg:flex items-center gap-6">
            <select
              value={language}
              onChange={e => handleLanguageChange(e.target.value)}
              className="bg-transparent border-none text-sm font-bold text-muted-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label="Select language"
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>

            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" className="rounded-full font-bold px-6">
                <Link to="/contact">Log in</Link>
              </Button>
              <Button asChild className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                <Link to="/demo">
                  Book a free demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full hover:bg-primary/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </Button>
        </div>


        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden shadow-lg"
            >
              <nav className="flex flex-col space-y-1 py-2 border-t border-border/20 bg-background/95 backdrop-blur-sm">
                {NAV_ITEMS.map((item) => (
                  <div key={item.key} className="px-2">
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${location.pathname === item.href
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-foreground/90 hover:bg-muted/50'
                        }`}
                      onClick={() => item.subItems ? null : setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        {t(item.key)}
                      </div>
                      {item.subItems && (
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      )}
                    </Link>

                    {/* Mobile submenu */}
                    {item.subItems && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.15 }}
                        className="pl-2 overflow-hidden"
                      >
                        <div className="ml-2 pl-4 border-l border-muted/40 space-y-1 py-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.key}
                              to={subItem.href}
                              className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${location.pathname === subItem.href
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-foreground/80 hover:bg-muted/30'
                                }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {t(subItem.key)}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Language selector */}
                <div className="px-4 py-3 border-t border-muted/20 mt-1">
                  <div className="relative">
                    <select
                      value={language}
                      onChange={e => handleLanguageChange(e.target.value)}
                      className="w-full bg-muted/10 border border-muted/20 rounded-lg px-4 py-2 text-foreground appearance-none focus:ring-2 focus:ring-primary/50 focus:outline-none"
                      aria-label="Select language"
                    >
                      {LANGUAGES.map(lang => (
                        <option key={lang.code} value={lang.code}>
                          {lang.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Mobile: Log in + CTA */}
                <div className="px-4 py-3 space-y-2">
                  {import.meta.env.VITE_APP_URL && (
                    <a href={`${String(import.meta.env.VITE_APP_URL).replace(/\/$/, '')}/login`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                      {t ? t('login') : 'Log in'}
                    </a>
                  )}
                  <Button asChild className="w-full rounded-full">
                    <Link to="/demo" className="flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      {t ? t('getStarted') : 'Get Started'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;