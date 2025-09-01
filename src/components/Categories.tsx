import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";
import {Badge} from "@/components/ui/badge"
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
              <CardContent className="flex flex-col items-center justify-center p-1 sm:p-4 md:p-1 text-center">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={t(category.nameKey)}
                    className="w-full h-30 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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
      </div>
    </section>
  );
};

export default Categories;