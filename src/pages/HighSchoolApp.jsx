import React, { useEffect } from "react";
import Footer from "../Components/sections/Footer";
import Navbar from "../Components/Navs/Navbar";
import { useForm, useFormState } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AppProvider";
import { useState } from "react";
import axios from "../axios/axios";
import { Report } from "notiflix";
import { useNavigate } from "react-router-dom";

const HighSchoolApp = () => {
  const { programs } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  console.log(programs);
  // const currentProgram = programs?.find(
  //   (program) => program?._id === "6426afb02afa3a9515f56028"
  // );
  // console.log(currentProgram);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/6524629d9ab1c8c73493e9f7");
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    const applicantData = new FormData();
    applicantData.append("fullName", data.fullName);
    applicantData.append("email", data.email);
    applicantData.append("gender", data.gender);
    applicantData.append("yearOfBirth", data.yearOfBirth);
    applicantData.append("province", data.province);
    applicantData.append("district", data.district);
    applicantData.append("sector", data.sector);
    applicantData.append("cell", data.cell);
    applicantData.append("village", data.village);
    applicantData.append("educationLevel", data.educationLevel);
    applicantData.append("combination", data.combination);
    applicantData.append("schoolName", data.schoolName);
    applicantData.append("profile", data.profile[0]);

    try {
      setLoading(true);
      const res = await axios.post("/school", applicantData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      Report.success(
        "Success",
        "You have successfully sent your application! we have sent you a confirmation message to the email you provided.",
        "Okay",
        () => {
          window.location.reload();
        }
      );
    } catch (error) {
      setLoading(false);
      Report.failure("Error", error?.response?.data.message, "Okay");
    }
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
              High School Leaver's Program
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
      <div className="min-h-screen form-container m-4">
        <div className="md:w-4/5 sm:w-11/12 w-full flex flex-col items-start gap-2">
          <h1 className="font-bold text-base md:text-xl">
            Application Details
          </h1>
          <img
            src={
              "https://res.cloudinary.com/nrob/image/upload/v1696935779/zzupccqfrxe6cchkk80j.png"
            }
            alt="VectorImage"
            className="w-1/3"
          />
          {/* <img src={LineImg} alt="VectorImage" className="w-1/3" /> */}
          <p className="w-full font-normal text-slate-800 text-sm xl:text-base lg:text-base md:text-base sm:text-sm">
            Join our Real-World Pr oject-Based Learning program for a unique
            hybrid learning experience that combines online and in-person
            education. Over the course of 12 weeks, you'll immerse yourself in
            hands-on, practical learning.
            <br />
            <br />
            The program begins with 4 weeks of self-paced online study, followed
            by 4 weeks of live facilitator-led sessions. Then, spend 4 exciting
            weeks in person, collaborating with peers and experts. The
            culmination of your journey is an exhilarating end-of-program
            Hackathon where you'll showcase your newfound skills.
            <br />
            <br />
            Upon completion, you'll receive a well-deserved Completion
            Certificate and exclusive Klab Membership. Don't miss this
            opportunity to advance your knowledge and gain
            real-world experience!
          </p>
        </div>
        <form
          className="flex flex-col mt-8 mr-4 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-wrapper">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                {...register("fullName", {
                  required: "Full Name is required",
                })}
                className={`input ${errors.fullName ? "border-red-500" : ""}`}
                placeholder="Your Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className={`input ${errors.email ? "border-red-500" : ""}`}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="form-wrapper">
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
                type="number"
                {...register("yearOfBirth", {
                  required: "Year of Birth is required",
                  pattern: /^[0-9]{4}$/,
                })}
                className={`input ${
                  errors.yearOfBirth ? "border-red-500" : ""
                }`}
                placeholder="Your Year of Birth (e.g., 2000)"
              />
              {errors.yearOfBirth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.yearOfBirth.message}
                </p>
              )}
            </div>
          </div>
          <div className="form-wrapper">
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
          </div>
          <div className="form-wrapper">
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.cell.message}
                </p>
              )}
            </div>
          </div>

          <div className="form-wrapper">
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
          </div>
          <div className="form-wrapper">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Combination
              </label>
              <input
                {...register("combination", {
                  required: "Combination is required",
                })}
                className={`input ${
                  errors.combination ? "border-red-500" : ""
                }`}
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
              School Report
            </label>
            <input
              type="file"
              {...register("profile", {
                required: "School report is required",
              })}
              className={`py-2 px-4  pl-0 ${
                errors.profile ? "border-red-500" : ""
              }`}
              placeholder="Your report Level"
            />
            {errors.profile && (
              <p className="text-red-500 text-sm mt-1">
                {"School report is required"}
              </p>
            )}
          </div>
          <p>
            By submitting your application you hereby declare that the
            information provided is true and correct, you also understand any
            willful dishonesty will lead to disqualification.
          </p>
          <div className="col-span-2">
            <button
              className="btn"
              type="submit"
              //   disabled={isSubmitting}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default HighSchoolApp;
