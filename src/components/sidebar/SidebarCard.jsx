import React from "react";
import PopularBlog from "./PopularBlog";
import FavoriteBlogs from "./FavoriteBlogs";
import useGetPopular from "../../hooks/useGetPopular";

const SidebarCard = () => {
  const {
    data: { data: blogData } = {},
    error,
    isError,
    isLoading,
  } = useGetPopular();
  return (
    <>
      {" "}
      <div className="sidebar-card">
        <div>
          {" "}
          <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
            Most Popular 👍️
          </h3>
          <ul className="space-y-5 my-5">
            {blogData?.blogs?.map((blog) => (
              <PopularBlog
                key={blog.id}
                id={blog.id}
                title={blog.title}
                author={blog.author?.firstName + "" + blog.author?.lastName}
                authorId={blog.author?.id}
                likes={blog.likes?.length}
                tags={blog.tags.split(",")}
                // type={blogType}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar-card">
        <FavoriteBlogs />
      </div>
    </>
  );
};

export default SidebarCard;
