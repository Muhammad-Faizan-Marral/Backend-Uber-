import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import Userlogin from "./pages/Userlogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/UserContext";
const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
