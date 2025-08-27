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
    <section id="categories" className="py-16 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("categories")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("landingSubtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
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
              <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">
                  {category.emoji}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">
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