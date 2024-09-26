import React from "react";
import { BASE_URL } from "../../constant";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import useAvatar from "../../hooks/useAvatar";

const BlogCard = ({
  id,
  blog,
  author: { avatar, firstName, id: authorId, lastName },
  title,
  content,
  thumbnail,
  createdAt,
  likes,
}) => {
  const fullname = `${firstName} ${lastName}`;
  const navigate = useNavigate();
  const { avatarURL } = useAvatar(blog);

  console.log(avatarURL);

  return (
    <div
      className="blog-card"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/blogs/${id}`);
      }}
    >
      {thumbnail ? (
        <img
          className="blog-thumb"
          src={`${BASE_URL}/uploads/blog/${thumbnail}`}
          alt={fullname}
        />
      ) : (
        <div className="blog-thumb-placeholder bg-gray-200 h-40 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <div className="mt-2">
        <h3 className="text-slate-300 text-xl lg:text-2xl">{title}</h3>
        <p className="mb-6 text-base text-slate-500 mt-1">
          {" "}
          {content.length > 100 ? content.substring(0, 100) + "..." : content}
        </p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">
                {" "}
                {avatar ? (
                  <img
                    src={avatarURL}
                    alt="avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                ) : (
                  <span>{firstName.charAt(0)}</span> // Fallback to first letter if no avatar
                )}
              </span>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">{fullname}</h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>{formatDate(createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="text-sm px-2 py-1 text-slate-700">
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
