import React from "react";

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
              <h1 class="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
              <p class="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>

          <div className="  bg-[#030317] p-8 rounded-md mt-12">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form action="">
              <div className="mb-6">
                <label for="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label for="password" className="block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Login
                </button>
              </div>
              <p className="text-center text-white">
                Don't have an account?{" "}
                <a
                  href="./register.html"
                  className="text-indigo-600 hover:underline"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
