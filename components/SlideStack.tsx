"use client";

import { useState, useEffect } from 'react';

const testimonials = [
  { name: 'John Doe', feedback: 'Great experience! Helped me a lot.', stars: 5 },
  { name: 'Jane Smith', feedback: 'Very insightful and supportive.', stars: 4 },
  { name: 'Sam Wilson', feedback: 'Good guidance and practical advice.', stars: 4.5 },
];

const SlideStack: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full max-w-3xl mt-12">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`absolute transition-transform duration-700 transform ${index === currentIndex ? 'translate-y-0 opacity-100 z-10' : 'translate-y-full opacity-0 z-0'} bg-white p-6 rounded-lg shadow-lg`}
          style={{ gap: '16px', width: '90%', margin: '8px auto' }}
        >
          <p className="text-lg md:text-xl italic text-gray-800">"{testimonial.feedback}"</p>
          <p className="mt-4 text-right text-purple-700 font-semibold">- {testimonial.name}</p>
          <div className="flex justify-center mt-2">
            {Array.from({ length: Math.floor(testimonial.stars) }, (_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            {testimonial.stars % 1 !== 0 && <span className="text-yellow-500">☆</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideStack;