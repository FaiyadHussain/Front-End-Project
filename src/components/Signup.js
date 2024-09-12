// src/components/Signup.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        username,
      });
      navigate("/login"); // Redirect to login page on success
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Create an Account
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-gray-700 text-sm font-medium mb-1">
              Username
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-6">
            <span className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
