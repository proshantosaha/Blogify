import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSingleBlog } from "../hooks/useSingleBlog";
import { BASE_URL } from "../constant";
import BlogDetailSection from "../components/singlePageSection/BlogDetailSection";
import CommentSection from "../components/singlePageSection/CommentSection";

const SingleBlogPage = () => {
  const { id } = useParams();
  const { data: blog, error, isError, isLoading } = useSingleBlog(id);

  if (isLoading) {
    return <div>Loading...</div>; // Loading state
  }

  if (isError) {
    return <div>Error: {error.message}</div>; // Error state
  }

  return (
    <div>
      {" "}
      <main>
        {/* <!-- Begin Blogs --> */}
        <section>
          <BlogDetailSection blog={blog} />
        </section>
        {/* <!-- End Blogs --> */}
        <CommentSection
          blog={blog}
          comments={blog?.comments}
          author={blog?.author}
          id={blog?.id}
        />
        {/* <!-- Begin Comments --> */}
      </main>
      {/* <!-- End main --> */}
      {/* <!-- Floating Actions--> */}
    </div>
  );
};

export default SingleBlogPage;
