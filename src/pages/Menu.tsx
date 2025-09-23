import { useState } from "react";
import Navigation from "@/components/Navigation";
import Categories from "@/components/Categories";
import MenuItems from "@/components/MenuItems";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { categories, menuData, MenuItem } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("coffee");
  const [isBreakfastOpen, setIsBreakfastOpen] = useState(false);
  const [selectedBreakfastItem, setSelectedBreakfastItem] = useState<MenuItem | null>(null);
  const { t } = useLanguage();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll to menu section
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
    // keep modal controlled by item click, not category click
  };

  const handleBreakfastItemClick = (item: MenuItem) => {
    if (item.category === 'breakfast') {
      setSelectedBreakfastItem(item);
      setIsBreakfastOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Categories 
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <MenuItems selectedCategory={selectedCategory} onBreakfastItemClick={handleBreakfastItemClick} />
      <Footer />

      {/* Breakfast Modal */}
      <Dialog open={isBreakfastOpen} onOpenChange={(open) => { setIsBreakfastOpen(open); if (!open) setSelectedBreakfastItem(null); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedBreakfastItem ? t(selectedBreakfastItem.nameKey) : t("breakfast")}</DialogTitle>
            <DialogDescription>
              {t("craftedWithLove")}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image side */}
            <div className="w-full">
              {selectedBreakfastItem ? (
                <img
                  src={selectedBreakfastItem.image}
                  alt={t(selectedBreakfastItem.nameKey)}
                  className="w-full h-48 object-contain rounded-md"
                />
              ) : (
                (() => {
                  const cat = categories.find(c => c.id === 'breakfast');
                  return cat ? (
                    <img
                      src={cat.image}
                      alt={t("breakfast")}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ) : null;
                })()
              )}
            </div>
            {/* Details side */}
            <div className="space-y-3">
              {selectedBreakfastItem ? (
                <div className="space-y-1">
                  <p className="text-sm md:text-base text-muted-foreground">{t("ingredients")}:</p>
                  <p className="text-base md:text-lg font-medium text-primary">{t(selectedBreakfastItem.description)}</p><hr/>
                  <p className="text-sm md:text-base text-muted-foreground">{t("price")}:</p>
                  <p className="text-base md:text-lg font-medium text-primary">{t(selectedBreakfastItem.price)}</p>
                </div>
              ) : (
                <>
                  <h4 className="text-primary font-semibold">{t("menu")}</h4>
                  <ul className="space-y-2">
                    {menuData
                      .filter(item => item.category === 'breakfast')
                      .map(item => (
                        <li key={item.id} className="flex items-center justify-between">
                          <span className="text-sm md:text-base">{t(item.nameKey)}</span>
                          <span className="text-sm md:text-base font-medium text-primary">{t(item.price)}</span>
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;