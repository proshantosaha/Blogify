import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../provider/ProfileProvider";
import Footer from "../../src/components/footer/Footer";
import PostProvider from "../provider/PostProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.authToken ? (
        <>
          <PostProvider>
            <ProfileProvider>
              <Header />

              <div className="container">
                <Outlet />
              </div>
              <Footer />
            </ProfileProvider>
          </PostProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
