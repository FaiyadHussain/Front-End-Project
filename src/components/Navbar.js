// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <h1 className="hover:text-gray-200">Project</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/signup"
              className="text-white font-medium hover:bg-blue-600 hover:text-gray-100 py-2 px-4 rounded transition duration-300"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white font-medium hover:bg-blue-600 hover:text-gray-100 py-2 px-4 rounded transition duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
