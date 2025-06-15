"use client";

import React, { useState, useMemo, useCallback } from "react";
import MenuCard from "@/components/MenuCard";

// Types for better type safety
interface MenuItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  alt: string;
  categoryId: string;
  description?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Enhanced menu categories with descriptions and icons
const menuCategories: CategoryInfo[] = [
  {
    id: "The soup",
    name: "The soup",
    description: "Traditional Turkish soups made fresh daily",
    icon: "🍲",
  },
  {
    id: "Lahmacun & Meat Bread",
    name: "Lahmacun & Meat Bread",
    description: "Thin crispy bread with delicious toppings",
    icon: "🥖",
  },
  {
    id: "Pide of your choice",
    name: "Pide of your choice",
    description: "Boat-shaped Turkish bread with various fillings",
    icon: "🚢",
  },
  {
    id: "House specialties",
    name: "House specialties",
    description: "Our chef's signature dishes",
    icon: "⭐",
  },
  {
    id: "Pizza of your choice (30cm)",
    name: "Pizza of your choice (30cm)",
    description: "Stone oven baked pizzas",
    icon: "🍕",
  },
  {
    id: "Home orders with your own ingredients",
    name: "Home orders with your own ingredients",
    description: "Customize your meal with your preferred ingredients",
    icon: "🏠",
  },
];

// Enhanced menu items with descriptions and tags
const menuItems: MenuItem[] = [
  // Pide items
  {
    id: 10,
    name: "Pide with minced meat",
    price: "8,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Taste Pide",
    alt: "Pide with minced meat",
    categoryId: "Pide of your choice",
    description: "Traditional Turkish pide with seasoned minced meat",
    isPopular: true,
  },
  {
    id: 11,
    name: "Pide with lamb",
    price: "10,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Taste Pide",
    alt: "Pide with lamb",
    categoryId: "Pide of your choice",
    description: "Premium lamb pieces on freshly baked pide",
  },
  {
    id: 12,
    name: "Pide with beef ham",
    price: "8,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Taste Pide",
    alt: "Pide with beef ham",
    categoryId: "Pide of your choice",
    description: "Halal beef ham with traditional spices",
  },
  {
    id: 13,
    name: "Pide with spinach & soft cheese",
    price: "8,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Taste Pide",
    alt: "Pide with spinach & soft cheese",
    categoryId: "Pide of your choice",
    description: "Fresh spinach with creamy soft cheese",
    isNew: true,
  }, // Pizza items
  {
    id: 20,
    name: "Pizza Margherita",
    price: "12,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "30cm Pizza",
    alt: "Pizza Margherita",
    categoryId: "Pizza of your choice (30cm)",
    description: "Classic tomato, mozzarella, and fresh basil",
    isPopular: true,
  },
  {
    id: 21,
    name: "Pizza Salami",
    price: "14,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "30cm Pizza",
    alt: "Pizza Salami",
    categoryId: "Pizza of your choice (30cm)",
    description: "Halal salami with mozzarella and tomato sauce",
  }, // Lahmacun items
  {
    id: 30,
    name: "Traditional Lahmacun",
    price: "6,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Turkish Specialty",
    alt: "Traditional Lahmacun",
    categoryId: "Lahmacun & Meat Bread",
    description: "Thin crispy bread with spiced meat topping",
    isPopular: true,
  },
  {
    id: 31,
    name: "Meat Bread Special",
    price: "7,50",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Turkish Specialty",
    alt: "Meat Bread Special",
    categoryId: "Lahmacun & Meat Bread",
    description: "Our special recipe with extra meat and vegetables",
  },
  // Soup items
  {
    id: 40,
    name: "Lentil Soup",
    price: "4,50",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Daily Fresh",
    alt: "Lentil Soup",
    categoryId: "The soup",
    description: "Traditional Turkish red lentil soup with spices",
  },
  {
    id: 41,
    name: "Chicken Soup",
    price: "5,00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Daily Fresh",
    alt: "Chicken Soup",
    categoryId: "The soup",
    description: "Hearty chicken soup with vegetables and herbs",
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Pide of your choice");
  // Memoize filtered items for better performance
  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.categoryId === activeCategory),
    [activeCategory]
  );

  // Optimize category change handler
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  // Count items per category for better UX
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    menuCategories.forEach((category) => {
      stats[category.id] = menuItems.filter((item) => item.categoryId === category.id).length;
    });
    return stats;
  }, []);

  return (
    <div className="flex-grow py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-restaurant-dark mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 mb-2">
            Freshly prepared daily with authentic Turkish flavors
          </p>
          <div className="flex justify-center items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-700 rounded-full"></div>
              <span className="text-sm text-gray-600">100% Halal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-restaurant-orange rounded-full"></div>
              <span className="text-sm text-gray-600">Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-restaurant-red rounded-full"></div>
              <span className="text-sm text-gray-600">Traditional Recipes</span>
            </div>
          </div>
        </header>

        {/* Enhanced Category Navigation */}
        <nav className="mb-12" aria-label="Menu categories">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-restaurant-dark mb-6 text-center">
              Choose Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`group relative p-4 rounded-xl text-center transition-all duration-300 border-2 cursor-pointer ${
                    activeCategory === category.id
                      ? "bg-restaurant-red text-white border-restaurant-red shadow-lg scale-105"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-restaurant-red hover:bg-red-50 hover:scale-102"
                  }`}
                  aria-pressed={activeCategory === category.id}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="font-semibold text-sm mb-1 leading-tight">{category.name}</div>
                  <div
                    className={`text-xs ${
                      activeCategory === category.id ? "text-red-100" : "text-gray-500"
                    }`}
                  >
                    {categoryStats[category.id]} items
                  </div>
                </button>
              ))}
            </div>
          </div>{" "}
        </nav>

        {/* Menu Items Grid with Loading State */}
        <section className="mb-12">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="relative">
                  {/* Popular/New badges */}
                  {item.isPopular && (
                    <div className="absolute -top-2 -right-2 z-10 bg-restaurant-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Popular
                    </div>
                  )}
                  {item.isNew && (
                    <div className="absolute -top-2 -right-2 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🆕 New
                    </div>
                  )}
                  <MenuCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No items found</h3>
              <p className="text-gray-500">
                This category is currently being updated with new delicious options!
              </p>
            </div>
          )}
        </section>

        {/* Enhanced Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <span>💰</span> Pricing Information
            </h3>
            <p className="text-blue-800 text-sm">
              Each additional topping <span className="font-bold text-blue-900">+1.00 €</span>
            </p>
            <p className="text-blue-700 text-xs mt-1">
              Prices include VAT • Free delivery over 20€
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
              <span>⏰</span> Preparation Time
            </h3>
            <p className="text-green-800 text-sm">
              Average preparation: <span className="font-bold text-green-900">15-25 minutes</span>
            </p>
            <p className="text-green-700 text-xs mt-1">Fresh ingredients • Made to order</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
