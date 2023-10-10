import React, {useState} from 'react'
import { FaUser } from 'react-icons/fa'
import FormImage from '../assets/CardImage.jpg'
import { Link } from 'react-router-dom'
import { userSchema } from '../validations/UserValidation'
import { useFormik } from "formik"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import {Notify} from "notiflix"

const REGISTER_URL = "https://klab-academy-vqy2.onrender.com/api/v1/users";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        
        try {
          setLoading(true);
            const response = await axios.post(REGISTER_URL, JSON.stringify(values),
             {
                headers: { "Content-Type": "application/json" },
            });
            console.log(response.data);
            console.log(JSON.stringify(response));
            actions.resetForm();
            alert("Account created successfully!");
            navigate("/account");
        } catch(err){
            console.log(err);
            if(err?.response.status === 409){
              Notify.failure("Email has been taken by other user");
            } 
        }
        setLoading(false);
        
    }

    const { values, errors,touched,isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            role: "",
            password: ""
            
        },
        validationSchema: userSchema,
        onSubmit,
    });
    console.log(errors);
   


  return (
    <div className="bg-white rounded-3xl w-11/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 flex duration-500 mt-20">
      <img
        src={FormImage}
        alt=""
        className="w-2/5 rounded-3xl hidden xl:block lg:block md:block sm:hidden"
      />
      <form
        className="w-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full flex flex-col gap-2 px-2 py-4 rounded-3xl xl:ml-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-center items-center">
          <div className="my-4">
            <h1 className="text-2xl">Sign-up here</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              placeholder="John Doe"
              className={`rounded-2xl bg-slate-200 outline-none ${
                errors.username && touched.username
                  ? "border-solid border 	border-red-400"
                  : "border-none"
              } p-4`}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && (
              <p className="text-red-400">{errors.username}</p>
            )}
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="johnDoe@gmail.com"
              className={`rounded-2xl bg-slate-200  outline-none ${
                errors.email && touched.email
                  ? "border-solid border 	border-red-400"
                  : "border-none"
              } p-4`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-400">{errors.email}</p>
            )}
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="">Phone number</label>
            <input
              type="number"
              name="phone"
              className={`rounded-2xl bg-slate-200 outline-none ${
                errors.phone && touched.phone
                  ? "border-solid border 	border-red-400"
                  : "border-none"
              } p-4`}
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone && (
              <p className="text-red-400">{errors.phone}</p>
            )}
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="*********"
              name="password"
              className={`rounded-2xl bg-slate-200 outline-none ${
                errors.password && touched.password
                  ? "border-solid border 	border-red-400"
                  : "border-none"
              } p-4`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="text-red-400">{errors.password}</p>
            )}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="">role</label>
            <select
              name="role"
              className={`rounded-2xl bg-slate-200 outline-none ${
                errors.role && touched.role
                  ? "border-solid border 	border-red-400"
                  : "border-none"
              } p-4`}
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="0">select role</option>
              <option>alumni</option>
              <option>company</option>
              <option>parent</option>
              <option>member</option>
            </select>
            {errors.role && touched.role && (
              <p className="text-red-400">{errors.role}</p>
            )}
          </span>
        </div>
        <input
          type="submit"
          value={`${loading ? "Loading" : "Sign up"}`}
          disabled={isSubmitting}
          className="bg-blue-500 text-white cursor-pointer rounded-2xl p-4 mt-2 disabled:opacity-75"
        />
        <span className="w-full flex justify-between">
          <p>
            Already member?{" "}
            <Link to="/account">
              <b className="text-blue-500 mt-4">Sign in</b>
            </Link>
          </p>
        </span>
      </form>
    </div>
  );
}

export default RegisterForm