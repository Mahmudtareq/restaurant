import { Icons } from "@/components/custom/icons";

// nav items
export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "About US",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
// feature products

// bakery data

export const reviews = [
  {
    id: 1,
    text: "Savore captures the essence of Asian cuisine beautifully. Every bite feels thoughtful, every flavor perfectly layered.",
    author: "Kurt Bates",
    platform: "Instagram",
    avatar: "/images/review/kurt-bates.svg",
  },
  {
    id: 2,
    text: "A delightful fusion of authenticity and modern taste. Easily one of the best Pan-Asian dining experiences in town.",
    author: "Corina McCoy",
    platform: "Medium",
    avatar: "/images/review/corina-mcoy.svg",
  },
  {
    id: 3,
    text: "Every dish feels freshly prepared with care, perfectly balanced in taste and presentation.",
    author: "Jamie Hall",
    platform: "Facebook",
    avatar: "/images/review/jamie-hall.svg",
  },
  {
    id: 4,
    text: "Lovely ambiance with exceptional service. The attention to detail in both food and decor is remarkable.",
    author: "Sarah Chen",
    platform: "Yelp",
    avatar: "/images/review/customar-joshua.svg",
  },
  {
    id: 5,
    text: "A delightful fusion of authenticity and modern taste. Easily one of the best Pan-Asian dining experiences in town.",
    author: "Corina McCoy",
    platform: "Medium",
    avatar: "/images/review/corina-mcoy.svg",
  },
];

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  categoryId: number;
  categoryName: string;
  items: MenuItem[];
}

export const menuCategories = [
  {
    categoryId: 1,
    categoryName: "appetizers",
    items: [
      {
        id: 1,
        name: "Dim Sum Basket",
        description: "Minced Chicken, Cabbage, Carrot, Soy Dip",
        price: "$ 6.5",
        image: "/images/menu-hero/dim-sum.svg",
      },
      {
        id: 2,
        name: "Crispy Prawn Nachos",
        description: "Prawn, Wonton Chips, Chili Mayo, Lime",
        price: "$ 7.8",
        image: "/images/menu-hero/shrimp-tempura.svg",
      },
      {
        id: 3,
        name: "Chicken Gyoza",
        description: "Chicken, Garlic, Sesame Oil, Soy Sauce",
        price: "$ 6.9",
        image: "/images/menu-hero/chicken-satay.svg",
      },
      {
        id: 4,
        name: "Veggie Spring Roll",
        description: "Cabbage, Carrot, Bell Pepper, Sweet Chili",
        price: "$ 5.5",
        image: "/images/menu-hero/crispy-rolls.svg",
      },
    ],
  },
  {
    categoryId: 2,
    categoryName: "soup",
    items: [
      {
        id: 5,
        name: "Tom Yum Soup",
        description: "Spicy Thai Soup, Shrimp, Lemongrass, Lime",
        price: "$ 8.5",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
      },
      {
        id: 6,
        name: "Miso Soup",
        description: "Traditional Japanese, Tofu, Seaweed, Green Onion",
        price: "$ 4.5",
        image:
          "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=800&q=80",
      },
      {
        id: 7,
        name: "Hot and Sour Soup",
        description: "Pork, Mushroom, Bamboo Shoots, Vinegar",
        price: "$ 6.9",
        image:
          "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800&q=80",
      },
      {
        id: 8,
        name: "Wonton Soup",
        description: "Pork Dumplings, Bok Choy, Chicken Broth",
        price: "$ 7.5",
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: "chicken",
    items: [
      {
        id: 9,
        name: "Kung Pao Chicken",
        description: "Spicy Stir-Fry, Peanuts, Vegetables, Chili Peppers",
        price: "$ 12.9",
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
      },
      {
        id: 10,
        name: "Orange Chicken",
        description: "Crispy Chicken, Sweet Orange Sauce, Sesame Seeds",
        price: "$ 11.5",
        image:
          "https://images.unsplash.com/photo-1606491048702-cad0c2d972cd?w=800&q=80",
      },
      {
        id: 11,
        name: "Teriyaki Chicken",
        description: "Grilled Chicken, Teriyaki Glaze, Steamed Vegetables",
        price: "$ 13.9",
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
      },
      {
        id: 12,
        name: "Chicken Chow Mein",
        description: "Stir-Fried Noodles, Chicken, Mixed Vegetables",
        price: "$ 10.9",
        image:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
      },
    ],
  },
  {
    categoryId: 4,
    categoryName: "rice",
    items: [
      {
        id: 13,
        name: "Fried Rice",
        description: "Egg, Peas, Carrots, Soy Sauce, Green Onions",
        price: "$ 8.5",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
      },
      {
        id: 14,
        name: "Shrimp Fried Rice",
        description: "Jumbo Shrimp, Egg, Mixed Vegetables, Garlic",
        price: "$ 11.9",
        image:
          "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&q=80",
      },
      {
        id: 15,
        name: "Thai Basil Rice",
        description: "Jasmine Rice, Fresh Basil, Chili, Garlic",
        price: "$ 9.5",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      },
      {
        id: 16,
        name: "Kimchi Fried Rice",
        description: "Spicy Kimchi, Egg, Sesame Oil, Korean Style",
        price: "$ 10.5",
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
      },
    ],
  },
  {
    categoryId: 5,
    categoryName: "beef",
    items: [
      {
        id: 17,
        name: "Mongolian Beef",
        description: "Tender Beef, Green Onions, Sweet Soy Glaze",
        price: "$ 15.9",
        image:
          "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80",
      },
      {
        id: 18,
        name: "Beef Broccoli",
        description: "Stir-Fried Beef, Fresh Broccoli, Garlic Sauce",
        price: "$ 14.5",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
      },
      {
        id: 19,
        name: "Szechuan Beef",
        description: "Spicy Beef, Bell Peppers, Szechuan Peppercorns",
        price: "$ 16.9",
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
      },
      {
        id: 20,
        name: "Black Pepper Beef",
        description: "Premium Beef, Black Pepper Sauce, Onions",
        price: "$ 17.5",
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
      },
    ],
  },
];

export const menuItems = [
  {
    id: 1,
    name: "Crispy Spring Rolls",
    price: 5.2,
    description:
      "Golden fried rolls filled with vegetables and herbs served with sweet chili dip.",
    image: "/images/menu-hero/crispy-rolls.svg",
  },
  {
    id: 2,
    name: "Chicken Satay",
    price: 5.4,
    description:
      "Grilled chicken skewers marinated in coconut curry, served with peanut sauce.",
    image: "/images/menu-hero/chicken-satay.svg",
  },
  {
    id: 3,
    name: "Shrimp Tempura",
    price: 6.9,
    description:
      "Lightly battered and fried shrimp with tempura dipping sauce.",
    image: "/images/menu-hero/shrimp-tempura.svg",
  },
  {
    id: 4,
    name: "Dim Sum Basket",
    price: 12.4,
    description:
      "Steamed dumplings filled with minced chicken and vegetables served with soy chili dip.",
    image: "/images/menu-hero/dim-sum.svg",
  },
];
