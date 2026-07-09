export interface BaseOption {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  description: string;
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
    description:
      "Elegant silver chain bracelet that wraps gently around the wrist",
    price: 10000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlpk-plXmrYlEQ1BCC8fn4piHwhvGtjjEsn-RLoqHgw&s=10",
  },
  {
    id: "necklace",
    name: "Necklace",
    description: "Classic 18-inch chain necklace for timeless charm display",
    price: 15000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CF4zqd44lthUvWMFVQO-oYNXpbZjAeSE8sAdnjlSIA&s=10",
  },
  {
    id: "keychain",
    name: "Keychain",
    description: "Sturdy keychain with a secure clasp for everyday carry",
    price: 5000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tnzkbGHAMVlZ6ibjQf7AAbv1IN1ei1XkynwFhUfc8w&s=10",
  },
  {
    id: "ring",
    name: "Ring",
    description: "Handcrafted clay ring with a unique artisanal finish",
    price: 5000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv_cl0iOHvdoojr5dRpg_jllPBnCdWlPVrsKUxUnFyQ&s=10",
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Delicate pair of clay earrings for a subtle statement",
    price: 5000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9IwVd5LZN72SD7dWy0JVqqStIbrWtZnbwbaxMy8NYg&s=10",
  },
  {
    id: "phone-charm",
    name: "Phone Charm",
    description: "Trendy phone strap charm to personalize your device",
    price: 5000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrsVJEOxJN5E9Tlo79Ow6QhJ-6Z0NhZHr4lJ8Em499A&s=10",
  },
];

export const materials: MaterialOption[] = [
  {
    id: "silver",
    name: "Silver",
    description: "Classic sterling silver with a bright, cool-toned finish",
    price: 0,
    swatch: "linear-gradient(135deg, #edf1f4, #9da6ad)",
  },
  {
    id: "gold",
    name: "Gold",
    description: "Warm 18K gold plating for a luxurious, timeless look",
    price: 4,
    swatch: "linear-gradient(135deg, #fff3a8, #f0b90f)",
  },
  {
    id: "bronze",
    name: "Antique Bronze",
    description: "Vintage-inspired bronze with a rich, aged patina",
    price: 5,
    swatch: "linear-gradient(135deg, #c66b19, #7b3a10)",
  },
  {
    id: "rose-pink",
    name: "925 Rose Pink",
    description: "Delicate rose gold tone with a romantic pink hue",
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
    symbol: "🌀",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    collection: "Cafe",
    price: 5,
    symbol: "🍦",
  },
  {
    id: "donut",
    name: "Donut",
    collection: "Cafe",
    price: 5,
    symbol: "🍩",
  },
  {
    id: "macaron",
    name: "Macaron",
    collection: "Cafe",
    price: 5,
    symbol: "🍬",
  },
  {
    id: "boba-tea",
    name: "Boba Tea",
    collection: "Cafe",
    price: 6,
    symbol: "🧋",
  },
  {
    id: "matcha",
    name: "Matcha",
    collection: "Cafe",
    price: 5,
    symbol: "🍵",
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
    id: "taco",
    name: "Taco",
    collection: "Fast Food",
    price: 5,
    symbol: "🌮",
  },
  {
    id: "hotdog",
    name: "Hot Dog",
    collection: "Fast Food",
    price: 5,
    symbol: "🌭",
  },
  {
    id: "popcorn",
    name: "Popcorn",
    collection: "Fast Food",
    price: 4,
    symbol: "🍿",
  },
  {
    id: "soda",
    name: "Soda",
    collection: "Fast Food",
    price: 4,
    symbol: "🥤",
  },
  {
    id: "nuggets",
    name: "Nuggets",
    collection: "Fast Food",
    price: 5,
    symbol: "🍗",
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
    id: "cupcake",
    name: "Cupcake",
    collection: "Bakery",
    price: 5,
    symbol: "🧁",
  },
  {
    id: "bread",
    name: "Bread Loaf",
    collection: "Bakery",
    price: 4,
    symbol: "🍞",
  },
  {
    id: "cookie",
    name: "Cookie",
    collection: "Bakery",
    price: 4,
    symbol: "🍪",
  },
  {
    id: "pie",
    name: "Berry Pie",
    collection: "Bakery",
    price: 6,
    symbol: "🥧",
  },
  {
    id: "muffin",
    name: "Muffin",
    collection: "Bakery",
    price: 5,
    symbol: "🧁",
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
    symbol: "🐟",
  },
  {
    id: "dango",
    name: "Dango",
    collection: "Japanese",
    price: 5,
    symbol: "🍡",
  },
  {
    id: "sushi",
    name: "Sushi Roll",
    collection: "Japanese",
    price: 6,
    symbol: "🍣",
  },
  {
    id: "ramen",
    name: "Ramen Bowl",
    collection: "Japanese",
    price: 6,
    symbol: "🍜",
  },
  {
    id: "mochi",
    name: "Mochi",
    collection: "Japanese",
    price: 5,
    symbol: "🍥",
  },
  {
    id: "bento",
    name: "Bento Box",
    collection: "Japanese",
    price: 6,
    symbol: "🍱",
  },
  {
    id: "takoyaki",
    name: "Takoyaki",
    collection: "Japanese",
    price: 5,
    symbol: "🐙",
  },
  {
    id: "avocado",
    name: "Avocado",
    collection: "Fruit",
    price: 4,
    symbol: "🥑",
  },
  {
    id: "banana",
    name: "Banana",
    collection: "Fruit",
    price: 4,
    symbol: "🍌",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    collection: "Fruit",
    price: 4,
    symbol: "🍍",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    collection: "Fruit",
    price: 4,
    symbol: "🍓",
  },
  {
    id: "apple",
    name: "Apple",
    collection: "Fruit",
    price: 4,
    symbol: "🍎",
  },
  {
    id: "grapes",
    name: "Grapes",
    collection: "Fruit",
    price: 4,
    symbol: "🍇",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    collection: "Fruit",
    price: 4,
    symbol: "🍉",
  },
  {
    id: "lemon",
    name: "Lemon",
    collection: "Fruit",
    price: 4,
    symbol: "🍋",
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
