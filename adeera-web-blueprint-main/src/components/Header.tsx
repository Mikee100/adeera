import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'sw', label: 'SW' }, // Swahili example
];

const NAV_ITEMS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { 
    key: 'services', 
    href: '/services',
    subItems: [
      { key: 'crm', href: '/services/crm' },
      { key: 'cloud', href: '/services/cloud' },
      { key: 'security', href: '/services/security' }
    ]
  },
  { key: 'partnerships', href: '/partnerships' },
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/10' : 'bg-background/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Home"
          >
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              ADEERA
            </motion.div>
            <div className="text-sm text-muted-foreground hidden sm:block transition-colors group-hover:text-primary">
              UNITECH LIMITED
            </div>
          </Link>

          {/* Desktop Navigation */}
     <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.key} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(item.key)}
                  {item.subItems && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {/* Dropdown menu */}
                {item.subItems && (
                  <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-background shadow-lg ring-1 ring-border/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          to={subItem.href}
                          className={`block px-4 py-2 text-sm ${
                            location.pathname === subItem.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
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
          {/* Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center mr-4">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="bg-transparent border-none text-sm text-muted-foreground hover:text-primary focus:outline-none cursor-pointer"
              aria-label="Select language"
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button asChild variant="default" className="rounded-full">
              <Link to="/contact" className="flex items-center gap-1">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
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
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
               <nav className="flex flex-col space-y-2 py-4 border-t border-border/10 bg-background">
                {NAV_ITEMS.map((item) => (
                  <div key={item.key}>
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${
                        location.pathname === item.href
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      }`}
                    >
                      {t(item.key)}
                      {item.subItems && <ChevronDown className="h-4 w-4" />}
                    </Link>
                    {/* Mobile submenu */}
                    {item.subItems && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={subItem.href}
                            className={`block px-3 py-2 text-sm rounded-md ${
                              location.pathname === subItem.href
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                            }`}
                          >
                            {t(subItem.key)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* ...language switcher and CTA... */}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;