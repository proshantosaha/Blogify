import React from "react";
import useAvatar from "../../hooks/useAvatar";
import { comment } from "postcss";
import { BASE_URL } from "../../constant";
import AvatarImage from "../AvatarImage";

const AllComments = ({ author, content, commentId }) => {
  //   const { avatarURL } = useAvatar(blog);

  //   const { content, author } = comments || {};

  //   const fullname = `${firstName} ${lastName}`;

  //   console.log(avatar);

  const { firstName, lastName, avatar, id } = author || {};
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="flex items-start space-x-4 my-8">
      <AvatarImage name={fullName} avatar={avatar} />

      <div className="w-full">
        <h5 className="text-slate -500 font-bold">{fullName}</h5>
        <p className="text-slate-300">{content}</p>
      </div>
    </div>
  );
};

export default AllComments;
