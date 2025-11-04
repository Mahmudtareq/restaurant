"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Crispy Spring Rolls",
    price: 5.2,
    description:
      "Golden fried spring rolls filled with fresh vegetables and served with sweet chili sauce.",
    image:
      "https://images.unsplash.com/photo-1619537985-a6b01e3a196e?w=400&h=400&fit=crop",
    category: "Appetizers",
  },
  {
    id: 2,
    name: "Chicken Satay",
    price: 5.4,
    description:
      "Grilled chicken skewers marinated in coconut curry, served with peanut sauce.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2fb2c6?w=400&h=400&fit=crop",
    category: "Appetizers",
  },
  {
    id: 3,
    name: "Shrimp Tempura",
    price: 6.9,
    description:
      "Lightly battered and fried shrimp with tempura dipping sauce.",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
    category: "Appetizers",
  },
  {
    id: 4,
    name: "Dim Sum Basket",
    price: 12.4,
    description:
      "Steamed dumplings filled with minced chicken and vegetables served with soy chili dip.",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=400&fit=crop",
    category: "Appetizers",
  },
];

const categories = [
  "Appetizers",
  "Main Dishes",
  "Sides",
  "Desserts",
  "Beverages",
];

export default function MenuSectionHighlight() {
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[3]);
  const [direction, setDirection] = useState(0);

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const handleItemClick = (item: MenuItem, index: number) => {
    const currentIndex = filteredItems.findIndex(
      (i) => i.id === selectedItem.id
    );
    setDirection(index > currentIndex ? 1 : -1);
    setSelectedItem(item);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const imageVariants = {
    enter: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    center: {
      scale: 1,
      rotate: 0,
      opacity: 1,
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-orange-600 font-medium tracking-wide">
              Menu Highlights
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            A Taste of What We Serve
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover signature Pan-Asian dishes crafted with balance, freshness,
            and bold flavor.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Featured Item Details */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={selectedItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="relative"
              >
                {/* Large Featured Image with Circular Background */}
                <div className="relative flex justify-center items-center mb-8">
                  <motion.div
                    className="absolute w-96 h-96 bg-white rounded-full shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`image-${selectedItem.id}`}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.6,
                      }}
                      className="relative z-10"
                    >
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="w-80 h-80 object-cover rounded-full shadow-xl border-8 border-white"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Item Details */}
                <div className="text-center lg:text-left">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                  >
                    {selectedItem.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-orange-600 mb-6"
                  >
                    $ {selectedItem.price.toFixed(1)}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-lg leading-relaxed"
                  >
                    {selectedItem.description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Menu Items Grid */}
          <div className="space-y-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  onClick={() => handleItemClick(item, index)}
                  className={`flex items-center gap-4 p-4 cursor-pointer transition-all duration-300 ${
                    selectedItem.id === item.id
                      ? "bg-white shadow-xl ring-2 ring-orange-500 scale-105"
                      : "bg-white/80 hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-full shadow-md border-4 border-white"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-lg font-semibold text-orange-600">
                      $ {item.price.toFixed(1)}
                    </p>
                  </div>
                  {selectedItem.id === item.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full"
                    />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
