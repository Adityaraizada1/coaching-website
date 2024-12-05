"use client";

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const AnimatedCounter: React.FC<{ target: number; suffix?: string; animateRandom?: boolean }> = ({
  target,
  suffix = "",
  animateRandom = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (animateRandom) {
      // Animate up and down randomly
      interval = setInterval(() => {
        setCount((prev) => {
          const randomChange = Math.floor(Math.random() * 10 - 5); // Random fluctuation: -5 to +5
          const newCount = Math.max(target + randomChange, target); // Ensure it stays above or equal to target
          return newCount;
        });
      }, 500);
    } else {
      // Normal animation to reach the target
      const duration = 2000; // Animation duration in milliseconds
      const stepTime = Math.max(Math.floor(duration / target), 10); // Step duration

      let current = 0;
      const timer = setInterval(() => {
        current += 1;
        if (current > target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(current);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }

    return () => clearInterval(interval);
  }, [target, animateRandom]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Footer: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate the "loading complete" after 5 seconds
    const timer = setTimeout(() => setLoadingComplete(true), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gray-50 py-6 mt-10">
      <div className="flex flex-wrap items-center justify-around text-center space-y-4 md:space-y-0">
        <div>
          <p className="text-2xl font-bold text-purple-700">
            <AnimatedCounter target={2000} suffix="+" animateRandom={loadingComplete} />
          </p>
          <p className="text-gray-600">Happy Students</p>
          <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
            <FaSearch className="text-gray-500 animate-rotate" /> Still searching for students
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-700">
            <AnimatedCounter target={15} suffix="+" />
          </p>
          <p className="text-gray-600">Years Experience</p>
          <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
            <FaSearch className="text-gray-500 animate-rotate" /> Still searching for experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
