// category images
import orangeJuiceImg from "@/assets/orange-juice.jpg";
import tiramisuImg from "@/assets/tiramisu.jpg";
import brownieImg from "@/assets/brownie.jpg";
import drinksImg from "@/assets/drinks.jpg";
import cappuccinoimg from "@/assets/cappuccino.jpg"
// coffee images
import express from "@/assets/coffee/express.webp"
import cappucin from "@/assets/coffee/cappucin.webp"
import direct from "@/assets/coffee/direct.webp"
import cappuccino from "@/assets/coffee/cappuccino.webp"
import truc from "@/assets/coffee/truc.webp"
import chocolat_lait from "@/assets/coffee/chocolat_lait.webp"
import capsule from "@/assets/coffee/capsule.webp"
import chocolatchaud from "@/assets/coffee/chocolat_chaud.webp"
import americain from "@/assets/coffee/americain.webp"
// drinks images
import water from "@/assets/boisson/eau.webp"
import soda from "@/assets/boisson/soda.webp"
import big_soda from "@/assets/boisson/big_soda.webp"
import energy from "@/assets/boisson/energetique.webp"
// juices images
import orange from "@/assets/juice/orange.webp"
import limon from "@/assets/juice/citron.webp"
import strawberry from "@/assets/juice/fraise.webp"
import banana from "@/assets/juice/banane.webp"
export interface MenuItem {
  id: number;
  nameKey: string;
  price: string;
  image: string;
  category: 'coffee' | 'drinks' | 'desserts' | 'juices';
}

export const menuData: MenuItem[] = [
  // Coffee
  {
    id: 1,
    nameKey: "Express",
    price: "3.000 DT",
    image: express,
    category: "coffee"
  },
  {
    id: 2,
    nameKey: "Cappucin",
    price: "3.500 DT",
    image: cappucin,
    category: "coffee"
  },
  {
    id: 3,
    nameKey: "Americain",
    price: "3.500 DT",
    image: americain,
    category: "coffee"
  },
  {
    id: 4,
    nameKey: "Direct",
    price: "5.000 DT",
    image: direct,
    category: "coffee"
  },
    {
    id: 5,
    nameKey: "Cappuccino",
    price: "6.000 DT",
    image: cappuccino,
    category: "coffee"
  },
    {
    id: 6,
    nameKey: "Cafe Truc",
    price: "5.000 DT",
    image: truc,
    category: "coffee"
  },
    {
    id: 7,
    nameKey: "Chocolat au lait",
    price: "4.000 DT",
    image: chocolat_lait,
    category: "coffee"
  },
  {
    id: 8,
    nameKey: "Chocolat Chaud",
    price: "7.000 DT",
    image: chocolatchaud,
    category: "coffee"
  },
    {
    id: 9,
    nameKey: "Capsule",
    price: "5.000 DT",
    image: capsule,
    category: "coffee"
  },

  //drinks
  {
    id: 10,
    nameKey: "Water 1L",
    price: "2.500 DT",
    image: water,
    category: "drinks"
  },
  {
    id: 11,
    nameKey: "Soda",
    price: "3.500 DT",
    image: soda,
    category: "drinks"
  },
  {
    id: 12,
    nameKey: "Big Soda",
    price: "4.000 DT",
    image: big_soda,
    category: "drinks"
  },
  {
    id: 13,
    nameKey: "Energy Drink",
    price: "7.000 DT",
    image: energy,
    category: "drinks"
  },


  // Juices
  {
    id: 14,
    nameKey: "Orange",
    price: "7.000 DT",
    image: orange,
    category: "juices"
  },    
  {
    id: 15,
    nameKey: "limon",
    price: "10.000 DT",
    image: limon,
    category: "juices"
  },
  {
    id: 16,
    nameKey: "Strawberry",
    price: "8.000 DT",
    image: strawberry,
    category: "juices"
  },
  {
    id: 17,
    nameKey: "Banana",
    price: "8.000 DT",
    image: banana,
    category: "juices"
  },


  // Desserts
  {
    id: 18,
    nameKey: "tiramisu",
    price: "12.000 DT",
    image: tiramisuImg,
    category: "desserts"
  },
  {
    id: 19,
    nameKey: "brownie",
    price: "15.000 DT",
    image: brownieImg,
    category: "desserts"
  }
];

export const categories = [
  { id: 'coffee', nameKey: 'Coffee', icon: '☕', image: cappuccinoimg },
  { id: 'drinks', nameKey: 'Drinks', icon: '💨', image:drinksImg },
  { id: 'juices', nameKey: 'Juices', icon: '🥤', image:  orangeJuiceImg },
  { id: 'desserts', nameKey: 'Desserts', icon: '🍰', image:tiramisuImg }
  
];