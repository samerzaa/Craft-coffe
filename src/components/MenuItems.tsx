import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuData, MenuItem } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";

interface MenuItemsProps {
  selectedCategory: string;
}

const MenuItems = ({ selectedCategory }: MenuItemsProps) => {
  const { t } = useLanguage();
  const filteredItems = menuData.filter(item => item.category === selectedCategory);
  
  const getCategoryTitle = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      coffee: `☕ ${t("coffee")}`,
      juices: `🥤 ${t("juices")}`,
      desserts: `🍰 ${t("desserts")}`,
      shisha: `💨 ${t("shisha")}`
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
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={t(item.nameKey)}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {item.price} DT
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                  {t(item.nameKey)}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {t(item.descriptionKey)}
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