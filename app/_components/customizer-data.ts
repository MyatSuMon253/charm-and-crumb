export interface BaseOption {
  id: string;
  name: string;
  detail: string;
  price: number;
  visual: string;
  imageUrl: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  price: number;
  swatch: string;
}

export interface Charm {
  id: string;
  name: string;
  collection: string;
  price: number;
  symbol: string;
}

export interface PlacedCharm {
  charmId: string;
  slot: number;
}

export interface TrayItem {
  charm: Charm;
  quantity: number;
}

export const stepLabels = ["Base & Material", "Choose Charms", "Placement"];

export const bases: BaseOption[] = [
  {
    id: "bracelet",
    name: "Bracelet",
    detail: "Delicate bracelet",
    price: 25,
    visual: "chain",
    imageUrl:
      "https://images.unsplash.com/photo-1717605383946-96c6884c36b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYWNlbGV0fGVufDB8fDB8fHww",
  },
  {
    id: "necklace",
    name: "Necklace",
    detail: '18" chain',
    price: 30,
    visual: "necklace",
    imageUrl:
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5lY2tsYWNlfGVufDB8fDB8fHww",
  },
  {
    id: "keychain",
    name: "Keychain",
    detail: "Sturdy clasp",
    price: 18,
    visual: "keychain",
    imageUrl:
      "https://media.istockphoto.com/id/471592646/photo/handmade-pendant-with-coffee-beans-and-biscuits.webp?a=1&b=1&s=612x612&w=0&k=20&c=9yl5_HW-3_O8UlhfEDUpxp8p9IqRuyhxh8c9l0rh3PU=",
  },
  {
    id: "ring",
    name: "Ring",
    detail: "Clay ring",
    price: 18,
    visual: "ring",
    imageUrl:
      "https://images.unsplash.com/photo-1647842080928-210079ffa7bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsYXklMjByaW5nfGVufDB8fDB8fHww",
  },
];

export const materials: MaterialOption[] = [
  {
    id: "silver",
    name: "Silver",
    price: 0,
    swatch: "linear-gradient(135deg, #edf1f4, #9da6ad)",
  },
  {
    id: "gold",
    name: "Gold",
    price: 4,
    swatch: "linear-gradient(135deg, #fff3a8, #f0b90f)",
  },
  {
    id: "bronze",
    name: "Antique Bronze",
    price: 5,
    swatch: "linear-gradient(135deg, #c66b19, #7b3a10)",
  },
];

export const collections = ["Cafe", "Fast Food", "Bakery", "Japanese", "Fruit"];

export const charms: Charm[] = [
  { id: "coffee-cup", name: "Coffee Cup", collection: "Cafe", price: 5, symbol: "☕" },
  { id: "iced-latte", name: "Iced Latte", collection: "Cafe", price: 5, symbol: "🥤" },
  { id: "cinnamon-roll", name: "Cinnamon Roll", collection: "Cafe", price: 5, symbol: "◎" },
  { id: "ice-cream", name: "Ice Cream", collection: "Cafe", price: 5, symbol: "🍦" },
  { id: "pizza", name: "Pizza Slice", collection: "Fast Food", price: 5, symbol: "🍕" },
  { id: "fries", name: "Fries", collection: "Fast Food", price: 5, symbol: "🍟" },
  { id: "burger", name: "Burger", collection: "Fast Food", price: 5, symbol: "🍔" },
  { id: "pretzel", name: "Pretzel", collection: "Bakery", price: 5, symbol: "🥨" },
  { id: "croissant", name: "Croissant", collection: "Bakery", price: 5, symbol: "🥐" },
  { id: "cake", name: "Mini Cake", collection: "Bakery", price: 6, symbol: "🍰" },
  { id: "onigiri", name: "Onigiri", collection: "Japanese", price: 5, symbol: "🍙" },
  { id: "taiyaki", name: "Taiyaki", collection: "Japanese", price: 6, symbol: "魚" },
  { id: "dango", name: "Dango", collection: "Japanese", price: 5, symbol: "●●●" },
  { id: "strawberry", name: "Strawberry", collection: "Fruit", price: 4, symbol: "🍓" },
  { id: "peach", name: "Peach", collection: "Fruit", price: 4, symbol: "🍑" },
  { id: "cherry", name: "Cherry", collection: "Fruit", price: 4, symbol: "🍒" },
];

export const slots = [
  { top: "18%", left: "48%" },
  { top: "38%", left: "76%" },
  { top: "68%", left: "50%" },
  { top: "36%", left: "22%" },
  { top: "55%", left: "70%" },
  { top: "57%", left: "28%" },
];

export function findCharm(charmId: string) {
  return charms.find((charm) => charm.id === charmId);
}
