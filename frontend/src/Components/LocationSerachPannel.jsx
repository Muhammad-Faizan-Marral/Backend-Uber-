"use client";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const LocationSerachPannel = ({ VehiclePannel, setVehiclePannel }) => {
  // Random locations array
  const locations = [
    
    "Gulshan Block, Near City Mall, Lahore",
    "Sector 15, Street 3, DHA Phase 6, Karachi",
    "Plot #32, Tech Avenue, Blue Area, Islamabad",
    "House #21, Near Main Market, Multan Cantt",
    "Gulshan Block, Near City Mall, Lahore",
    "Sector 15, Street 3, DHA Phase 6, Karachi",
    "Plot #32, Tech Avenue, Blue Area, Islamabad",
    "House #21, Near Main Market, Multan Cantt",

  ];

  const handleSubmit = (location) => {
    setVehiclePannel((prev) => !prev);
  };

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex items-center justify-start gap-2 mt-4 active:text-green-600 rounded-2xl cursor-pointer p-2 border-b hover:bg-gray-100"
          onClick={() => handleSubmit(location)}
        >
          <IoLocationOutline className="text-3xl text-black font-bold active:text-red-600" />
          <h4 className="font-serif p-1">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSerachPannel;
