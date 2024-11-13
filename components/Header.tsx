"use client";

// components/Header.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header for Mobile and Desktop */}
      <header className="flex items-center justify-between p-4 md:p-6 sticky top-0 z-20">
        <div className="text-2xl font-bold text-purple-700">Chemistry Expert</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-black" />
          ) : (
            <FaBars className="text-2xl text-purple-700" />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center justify-between p-4 md:p-6 sticky top-0 z-20">
          <a href="/" className="text-gray-600 text-sm hover:text-purple-700">Home</a>
          <a href="/about" className="text-gray-600 text-sm hover:text-purple-700">About us</a>
          <a href="/notes" className="text-gray-600 text-sm hover:text-purple-700">Get Notes!</a>
          <a href="/contact" className="text-gray-600 text-sm hover:text-purple-700">Contact</a>
        </nav>
      </header>

      {/* Sidebar Menu (Visible only on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-30 transition-transform transform md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div className="text-2xl font-bold text-purple-700">Chemistry Expert</div>
          <div className="cursor-pointer" onClick={toggleMenu}></div>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <a href="/" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>Home</a>
          <a href="/about" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>About us</a>
          <a href="/notes" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>Get Notes!</a>
          <a href="/contact" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
