import React from "react";

const BlogCard = ({
  id,
  title,
  content,
  image,
  authorName,
  avatar,
  authorId,
  date,
  likes,
  onDelete,
}) => {
  return (
    <div className="blog-card">
      <img className="blog-thumb" src={""} alt="" />
      <div className="mt-2">
        <h3 className="text-slate-300 text-xl lg:text-2xl">{title}</h3>
        <p className="mb-6 text-base text-slate-500 mt-1">{content}</p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">{blog?.author?.avatar}</span>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">{firstName}</h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>June 28, 2018</span>
              </div>
            </div>
          </div>

          <div className="text-sm px-2 py-1 text-slate-700">
            <span>{blog.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
