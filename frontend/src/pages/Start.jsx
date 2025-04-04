import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
const Start = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute -top-20 bottom-12 inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517676109075-9a94d44145d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwZHJpdmluZyUyMGltZyUyMHViZXJyfGVufDB8fDB8fHww')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 flex flex-col justify-between h-screen w-full">
        <img
          className="w-36 h-auto m-4 relative z-20 drop-shadow-lg"
          src="https://pngimg.com/uploads/uber/uber_PNG16.png"
          alt="Uber Logo"
        />

        <div className="bg-white py-6 px-5 flex flex-col items-center">
          <h2 className="text-2xl -ml-20 font-medium font-uber text-black">
            Get Started With Uber
          </h2>
          <Link to={"/login"} className="w-full bg-black text-white p-3 rounded-md mt-3 font-uber flex items-center justify-between">
            <span className="w-full text-center">Continue</span>
            <FaArrowRight className="h-4 w-4 text-white" />
          </Link>
          <hr className="w-40 h-1 bg-black rounded-md mt-6" />
        </div>
      </div>
    </div>
  );
};

export default Start;
