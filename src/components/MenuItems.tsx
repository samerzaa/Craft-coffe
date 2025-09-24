import { Card, CardContent } from "@/components/ui/card";
import { menuData, MenuItem } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";

interface MenuItemsProps {
  selectedCategory: string;
  onBreakfastItemClick?: (item: MenuItem) => void;
}

const MenuItems = ({ selectedCategory, onBreakfastItemClick }: MenuItemsProps) => {
  const { t } = useLanguage();
  const filteredItems = menuData.filter(item => item.category === selectedCategory);
  
  const getCategoryTitle = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      coffee: ` ${t("coffee")}`,
      juices: ` ${t("juices")}`,
      desserts: ` ${t("desserts")}`,
      drinks: ` ${t("drinks")}`,
      milkshake: ` ${t("milkshake")}`,
      smoothie: ` ${t("smoothie")}`,
      mojito: ` ${t("mojito")}`,
      cocktail: ` ${t("cocktail")}`,
      tea: ` ${t("tea")}`,
      breakfast: ` ${t("breakfast")}`,
      icecream: ` ${t("icecream")}`,
      waffles: ` ${t("waffles")}`,
      crepes: ` ${t("crepes")}`,
      pancake: ` ${t("pancake")}`,
      omelette: ` ${t("omelette")}`,
      tacos: ` ${t("tacos")}`,
      screpes: ` ${t("crepes")}`,
    };
    return categoryMap[category] || t("menu");
  };

  return (
    <section id="menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {getCategoryTitle(selectedCategory)}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("craftedWithLove")}
          </p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item: MenuItem) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105 group"
              onClick={() => {
                if (item.category === 'breakfast' && onBreakfastItemClick) {
                  onBreakfastItemClick(item);
                }
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={t(item.nameKey)}
                  className="w-full h-32 sm:h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <CardContent className="p-4 sm:p-6 text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                  {t(item.nameKey)}
                </h3>
                <p className="text-xl font-bold text-primary whitescpace-nowrap">
                  {t(item.price)}
                </p>
                <p className="text-xl font-light text-primary whitescpace-nowrap">
                  {t(item.details)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {t("noItemsAvailable")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuItems;