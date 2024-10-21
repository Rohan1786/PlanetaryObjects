import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For custom animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-red-200 text-green-700 font-bold font-kablammo shadow-md">
      <div className="navbar-logo">
        <img src="logo.jpg" alt="Logo" className="h-16 w-20 rounded animate-logo-spin" />
      </div>

      {/* Hamburger Icon for mobile */}
      <button
        className="block md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8 text-green-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Links */}
      <ul
        className={`navbar-links md:flex md:items-center md:gap-8 absolute md:relative left-0 w-full md:w-auto bg-red-200 md:bg-transparent transition-all duration-300 ease-in ${
          isOpen ? 'top-16' : '-top-96'
        } md:top-0`}
      >
        <li className="nav-item hover:scale-110 transition-transform duration-300">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item hover:scale-110 transition-transform duration-300">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item hover:scale-110 transition-transform duration-300">
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item hover:scale-110 transition-transform duration-300">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
