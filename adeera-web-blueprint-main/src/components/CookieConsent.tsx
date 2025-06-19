import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';

const COOKIE_NAME = 'cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get(COOKIE_NAME);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_NAME, 'accepted', { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-background/95 border-t border-border shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
      <div className="text-sm text-muted-foreground">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. See our{' '}
        <a href="/privacy" className="underline text-primary hover:text-primary/80">Privacy Policy</a>.
      </div>
      <Button size="sm" className="bg-primary text-white px-6" onClick={handleAccept}>
        Accept
      </Button>
    </div>
  );
};

export default CookieConsent; 