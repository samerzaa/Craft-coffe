import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";
import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { useRef } from "react";
interface CategoriesProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const Categories = ({ selectedCategory, onCategorySelect }: CategoriesProps) => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = Math.floor((container.clientWidth || 0) * 0.9);
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };
  return (
    <section id="categories" className="py-8 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {t("categories")}
          </h2>
        </div>
        
        <div className="relative">
          <div
            ref={scrollRef}
            className="grid grid-flow-col auto-cols-[30%] sm:auto-cols-[30%] md:auto-cols-[25%] gap-2 sm:gap-3 md:gap-3 mx-auto overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-warm snap-start ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-coffee'
                  : 'bg-card hover:bg-secondary/50'
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardContent className="flex flex-col items-center justify-center p-1 sm:p-3 md:p-2 text-center">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={t(category.nameKey)}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
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