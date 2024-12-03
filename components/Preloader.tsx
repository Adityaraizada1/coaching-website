"use client";

import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          <span className="block w-full h-full rounded-full border-4 border-t-transparent border-purple-500 animate-spin"></span>
          <span className="absolute inset-0 w-full h-full rounded-full border-4 border-t-transparent border-blue-400 animate-spin-slow"></span>
        </div>

        {/* Glowing Text */}
        <p className="text-white text-lg font-semibold tracking-wide animate-pulse">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Loading, please wait...
          </span>
        </p>
      </div>
    </div>
  );
};

export default Preloader;
