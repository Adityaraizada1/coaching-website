"use client";

// Import necessary components
import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import NewFooter from '@/components/NewFooter';
import { FiArrowLeft } from 'react-icons/fi';

const CategoryDetail: React.FC = () => {
  const router = useRouter();

  // Card data for different classes
  const classes = [
    { name: 'Class 10th', description: 'Important resources and notes for Class 10th students.', path: '/class1' },
    { name: 'Class 11th', description: 'Detailed guides, sample papers, and notes for Class 11th.', path: '/class2' },
    { name: 'Class 12th', description: 'Comprehensive study materials and exam tips for Class 12th.', path: '/class3' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-6 bg-gray-100 flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">Choose Your Class</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <div
                key={cls.name}
                className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition cursor-pointer"
                onClick={() => router.push(cls.path)}
              >
                <h2 className="text-xl font-semibold text-purple-700 mb-2">{cls.name}</h2>
                <p className="text-gray-600">{cls.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default CategoryDetail;
