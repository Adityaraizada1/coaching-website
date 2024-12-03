import React from 'react';

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 text-center text-gray-800 mt-auto w-full py-6">
      <div className="px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Animated Message */}
        <p className="text-lg sm:text-xl font-semibold text-purple-800 animate-pulse">
          🚧 All chapters will be uploaded soon! 🚧
        </p>

        {/* Copyright and Designer Info */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Chemistry Expert. All rights reserved.
        </p>
        <p className="text-sm">
          Crafted with passion by{' '}
          <a
            href="https://www.instagram.com/adityaraizada_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 transition duration-300"
          >
            Aditya Raizada
          </a>
        </p>

        {/* Inspirational Tagline */}
        <p className="text-xs text-gray-500">
          Designed to inspire and educate, powered by a commitment to excellence.
        </p>
      </div>

      {/* Under Construction Dots Loader */}
      <div className="mt-4 flex justify-center items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-purple-600 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-pink-600 animate-bounce animation-delay-200"></div>
        <div className="w-4 h-4 rounded-full bg-red-600 animate-bounce animation-delay-400"></div>
      </div>

      {/* Animation Style for Bounce Delay */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </footer>
  );
};

export default NewFooter;
