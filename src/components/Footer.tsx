import { Coffee, MapPin, Clock, Phone, Mail, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Footer = () => {
  const { t } = useLanguage();
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);

  const openSocialModal = () => setIsSocialModalOpen(true);
  const closeSocialModal = () => setIsSocialModalOpen(false);

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Coffee size={24} />
              <span className="text-2xl font-bold">NOUR</span>
            </div>
            <p>{t("footerDescription")}</p>
            <div className="flex items-center space-x-4 pt-4">
              <Button 
                onClick={openSocialModal}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {t("followUs")}
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t("contactInformation")}</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t("visitUs")}</p>
                  <a href="https://maps.app.goo.gl/JaNkd1GeW4geoHSN9" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-sm space-y-1 hover:font-medium">
                  VR4R+62C, Houmt Souk, Djerba
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t("workingHours")}</p>
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
                  <p className="font-medium">{t("callUs")}</p>
                  <p className="text-primary-foreground/80 text-sm">+966 11 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t("email")}</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-sm space-y-1 hover:font-medium">
                  info@Nour.com
                </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t("findUs")}</h3>
            <div className="bg-secondary/10 rounded-lg overflow-hidden h-48 sm:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6626.646020784397!2d10.836069861536965!3d33.85556547976586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5002185e1fb%3A0x7476e6c978580e24!2sCaf%C3%A9%20Nour!5e0!3m2!1sfr!2stn!4v1756319491162!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NOUR Location"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 NOUR. {t("allRightsReserved")}.
          </p>
        </div>
      </div>

      {/* Social Media Modal */}
      {isSocialModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">{t("followUs")}</h2>
              <Button
                onClick={closeSocialModal}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-600 text-center mb-6">
                {t("stayConnected")}
              </p>
              
              {/* Instagram */}
              <a
                href="https://instagram.com/nour_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Instagram size={32} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <div className="font-semibold text-lg">{t("instagram")}</div>
                  <div className="text-pink-100 text-sm">@nour_coffee</div>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/nourcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Facebook size={32} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <div className="font-semibold text-lg">{t("facebook")}</div>
                  <div className="text-blue-100 text-sm">Nour Coffee</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;