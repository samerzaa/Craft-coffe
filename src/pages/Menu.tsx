import { useState } from "react";
import Navigation from "@/components/Navigation";
import Categories from "@/components/Categories";
import MenuItems from "@/components/MenuItems";
import Footer from "@/components/Footer";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("coffee");

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll to menu section
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Categories 
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <MenuItems selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default Menu;