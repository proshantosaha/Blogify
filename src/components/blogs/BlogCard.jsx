import React from "react";
import { BASE_URL } from "../../constant";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  id,
  author: { avatar, firstName, id: authorId, lastName },
  title,
  content,
  thumbnail,
  createdAt,
  likes,
}) => {
  const fullname = `${firstName} ${lastName}`;
  const navigate = useNavigate();

  return (
    <div
      className="blog-card"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/blogs/${id}`);
      }}
    >
      <img
        className="blog-thumb"
        s
        src={`${BASE_URL}/uploads/blog/${thumbnail}`}
        alt=""
      />
      <div className="mt-2">
        <h3 className="text-slate-300 text-xl lg:text-2xl">{title}</h3>
        <p className="mb-6 text-base text-slate-500 mt-1">{content}</p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">{avatar}</span>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">{fullname}</h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>{createdAt}</span>
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
