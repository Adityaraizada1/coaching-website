"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaStickyNote, FaCommentAlt, FaStore, FaPhoneAlt } from "react-icons/fa";
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
          <Link href="/" className="text-gray-600 text-sm flex items-center gap-1 hover:text-purple-700">
            <FaHome className="text-base" /> Home
          </Link>
          <Link href="/about" className="text-gray-600 text-sm flex items-center gap-1 hover:text-purple-700">
            <FaInfoCircle className="text-base" /> About us
          </Link>
          <Link href="/notes" className="text-gray-600 text-sm flex items-center gap-1 hover:text-purple-700">
            <FaStickyNote className="text-base" /> Get Notes!
          </Link>
          <Link href="/feedback" className="text-gray-600 text-sm flex items-center gap-1 hover:text-purple-700">
            <FaCommentAlt className="text-base" /> Feedback
          </Link>
          <Link href="/shop" className="text-gray-600 text-sm flex items-center gap-1 hover:text-purple-700">
            <FaStore className="text-base" /> Shop
          </Link>
          <Link href="/contact" className="text-gray-600 text-sm flex items-center gap-1 hover:text-purple-700">
            <FaPhoneAlt className="text-base" /> Contact
          </Link>
        </nav>
      </header>

      {/* Sidebar Menu (Visible only on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-30 transition-transform transform md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div className="text-2xl font-bold text-purple-700">Chemistry Expert</div>
          <div className="cursor-pointer" onClick={toggleMenu}>
          </div>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <Link href="/" className="text-gray-600 text-lg flex items-center gap-2 hover:text-purple-700" onClick={toggleMenu}>
            <FaHome className="text-base" /> Home
          </Link>
          <Link href="/about" className="text-gray-600 text-lg flex items-center gap-2 hover:text-purple-700" onClick={toggleMenu}>
            <FaInfoCircle className="text-base" /> About us
          </Link>
          <Link href="/notes" className="text-gray-600 text-lg flex items-center gap-2 hover:text-purple-700" onClick={toggleMenu}>
            <FaStickyNote className="text-base" /> Get Notes!
          </Link>
          <Link href="/feedback" className="text-gray-600 text-lg flex items-center gap-2 hover:text-purple-700" onClick={toggleMenu}>
            <FaCommentAlt className="text-base" /> Feedback
          </Link>
          <Link href="/shop" className="text-gray-600 text-lg flex items-center gap-2 hover:text-purple-700" onClick={toggleMenu}>
            <FaStore className="text-base" /> Shop
          </Link>
          <Link href="/contact" className="text-gray-600 text-lg flex items-center gap-2 hover:text-purple-700" onClick={toggleMenu}>
            <FaPhoneAlt className="text-base" /> Contact
          </Link>
        </nav>
      </div>

      {/* Content Overlay for Mobile Menu (Blur Effect) */}
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-50 z-10 ${isMenuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Header;
