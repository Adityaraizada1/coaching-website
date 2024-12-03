"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi"; // Importing the left arrow icon

const ViewPdf: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pdfUrl = searchParams.get("url");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 px-4">
      <div className="flex flex-col items-center max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => router.push("/class3")} // Navigate to /class3 page
          className="flex items-center mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center gap-2"
        >
          <FiArrowLeft className="text-xl transition-transform duration-300 hover:-translate-x-1" />
          <span className="text-sm sm:text-base">Back to Notes</span>
        </button>

        {/* PDF Viewer */}
        {pdfUrl ? (
          <div className="relative w-full h-[80vh] overflow-hidden">
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0 rounded-lg shadow-md"
              title="PDF Viewer"
            ></iframe>
          </div>
        ) : (
          <p className="text-xl text-gray-700 text-center">
            Sorry, no PDF URL provided!
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewPdf;
