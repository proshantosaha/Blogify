import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./routes/PrivateRoutes";
import CreateBlog from "./components/blogs/CreateBlog";
import SingleBlogPage from "./pages/SingleBlogPage";
import PopularBlog from "./components/sidebar/PopularBlog";

const App = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<ProfilePage />} path="/me" />
          <Route element={<CreateBlog />} path="/create-blog" />
          <Route element={<SingleBlogPage />} path="/blogs/:id" />
          <Route element={<PopularBlog />} path="/blogs/:id" />
        </Route>

        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NotFoundPage />} path="/*" />
      </Routes>
    </>
  );
};

export default App;
