"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import ImageSlider from "../components/ImageSlider";
import StatCounter from "../components/StatCounter";

// Types for better type safety
interface SlideData {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  category: string;
  features: string[];
  isPopular?: boolean;
}

interface StatItem {
  id: string;
  number: string;
  label: string;
  icon: string;
  description: string;
}

// Enhanced slider data with categories
const sliderData: SlideData[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Stone oven pizza with melted cheese and fresh basil",
    caption: "Traditional Stone Oven Pizza",
    category: "Pizza",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Authentic Turkish pide with meat and vegetables",
    caption: "Authentic Turkish Pide",
    category: "Pide",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Fresh lahmacun with herbs and spices",
    caption: "Fresh Lahmacun",
    category: "Lahmacun",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Traditional Turkish soup with fresh ingredients",
    caption: "Homemade Turkish Soup",
    category: "Soup",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Grilled Turkish kebab with vegetables",
    caption: "Grilled Kebab Specialties",
    category: "Kebab",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Fresh baked Turkish bread from stone oven",
    caption: "Fresh Baked Bread",
    category: "Bread",
  },
];

// Enhanced specialties data
const specialties: SpecialtyItem[] = [
  {
    id: "pizza",
    title: "Stone Oven Pizza",
    description:
      "Crispy, authentic pizzas baked in our traditional stone oven with the finest ingredients and time-honored techniques.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Authentic stone oven pizza with melted cheese",
    link: "/menu",
    category: "Pizza",
    features: ["Stone Oven Baked", "Fresh Ingredients", "Traditional Recipe"],
    isPopular: true,
  },
  {
    id: "pide",
    title: "Turkish Pide",
    description:
      "Traditional boat-shaped breads topped with premium cheese, seasoned meat, and fresh vegetables from our local suppliers.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Traditional Turkish pide with meat and cheese",
    link: "/menu",
    category: "Pide",
    features: ["Boat-Shaped Bread", "Premium Toppings", "Local Ingredients"],
  },
  {
    id: "soup",
    title: "Traditional Soups",
    description:
      "Hearty, warming soups made with traditional Turkish recipes, fresh ingredients, and generations of culinary wisdom.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    alt: "Traditional Turkish soup with herbs and spices",
    link: "/menu",
    category: "Soup",
    features: ["Traditional Recipes", "Fresh Daily", "Family Heritage"],
  },
];

// Restaurant statistics
const stats: StatItem[] = [
  {
    id: "years",
    number: "15+",
    label: "Years of Excellence",
    icon: "⭐",
    description: "Serving authentic Turkish cuisine",
  },
  {
    id: "dishes",
    number: "50+",
    label: "Menu Items",
    icon: "🍽️",
    description: "Delicious options to choose from",
  },
  {
    id: "customers",
    number: "10K+",
    label: "Happy Customers",
    icon: "😊",
    description: "Satisfied with our service",
  },
  {
    id: "awards",
    number: "100%",
    label: "Halal Certified",
    icon: "✅",
    description: "Authentic and trustworthy",
  },
];

// Contact information
const contactInfo = {
  phone: {
    number: "062331709677",
    display: "06233 - 170 96 77",
  },
  hours: {
    weekdays: "8:00 - 22:00",
    closed: "Wednesdays",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Tadım Taş Fırın"
        subtitle="Experience authentic Turkish flavors from our traditional stone oven, where every dish tells a story of heritage and craftsmanship."
        backgroundImage="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=1200&h=800&fit=crop&q=80"
      />{" "}
      {/* Animated Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.id}
                stat={stat}
                speed={
                  index === 0 ? "slow" : index === 1 ? "normal" : index === 2 ? "fast" : "normal"
                }
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Image Slider Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Delicious Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the artistry and tradition behind every dish we create in our authentic
              Turkish kitchen
            </p>
          </header>{" "}
          <ImageSlider
            slides={sliderData}
            autoplay={true}
            autoplayDelay={4000}
            showNavigation={true}
            showPagination={false}
            className="mb-8"
          />
        </div>
      </section>
      {/* Featured Specialties Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the authentic taste of Turkey with our signature dishes, crafted using
              traditional recipes passed down through generations
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty) => (
              <div
                key={specialty.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Popular Badge */}
                {specialty.isPopular && (
                  <div className="absolute z-10 bg-restaurant-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg -mt-2 ml-4">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={specialty.alt}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{specialty.title}</h3>
                    <span className="bg-red-100 text-restaurant-red px-2 py-1 rounded-full text-xs font-semibold">
                      {specialty.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{specialty.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {specialty.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={specialty.link}
                    className="inline-flex items-center text-restaurant-red hover:text-red-700 font-semibold transition-colors group-hover:translate-x-1 duration-200"
                  >
                    View Full Menu
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Tadım Taş Fırın?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to bringing you the most authentic Turkish dining experience
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">🥖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Stone Oven</h3>
              <p className="text-gray-600">
                Our authentic stone oven creates the perfect crust and flavor that can&apos;t be
                replicated
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Halal Certified</h3>
              <p className="text-gray-600">
                All our ingredients and preparation methods are certified halal for your peace of
                mind
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Master Chefs</h3>
              <p className="text-gray-600">
                Our experienced Turkish chefs bring authentic flavors and traditional techniques
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">
                Every dish is prepared fresh daily using the finest local and imported ingredients
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-restaurant-red to-red-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience Authentic Turkish Flavors?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for the most authentic Turkish dining
            experience
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 bg-white text-restaurant-red px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>📋</span>
              <span>View Our Menu</span>
            </Link>

            <a
              href={`tel:${contactInfo.phone.number}`}
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-restaurant-red transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>📞</span>
              <span>{contactInfo.phone.display}</span>
            </a>
          </div>

          <div className="mt-8 text-red-200">
            <div className="text-sm">
              <div>Daily {contactInfo.hours.weekdays}</div>
              <div className="font-semibold">Closed {contactInfo.hours.closed}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
