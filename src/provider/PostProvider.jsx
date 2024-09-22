import React, { useReducer } from "react";
import { initialState, postReducers } from "../reducers/postReducers";
import { PostContext } from "../context";

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducers, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
