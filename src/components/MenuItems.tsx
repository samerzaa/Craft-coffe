import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuData, MenuItem } from "@/data/menuData";

interface MenuItemsProps {
  selectedCategory: string;
}

const MenuItems = ({ selectedCategory }: MenuItemsProps) => {
  const filteredItems = menuData.filter(item => item.category === selectedCategory);
  
  const getCategoryTitle = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      coffee: "☕ Premium Coffee Selection",
      juices: "🥤 Fresh Juices & Smoothies",
      desserts: "🍰 Delicious Desserts",
      shisha: "💨 Premium Shisha Experience"
    };
    return categoryMap[category] || "Menu Items";
  };

  return (
    <section id="menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {getCategoryTitle(selectedCategory)}
          </h2>
          <p className="text-lg text-muted-foreground">
            Crafted with love and served with passion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item: MenuItem) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {item.price} SAR
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No items available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuItems;