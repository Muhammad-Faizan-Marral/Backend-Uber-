"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LocationSerachPannel from "../Components/LocationSerachPannel";
import VahiclePannel from "../Components/VahiclePannel";
import ConfirmedRide from "../Components/ConfirmedRide";
import WaitingForDriver from "../Components/WaitingForDriver";
import LookingForDriver from "../Components/LookingForDriver";

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [VehiclePannel, setVehiclePannel] = useState(false);
  const [ConfirmRide, setConfirmRide] = useState(false);
  const [Driver, setDriver] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pickup Location:", pickup);
    console.log("Destination:", destination);
  };

  return (
    <div className="h-screen relative">
      {/* Main - Background*/}

      <div className="h-screen w-screen flex items-center justify-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*pDuy0gLCj1dgGxUCsG-KUQ.png"
          alt="Uber_Img"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`absolute w-full bottom-0 bg-white p-6 flex gap-7 flex-col shadow-xl transition-all duration-500 ease-in-out ${
          isFocused ? "top-0" : "bottom-0"
        }`}
      >
        <h2
          className={`font-bold text-2xl leading-5 tracking-wider text-gray-800 transition-opacity duration-300 ${
            isFocused ? "hidden" : "block"
          }`}
        >
          Find a trip
        </h2>

        <IoIosArrowDown
          className={`text-4xl ${isFocused ? "block rotate-180" : "hidden"}`}
          onClick={() => {
            setIsFocused(false);
            setVehiclePannel(false);
            setConfirmRide(false);
            setDriver(false);
          }}
        />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex gap-6 flex-col ${isFocused ? "mt-0" : "block"}`}
        >
          <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="h-12 w-full bg-gray-100 border border-gray-300 pl-4 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-100 ease-in-out"
            type="text"
            placeholder="Add a Pick-up Location"
            onFocus={() => setIsFocused(true)}
          />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-12 w-full bg-gray-100 border border-gray-300 pl-4 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            type="text"
            placeholder="Enter your Destination"
          />
        </form>

        {/*LocationSerachPannel */}

        <div className={` overflow-y-auto   ${isFocused ? "block" : "hidden"}`}>
          <LocationSerachPannel
            VehiclePannel={VehiclePannel}
            setVehiclePannel={setVehiclePannel}
          />
        </div>
      </div>

      {/*Vahicle - Pannel */}
      <div
        className={`absolute top-52 p-6 bg-slate-50 h-screen  ${
          VehiclePannel ? "block" : "hidden"
        }`}
      >
        <VahiclePannel
          VehiclePannel={VehiclePannel}
          setVehiclePannel={setVehiclePannel}
          setConfirmRide={setConfirmRide}
        />
      </div>

      {/* Confirm - Vedhicele */}

      <div
        className={`absolute top-52 p-6 bg-slate-50 h-screen w-screen ${
          ConfirmRide ? "block" : "hidden"
        }`}
      >
        <ConfirmedRide
          ConfirmRide={ConfirmRide}
          setConfirmRide={setConfirmRide}
          setDriver={setDriver}
        />
      </div>

      {/* Looking for Drivers */}

      <div
        className={`absolute top-52 p-6 bg-slate-50  h-screen w-screen  ${
          Driver ? "block" : "hidden"
        }`}
      >
        <LookingForDriver setDriver={setDriver} />
      </div>

      {/* Waiting for Drivers */}

      {/* <div
        className={`absolute top-52 p-6 bg-slate-50  h-screen w-screen`}
      >
        <WaitingForDriver/>
      </div> */}


      


    </div>
  );
};

export default Home;
