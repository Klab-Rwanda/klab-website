import React from 'react'
import { useFormik } from 'formik';
import { contactSchema } from '../validations/ContactValidation';
import axios from 'axios';


const CONTACT_URL = "https://klabbackend-sbhs.onrender.com/api/v1/contact/";
const RightContact = () => {

  const onSubmit = async (values, actions) => {
    // console.log(values);
    try {
      const response = await axios.post(CONTACT_URL, JSON.stringify(values), {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      alert("Your Message is sent Successfull");
       console.log(JSON.stringify(response));
       actions.resetForm();
    }
    catch (error) {
      console.log(error)
    }
  }


  const { values, handleSubmit, errors, touched, handleChange} = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      message: ""
    },
    validationSchema: contactSchema,
    onSubmit,
  });


  return (
    <div className="p-1 w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
      <form className="w-full p-1 flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          name="fullname"
          className={
            errors.fullname && touched.fullname
              ? "w-full text-base px-8 p-4 rounded-2xl border-solid border border-red-600 outline-none bg-slate-200"
              : "w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
          }
          values={values.fullname}
          onChange={handleChange}
        />
        {errors.fullname && touched.fullname && (
          <p className="text-red-400">{errors.fullname}</p>
        )}
        <input
          type="text"
          placeholder="Email"
          name="email"
          className={
            errors.email && touched.email
              ? "w-full text-base px-8 p-4 rounded-2xl border-solid border border-red-600 outline-none bg-slate-200"
              : "w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
          }
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && touched.email && (
          <p className="text-red-400">{errors.email}</p>
        )}

        <input
          type="number"
          placeholder="Phone number"
          name="phone"
          className={
            errors.phone && touched.phone
              ? "w-full text-base px-8 p-4 rounded-2xl border-solid border border-red-600 outline-none bg-slate-200"
              : "w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
          }
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && touched.phone && (
          <p className="text-red-400">{errors.phone}</p>
        )}

        <textarea
          type="text"
          placeholder="Message"
          name="message"
          className={
            errors.message && touched.message
              ? "w-full text-base px-8 p-4 rounded-2xl border-solid resize-none border border-red-600 outline-none bg-slate-200"
              : "w-full text-base px-8 p-4 rounded-2xl resize-none border-none outline-none bg-slate-200"
          }
          cols="30"
          rows="5"
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && touched.message && (
          <p className="text-red-400">{errors.message}</p>
        )}

        <input
          type="submit"
          value="Send your message"
          className="w-full text-base cursor-pointer px-8 p-4 rounded-2xl bg-blue-500 text-slate-100 "
        />
      </form>
    </div>
  );
}

export default RightContact