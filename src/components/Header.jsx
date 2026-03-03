import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300";

  const activeClass = "bg-blue-600 text-white";

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/product"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Product
      </NavLink>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-blue-600">
                My <span className="text-green-800">App</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4 items-center">{navLinks}</div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-60 py-2" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 px-4">{navLinks}</div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
