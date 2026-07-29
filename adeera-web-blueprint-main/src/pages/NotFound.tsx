import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-3xl font-semibold text-foreground mb-2">404</h1>
        <p className="text-muted-foreground mb-4">This page doesn't exist.</p>
        <a href="/" className="text-primary hover:underline text-sm font-medium">
          Return to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
