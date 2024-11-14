import React from 'react';

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-800">
        <p className="text-2xl font-semibold mb-4">
          Chemistry Expert - Empowering Your Future
        </p>
        <p className="text-sm mb-4 text-gray-600">
          © {new Date().getFullYear()} Chemistry Expert. All rights reserved.
        </p>
        <p className="text-sm">
          Crafted with passion by{' '}
          <a
            href="https://www.instagram.com/adityaraizada_/"
            className="text-purple-600 hover:text-purple-800 transition duration-300"
          >
            Aditya Raizada
          </a>
        </p>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4">
        <p className="text-xs text-center text-gray-500">
          Designed to inspire and educate, powered by a commitment to excellence.
        </p>
      </div>
    </footer>
  );
};

export default NewFooter;
