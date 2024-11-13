// components/NewFooter.tsx
import React from 'react';

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
        <p className="text-xl font-semibold mb-4">
          Chemistry Expert - Empowering Your Future
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Chemistry Expert.
        </p>
        <p className="text-sm mt-2">
          Crafted with passion by{' '}
          <a
            href="https://www.instagram.com/adityaraizada_/"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Aditya Raizada
          </a>
        </p>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4">
        <p className="text-xs text-gray-500">
          Designed to inspire and educate, powered by a commitment to excellence.
        </p>
      </div>
    </footer>
  );
};

export default NewFooter;
