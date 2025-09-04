import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coffee, Menu} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faFacebook } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  const { selectedLanguage, setSelectedLanguage, languages, getCurrentLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#categories", label: t("categories") },
    { href: "#menu", label: t("menu") },
    { href: "#footer", label: t("contact") }
  ];
  const getFlagIcon = () => {
    switch (languages.find(lang => lang.code === selectedLanguage)?.code) {
      case 'en':
        return "/assets/uk.webp";
      case 'fr':
        return "/assets/france.webp";
      case 'ar':
        return "/assets/tunisia.webp";
      default:
        return "/assets/uk.webp";
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-16 ${selectedLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Coffee className="text-primary" size={24} />
            <span className="text-xl font-bold text-primary">CRAFT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${selectedLanguage === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
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
              <SelectTrigger className="w-full h-8 bg-background/50 border-border/50">
                <SelectValue>
                  <div className="flex items-center space-x-1">
                    <img src={getFlagIcon()} alt="Language flag" className="h-4 w-4 mr-1 object-cover rounded-sm" />
                    <span className="text-sm font-medium">{getCurrentLanguage().code.toUpperCase()}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Social Links */}
            <div className="flex items-center space-x-2 border-l border-border pl-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            {selectedLanguage === 'ar' ? (
              <>
                {/* Arabic: Menu Button first, then Language Selector */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Menu size={20} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <div className="flex flex-col space-y-6 mt-8">
                      <Link to="/" className="flex items-center space-x-reverse space-x-2">
                        <Coffee className="text-primary" size={24} />
                        <span className="text-xl font-bold text-primary">CRAFT</span>
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
                      
                      <div className="flex items-center space-x-reverse space-x-5 pt-4 border-t border-border">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-full h-8 border-border/50">
                    <SelectValue>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <img src={getFlagIcon()} alt="Language flag" className="h-4 w-4 ml-1 object-cover rounded-sm" />
                        <span className="text-sm font-medium">{getCurrentLanguage().code.toUpperCase()}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code} >
                        <div className="flex items-center space-x-reverse space-x-2">
                          <span>{lang.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            ) : (
              <>
                {/* English/French: Language Selector first, then Menu Button */}
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-full h-8 border-border/50">
                    <SelectValue>
                      <div className="flex items-center space-x-1">
                        <img src={getFlagIcon()} alt="Language flag" className="h-4 w-4 mr-1 object-cover rounded-sm" />
                        <span className="text-sm font-medium">{getCurrentLanguage().code.toUpperCase()}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code} >
                        <div className="flex items-center space-x-2">
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
                        <span className="text-xl font-bold text-primary">CRAFT</span>
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
                      
                      <div className="flex items-center space-x-5 pt-4 border-t border-border">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;