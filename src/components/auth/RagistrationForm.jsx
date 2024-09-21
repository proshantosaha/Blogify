import React from "react";
import { useForm } from "react-hook-form";
import Filed from "../common/Filed";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constant";

const RagistrationForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      let response = await axios.post(`${BASE_URL}/auth/register`, formData);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `somthing went wrong${formData.email}`,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <Filed label="First Name" error={errors.firstName}>
          <input
            {...register("firstName", {
              required: "First Name Id  is Required",
            })}
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder="set your email firstName"
            className={`w-full p-3 bg-white text-black  borderrounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.email ? "border-red-500" : " border-white/20 "
            }`}
          />
        </Filed>

        <Filed label="Last Name" error={errors.lastName}>
          <input
            {...register("lastName", { required: "Last Name Id  is Required" })}
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder="set your email lastName"
            className={`w-full p-3 bg-white text-black  borderrounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.email ? "border-red-500" : " border-white/20 "
            }`}
          />
        </Filed>
        <Filed label="Email" error={errors.email}>
          <input
            {...register("email", {
              required: "Email Id  is Required",
            })}
            type="email"
            name="email"
            id="email"
            placeholder="set your email address"
            className={`w-full p-3 bg-white text-black  borderrounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.email ? "border-red-500" : " border-white/20 "
            }`}
          />
        </Filed>
        <Filed label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password Id  is Required",
              minLength: {
                value: 8,
                message: "minimum 8 length password ",
              },
            })}
            type="password"
            name="password"
            id="password"
            placeholder="**************"
            className={`w-full p-3 bg-white text-black borderrounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.email ? "border-red-500" : " border-white/20 "
            }`}
          />
        </Filed>

        <p>{errors?.root?.random?.message}</p>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Create Account
          </button>
        </div>
        <p className="text-center">
          Already have account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default RagistrationForm;
