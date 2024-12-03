// /app/chemistry/page.tsx
"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import ConstructionFooter from "@/components/ConstructionFooter";

const ChemistryResourcesPage: React.FC = () => {
  const router = useRouter();

  // Sample data for Chemistry PDF resources
  const chemistryTopics = [
    // {
    //   id: 1,
    //   topic: "Solutions",
    //   pdfs: [
    //     {
    //       id: "1a",
    //       title: "10 Years Question",
    //       url: "/class12/solution/10-year-question.pdf",
    //     },
    //     {
    //       id: "1b",
    //       title: "Assignment - 1",
    //       url: "/class12/solution/Assignment-1.pdf",
    //     },
    //     {
    //       id: "1c",
    //       title: "Solutions MCQs - 1",
    //       url: "/class12/solution/Solutions-MCQs-1.pdf",
    //     },
    //     {
    //       id: "1d",
    //       title: "Solutions MCQs - 2",
    //       url: "/clas12/solution/Solutions-MCQs-2.pdf",
    //     },
    //     {
    //       id: "1e",
    //       title: "Important Notes",
    //       url: "/class12/solution/atomic-models.pdf",
    //     },
    //     {
    //       id: "1f",
    //       title: "Numericals",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1g",
    //       title: "Mark Wise Questions",
    //       url: "/clas12/solution/solutions-10-years.pdf",
    //     },
    //     {
    //       id: "1h",
    //       title: "Practice Questions",
    //       url: "/class12/solution/atomic-models.pdf",
    //     },
    //     {
    //       id: "1i",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1j",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1k",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1l",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1m",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   topic: "Electrochemistry",
    //   pdfs: [
    //     {
    //       id: "2a",
    //       title: "Aldehydes and Ketones",
    //       url: "/pdfs/aldehydes-ketones.pdf",
    //     },
    //     {
    //       id: "2b",
    //       title: "Carboxylic Acids",
    //       url: "/pdfs/carboxylic-acids.pdf",
    //     },
    //     { id: "2c", title: "Amines", url: "/pdfs/amines.pdf" },
    //   ],
    // },
    {
      id: 3,
      topic: "Chemical Kinetics",
      pdfs: [
        { id: "3a", title: "10 year", url: "/class12/chemical-kinetics/Chapter-4-Chemical-Kinetics.pdf" },
        {
          id: "3b",
          title: "MCQs",
          url: "/class12/chemical-kinetics/Chemical-kinetics-MCQs.pdf",
        },
        {
          id: "3c",
          title: "Marks Wise Questions",
          url: "/class12/chemical-kinetics/Marks-wise-Questions.pdf",
        },
        {
          id: "3d",
          title: "Practice Questions",
          url: "/class12/chemical-kinetics/Practice-Questions.pdf",
        },
        {
          id: "3e",
          title: "Prev. year Question Paper",
          url: "/class12/chemical-kinetics/Prevoius-year-Questions.pdf",
        },
        {
          id: "3f",
          title: "PYQs",
          url: "/class12/chemical-kinetics/PYQs.pdf",
        },
        {
          id: "3g",
          title: "Test Paper 1",
          url: "/class12/chemical-kinetics/Test-Paper-01.pdf",
        },
        {
          id: "3h",
          title: "Test Paper 2",
          url: "/class12/chemical-kinetics/Test-Paper-02.pdf",
        },
        {
          id: "3i",
          title: "Test Paper 3",
          url: "/class12/chemical-kinetics/Test-Paper-03.pdf",
        },
        {
          id: "3j",
          title: "Test Paper 4",
          url: "/class12/chemical-kinetics/Test-Paper-04.pdf",
        },
        {
          id: "3k",
          title: "Test Paper 5",
          url: "/class12/chemical-kinetics/Test-Paper-05.pdf",
        },
        {
          id: "3l",
          title: "VBQs",
          url: "/class12/chemical-kinetics/VBQs.pdf",
        },
        {
          id: "3m",
          title: "WorkSheet 1",
          url: "/class12/chemical-kinetics/W1.pdf",
        },
        {
          id: "3n",
          title: "WorkSheet 2",
          url: "/class12/chemical-kinetics/W2.pdf",
        },
      ],
    },
    // {
    //   id: 4,
    //   topic: "d & f Block Elements",
    //   pdfs: [
    //     {
    //       id: "4a",
    //       title: "Coordination Compounds",
    //       url: "/pdfs/coordination-compounds.pdf",
    //     },
    //     {
    //       id: "4b",
    //       title: "Periodic Properties",
    //       url: "/pdfs/periodic-properties.pdf",
    //     },
    //     {
    //       id: "4c",
    //       title: "d-Block Elements",
    //       url: "/pdfs/d-block-elements.pdf",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   topic: "Co-ordination compounds",
    //   pdfs: [
    //     { id: "5a", title: "VSEPR Theory", url: "/pdfs/vsepr-theory.pdf" },
    //     { id: "5b", title: "Hybridization", url: "/pdfs/hybridization.pdf" },
    //     {
    //       id: "5c",
    //       title: "Molecular Orbital Theory",
    //       url: "/pdfs/molecular-orbital-theory.pdf",
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   topic: "Haloalkenes & Haloarenes",
    //   pdfs: [
    //     { id: "6a", title: "Adsorption", url: "/pdfs/adsorption.pdf" },
    //     { id: "6b", title: "Catalysis", url: "/pdfs/catalysis.pdf" },
    //     { id: "6c", title: "Colloids", url: "/pdfs/colloids.pdf" },
    //   ],
    // },
    // {
    //   id: 7,
    //   topic: "Alcohols, Phenols & Ethers",
    //   pdfs: [
    //     {
    //       id: "1a",
    //       title: "10 Years Question",
    //       url: "/class12/solution/10-year-question.pdf",
    //     },
    //     {
    //       id: "1b",
    //       title: "Assignment - 1",
    //       url: "/class12/solution/Assignment-1.pdf",
    //     },
    //     {
    //       id: "1c",
    //       title: "Solutions MCQs - 1",
    //       url: "/class12/solution/Solutions-MCQs-1.pdf",
    //     },
    //     {
    //       id: "1d",
    //       title: "Solutions MCQs - 2",
    //       url: "/clas12/solution/Solutions-MCQs-2.pdf",
    //     },
    //     {
    //       id: "1e",
    //       title: "Important Notes",
    //       url: "/class12/solution/atomic-models.pdf",
    //     },
    //     {
    //       id: "1f",
    //       title: "Numericals",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1g",
    //       title: "Mark Wise Questions",
    //       url: "/clas12/solution/solutions-10-years.pdf",
    //     },
    //     {
    //       id: "1h",
    //       title: "Practice Questions",
    //       url: "/class12/solution/atomic-models.pdf",
    //     },
    //     {
    //       id: "1i",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1j",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1k",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1l",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //     {
    //       id: "1m",
    //       title: "Prev. year Question Paper",
    //       url: "/class12/solution/colligative-properties.pdf",
    //     },
    //   ],
    // },
    // {
    //   id: 8,
    //   topic: "Aldehydes, Ketones & Carboxylic Acids",
    //   pdfs: [
    //     { id: "8a", title: "Proteins", url: "/pdfs/proteins.pdf" },
    //     { id: "8b", title: "Carbohydrates", url: "/pdfs/carbohydrates.pdf" },
    //     { id: "8c", title: "Nucleic Acids", url: "/pdfs/nucleic-acids.pdf" },
    //   ],
    // },
    // {
    //   id: 9,
    //   topic: "Amines",
    //   pdfs: [
    //     {
    //       id: "9a",
    //       title: "Addition Polymers",
    //       url: "/pdfs/addition-polymers.pdf",
    //     },
    //     {
    //       id: "9b",
    //       title: "Condensation Polymers",
    //       url: "/pdfs/condensation-polymers.pdf",
    //     },
    //   ],
    // },
    // {
    //   id: 10,
    //   topic: "Biomolecules",
    //   pdfs: [
    //     {
    //       id: "1a",
    //       title: "10 Years Question",
    //       url: "/pdfs/solutions-10-years.pdf",
    //     },
    //     {
    //       id: "1b",
    //       title: "Advanced Atomic Models",
    //       url: "/pdfs/atomic-models.pdf",
    //     },
    //     {
    //       id: "1c",
    //       title: "Colligative Properties",
    //       url: "/pdfs/colligative-properties.pdf",
    //     },
    //   ],
    // },
  ];

  const [openTopic, setOpenTopic] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenTopic(openTopic === id ? null : id); // Toggle the dropdown
  };

  return (
    <div className="flex min-h-screen bg-gray-50 justify-center items-center px-4">
      {/* Content Area */}
      <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-lg shadow-lg w-full max-w-3xl">
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-semibold text-green-600 mb-4 text-center">
          Chemistry Resources
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 text-center">
          Click on a topic to view or download related PDFs.
        </p>

        {/* Topics with Dropdowns */}
        <ul className="w-full space-y-4">
          {chemistryTopics.map((topic) => (
            <li key={topic.id} className="bg-gray-100 rounded-lg shadow-sm">
              {/* Topic Header */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors rounded-lg"
                onClick={() => toggleDropdown(topic.id)}
              >
                <span className="text-gray-800 font-medium">{topic.topic}</span>
                <FiChevronDown
                  className={`text-xl text-gray-600 transition-transform ${openTopic === topic.id ? "rotate-180" : ""
                    }`}
                />
              </div>

              {/* Dropdown Content */}
              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${openTopic === topic.id ? "max-h-96" : "max-h-0"
                  }`}
              >
                <ul className="space-y-2 mt-2 px-4 pb-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {topic.pdfs.map((pdf) => (
                    <li
                      key={pdf.id}
                      className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-gray-800">{pdf.title}</span>
                      <div className="flex space-x-4">
                        <a
                          href={`/view-pdf?url=${encodeURIComponent(pdf.url)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          View
                        </a>
                        <a
                          href={pdf.url}
                          download
                          className="text-green-600 hover:text-green-800 transition-colors"
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
        <button
          className="mt-8 bg-green-600 text-white px-4 py-2 w-full sm:w-auto rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => router.push("/notes")}
        >
          Back to Main Notes
        </button>
      </div>

    </div>
  );
};

export default ChemistryResourcesPage;
