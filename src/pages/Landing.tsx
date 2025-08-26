import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/coffee-hero.jpg";

const Landing = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-secondary/20 backdrop-blur-sm p-6 rounded-full shadow-warm">
              <Coffee size={64} className="text-accent" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
            {t("landingTitle")}
          </h1>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 font-light">
            {t("landingSlogan")}
          </p>
          
          {/* CTA Button */}
          <Link to="/menu">
            <Button 
              variant="hero"
              size="lg" 
              className="text-lg px-8 py-6 rounded-full hover:scale-105"
            >
              {t("exploreMenu")}
            </Button>
          </Link>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;