import React from "react";
import PopularBlog from "./PopularBlog";
import FavoriteBlogs from "./FavoriteBlogs";

const SidebarCard = () => {
  return (
    <>
      {" "}
      <div className="sidebar-card">
        <PopularBlog />
      </div>
      <div className="sidebar-card">
        <FavoriteBlogs />
      </div>
    </>
  );
};

export default SidebarCard;
