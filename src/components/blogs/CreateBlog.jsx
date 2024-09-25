import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";
import { usePost } from "../../hooks/usePost";
import { useProfile } from "../../hooks/useProfile";
import { useForm } from "react-hook-form";
import Filed from "../common/Filed";
import { actions } from "../../actions";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useEffect } from "react";

const CreateBlog = ({ onCreate }) => {
  const { auth } = useAuth();
  const { dispatch } = usePost();
  const { api } = useAxios();
  const { state: profile } = useProfile();
  const fileUploadRef = useRef();

  const user = profile?.user ?? auth?.user;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [statImage, setStateImage] = useState();
  const [preview, setPreview] = useState();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (blog) => api.post("/blogs/", blog),
    onSuccess: (data) => {
      // On success, navigate to the created blog post
      navigate(`/blogs/${data.data.blog.id}`);
    },
    onError: (error) => {
      setError("apiError", { message: error.message });
    },
  });

  const hanleUploadImage = (e) => {
    e.preventDefault();
    fileUploadRef.current.addEventListener("change", addImageUpload);
    fileUploadRef.current.click();
  };

  const addImageUpload = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setStateImage(undefined);
      return;
    }
    console.log(e.target.files);
    setStateImage(e.target.files[0]);
  };

  useEffect(() => {
    if (!statImage) {
      setPreview(undefined);
      return;
    }

    // create url
    const imgObjUrl = URL.createObjectURL(statImage);

    setPreview(imgObjUrl);

    // cleanup
    return () => URL.revokeObjectURL(imgObjUrl);
  }, [statImage]);

  const handlePostSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("tags", data.tags);
    formData.append("content", data.content);
    formData.append("thumbnail", statImage);

    mutation.mutate(formData);
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
              <button
                onClick={hanleUploadImage}
                htmlFor="fileInput"
                className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer"
              >
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
                {statImage && (
                  <img className="w-20" alt="preview" src={preview} />
                )}
              </button>
              <input
                name="thumbnail"
                accept="image/png, image/gif, image/jpeg"
                type="file"
                id="fileInput"
                placeholder="Enter your blog title"
                className="hidden"
                ref={fileUploadRef}
              />
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
