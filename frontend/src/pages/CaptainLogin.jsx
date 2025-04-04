import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { CaptainContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Captain Login:", email, password);

    setEmail("");
    setPassword("");

    const newCaptain = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/login`,
      newCaptain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-2 border-green-500">
        {/* Uber Logo */}
        <div className="flex justify-center mb-4">
          <img
            className="w-28 h-auto drop-shadow-lg"
            src="https://pngimg.com/uploads/uber/uber_PNG16.png"
            alt="Uber Logo"
          />
        </div>

        {/* Login Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-green-700 flex justify-center items-center gap-2">
          <FaUserTie /> Captain Login
        </h2>

        <form onSubmit={submitHandler}>
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-700 text-white py-2 rounded-md mt-4 hover:bg-green-900">
            Login
          </button>
        </form>

        {/* Navigation Links */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            New here?{" "}
            <Link
              to="/captain-signup"
              className="text-green-700 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

        <div className="text-center mt-4">
          <Link
            to="/login"
            className="text-blue-700 text-sm font-semibold hover:underline"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
