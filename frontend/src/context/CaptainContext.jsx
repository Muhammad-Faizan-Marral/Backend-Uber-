import React, { createContext, useState } from "react";

export const CaptainContext = createContext(); 

const CaptainProvider = ({ children }) => { 
  const [captain, setCaptain] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: 1,
      vehicleType: "car",
    },
  });

  console.log(captain); 

  return (
    <CaptainContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainContext.Provider>
  );
};

export default CaptainProvider;