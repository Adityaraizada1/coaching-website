"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FiAlertTriangle } from "react-icons/fi";

const Class11Page: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-50 justify-center items-center">
      {/* Content Area */}
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="mb-6 text-red-500">
          <FiAlertTriangle className="text-6xl" />
        </div>

        <h1 className="text-4xl font-semibold text-purple-700 mb-6">Class 11th Resources</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Sorry, there are no files available for Class 11 at the moment. Please contact the owner of the site to request the files.
        </p>

        {/* Back Button */}
        <button
          className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          onClick={() => router.push("notes")}
        >
          Back to Main Notes
        </button>
      </div>
    </div>
  );
};

export default Class11Page;
