"use client";

import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import Preloader from "@/components/Preloader";
import React, { useState } from "react";

const Notes: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const pdfs = [
    { name: "+2 Amines", filename: "+2_amines_notes.pdf" },
    { name: "Sample PDF 2", filename: "sample2.pdf" },
    { name: "Sample PDF 3", filename: "sample3.pdf" },
    { name: "Chemistry Notes", filename: "chemistry_notes.pdf" },
    { name: "Physics Concepts", filename: "physics_concepts.pdf" },
    // Add more PDFs as needed
  ];

  // Filter PDFs based on search query
  const filteredPdfs = pdfs.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePdfClick = (pdfName: string) => {
    setSelectedPdf(pdfName);
  };

  const handleCloseModal = () => {
    setSelectedPdf(null);
  };

  return (
    <>
      <Preloader />
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-center text-purple-800 mb-8">
          Notes and Resources
        </h1>

        {/* Hot Chapter Heading */}
        <h3 className="text-lg text-gray-600 mb-6 font-medium">Hot Chapters</h3>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            className="border-2 border-gray-300 px-6 py-3 rounded-lg w-full max-w-lg shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
            placeholder="Search for a PDF..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* List of PDFs */}
        {searchQuery ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPdfs.length > 0 ? (
              filteredPdfs.map((pdf) => (
                <button
                  key={pdf.filename}
                  onClick={() => handlePdfClick(pdf.filename)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition transform hover:scale-105 shadow-lg"
                >
                  {pdf.name}
                </button>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No PDFs found</p>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600">Start typing to search for PDFs</p>
        )}

        {/* Modal for full-screen PDF display */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
            <div className="relative w-full max-w-4xl h-full sm:h-[90vh] rounded-lg overflow-hidden bg-white shadow-lg">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
              >
                &#x2715;
              </button>
              {/* Use iframe instead of embed */}
              <iframe
                src={`/${selectedPdf}`}
                width="100%"
                height="100%"
                className="rounded-lg"
                style={{
                  objectFit: "contain", // Ensures the PDF is contained within the container
                  maxHeight: "90vh", // Restricts the height on mobile devices
                  maxWidth: "100%", // Ensures it doesn't overflow the container on smaller screens
                }}
              />
            </div>
          </div>
        )}
      </div>
      <NewFooter />
    </>
  );
};

export default Notes;
