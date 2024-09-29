import React from "react";
import { BASE_URL } from "../../constant";
import AvatarImage from "../AvatarImage";

const BlogDetailSection = ({ blog }) => {
  const {
    title,
    content,
    thumbnail,
    author,
    tags,
    comments,
    createdAt: date,
    likes,
  } = blog || {};

  const { avatar, firstName, lastName } = author || {};

  const fullName = firstName ? `${firstName} ${lastName}` : "Anonymous";
  return (
    <div className="container text-center py-8">
      <h1 className="font-bold text-3xl md:text-5xl">{title}</h1>
      <div className="flex justify-center items-center my-4 gap-4">
        <div className="flex items-center capitalize space-x-2">
          {avatar ? (
            <AvatarImage name={fullName} avatar={avatar} />
          ) : (
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">{firstName ? firstName[0] : "A"}</span>
            </div>
          )}

          <h5 className="text-slate-500 text-sm">{fullName}</h5>
        </div>
        <span className="text-sm text-slate-700 dot">{}</span>
        <span className="text-sm text-slate-700 dot">{likes.length}</span>
      </div>
      <img
        className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
        src={`${BASE_URL}/uploads/blog/${thumbnail}`}
        alt=""
      />

      {/* <!-- Tags --> */}
      <ul className="tags">
        {tags?.split(",").map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      {/* <!-- Content --> */}
      <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
        {content}
      </div>
    </div>
  );
};

export default BlogDetailSection;
