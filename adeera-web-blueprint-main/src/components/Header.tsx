import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

const NAV_ITEMS = [
  { key: 'platform', href: '/platform' },
  {
    key: 'pos',
    href: '/pos',
    subItems: [
      { key: 'posRetail', href: '/pos' },
      { key: 'posRestaurant', href: '/pos#restaurant' },
    ]
  },
  { key: 'features', href: '/features' },
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
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isScrolled
        ? 'bg-background border-b border-border'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <img src="/Adeera_logo.jpg" alt="Adeera" className="h-7 w-7 rounded-full" />
            <span className="text-base font-semibold tracking-tight text-foreground">ADEERA</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.key} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {t(`nav.${item.key}`)}
                  {item.subItems && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                    <div className="w-48 rounded-lg border border-border bg-popover shadow-md p-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          to={subItem.href}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        >
                          {t(`nav.${subItem.key}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <select
              value={language}
              onChange={e => handleLanguageChange(e.target.value)}
              className="bg-transparent text-sm text-muted-foreground hover:text-foreground focus:outline-none cursor-pointer mr-1"
              aria-label="Select language"
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
            <Button variant="ghost" size="sm" asChild>
              <a href={import.meta.env.VITE_APP_URL ? `${String(import.meta.env.VITE_APP_URL).replace(/\/$/, '')}/login` : '/contact'}>
                {t('login')}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/demo">Book demo</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/demo">Start free</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border py-3 bg-background">
            {NAV_ITEMS.map((item) => (
              <div key={item.key}>
                <Link
                  to={item.href}
                  className="block px-2 py-2.5 text-sm font-medium text-foreground"
                  onClick={() => !item.subItems && setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
                {item.subItems && (
                  <div className="ml-4 border-l border-border pl-3">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.key}
                        to={subItem.href}
                        className="block py-2 text-sm text-muted-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(`nav.${subItem.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex gap-2 px-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={import.meta.env.VITE_APP_URL ? `${String(import.meta.env.VITE_APP_URL).replace(/\/$/, '')}/login` : '/contact'}>
                  {t('login')}
                </a>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>Start free</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
