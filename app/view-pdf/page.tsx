"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";

const ViewPdf: React.FC = () => {
  const searchParams = useSearchParams();
  const pdfUrl = searchParams.get("url");
  const router = useRouter(); // Use Next.js router for navigation

  if (!pdfUrl) {
    return <p className="text-xl text-gray-700">Sorry, no PDF URL provided!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100">
      <div className="flex flex-col items-center max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => router.back()} // Use Next.js router for navigation
          className="flex items-center mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center gap-2"
        >
          <FiArrowLeft className="text-xl transition-transform hover:-translate-x-1" />
          <span className="text-sm sm:text-base">Back to Notes</span>
        </button>

        {/* Warning Message */}
        <div className="flex items-center bg-yellow-100 text-yellow-700 p-4 rounded-lg shadow-md mb-6 w-full">
          <FiAlertCircle className="text-2xl mr-3" />
          <p className="text-sm sm:text-base">
            If the "Back to Notes" button doesn't work, please reload the page or go to the main notes page manually.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0 rounded-lg shadow-md"
            title="PDF Viewer"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const ViewPdfWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading PDF...</div>}>
      <ViewPdf />
    </Suspense>
  );
};

export default ViewPdfWithSuspense;
