import React, { useEffect, useReducer } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";
import useInfiniteScroll from "../hooks/useInfinitScroll";
import BlogCard from "../components/blogs/BlogCard";
import { initialState, postReducers } from "../reducers/postReducers";
import useAxios from "../hooks/useAxios";
import { actions } from "../actions";
import { data } from "autoprefixer";
import { BASE_URL } from "../constant";
import SidebarCard from "../components/sidebar/SidebarCard";

const HomePage = () => {
  // const { auth } = useAuth();
  // const { state, dispatch } = useProfile();
  const [state, dispatch] = useReducer(postReducers, initialState);
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });
    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchPost();
  }, []);

  if (state?.error) {
    return <div>we are working ....</div>;
  }
  if (state.error) {
    return <div> Error in fatching posts {state?.error?.message}</div>;
  }

  const blogs = state?.blogs;

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* <!-- Blog Contents --> */}
        <div className="space-y-3 md:col-span-5">
          {/* <!-- Blog Card Start --> */}

          {
            // Profile's blogs

            blogs?.map((blog) => {
              return (
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  content={blog.content}
                  image={blog.thumbnail}
                  author={blog.author} // avatar={avatar}
                  thumbnail={blog.thumbnail}
                  createdAt={blog.createdAt}
                  // likes={blog.likes?.length}
                />
              );
            })
          }
          {/* <!-- Blog Card End --> */}
        </div>

        {/* <!-- Sidebar --> */}
        <div className="md:col-span-2 h-full w-full space-y-5">
          <SidebarCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
