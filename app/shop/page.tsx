
"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import Preloader from "@/components/Preloader";

const Contact: React.FC = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading bar progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 2000); // Adjust the speed as necessary

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-center text-purple-800 mb-8">
          Contact Us
        </h1>

        {/* Under Construction Message */}
        <div className="text-center text-gray-600 mb-8">
          <h3 className="text-lg font-medium">This page is under construction.</h3>
          <p>We are working hard to get it ready and it will be available in coming weeks!</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 mb-6">
          <div
            className="bg-purple-600 h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="text-center text-gray-600">
          <p>{progress}% completed</p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Contact;