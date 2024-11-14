"use client";

import React, { useEffect, useState } from 'react';

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
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50 transition-opacity duration-500 opacity-100">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-8 border-t-8 border-purple-700 border-solid border-t-transparent rounded-full animate-spin-slow mb-4">
        </div>

        {/* Loading Message */}
        <p className="text-gray-700 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
