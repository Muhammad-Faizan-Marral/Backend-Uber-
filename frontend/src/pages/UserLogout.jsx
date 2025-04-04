import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const UserLogout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no token, directly redirect to login
    if (!token) {
      navigate("/login");
      return;
    }

    // Call logout API
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // 1️⃣ Remove token from localStorage
          localStorage.removeItem("token");

          // 2️⃣ Reset user context
          setUser({
            email: "",
            fullName: { firstName: "", lastName: "" },
          });

          // 3️⃣ Redirect to login page
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  }, [navigate, setUser]); // Runs only once when component mounts

  return <div>Logging out...</div>;
};

export default UserLogout;
