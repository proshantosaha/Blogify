import React, { useState } from "react";
import { BASE_URL } from "../../constant";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import useAvatar from "../../hooks/useAvatar";
import ThreeDots from "../../assets/icons/3dots.svg";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcons from "../../assets/icons/delete.svg";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../api/api";
import { actions } from "../../actions";
import { usePost } from "../../hooks/usePost";

const BlogCard = ({
  id,
  blog,
  author: { avatar, firstName, id: authorId, lastName },
  title,
  content,
  thumbnail,
  createdAt,
  likes,
}) => {
  const fullname = `${firstName} ${lastName}`;
  const navigate = useNavigate();
  const { avatarURL } = useAvatar(blog);
  const { auth } = useAuth();
  const { dispatch } = usePost();

  const [showAction, setShowAction] = useState();

  const isMe = blog?.author?.id == auth.user?.id;

  const toggleAction = (e) => {
    e.stopPropagation();
    setShowAction(!showAction);
  };

  const handleClick = async (e) => {
    e.stopPropagation();
    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await api.delete(`/blogs/${blog.id}`);

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

    console.log(e);
  };

  return (
    <div
      className="blog-card"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/blogs/${blog.id}`);
      }}
    >
      {thumbnail ? (
        <img
          className="blog-thumb"
          src={`${BASE_URL}/uploads/blog/${thumbnail}`}
          alt={fullname}
        />
      ) : (
        <div className="blog-thumb-placeholder bg-gray-200 h-40 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <div className="mt-2 relative">
        <h3 className="text-slate-300 text-xl lg:text-2xl">{title}</h3>
        <p className="mb-6 text-base text-slate-500 mt-1">
          {" "}
          {content.length > 100 ? content.substring(0, 100) + "..." : content}
        </p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">
                {" "}
                {avatar ? (
                  <img
                    src={avatarURL}
                    alt="avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                ) : (
                  <span>{firstName.charAt(0)}</span> // Fallback to first letter if no avatar
                )}
              </span>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">{fullname}</h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>{formatDate(createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="text-sm px-2 py-1 text-slate-700">
            <span>{length.likes}</span>
          </div>
        </div>

        <div className="absolute right-0 top-0">
          {isMe && (
            <button onClick={toggleAction}>
              <img src={ThreeDots} alt="3dots of Action" />
            </button>
          )}

          {/* <!-- Action Menus Popup --> */}

          {showAction && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <button
                className="action-menu-item hover:text-red-500"
                onClick={handleClick}
              >
                <img src={DeleteIcons} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
