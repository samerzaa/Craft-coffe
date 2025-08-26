import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coffee, Menu, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { selectedLanguage, setSelectedLanguage, languages, getCurrentLanguage } = useLanguage();

  const navLinks = [
    { href: "#categories", label: "Categories" },
    { href: "#menu", label: "Menu" },
    { href: "#footer", label: "Contact" }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Coffee className="text-primary" size={24} />
            <span className="text-xl font-bold text-primary">BrewScape</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-[80px] h-8 bg-background/50 border-border/50">
                <SelectValue>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">{getCurrentLanguage().flag}</span>
                    <span className="text-sm font-medium">{getCurrentLanguage().code.toUpperCase()}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Social Links */}
            <div className="flex items-center space-x-2 border-l border-border pl-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Selector Mobile */}
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-[60px] h-8 bg-background/50 border-border/50">
                <SelectValue>
                  <span className="text-sm">{getCurrentLanguage().flag}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link to="/" className="flex items-center space-x-2">
                    <Coffee className="text-primary" size={24} />
                    <span className="text-xl font-bold text-primary">BrewScape</span>
                  </Link>
                  
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="text-muted-foreground hover:text-primary transition-colors" size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="text-muted-foreground hover:text-primary transition-colors" size={24} />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;