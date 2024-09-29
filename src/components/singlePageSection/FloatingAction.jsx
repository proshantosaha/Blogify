import React, { useState } from "react";
import Like from "../../assets/icons/like.svg";
import Heart from "../../assets/icons/heart.svg";
import HeartFilled from "../../assets/icons/heart-filled.svg";
import LikeFilled from "../../assets/icons/like-filled.svg";

import Comment from "../../assets/icons/comment.svg";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";
import { findLiked } from "../../utils/Likes";

const FloatingAction = ({ blog, numberOfLikes, numberOfComments }) => {
  const { auth } = useAuth();
  const [liked, setLiked] = useState(findLiked(blog?.likes, auth?.user?.id));
  const [likesCount, setLikesCount] = useState(numberOfLikes);

  const { api } = useAxios();

  // console.log(blog);

  // const { id } = blog || {};

  const handleLike = async () => {
    try {
      const res = await api.post(`/blogs/${blog.id}/like`);

      if (res.status === 200) {
        setLiked((prev) => !prev);
        setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
      }
    } catch (error) {
      console.log(error);
      // setLiked(false);
    }
  };

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img
            src={liked ? LikeFilled : Like}
            alt="like"
            onClick={handleLike}
          />
          <span>{likesCount}</span>
        </li>

        <li>
          {/* {<!-- There is heart-filled.svg in the icons folder --> */}
          <img src={HeartFilled} alt="Favourite" />
        </li>
        <a href="#comments">
          <li>
            <img src={Comment} alt="Comments" />
            <span>{numberOfComments}</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default FloatingAction;
