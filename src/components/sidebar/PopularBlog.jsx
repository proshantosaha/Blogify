import React from "react";
import useGetPopular from "../../hooks/useGetPopular";
import { Link } from "react-router-dom";

const PopularBlog = ({ id, title, author, authorId, likes, type, tags }) => {
  const { avatar, firstName, lastName } = author || {};

  const fullName = firstName ? `${firstName} ${lastName}` : "Anonymous";
  return (
    <>
      {/* {console.log(blogData)} */}
      <li>
        <Link to={`/blogs/${id}`} key={id}>
          <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
            {title}
          </h3>
        </Link>
        <p className="text-slate-600 text-sm">
          by
          <a href="./profile.html">
            {fullName}
            {/* {lastName} */}
          </a>
          <span>·</span> {likes.length}
        </p>
      </li>
    </>
  );
};

export default PopularBlog;
