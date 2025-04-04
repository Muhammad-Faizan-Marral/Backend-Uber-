import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { CaptainContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
   const navigate = useNavigate();
  const {captain, setCaptain } = useContext(CaptainContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [vehicleType, setVehicleType] = useState("car");




  const submitHandler = async (e) => {
    e.preventDefault();

    if (firstname.length < 3 || (lastname && lastname.length < 3)) {
      alert(
        "First name and optional last name must have at least 3 characters."
      );
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (color.length < 3 || plate.length < 3 || capacity < 1) {
      alert("Vehicle details must meet the required criteria.");
      return;
    }

    const newCaptain = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    };

    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        newCaptain
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");

      }
    } catch (error) {
      console.error("Signup failed", error);
    }



  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-2 border-green-400">
        <div className="flex justify-center mb-4">
          <img
            className="w-28 h-auto drop-shadow-lg"
            src="https://pngimg.com/uploads/uber/uber_PNG16.png"
            alt="Uber Captain Logo"
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-4 text-green-700 flex justify-center items-center gap-2">
          <FaUserTie /> Captain Signup
        </h2>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            minLength={3}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Last Name (optional)"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            minLength={3}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 mt-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 mt-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 mt-2"
          />
          <input
            type="text"
            placeholder="Vehicle Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            minLength={3}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 mt-2"
          />
          <input
            type="text"
            placeholder="Vehicle Plate"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            required
            minLength={3}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 mt-2"
          />
          <input
            type="number"
            placeholder="Capacity"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            required
            min={1}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 mt-2"
          />
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 mt-2"
          >
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto-rickshaw">Auto Rickshaw</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md mt-4 hover:bg-green-900"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/captain-login"
              className="text-green-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
