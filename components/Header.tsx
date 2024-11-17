"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header for Mobile and Desktop */}
      <header className="flex items-center justify-between p-4 md:p-6 bg-white fixed top-0 left-0 right-0 z-20">
        <div className="text-2xl font-bold text-purple-700">
          <Link href="/">Chemistry Expert</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-black" />
          ) : (
            <FaBars className="text-2xl text-purple-700" />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-600 text-sm hover:text-purple-700">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 text-sm hover:text-purple-700">
            About us
          </Link>
          <Link href="/notes" className="text-gray-600 text-sm hover:text-purple-700">
            Get Notes!
          </Link>
          <Link href="/feedback" className="text-gray-600 text-sm hover:text-purple-700">
            Feedback
          </Link>
          <Link href="/shop" className="text-gray-600 text-sm hover:text-purple-700">
            Shop
          </Link>
          <Link href="/contact" className="text-gray-600 text-sm hover:text-purple-700">
            Contact
          </Link>
        </nav>
      </header>

      {/* Sidebar Menu (Visible only on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-30 transition-transform transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div className="text-2xl font-bold text-purple-700">Chemistry Expert</div>
          <div className="cursor-pointer" onClick={toggleMenu}>
          </div>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <Link href="/" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>
            About us
          </Link>
          <Link href="/notes" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>
            Get Notes!
          </Link>
          <Link href="/feedback" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>
            Feedback
          </Link>
          <Link href="/shop" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>
            Shop
          </Link>
          <Link href="/contact" className="text-gray-600 text-lg hover:text-purple-700" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
