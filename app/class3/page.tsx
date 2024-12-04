"use client";

import React, { useState, useEffect } from "react";
import { FiChevronDown, FiAlertCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ChemistryResourcesPage: React.FC = () => {
  const router = useRouter();
  const [openTopic, setOpenTopic] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState("");
  const [mobileViewWarning, setMobileViewWarning] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsMobile(/android|iphone|ipad|ipod|mobile/i.test(userAgent));
  }, []);

  const toggleDropdown = (id: number) => {
    setOpenTopic(openTopic === id ? null : id);
  };

  const handleDownload = (fileName: string) => {
    setDownloadMessage(`You have downloaded: ${fileName}`);
    setTimeout(() => setDownloadMessage(""), 3000);
  };

  const handleViewClick = (e: React.MouseEvent, pdfUrl: string) => {
    if (isMobile) {
      e.preventDefault();
      setMobileViewWarning(true);
      setTimeout(() => setMobileViewWarning(false), 3000);
    } else {
      window.open(`/view-pdf?url=${encodeURIComponent(pdfUrl)}`, "_blank");
    }
  };

  const chemistryTopics = [
    {
      id: 3,
      topic: "Chemical Kinetics",
      pdfs: [
        { id: "3a", title: "10 year", url: "/class12/chemical-kinetics/Chapter-4-Chemical-Kinetics.pdf" },
        { id: "3b", title: "MCQs", url: "/class12/chemical-kinetics/Chemical-kinetics-MCQs.pdf" },
        { id: "3c", title: "Marks Wise Questions", url: "/class12/chemical-kinetics/Marks-wise-Questions.pdf" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 justify-center items-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-green-600 mb-2">
            Chemistry Resources
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            Click on a topic to view or download related PDFs.
          </p>
          {isMobile && (
            <p className="mt-2 text-red-500 text-sm flex items-center justify-center gap-2">
              <FiAlertCircle className="text-lg" />
              PDF viewing may not work on mobile devices.
            </p>
          )}
        </div>

        {/* Topics */}
        <ul className="space-y-4">
          {chemistryTopics.map((topic) => (
            <li key={topic.id} className="bg-gray-100 rounded-lg shadow-sm">
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors rounded-lg"
                onClick={() => toggleDropdown(topic.id)}
              >
                <span className="text-gray-800 font-medium">{topic.topic}</span>
                <FiChevronDown
                  className={`text-lg sm:text-xl text-gray-600 transition-transform ${
                    openTopic === topic.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                  openTopic === topic.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="space-y-2 mt-2 px-4 pb-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {topic.pdfs.map((pdf) => (
                    <li
                      key={pdf.id}
                      className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-sm sm:text-base text-gray-800">{pdf.title}</span>
                      <div className="flex space-x-4">
                        <a
                          href={`/view-pdf?url=${encodeURIComponent(pdf.url)}`}
                          onClick={(e) => handleViewClick(e, pdf.url)}
                          className="text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                        >
                          View
                        </a>
                        <a
                          href={pdf.url}
                          download
                          onClick={() => handleDownload(pdf.title)}
                          className="text-sm sm:text-base text-green-600 hover:text-green-800 transition-colors"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-green-600 text-white px-4 py-2 w-full sm:w-auto rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => router.push("/notes")}
          >
            Back to Main Notes
          </button>
        </div>

        {/* Download Message */}
        {downloadMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
            {downloadMessage}
          </div>
        )}

        {/* Mobile View Warning */}
        {mobileViewWarning && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center w-full">
              <FiAlertCircle className="text-red-500 text-4xl mb-4" />
              <p className="text-gray-700 text-sm sm:text-base">
                Sorry, you can't view the PDF on a mobile device. Please download it instead.
              </p>
              <button
                onClick={() => setMobileViewWarning(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChemistryResourcesPage;
