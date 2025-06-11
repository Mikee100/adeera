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
  window.location.reload(); // This will refresh the page
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
    className="flex items-center gap-3 group"
    aria-label="Home"
  >
    <img
      src="/Adeera_logo.jpg"
      alt="Adeera Logo"
      className="h-10 w-10 object-contain rounded-full border border-primary/20 shadow-sm bg-white"
      style={{ minWidth: 40 }}
    />
    <div className="flex flex-col leading-tight">
      <motion.div
        className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        ADEERA
      </motion.div>
      <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
        {t ? t('company') : 'UNITECH LIMITED'}
      </div>
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
  onChange={e => handleLanguageChange(e.target.value)}
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
                {t ? t('getStarted') : 'Get Started'}
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
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="md:hidden overflow-hidden shadow-lg"
    >
      <nav className="flex flex-col space-y-1 py-2 border-t border-border/20 bg-background/95 backdrop-blur-sm">
        {NAV_ITEMS.map((item) => (
          <div key={item.key} className="px-2">
            <Link
              to={item.href}
              className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                location.pathname === item.href
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
            
            {/* Mobile submenu with better animation */}
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
                      className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                        location.pathname === subItem.href
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

        {/* Language selector with better styling */}
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

        {/* CTA Button (Mobile) with better prominence */}
        <div className="px-4 pb-3 pt-1">
          <Button 
            asChild 
            variant="default" 
            size="lg"
            className="w-full rounded-lg py-5 text-base font-semibold shadow-sm hover:shadow-md transition-shadow"
          >
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              {t ? t('getStarted') : 'Get Started'}
              <ArrowRight className="h-4 w-4 ml-2" />
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