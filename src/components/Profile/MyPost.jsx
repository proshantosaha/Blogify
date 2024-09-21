import React from "react";
import { useProfile } from "../../hooks/useProfile";
import BlogsList from "../blogs/BlogsList";
import useProfileFetch from "../../hooks/useProfileFetch";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const MyPost = () => {
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();

  const { userId } = useParams();

  const { data, error, isError, isLoading } = useProfileFetch(userId);

  const { firstName, lastName, blogs } = data || {};
  const fullName = `${firstName} ${lastName}`;

  // console.log(user);

  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">
        {auth?.user?.id === userId ? `${fullName}'s` : "My"} Blogs
      </h4>
      <div className="my-6 space-y-4">
        {/* <!-- Blog Card Start --> */}
        {blogs?.length > 0 ? (
          blogs.map((blog) => {
            console.log(blogs);

            <BlogCard
              key={blog.id}
              title={blog.title}
              content={blog.content}
              image={blog.thumbnail}
              firstName={blog.firstName}
              lirstName={blog.lirstName}
              avatar={avatar}
              authorId={userId}
              date={blog.createdAt}
              likes={blog.likes?.length}
            />;
          })
        ) : (
          <div className="text-center text-red-300 text-2xl font-semibold">
            <p>{"You didn't post anything"}</p>
          </div>
        )}
        {/* <!-- Blog Card End --> */}
      </div>
    </>
  );
};

export default MyPost;
