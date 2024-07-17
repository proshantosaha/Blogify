import React from "react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center  py-8">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          {/* <!-- Login Form into a box center of the page --> */}
          <div>
            <img
              class="mb-12 max-w-full max-lg:hidden"
              src="./assets/images/auth_illustration.png"
              alt="auth_illustration"
            />
            <div>
              <h1 class="mb-3 text-4xl font-bold lg:text-[40px]">Blogify</h1>
              <p class="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a blog website, showing the blog, blog details,
                reactions, comments and profile.
              </p>
            </div>
          </div>

          <div className="  bg-[#030317] p-8 rounded-md mt-12">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
