import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">☕</div>
        <h1 className="text-4xl font-bold mb-4 text-primary">{t("pageNotFound")}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          {t("pageNotFoundDesc")}
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
        >
          {t("backToHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
