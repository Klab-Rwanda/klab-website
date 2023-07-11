import React from "react";
import { FaUser } from "react-icons/fa";
import FormImage from "../assets/CardImage.jpg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../validations/LoginValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AppProvider";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const LOGIN_URL = "https://klab-academy.onrender.com/api/v1/users/login";

const LoginForm = () => {
  const { loggedUser, isLoged, setIsLoged } = useContext(AuthContext);

  console.log(loggedUser);

  const navigate = useNavigate();
  const [ErrMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      setLoading(true);
      const response = await axios.post(LOGIN_URL, JSON.stringify(values), {
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      actions.resetForm();
      console.log(JSON.stringify(response?.data));
      const token = response?.data?.token;
      localStorage.setItem("token", token);
      const name = response?.data?.user.username;
      localStorage.setItem("username", name);
      setIsLoged(true);
      console.log(isLoged);
      if (response?.data?.user.role === "company") {
        navigate("/company");
      } else if (
        response?.data?.user.role === "member" ||
        response?.data?.user.role === "alumni"
      ) {
        navigate("/");
      } else if (response?.data?.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (response?.data?.user.role === "parent") {
        navigate("/parentdashboard");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err?.response.status === 401) {
        Notify.failure("Incorrect email or password");
      } else if (!err.response) {
        Notify.failure("Network error");
      }
      setLoading(false);
    }
  };
  console.log(ErrMsg);

  const { values, errors, touched, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  console.log(errors);

  return (
    <div className="bg-white rounded-3xl w-11/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 flex duration-500 mt-16">
      <img
        src={FormImage}
        alt=""
        className="w-2/5 rounded-3xl hidden xl:block lg:block md:block sm:hidden"
      />
      <form
        className="w-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full flex flex-col gap-2 p-8 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-center items-center">
          <div className="rounded-full border border-slate-800 overflow-hidden">
            <FaUser className="text-9xl" />
          </div>
        </div>
        {ErrMsg ? (
          <p className="text-red-600 justify-center flex w-full">{ErrMsg}</p>
        ) : (
          <h1 className="w-full justify-center flex">Welcome back!</h1>
        )}
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          className={`rounded-2xl bg-slate-200  outline-none ${
            errors.email && touched.email
              ? "border-solid border 	border-red-400"
              : "border-none"
          } p-4`}
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && touched.email && (
          <p className="text-red-400">{errors.email}</p>
        )}
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="*******"
          className={`rounded-2xl bg-slate-200  outline-none ${
            errors.password && touched.password
              ? "border-solid border 	border-red-400"
              : "border-none"
          } p-4`}
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <p className="text-red-400">{errors.password}</p>
        )}
        <input
          type="submit"
          value={`${loading ? "Loading..." : "Sign in"}`}
          className="bg-blue-500 rounded-2xl p-4 mt-2 text-white cursor-pointer disabled:opacity-75"
          disabled={isSubmitting}
        />
        <span className="w-full flex justify-between">
          <p>
            Create Account{" "}
            <Link to="/signUp">
              <b className="text-blue-500 mt-4">Sign Up</b>
            </Link>
          </p>
          <p className="text-blue-500 font-bold">Forgot password</p>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
