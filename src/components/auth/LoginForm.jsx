import React from "react";
import { useForm } from "react-hook-form";
import Filed from "../common/Filed";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import { BASE_URL } from "../../constant";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, formData);

      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;

          console.log(`login auth token : ${authToken}`);
          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      // console.log(error);
      // const errorMessage = error.response?.data?.message || `User with email ${formData.email} not found`;

      setError("root.random", {
        type: "random",
        message: `user with email ${formData.email} not found`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
      <div className="mb-6">
        <Filed label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email Id is Required" })}
            className={` w-full p-3 bg-[#fff] border  rounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.email ? "border-red-500" : "border-white/20"
            }`}
            type="email"
            id="email"
            name="email"
          />
        </Filed>
      </div>

      <div className="mb-6">
        <Filed label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password Id is Required",
              minLength: {
                value: 8,
                message: "your password must be at least 8 charecters",
              },
            })}
            type="password"
            id="password"
            name="password"
            className={` w-full p-3 bg-[#fff] border  rounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.password ? "border-red-500" : "border-white/20"
            }`}
            // className=" w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </Filed>
        <p>{errors?.root?.random?.message}</p>
      </div>

      <div className="mb-6">
        <Filed>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Login
          </button>
        </Filed>
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
