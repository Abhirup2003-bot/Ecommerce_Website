import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const navClass =
    "text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white transition duration-300 text-sm";

  const activeClass = "text-white font-semibold";

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Logo + About */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-white dark:text-white"
            >
              My<span className="text-green-500">App</span>
            </Link>

            <p className="mt-4 text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
              Building modern e-commerce experiences with React & Tailwind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white dark:text-gray-200 font-semibold mb-4 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${navClass} ${activeClass}` : navClass
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? `${navClass} ${activeClass}` : navClass
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? `${navClass} ${activeClass}` : navClass
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? `${navClass} ${activeClass}` : navClass
                  }
                >
                  Product
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white dark:text-gray-200 font-semibold mb-4 text-lg">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white dark:hover:text-white cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-white dark:hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white dark:hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white dark:hover:text-white cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white dark:text-gray-200 font-semibold mb-4 text-lg">
              Follow Us
            </h3>

            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="#"
                className="px-3 py-2 bg-gray-800 dark:bg-gray-700 rounded-md text-sm hover:bg-blue-600 transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="px-3 py-2 bg-gray-800 dark:bg-gray-700 rounded-md text-sm hover:bg-sky-500 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="px-3 py-2 bg-gray-800 dark:bg-gray-700 rounded-md text-sm hover:bg-pink-600 transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
