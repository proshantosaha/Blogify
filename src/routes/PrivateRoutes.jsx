import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../provider/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {console.log(auth)}

      {auth?.authToken ? (
        <>
          <ProfileProvider>
            <Header />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
