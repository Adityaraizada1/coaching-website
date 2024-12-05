"use client";

import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar, FaSearch } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Aditya Raizada",
    photo: "/student-2.jpg", // Replace with actual photo URL
    stars: 5,
    feedback:
      "Rakesh Sir's teaching style is amazing. His notes are concise and easy to understand, helping me tackle even the toughest topics with ease.",
  },
  {
    name: "Sheril Dhiman",
    photo: "/student-1.jpg", // Replace with actual photo URL
    stars: 5,
    feedback:
      "Rakesh Sir's notes and guidance have significantly boosted my understanding and confidence during exams.",
  },
  {
    name: "Prachi",
    photo: "/student-3.jpg", // Replace with actual photo URL
    stars: 4.5,
    feedback:
      "The notes are clear and well-organized. Rakesh Sir ensures every concept is easy to grasp.",
  },
  {
    name: "Amitti",
    photo: "/student-4.jpg", // Replace with actual photo URL
    stars: 4,
    feedback:
      "A fantastic mentor! The notes are incredibly helpful for revision and understanding key concepts.",
  },
];

const Testimonials: React.FC = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [randomTestimonial, setRandomTestimonial] = useState(testimonials[0]);

  // Simulate searching process
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isSearching) {
      interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * testimonials.length);
        setRandomTestimonial(testimonials[randomIndex]);
      }, 1000);

      setTimeout(() => {
        setIsSearching(false);
      }, 5000); // Searching lasts 5 seconds
    }

    return () => clearInterval(interval);
  }, [isSearching]);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill(null)
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
        {Array(emptyStars)
          .fill(null)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm" />
          ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Searching Animation */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <FaSearch className="text-purple-700 text-lg animate-rotate" />
          <p className="text-gray-600 text-sm italic">
            Still searching for more students...
          </p>
        </div>

        {/* Random Testimonial Display During Searching */}
        {isSearching && (
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={randomTestimonial.photo}
                alt={`${randomTestimonial.name}'s profile`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-800">
                  {randomTestimonial.name}
                </h3>
                {renderStars(randomTestimonial.stars)}
              </div>
            </div>
            <div className="text-left">
              <FaQuoteLeft className="text-purple-700 text-xl mb-2" />
              <p className="text-gray-600 text-sm italic">
                "{randomTestimonial.feedback}"
              </p>
            </div>
          </div>
        )}

        {/* Main Testimonials Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          What our students have <span className="text-purple-700">to say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Hear how Rakesh Sir's notes and teaching have made a difference.
        </p>

        {/* Testimonials Grid */}
        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isSearching ? "hidden" : "block"}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={testimonial.photo}
                  alt={`${testimonial.name}'s profile`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  {renderStars(testimonial.stars)}
                </div>
              </div>

              {/* Feedback */}
              <div className="text-left">
                <FaQuoteLeft className="text-purple-700 text-xl mb-2" />
                <p className="text-gray-600 text-sm italic">
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
