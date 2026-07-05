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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlpk-plXmrYlEQ1BCC8fn4piHwhvGtjjEsn-RLoqHgw&s=10",
  },
  {
    id: "necklace",
    name: "Necklace",
    detail: '18" chain',
    price: 30,
    visual: "necklace",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CF4zqd44lthUvWMFVQO-oYNXpbZjAeSE8sAdnjlSIA&s=10",
  },
  {
    id: "keychain",
    name: "Keychain",
    detail: "Sturdy clasp",
    price: 18,
    visual: "keychain",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tnzkbGHAMVlZ6ibjQf7AAbv1IN1ei1XkynwFhUfc8w&s=10",
  },
  {
    id: "ring",
    name: "Ring",
    detail: "Clay ring",
    price: 18,
    visual: "ring",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv_cl0iOHvdoojr5dRpg_jllPBnCdWlPVrsKUxUnFyQ&s=10",
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
  {
    id: "rose-pink",
    name: "925 Rose Pink",
    price: 6,
    swatch: "linear-gradient(135deg, #ffd8d3, #d98c86)",
  },
];

export const collections = ["Cafe", "Fast Food", "Bakery", "Japanese", "Fruit"];

export const charms: Charm[] = [
  {
    id: "coffee-cup",
    name: "Coffee Cup",
    collection: "Cafe",
    price: 5,
    symbol: "☕",
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    collection: "Cafe",
    price: 5,
    symbol: "🥤",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    collection: "Cafe",
    price: 5,
    symbol: "◎",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    collection: "Cafe",
    price: 5,
    symbol: "🍦",
  },
  {
    id: "pizza",
    name: "Pizza Slice",
    collection: "Fast Food",
    price: 5,
    symbol: "🍕",
  },
  {
    id: "fries",
    name: "Fries",
    collection: "Fast Food",
    price: 5,
    symbol: "🍟",
  },
  {
    id: "burger",
    name: "Burger",
    collection: "Fast Food",
    price: 5,
    symbol: "🍔",
  },
  {
    id: "pretzel",
    name: "Pretzel",
    collection: "Bakery",
    price: 5,
    symbol: "🥨",
  },
  {
    id: "croissant",
    name: "Croissant",
    collection: "Bakery",
    price: 5,
    symbol: "🥐",
  },
  {
    id: "cake",
    name: "Mini Cake",
    collection: "Bakery",
    price: 6,
    symbol: "🍰",
  },
  {
    id: "onigiri",
    name: "Onigiri",
    collection: "Japanese",
    price: 5,
    symbol: "🍙",
  },
  {
    id: "taiyaki",
    name: "Taiyaki",
    collection: "Japanese",
    price: 6,
    symbol: "魚",
  },
  {
    id: "dango",
    name: "Dango",
    collection: "Japanese",
    price: 5,
    symbol: "●●●",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    collection: "Fruit",
    price: 4,
    symbol: "🍓",
  },
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
