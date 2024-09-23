import React from "react";
import useGetPopular from "../../hooks/useGetPopular";

const PopularBlog = () => {
  const {
    data: { data: blogData } = {},
    error,
    isError,
    isLoading,
  } = useGetPopular();

  return (
    <>
      {/* {console.log(blogData)} */}
      {blogData?.blogs?.map(
        ({
          id,
          title,
          author: { firstName, lastName, id: authorId, avatar },
          likes,
          content,
        }) => (
          <div id={id}>
            {" "}
            <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
              {title}
            </h3>
            <ul className="space-y-5 my-5">
              <li>
                <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  {content}
                </h3>
                <p className="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">
                    {firstName}
                    {lastName}
                  </a>
                  <span>·</span> 100 Likes
                </p>
              </li>

              <li id={authorId}>
                <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p className="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">Saad Hasan</a>
                  <span>·</span> 100 Likes
                </p>
              </li>

              <li>
                <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p className="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">Saad Hasan</a>
                  <span>·</span> 100 Likes
                </p>
              </li>

              <li>
                <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p className="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">Saad Hasan</a>
                  <span>·</span> 100 Likes
                </p>
              </li>
            </ul>
          </div>
        )
      )}
    </>
  );
};

export default PopularBlog;
