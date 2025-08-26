import espressoImg from "@/assets/espresso.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import latteImg from "@/assets/latte.jpg";
import orangeJuiceImg from "@/assets/orange-juice.jpg";
import tiramisuImg from "@/assets/tiramisu.jpg";
import brownieImg from "@/assets/brownie.jpg";

export interface MenuItem {
  id: number;
  nameKey: string;
  descriptionKey: string;
  price: number;
  image: string;
  category: 'coffee' | 'juices' | 'desserts' | 'shisha';
}

export const menuData: MenuItem[] = [
  // Coffee
  {
    id: 1,
    nameKey: "espresso",
    descriptionKey: "espressoDesc",
    price: 12,
    image: espressoImg,
    category: "coffee"
  },
  {
    id: 2,
    nameKey: "cappuccino",
    descriptionKey: "cappuccinoDesc",
    price: 18,
    image: cappuccinoImg,
    category: "coffee"
  },
  {
    id: 3,
    nameKey: "latte",
    descriptionKey: "latteDesc",
    price: 20,
    image: latteImg,
    category: "coffee"
  },

  // Juices
  {
    id: 4,
    nameKey: "orangeJuice",
    descriptionKey: "orangeJuiceDesc",
    price: 15,
    image: orangeJuiceImg,
    category: "juices"
  },

  // Desserts
  {
    id: 5,
    nameKey: "tiramisu",
    descriptionKey: "tiramisuDesc",
    price: 28,
    image: tiramisuImg,
    category: "desserts"
  },
  {
    id: 6,
    nameKey: "brownie",
    descriptionKey: "brownieDesc",
    price: 24,
    image: brownieImg,
    category: "desserts"
  }
];

export const categories = [
  { id: 'coffee', nameKey: 'coffee', icon: '☕', emoji: '☕' },
  { id: 'juices', nameKey: 'juices', icon: '🥤', emoji: '🥤' },
  { id: 'desserts', nameKey: 'desserts', icon: '🍰', emoji: '🍰' },
  { id: 'shisha', nameKey: 'shisha', icon: '💨', emoji: '💨' }
];