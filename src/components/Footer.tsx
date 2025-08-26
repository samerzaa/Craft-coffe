import { Coffee, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Coffee size={24} />
              <span className="text-2xl font-bold">BrewScape</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              At BrewScape, we're passionate about crafting the perfect coffee experience. 
              From our carefully selected beans to our artisanal brewing methods, 
              every cup is a journey of flavor and tradition.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                Follow Us
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-primary-foreground/80 text-sm">
                    123 Coffee Street, Downtown District<br />
                    Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <div className="text-primary-foreground/80 text-sm space-y-1">
                    <p>Mon - Thu: 7:00 AM - 11:00 PM</p>
                    <p>Fri - Sat: 7:00 AM - 12:00 AM</p>
                    <p>Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-primary-foreground/80 text-sm">+966 11 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary-foreground/80 text-sm">hello@brewscape.sa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Find Us</h3>
            <div className="bg-secondary/10 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1449!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BrewScape Location"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 BrewScape. All rights reserved. Crafted with ❤️ for coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;