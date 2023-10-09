import React from "react";
import Footer from "../Components/sections/Footer";
import Navbar from "../Components/Navs/Navbar";
import { useForm, useFormState } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AppProvider";
import { useState } from "react";

const HighSchoolApp = () => {
  const { programs } = useContext(AuthContext);
  const currentProgram = programs?.find(
    (program) => program?._id === "6426afb02afa3a9515f56028"
  );
  // const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="w-screen welcomeBg flex justify-center items-center relative  xl:pt-48 lg:pt-36 md:pt-28 sm:pt-16 py-32">
        <Navbar />
        <div className="w-3/4  flex flex-col gap-2 md:-ml-24">
          <div className="overlay"></div>
          <div className="relative z-20">
            <h1 className="font-semibold  text-3xl text-white">
              {" "}
              CodeCraft High School Intensive
            </h1>
            <p className="font-light mt-5 text-white">
              Unlock your potential in our immersive tech program. Dive into
              mobile app development, frontend and backend web development, and
              much more. Take the first step towards a rewarding tech career
              today!
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen form-container">
        <div className="md:w-4/5 sm:w-11/12 w-full flex flex-col items-start gap-2">
          <h1 className="font-bold text-base md:text-xl">
            Application Details
          </h1>
          {/* <img src={LineImg} alt="VectorImage" className="w-1/3" /> */}
          <p className="w-full font-normal text-slate-800 text-sm xl:text-base lg:text-base md:text-base sm:text-sm">
            The project will be conducted during 5 months from October to
            February, in three phases: Talent detection across the country,
            training, and organising a hackathon.
          </p>
          <p>
            By submitting your application you hereby declare that the
            information provided is true and correct, you also understand any
            willful dishonesty will lead to disqualification.
          </p>
        </div>
        <form
          className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              {...register("firstName", { required: "First Name is required" })}
              className={`input ${errors.firstName ? "border-red-500" : ""}`}
              placeholder="Your First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              className={`input ${errors.lastName ? "border-red-500" : ""}`}
              placeholder="Your Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Province
            </label>
            <input
              {...register("province", { required: "Province is required" })}
              className={`input ${errors.province ? "border-red-500" : ""}`}
              placeholder="Your Province"
            />
            {errors.province && (
              <p className="text-red-500 text-sm mt-1">
                {errors.province.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              District
            </label>
            <input
              {...register("district", { required: "District is required" })}
              className={`input ${errors.province ? "border-red-500" : ""}`}
              placeholder="Your District"
            />
            {errors.district && (
              <p className="text-red-500 text-sm mt-1">
                {errors.district.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sector
            </label>
            <input
              {...register("sector", { required: "sector is required" })}
              className={`input ${errors.province ? "border-red-500" : ""}`}
              placeholder="Your sector"
            />
            {errors.sector && (
              <p className="text-red-500 text-sm mt-1">
                {errors.sector.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cell
            </label>
            <input
              {...register("cell", { required: "Cell is required" })}
              className={`input ${errors.province ? "border-red-500" : ""}`}
              placeholder="Your cell"
            />
            {errors.cell && (
              <p className="text-red-500 text-sm mt-1">{errors.cell.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Village
            </label>
            <input
              {...register("village", { required: "village is required" })}
              className={`input ${errors.province ? "border-red-500" : ""}`}
              placeholder="Your village"
            />
            {errors.village && (
              <p className="text-red-500 text-sm mt-1">
                {errors.village.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className={`input ${errors.gender ? "border-red-500" : ""}`}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Year of Birth
            </label>
            <input
              {...register("yearOfBirth", {
                required: "Year of Birth is required",
                pattern: /^[0-9]{4}$/,
                type: "number",
              })}
              className={`input ${errors.yearOfBirth ? "border-red-500" : ""}`}
              placeholder="Your Year of Birth (e.g., 2000)"
            />
            {errors.yearOfBirth && (
              <p className="text-red-500 text-sm mt-1">
                {errors.yearOfBirth.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Education Level
            </label>
            <input
              {...register("educationLevel", {
                required: "Education Level is required",
              })}
              className={`input ${
                errors.educationLevel ? "border-red-500" : ""
              }`}
              placeholder="Your Education Level"
            />
            {errors.educationLevel && (
              <p className="text-red-500 text-sm mt-1">
                {errors.educationLevel.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Combination
            </label>
            <input
              {...register("combination", {
                required: "Combination is required",
              })}
              className={`input ${errors.combination ? "border-red-500" : ""}`}
              placeholder="Your Combination"
            />
            {errors.combination && (
              <p className="text-red-500 text-sm mt-1">
                {errors.combination.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              School Name
            </label>
            <input
              {...register("schoolName", {
                required: "School Name is required",
              })}
              className={`input ${errors.schoolName ? "border-red-500" : ""}`}
              placeholder="Your School Name"
            />
            {errors.schoolName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.schoolName.message}
              </p>
            )}
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Capital Raised
            </label>
            <input
              type="number"
              {...register("capitalRaised", {
                required: "Capital Raised is required",
                pattern: /^[0-9]+$/,
              })}
              className={`input ${
                errors.capitalRaised ? "border-red-500" : ""
              }`}
              placeholder="Your Capital Raised"
            />
            {errors.capitalRaised && (
              <p className="text-red-500 text-sm mt-1">
                {errors.capitalRaised.message}
              </p>
            )}
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Report
            </label>
            <input
              type="file"
              {...register("report", {
                required: "Report is required",
              })}
              className={`py-2 px-4  pl-0 ${
                errors.report ? "border-red-500" : ""
              }`}
              placeholder="Your report Level"
            />
            {errors.report && (
              <p className="text-red-500 text-sm mt-1">
                {errors.report.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <button
              className="btn"
              type="submit"
              //   disabled={isSubmitting}
            >
              {false ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default HighSchoolApp;
