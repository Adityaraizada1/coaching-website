// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-6 mt-10">
      <div className="flex flex-wrap items-center justify-around text-center space-y-4 md:space-y-0">
        <div>
          <p className="text-2xl font-bold text-purple-700">2k+</p>
          <p className="text-gray-600">Happy Students</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-700">150+</p>
          <p className="text-gray-600">Offline Classes</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-700">16+</p>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-700">16+</p>
          <p className="text-gray-600">Professional Teachers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
