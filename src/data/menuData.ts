import espressoImg from "@/assets/espresso.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import latteImg from "@/assets/latte.jpg";
import orangeJuiceImg from "@/assets/orange-juice.jpg";
import tiramisuImg from "@/assets/tiramisu.jpg";
import brownieImg from "@/assets/brownie.jpg";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'juices' | 'desserts' | 'shisha';
}

export const menuData: MenuItem[] = [
  // Coffee
  {
    id: 1,
    name: "Espresso",
    description: "Rich and bold single shot of pure coffee excellence",
    price: 12,
    image: espressoImg,
    category: "coffee"
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and foam",
    price: 18,
    image: cappuccinoImg,
    category: "coffee"
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk",
    price: 20,
    image: latteImg,
    category: "coffee"
  },
  {
    id: 4,
    name: "Turkish Coffee",
    description: "Traditional finely ground coffee with cardamom",
    price: 15,
    image: espressoImg,
    category: "coffee"
  },

  // Juices
  {
    id: 5,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed oranges, vitamin-packed and refreshing",
    price: 15,
    image: orangeJuiceImg,
    category: "juices"
  },
  {
    id: 6,
    name: "Mixed Berry Smoothie",
    description: "Blend of strawberries, blueberries, and banana",
    price: 22,
    image: orangeJuiceImg,
    category: "juices"
  },
  {
    id: 7,
    name: "Green Detox",
    description: "Spinach, apple, cucumber, and ginger blend",
    price: 25,
    image: orangeJuiceImg,
    category: "juices"
  },

  // Desserts
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers",
    price: 28,
    image: tiramisuImg,
    category: "desserts"
  },
  {
    id: 9,
    name: "Chocolate Brownie",
    description: "Rich fudgy brownie served warm with vanilla ice cream",
    price: 24,
    image: brownieImg,
    category: "desserts"
  },
  {
    id: 10,
    name: "Cheesecake",
    description: "Creamy New York style cheesecake with berry compote",
    price: 26,
    image: tiramisuImg,
    category: "desserts"
  },

  // Shisha
  {
    id: 11,
    name: "Apple Mint",
    description: "Fresh apple flavor with cooling mint finish",
    price: 45,
    image: espressoImg,
    category: "shisha"
  },
  {
    id: 12,
    name: "Double Apple",
    description: "Traditional double apple flavor, smooth and aromatic",
    price: 40,
    image: espressoImg,
    category: "shisha"
  },
  {
    id: 13,
    name: "Mixed Fruit",
    description: "Tropical blend of exotic fruits for a sweet experience",
    price: 50,
    image: espressoImg,
    category: "shisha"
  }
];

export const categories = [
  { id: 'coffee', name: 'Coffee', icon: '☕', emoji: '☕' },
  { id: 'juices', name: 'Juices', icon: '🥤', emoji: '🥤' },
  { id: 'desserts', name: 'Desserts', icon: '🍰', emoji: '🍰' },
  { id: 'shisha', name: 'Shisha', icon: '💨', emoji: '💨' }
];