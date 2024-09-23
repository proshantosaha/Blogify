import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";
import { usePost } from "../../hooks/usePost";
import { useProfile } from "../../hooks/useProfile";
import { useForm } from "react-hook-form";
import Filed from "../common/Filed";
import { actions } from "../../actions";
import { Link } from "react-router-dom";

const CreateBlog = ({ onCreate }) => {
  const { auth } = useAuth();
  const { dispatch } = usePost();
  const { api } = useAxios();
  const { state: profile } = useProfile();

  const user = profile?.user ?? auth?.user;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handlePostSubmit = async (formData) => {
    console.log(formData);
    dispatch({ type: actions.post.DATA_CREATED });
    try {
      const response = await api.post(`/blogs/`, formData);
      if (response.status === 200) {
        dispatch({
          type: actions.post.DATA_CREATED,
          data: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <main>
      <section>
        <div className="container">
          {/* <!-- Form Input field for creating Blog Post --> */}
          <form
            action="#"
            method="POST"
            className="createBlog"
            onSubmit={handleSubmit(handlePostSubmit)}
          >
            <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
              <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p>Upload Your Image</p>
              </div>
            </div>

            <div className="mb-6">
              <Filed label="title" error={errors.title}>
                <input
                  {...register("title", {
                    required: "Title  is Required",
                  })}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter your blog title"
                />
              </Filed>
            </div>

            <div className="mb-6">
              <Filed label="title" error={errors.tags}>
                <input
                  {...register("tags", {
                    required: "Tags  is Required",
                  })}
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="Enter your blog title"
                />
              </Filed>
            </div>

            <div className="mb-6">
              <textarea
                {...register("content", {
                  required: "Blog Content is required",
                })}
                id="content"
                name="content"
                placeholder="Write your blog content"
                rows={8}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Create Blog
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateBlog;
