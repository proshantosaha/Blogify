import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <Link
        tp="./login.html"
        className="text-white/50 hover:text-white transition-all duration-200"
        onClick={handleLogout}
      >
        Logout
      </Link>
    </>
  );
};

export default LogOut;
