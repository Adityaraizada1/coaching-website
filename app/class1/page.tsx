"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiAlertTriangle } from "react-icons/fi";

const Class11Page: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showYippy, setShowYippy] = useState(false);
  const [errorMessage] = useState(() => {
    // Generate the error message once when the page loads
    const errorMessages = [
      "Oops! No resources found for Class 10.",
      "We're working hard to upload Class 10 files. Stay tuned!",
      "Sorry, the requested files are not available yet.",
      "No files here! Maybe check back later?",
      "Class 10 resources are currently unavailable. Contact the admin for updates.",
      "Hmm, it seems we're missing the files you're looking for.",
      "The cupboard is empty! No Class 10 files available.",
    ];
    return errorMessages[Math.floor(Math.random() * errorMessages.length)];
  });

  // Simulate loading state with "Yippy!" message
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setShowYippy(true);

      const yippyTimeout = setTimeout(() => {
        setShowYippy(false);
      }, 2000); // Show "Yippy!" message for 2 seconds

      return () => clearTimeout(yippyTimeout);
    }, 3000); // Loader duration (3 seconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 justify-center items-center px-4">
      {loading ? (
        // Loader Section
        <div className="flex flex-col items-center">
          <div className="loader">
            <div className="loader-circle"></div>
            <div className="loader-text">Loading</div>
          </div>
        </div>
      ) : showYippy ? (
        // "Yippy!" Message
        <div className="flex flex-col items-center animate-bounce">
          <h1 className="text-6xl font-bold text-green-600 mb-4">🎉 Yippy! 🎉</h1>
          <p className="text-lg text-gray-700">Here comes your page!</p>
        </div>
      ) : (
        // Content Section
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg w-full max-w-2xl">
          <div className="mb-6 text-red-500">
            <FiAlertTriangle className="text-6xl" />
          </div>

          <h1 className="text-4xl font-semibold text-purple-700 mb-4 text-center">
            Class 11th Resources
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">{errorMessage}</p>

          {/* Back Button */}
          <button
            className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
            onClick={() => router.push("notes")}
          >
            Back to Main Notes
          </button>
        </div>
      )}

      {/* Loader Animation Styles */}
      <style jsx>{`
        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .loader-circle {
          width: 80px;
          height: 80px;
          border: 6px solid transparent;
          border-top-color: #6b46c1;
          border-right-color: #6b46c1;
          border-radius: 50%;
          animation: spin 1.5s linear infinite;
        }

        .loader-text {
          margin-top: 20px;
          font-size: 1.5rem;
          font-weight: bold;
          color: #6b46c1;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Class11Page;
