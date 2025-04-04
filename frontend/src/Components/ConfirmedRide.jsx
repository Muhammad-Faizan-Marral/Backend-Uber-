import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { BsPinMapFill } from "react-icons/bs";

const ConfirmedRide = ({ setConfirmRide, setDriver }) => {
  const handleSubmit = () => {
    setConfirmRide((prev) => !prev);
  };

  return (
    <div className="">
      <h5 className="p-1 text-center w-[93%] absolute top-0">
        <IoIosArrowDown className="text-3xl text-gray-200" />
      </h5>
      <div className="flex items-center gap-20">
        <h3 className="font-bold text-2xl leading-5 text-gray-800 mb-5">
          Confirm your Ride
        </h3>
        <IoIosArrowDown
          className="text-2xl relative -top-[0.6rem]"
          onClick={handleSubmit}
        />
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Uber Ride"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaMapMarkerAlt className="text-xl text-gray-700" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Bwp</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <BsPinMapFill className="text-xl text-gray-700" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Lahore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <FaRupeeSign className="text-xl text-gray-700" />
            <div>
              <h3 className="text-lg font-medium">₹45</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setDriver((prev) => !prev);
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
