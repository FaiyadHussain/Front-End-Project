// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/signup" className="text-white">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
