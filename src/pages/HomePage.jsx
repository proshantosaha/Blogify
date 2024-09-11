import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div className="bg-[#030317] text-white">
      <Link to="/me">got to profile</Link>
    </div>
  );
};

export default HomePage;
