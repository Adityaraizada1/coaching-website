"use client";

import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 100);

    // Preloader duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Loading Text */}
      <p className="text-white text-lg font-semibold tracking-wide animate-pulse mb-4">
        Setting up your lab...
      </p>

      {/* Thin Progress Bar */}
      <div className="w-3/4 max-w-md h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
