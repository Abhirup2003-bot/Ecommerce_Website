import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext"; // ✅ import

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext); // ✅ use context

  const cartItems = useSelector((state) => state.cart.cartItems);

  const linkClass =
    "block px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white transition duration-300";

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

      <NavLink
        to="/cart"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        🛒 Cart ({cartItems.length})
      </NavLink>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-white">
                My <span className="text-green-800">App</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4 items-center">
              {navLinks}

              {/* ✅ THEME TOGGLE BUTTON */}
              <button
                onClick={toggleTheme}
                className="ml-4 px-3 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black transition"
              >
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white dark:bg-gray-900 shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-80 py-2" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 px-4">
            {navLinks}

            {/* ✅ Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="mt-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  );
};

export default Header;
