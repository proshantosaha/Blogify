import React from "react";
import Ps from "../../assets/ps.webp";
import SearchIcons from "../../assets/icons/search.svg";
import Avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import LogOut from "../auth/LogOut";

const Header = () => {
  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <Link to="/">
            <img className="w-32" src={Ps} alt="lws" />
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
                to="./createBlog.html"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                to="./search.html"
                className="flex items-center gap-2 cursor-pointer"
              >
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
                <span className="">
                  <img src={Avatar} alt="avatar" />
                </span>
                {/* <!-- User's first name initial --> */}
              </div>

              {/* <!-- Logged-in user's name --> */}
              <Link tp="./profile.html">
                <span className="text-white ml-2">Saad Hasan</span>
              </Link>
              {/* <!-- Profile Image --> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
