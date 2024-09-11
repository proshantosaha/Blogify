import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LogOut = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };

  return (
    <>
      <button
        className="text-white/50 hover:text-white transition-all duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default LogOut;
