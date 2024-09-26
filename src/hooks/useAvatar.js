import React from "react";
import { useProfile } from "./useProfile";
import { BASE_URL } from "../constant";

const useAvatar = (blog) => {
  const { state } = useProfile();

  const isMe = blog?.author?.id === state?.user?.id;

  const avatar = isMe ? `${state?.user?.avatar}` : `${blog?.author?.avatar}`;
  const avatarURL = `${BASE_URL}/uploads/avatar/${avatar}`;

  {
    `${BASE_URL}/uploads/avatars/${avatar}`;
  }
  return { avatarURL };
};

export default useAvatar;
