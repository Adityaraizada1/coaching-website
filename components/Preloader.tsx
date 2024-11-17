"use client";

import React, { useEffect, useState } from 'react';
import { FiLoader } from 'react-icons/fi';

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
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center">
        {/* Animated Spinner */}
        <div className="w-16 h-16">
          <FiLoader className="animate-spin text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500" style={{ fontSize: '3.5rem' }} />
        </div>

        {/* Loading Message */}
        <p className="text-white text-lg font-semibold mt-4 animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
