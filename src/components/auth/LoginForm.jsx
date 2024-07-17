import React from "react";

const LoginForm = () => {
  return (
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
        <a href="./register.html" className="text-indigo-600 hover:underline">
          Register
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
