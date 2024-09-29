import React, { useState } from "react";
import useAvatar from "../../hooks/useAvatar";
import AllComments from "./AllComments";
import FloatingAction from "./FloatingAction";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";
import { BASE_URL } from "../../constant";

const CommentSection = ({ blog, id, author }) => {
  const { auth } = useAuth();
  const [comments, setComments] = useState(blog?.comments);
  const [isComment, setIsComment] = useState("");

  console.log(comments);

  const { api } = useAxios();

  const { avatar, firstName, id: authorId, lastName } = author || {};

  const addComment = async () => {
    const res = await api.post(`/blogs/${id}/comment`, { content: isComment });

    try {
      if (res.status === 200) {
        setComments(res.data.comments);
      }
    } catch (error) {
      console.log(error);
      // setComment(false);
    }
  };

  return (
    <section>
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">Comments {comments.length}</h2>
        <div className="flex items -center space-x-4">
          <div className="avater-img bg-indigo-600 text-white">
            <span>
              {avatar ? (
                <img
                  src={`${BASE_URL}/uploads/avatar/${auth?.user?.avatar}`}
                  alt="avatar"
                  className="rounded-full h-full w-full object-cover"
                />
              ) : (
                <span>{firstName.charAt(0)}</span> // Fallback to first letter if no avatar
              )}
            </span>
          </div>
          <div className="w-full">
            <textarea
              className="w-full bg-[#030317] border border-slate-500
               text-slate-300 p-4 rounded-md focus:outline-none"
              placeholder="Write a comment"
              value={isComment}
              onChange={(e) => setIsComment(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                onClick={addComment}
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Comment
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Comment One --> */}

        {comments?.map((comment) => (
          <AllComments
            key={comment.id}
            commentId={comment.id}
            author={comment.author}
            date={comment.createdAt}
            content={comment.content}
          />
        ))}

        {/* <!-- Comment Two --> */}
        <FloatingAction
          blog={blog}
          numberOfLikes={comments?.length}
          numberOfComments={comments?.length}
          likes={blog?.likes}
        />
      </div>
    </section>
  );
};

export default CommentSection;
