import React from "react";
import { useProfile } from "../../hooks/useProfile";
import BlogsList from "../blogs/BlogsList";
import useProfileFetch from "../../hooks/useProfileFetch";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import BlogCard from "../blogs/BlogCard";

const MyPost = () => {
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();

  const { userId } = useParams();

  const { data, error, isError, isLoading } = useProfileFetch(userId);
  const user = state?.user ?? auth?.user;

  const { blogs, firstName, lastName, avatar } = user || {};
  const fullname = `${firstName} ${lastName}`;

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError || !user) {
  //   return (
  //     <p className="text-red-500">Error fetching profile: {error?.message}</p>
  //   );
  // }

  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">
        {/* {user?.id === id ? `${fullName}'s` : "My"} Blogs */}
      </h4>
      <div className="my-6 space-y-4">
        {/* <!-- Blog Card Start --> */}
        {blogs && blogs?.length > 0 ? (
          blogs?.map((blog) => (
            <BlogCard
              id={blog.id}
              key={blog.id}
              title={blog.title}
              content={blog.content}
              image={blog.thumbnail}
              author={blog.author} // avatar={avatar}
              thumbnail={blog.thumbnail}
              createdAt={blog.createdAt}
              authorId={blog.author?.id}

              // likes={blog.likes?.length}
            />
          ))
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
