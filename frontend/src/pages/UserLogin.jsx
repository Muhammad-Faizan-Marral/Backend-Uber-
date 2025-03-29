import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // User Icon

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("User Login:", email, password);
    setEmail("");
    setPassword("");
    setUserData({
      email: email,
      password: password,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-2 border-blue-400">
        {/* Uber Logo */}
        <div className="flex justify-center mb-4">
          <img
            className="w-28 h-auto drop-shadow-lg"
            src="https://pngimg.com/uploads/uber/uber_PNG16.png"
            alt="Uber Logo"
          />
        </div>

        {/* Login Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700 flex justify-center items-center gap-2">
          <FaUser /> User Login
        </h2>

        <form onSubmit={submitHandler}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-700 text-white py-2 rounded-md mt-4 hover:bg-blue-900">
            Login
          </button>
        </form>

        {/* Navigation Links */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            New here?{" "}
            <Link to="/signup" className="text-blue-700 font-semibold hover:underline">
              Create Account
            </Link>
          </p>
        </div>

        <div className="text-center mt-4">
          <Link to="/captain-login" className="text-green-700 text-sm font-semibold hover:underline">
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
