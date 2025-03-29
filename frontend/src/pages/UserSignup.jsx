import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },

      email: email,
      password: password,
    });
    console.log(userData);
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

        {/* Signup Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700 flex justify-center items-center gap-2">
          <FaUserPlus /> User Signup
        </h2>

        <form onSubmit={submitHandler}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Signup Button */}
          <button className="w-full bg-blue-700 text-white py-2 rounded-md mt-4 hover:bg-blue-900">
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Privacy Policy Notice */}
        <div className="text-center mt-4 text-xs text-gray-500">
          <p>
            By signing up, you agree to our{" "}
            <Link
              to="/terms"
              className="text-blue-700 font-semibold hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-blue-700 font-semibold hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
