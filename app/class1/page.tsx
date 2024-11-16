"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiBook, FiClipboard, FiEdit, FiMenu, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Class10Page: React.FC = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>(""); // URL of the PDF to display
  const [isPdfVisible, setIsPdfVisible] = useState<boolean>(false); // To toggle PDF visibility
  const [selectedSection, setSelectedSection] = useState<string>(""); // Current selected section
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page for pagination
  const cardsPerPage = 5; // Number of cards to display per page

  const totalCards = 50; // Total cards for each section

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle sidebar link click to show the resource section
  const handleSidebarLinkClick = (section: string) => {
    setSelectedSection(section); // Set selected section for card filtering
    setCurrentPage(1); // Reset to first page when changing section
    setIsSidebarOpen(false); // Close the sidebar after selecting
  };

  // Handle card click to load the PDF
  const handleCardClick = (pdfPath: string) => {
    setPdfUrl(pdfPath); // Set the PDF URL based on clicked card
    setIsPdfVisible(true); // Show the PDF viewer
  };

  // Close the PDF viewer
  const closePdfViewer = () => {
    setIsPdfVisible(false);
    setPdfUrl(""); // Reset the PDF URL
    setSelectedSection(""); // Reset selected section
  };

  // Generate cards dynamically for each section
  const generateCards = () => {
    const cards = [];
    for (let i = 1; i <= totalCards; i++) {
      const pdfPath = `/path/to/${selectedSection}_pdf_${i}.pdf`; // Dynamically generate PDF path
      cards.push(
        <div
          key={i}
          className="cursor-pointer bg-purple-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300"
          onClick={() => handleCardClick(pdfPath)}
        >
          <FiBook className="text-3xl mb-4" />
          <h3 className="text-xl font-semibold">{`${selectedSection} PDF ${i}`}</h3>
          <p className="mt-2 text-sm">Click to view the PDF of {selectedSection} PDF {i}.</p>
        </div>
      );
    }
    return cards;
  };

  // Get the current page cards to display based on pagination
  const paginateCards = () => {
    const cards = generateCards();
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.slice(startIndex, endIndex);
  };

  // Handle page navigation
  const handlePageChange = (direction: string) => {
    if (direction === "next" && currentPage < Math.ceil(totalCards / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render different cards based on the selected sidebar section
  const renderCards = () => {
    if (selectedSection === "chapter1") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {paginateCards()}
        </div>
      );
    } else if (selectedSection === "samplepapers") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {paginateCards()}
        </div>
      );
    } else if (selectedSection === "examtips") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {paginateCards()}
        </div>
      );
    } else {
      return (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Select a Section</h2>
          <p className="text-lg text-gray-700 mb-6">Please select a section from the sidebar to view the resources.</p>
        </div>
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`w-64 bg-gradient-to-b from-purple-600 to-purple-400 p-6 text-white shadow-lg transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed md:relative top-0 left-0 bottom-0 z-10 md:block ease-in-out duration-300`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Class 10 Resources</h2>
          <button className="text-white md:hidden" onClick={toggleSidebar}>
            <FiX className="text-2xl" />
          </button>
        </div>
        <ul>
          <li
            className="mb-4 flex items-center cursor-pointer hover:bg-purple-700 p-2 rounded-lg transition-colors"
            onClick={() => handleSidebarLinkClick("chapter1")}
          >
            <FiBook className="mr-3" /> Chapter 1 Notes
          </li>
          <li
            className="mb-4 flex items-center cursor-pointer hover:bg-purple-700 p-2 rounded-lg transition-colors"
            onClick={() => handleSidebarLinkClick("samplepapers")}
          >
            <FiClipboard className="mr-3" /> Sample Papers
          </li>
          <li
            className="mb-4 flex items-center cursor-pointer hover:bg-purple-700 p-2 rounded-lg transition-colors"
            onClick={() => handleSidebarLinkClick("examtips")}
          >
            <FiEdit className="mr-3" /> Exam Tips
          </li>
        </ul>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className="text-purple-600">
          <FiMenu className="text-3xl" />
        </button>
      </div>

      {/* Content Area */}
      <div className={`flex-1 p-8 bg-white transition-all duration-300 ${isSidebarOpen ? "blur-sm" : ""}`}>
        <button
          className="mb-6 flex items-center text-purple-600 hover:text-purple-800 transition-colors"
          onClick={() => router.back()}
        >
          <FiArrowLeft className="mr-2" /> Back
        </button>
        <h1 className="text-4xl font-semibold text-purple-700 mb-6">Class 10th Study Materials</h1>
        <p className="text-lg text-gray-700 mb-6">Welcome to the Class 10 page! Here you'll find all the resources you need to prepare for your exams.</p>

        {/* Display the PDF viewer (iframe) */}
        {isPdfVisible && pdfUrl && (
          <div className="w-full h-[600px] mt-6 relative shadow-lg rounded-lg">
            <button
              className="absolute top-4 right-4 bg-purple-600 text-white p-2 rounded-full"
              onClick={closePdfViewer}
            >
              X
            </button>
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="PDF Viewer"
            />
          </div>
        )}

        {/* Display cards for the selected section */}
        {renderCards()}

        {/* Pagination Controls */}
        {selectedSection && !isPdfVisible && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => handlePageChange("prev")}
              className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              <FiChevronLeft className="mr-2" /> Previous
            </button>
            <span className="text-lg text-gray-700">
              Page {currentPage} of {Math.ceil(totalCards / cardsPerPage)}
            </span>
            <button
              onClick={() => handlePageChange("next")}
              className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentPage === Math.ceil(totalCards / cardsPerPage)}
            >
              Next <FiChevronRight className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Class10Page;
