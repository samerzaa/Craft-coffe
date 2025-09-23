import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";
import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
interface CategoriesProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const Categories = ({ selectedCategory, onCategorySelect }: CategoriesProps) => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = Math.floor((container.clientWidth || 0) * 0.9);
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Filter categories based on selected icon
  const getFilteredCategories = () => {
    if (selectedIcon === 'coffee-tea') {
      return categories.filter(category => category.id === 'coffee' || category.id === 'tea' || category.id === 'drinks');
    }
    if (selectedIcon === 'drink') {
      return categories.filter(category => category.id === 'juices' || category.id === 'milkshake' || category.id === 'smoothie' || category.id === 'mojito' || category.id === 'cocktail');
    }
    if (selectedIcon === 'sweets') {
      return categories.filter(category => category.id === 'juices' || category.id === 'milkshake' || category.id === 'smoothie' || category.id === 'mojito' || category.id === 'cocktail');
    }
    if (selectedIcon === 'salt') {
      return categories.filter(category => category.id === 'juices' || category.id === 'milkshake' || category.id === 'smoothie' || category.id === 'mojito' || category.id === 'cocktail');
    }
    if (selectedIcon === 'petitdej') {
      return categories.filter(category => category.id === 'breakfast');
    }
    return categories; // Show all categories if no icon is selected
  };

  const handleIconClick = (iconType: string | null) => {
    setSelectedIcon(iconType);
  };
  return (
    <section id="categories" className="py-8 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {t("categories")}
          </h2>
        </div>

        {/* Circular Icons Section */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-6 overflow-x-auto pb-2 max-w-full">
            {/* Icon 1 - Coffee & Tea */}
            <div 
              className={`flex-shrink-0 w-16 h-16 flex items-center justify-center cursor-pointer ${
                selectedIcon === 'coffee-tea' ? 'ring-1 ring-primary ring-opacity-50 ' : ''
              }`}
              onClick={() => handleIconClick(selectedIcon === 'coffee-tea' ? null : 'coffee-tea')}
            >
              <img src="/assets/icon1.webp" alt="icon1" className="w-full h-full"/>
            </div>
            
            {/* Icon 2 drink */}
            <div 
              className={`flex-shrink-0 w-16 h-16 flex items-center justify-center cursor-pointer ${
                selectedIcon === 'drinks' ? 'ring-1 ring-primary ring-opacity-50' : ''
              }`}
              onClick={() => handleIconClick(selectedIcon === 'drink' ? null : 'drink')}
            >
              <img src="/assets/icon2.webp" alt="icon2" className="w-full h-full object-cover"/>
            </div>
            
            {/* Icon 3  sweets*/}
            <div 
              className={`flex-shrink-0 w-16 h-16 flex items-center justify-center cursor-pointer ${
                selectedIcon === 'sweets' ? 'ring-1 ring-primary ring-opacity-50' : ''
              }`}
              onClick={() => handleIconClick(selectedIcon === 'sweets' ? null : 'sweets')}
            >
              <img src="/assets/icon3.webp" alt="icon3" className="w-full h-full object-cover"/>
            </div>
            
            {/* Icon 4  salt*/}
            <div 
              className={`flex-shrink-0 w-16 h-16 flex items-center justify-center cursor-pointer ${
                selectedIcon === 'salt' ? 'ring-1 ring-primary ring-opacity-50' : ''
              }`}
              onClick={() => handleIconClick(selectedIcon === 'salt' ? null : 'salt')}
            >
              <img src="/assets/icon4.webp" alt="icon4" className="w-full h-full object-cover"/>
            </div>
            
            {/* Icon 5 */}
            <div 
              className={`flex-shrink-0 w-16 h-16 flex items-center justify-center cursor-pointer ${
                selectedIcon === 'petitdej' ? 'ring-1 ring-primary ring-opacity-50' : ''
              }`}
              onClick={() => handleIconClick(selectedIcon === 'petitdej' ? null : 'petitdej')}
            >
              <img src="/assets/icon5.webp" alt="icon5" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div
            ref={scrollRef}
            className="grid grid-flow-col auto-cols-[30%] sm:auto-cols-[30%] md:auto-cols-[25%] gap-2 sm:gap-3 md:gap-3 mx-auto overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
          {getFilteredCategories().map((category) => (
            <Card
              key={category.id} 
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-warm snap-start ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-coffee'
                  : 'bg-card hover:bg-secondary/50'
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardContent className="p-0 relative">
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
                  <img
                    src={category.image}
                    alt={t(category.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-accent text-accent-foreground font-semibold">
                      {t(category.id)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>

          <div className="hidden md:block">
            <Button
              variant="secondary"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md"
              onClick={() => scrollByAmount("left")}
            >
              ‹
            </Button>
            <Button
              variant="secondary"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md"
              onClick={() => scrollByAmount("right")}
            >
              ›
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;