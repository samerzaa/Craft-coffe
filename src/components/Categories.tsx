import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoriesProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const Categories = ({ selectedCategory, onCategorySelect }: CategoriesProps) => {
  const { t } = useLanguage();
  return (
    <section id="categories" className="py-8 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {t("categories")}
          </h2>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-warm ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-coffee'
                  : 'bg-card hover:bg-secondary/50'
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardContent className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
                  {category.emoji}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                  {t(category.nameKey)}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;