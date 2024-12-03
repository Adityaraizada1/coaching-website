"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewFooter from "@/components/NewFooter";
import Preloader from "@/components/Preloader";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Inspirational Notebook",
    description: "A notebook that motivates and inspires your daily journaling.",
    price: "Rs. 1,200",
    image: "/book1.jpeg",
  },
  {
    id: 2,
    name: "Productivity Planner",
    description: "Plan your day efficiently with this high-quality productivity planner.",
    price: "Rs. 1,200",
    image: "/book1.jpeg",
  },
  {
    id: 3,
    name: "Mindfulness Journal",
    description: "A guided journal to help you practice mindfulness and gratitude.",
    price: "Rs. 1,200",
    image: "/book1.jpeg",
  },
];

const Shop: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleUnavailableClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Auto-close popup after 3 seconds
  };

  return (
    <div className="relative">
      <Preloader />
      <Header />
      <main className={`py-16 px-4 sm:px-8 md:px-16 lg:px-32 mt-16 ${showPopup ? "blur-md" : ""}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight text-gray-800 tracking-wide">
          Welcome to Our <span className="text-purple-700 italic">Shop</span>
        </h1>
        <p className="mt-6 text-gray-700 text-center max-w-2xl text-lg md:text-xl leading-relaxed mx-auto">
          Discover a range of curated products to support your personal growth and professional journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-purple-700 mt-4">{product.price}</p>
                <button
                  className="mt-4 w-full px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors duration-300"
                  onClick={handleUnavailableClick}
                >
                  Currently Unavailable
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <NewFooter />

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white px-8 py-6 rounded-lg shadow-xl text-center max-w-xs w-full">
            <h2 className="text-xl font-bold text-red-500">Oops! Something went wrong. 🚧</h2>
            <p className="text-gray-600 mt-2">This feature is currently unavailable.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
