export interface MenuItem {
  id: number;
  nameKey: string;
  price: string;
  image: string;
  category: 'coffee' | 'drinks' |  'juices' | 'milkshake' | 'smoothie' | 'mojito' | 'cocktail'| 'tea';
}

export const menuData: MenuItem[] = [
  // Coffee
  {
    id: 1,
    nameKey: "Express",
    price: "3.000 DT",
    image: "/assets/coffee/express.webp",
    category: "coffee"
  },
  {
    id: 2,
    nameKey: "Cappucin",
    price: "3.500 DT",
    image: "/assets/coffee/cappucin.webp",
    category: "coffee"
  },
  {
    id: 3,
    nameKey: "Americain",
    price: "3.500 DT",
    image: "/assets/coffee/americain.webp",
    category: "coffee"
  },
  {
    id: 4,
    nameKey: "Direct",
    price: "5.000 DT",
    image: "/assets/coffee/direct.webp",
    category: "coffee"
  },
    {
    id: 5,
    nameKey: "Cappuccino",
    price: "6.000 DT",
    image: "/assets/coffee/cappuccino.webp",
    category: "coffee"
  },
    {
    id: 6,
    nameKey: "Cafe Truc",
    price: "5.000 DT",
    image: "/assets/coffee/truc.webp",
    category: "coffee"
  },
    {
    id: 7,
    nameKey: "Chocolat au lait",
    price: "4.000 DT",
    image: "/assets/coffee/chocolat_lait.webp",
    category: "coffee"
  },
  {
    id: 8,
    nameKey: "Chocolat Chaud",
    price: "7.000 DT",
    image: "/assets/coffee/chocolat_chaud.webp",
    category: "coffee"
  },
    {
    id: 9,
    nameKey: "Capsule",
    price: "5.000 DT",
    image: "/assets/coffee/capsule.webp",
    category: "coffee"
  },

  //drinks
  {
    id: 10,
    nameKey: "Water 1L",
    price: "2.500 DT",
    image: "/assets/boisson/eau.webp",
    category: "drinks"
  },
  {
    id: 11,
    nameKey: "Soda",
    price: "3.500 DT",
    image: "/assets/boisson/soda.webp",
    category: "drinks"
  },
  {
    id: 12,
    nameKey: "Big Soda",
    price: "4.000 DT",
    image: "/assets/boisson/big_soda.webp",
    category: "drinks"
  },
  {
    id: 13,
    nameKey: "Energy Drink",
    price: "7.000 DT",
    image: "/assets/boisson/energetique.webp",
    category: "drinks"
  },


  // Juices
  {
    id: 14,
    nameKey: "Orange",
    price: "7.000 DT",
    image: "/assets/juice/orange.webp",
    category: "juices"
  },    
  {
    id: 15,
    nameKey: "limon",
    price: "7.000 DT",
    image: "/assets/juice/citron.webp",
    category: "juices"
  },
  {
    id: 16,
    nameKey: "Strawberry",
    price: "8.000 DT",
    image: "/assets/juice/fraise.webp",
    category: "juices"
  },
  {
    id: 17,
    nameKey: "Banana",
    price: "8.000 DT",
    image: "/assets/juice/banane.webp",
    category: "juices"
  },
  // MilkShake
  {
    id: 18,
    nameKey: "Nutella",
    price: "7.000 DT",
    image: "/assets/milkshake/nutella.webp",
    category: "milkshake"
  },    
  {
    id: 19,
    nameKey: "Nutella Oreo",
    price: "8.000 DT",
    image: "/assets/milkshake/n_oreo.webp",
    category: "milkshake"
  },
  {
    id: 20,
    nameKey: "Biscoff",
    price: "8.000 DT",
    image: "/assets/milkshake/speculoos.webp",
    category: "milkshake"
  },
  {
    id: 21,
    nameKey: "Snickers",
    price: "9.000 DT",
    image: "/assets/milkshake/snickers.webp",
    category: "milkshake"
  },


  // Smoothies
  {
    id: 22,
    nameKey: "ananas",
    price: "8.000 DT",
    image: "/assets/smoothie/ananas.webp",
    category: "smoothie"
  },
  {
    id: 23,
    nameKey: "red fruits",
    price: "8.000 DT",
    image: "/assets/smoothie/fruits_rouges.webp",
    category: "smoothie"
  },
  {
    id: 24,
    nameKey: "kiwi",
    price: "9.000 DT",
    image: "/assets/smoothie/kiwi.webp",
    category: "smoothie"
  },
  {
    id: 25,
    nameKey: "peach",
    price: "9.000 DT",
    image: "/assets/smoothie/peche.webp",
    category: "smoothie"
  },
    // mojito
  {
    id: 26,
    nameKey: "virgin",
    price: "7.000 DT",
    image: "/assets/mojito/virgin.webp",
    category: "mojito"
  },
  {
    id: 27,
    nameKey: "blue mojito",
    price: "8.000 DT",
    image: "/assets/mojito/blue.webp",
    category: "mojito"
  },
  {
    id: 28,
    nameKey: "red mojito",
    price: "8.000 DT",
    image: "/assets/mojito/red.webp",
    category: "mojito"
  },
  {
    id: 29,
    nameKey: "energy mojito",
    price: "10.000 DT",
    image: "/assets/mojito/m_energetique.webp",
    category: "mojito"
  },
  //cocktail
  {
    id: 30,
    nameKey: "duo",
    price: "9.000 DT",
    image: "/assets/cocktail/duo.webp",
    category: "cocktail"
  },
  {
    id: 31,
    nameKey: "pina colada",
    price: "9.000 DT",
    image: "/assets/cocktail/pina_colada.webp",
    category: "cocktail"
  },
  {
    id: 32,
    nameKey: "banane dattes",
    price: "10.000 DT",
    image: "/assets/cocktail/banane_dattes.webp",
    category: "cocktail"
  },
  {
    id: 33,
    nameKey: "jwejem",
    price: "10.000 DT",
    image: "/assets/cocktail/jwejem.webp",
    category: "cocktail"
  },
  {
    id: 34,
    nameKey: "special",
    price: "12.000 DT",
    image: "/assets/cocktail/special.webp",
    category: "cocktail"
  },
  //tea
  {
    id: 35,
    nameKey: "Thé à la menthe",
    price: "3.500 DT",
    image: "/assets/the/menthe.webp",
    category: "tea"
  },
  {
    id: 36,
    nameKey: "Thé infusion",
    price: "4.000 DT",
    image: "/assets/the/infusion.webp",
    category: "tea"
  },
  {
    id: 37,
    nameKey: "Thé aux amandes",
    price: "7.000 DT",
    image: "/assets/the/amandes.webp",
    category: "tea"
  },
  {
    id: 38,
    nameKey: "Thé aux pingions",
    price: "8.500 DT",
    image: "/assets/the/pingion.webp",
    category: "tea"
  },
];

export const categories = [
  { id: 'coffee', nameKey: 'Coffee', image: "/assets/cappuccino.webp" },
  { id: 'drinks', nameKey: 'Drinks', image: "/assets/drinks.webp" },
  { id: 'juices', nameKey: 'Juices', image:  "/assets/orange_juice.jpg" },
  { id: 'milkshake', nameKey: 'MilkShake', image: "/assets/milkshake.webp" },
  { id: 'smoothie', nameKey: 'Smoothie', image: "/assets/smoothie.webp" },
  { id: 'mojito', nameKey: 'Mojito', image: "/assets/mojito.webp" },
  { id: 'cocktail', nameKey: 'Cocktail', image: "/assets/cocktail1.webp" },
  { id: 'tea', nameKey: 'Tea', image: "/assets/tea.webp" }
];