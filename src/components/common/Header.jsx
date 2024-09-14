import React from "react";
import Ps from "../../assets/ps.webp";
import SearchIcons from "../../assets/icons/search.svg";
// import Avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import LogOut from "../auth/LogOut";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import { BASE_URL } from "../../constant";

const Header = () => {
  const { auth } = useAuth();

  const { state } = useProfile();

  const user = state?.user ?? auth?.user;

  return (
    <nav className=" bg-black  ">
      {/* <!-- Logo --> */}

      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        {" "}
        {console.log(user)}
        <div>
          <Link to="/">
            <img className="w-10" src={Ps} alt="lws" />
          </Link>
        </div>
        {/* <!-- Actions - Login, Write, Home, Search --> */}
        {/* <!-- Notes for Developers --> */}
        {/* <!-- For Logged in User - Write, Profile, Logout Menu --> */}
        {/* <!-- For Not Logged in User - Login Menu --> */}
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to=""
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center gap-2 cursor-pointer">
                <img src={SearchIcons} alt="Search" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <LogOut />
            </li>
            <li className="flex items-center">
              {/* <!-- Circular Div with background color --> */}
              <div className="avater-img bg-orange-600 text-white">
                <img
                  src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                    user?.avatar
                  }`}
                  alt="avatar"
                />
                {/* <!-- User's first name initial --> */}
              </div>

              {/* <!-- Logged-in user's name --> */}
              <Link to="/me">
                <span className="text-white ml-2">
                  {user?.firstName} :{user?.lastName}
                </span>
              </Link>

              {/* <!-- Profile Image --> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
