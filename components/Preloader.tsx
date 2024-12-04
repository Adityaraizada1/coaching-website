"use client";

import React, { useEffect, useState } from "react";
import { GiChemicalDrop, GiTestTubes, GiAtom, GiFlake } from "react-icons/gi";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIcon, setCurrentIcon] = useState<React.ReactNode>(null);
  const [progress, setProgress] = useState(0);

  const chemistryIcons = [
    <GiChemicalDrop className="text-6xl text-purple-400 flicker" />,
    <GiTestTubes className="text-6xl text-blue-400 flicker" />,
    <GiAtom className="text-6xl text-green-400 flicker" />,
    <GiFlake className="text-6xl text-yellow-400 flicker" />, // Replaced GiFlask with GiFlake
  ];

  useEffect(() => {
    // Randomly pick a chemistry icon
    const randomIcon = chemistryIcons[Math.floor(Math.random() * chemistryIcons.length)];
    setCurrentIcon(randomIcon);

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
      <div className="flex flex-col items-center gap-6">
        {/* Chemistry Icon */}
        <div>{currentIcon}</div>

        {/* Loading Text */}
        <p className="text-white text-lg font-semibold tracking-wide animate-pulse">
          Setting up your lab...
        </p>

        {/* Thin Progress Bar */}
        <div className="w-3/4 h-0.5 bg-gray-700 mt-4">
          <div
            className="h-0.5 bg-gradient-to-r from-white to-gray-100 transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
