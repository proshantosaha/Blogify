import React, { useReducer, useState } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReducer } from "../reducers/ProfileReducers";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
