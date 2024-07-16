import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      {" "}
      <Routes>
        {/* <Route element={<PrivetRoute />}> */}
        <Route element={<HomePage />} path="/" exact />
        <Route element={<ProfilePage />} path="/me" />
        {/* </Route> */}

        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NotFoundPage />} path="/*" />
      </Routes>
    </>
  );
};

export default App;
