import React from "react";
import CompanyNav from "../Components/Navs/CompanyNav";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LineImg from "../assets/Vector.svg";
import Footer from "../Components/sections/Footer";
import axios from "axios";
 
const PROJECT_URL = "https://klabbackend-sbhs.onrender.com/api/v1/project/";
export default function () {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});
  const onSubmit = async (data,actions) => {
    const formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("email", data.email);
    formData.append("ProjectName", data.ProjectName);
    formData.append("phone", data.phone);
    formData.append("category", data.category);
    formData.append("desc", data.desc);
    formData.append("profile", data.profile[0]);
    try  {
      const response = await axios.post(PROJECT_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          companyauth: `${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      alert("Your Project is Added Successfull");
      console.log(JSON.stringify(response));
      actions.resetForm();
    }
    catch(error) {
      console.log(error)
    }




    // console.log(data);
  };

  // const [free, setFree] = useState(false);
  // const [paid, setPaid] = useState(false);

  // const handleFree = () => {
  //   setFree(true);
  //   setPaid(false);
  // };

  // const handlePaid = () => {
  //   setPaid(true);
  //   setFree(false);
  // };

  return (
    <>
      <CompanyNav />
      <div className="w-screen flex  justify-center items-center relative p-4 py-12">
        <div className="w-3/4 flex flex-col gap-2 mt-16">
          <h1 className="font-bold text-base"> Project Detail</h1>
          <img src={LineImg} alt="VectorImage" className="w-1/3" />
          <p className="w-full font-normal text-slate-800 text-sm xl:text-base lg:text-base md:text-base sm:text-sm">
            The project will be conducted during 5 months from October to
            February, in three phases: Talent detection across the country,
            training, and organising a hackathon.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 p-4 px-12 gap-12">
                <div className="">
                  <label>Company Name</label>
                  <br />
                  <input
                    {...register("companyName")}
                    type="text"
                    placeholder="Enter Company Name"
                    className="w-full p-2 bg-transparent outline-none border-b-2 border-slate-400"
                  />
                </div>
                <div className="">
                  <label>Phone Number</label>
                  <br />
                  <input
                    {...register("phone")}
                    type="text"
                    placeholder="(+250)78267133"
                    className="w-full p-2 bg-transparent outline-none border-b-2 border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 p-4 px-12 gap-12">
                <div className="">
                  <label>Project Name</label>
                  <br />
                  <input
                    {...register("ProjectName")}
                    type="text"
                    placeholder="Enter Project Name"
                    className="w-full p-2 bg-transparent outline-none border-b-2 border-slate-400"
                  />
                </div>
                <div className="">
                  <label>Email</label>
                  <br />
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="example@gmail.com"
                    className="w-full p-2 bg-transparent outline-none border-b-2 border-slate-400"
                  />
                </div>
              </div>
            </div>
            <Controller
              name="category"
              control={control}
              // rules={{ required: true }}
              render={({ field }) => (
                <div className="px-10">
                  <label>Category</label>
                  <br />
                  <input type="radio" {...field} value='Paid' />
                  Paid
                  <br />
                  <input type="radio" {...field} value='Free' />
                  Free
                </div>
              )}
            />
            <div className="mt-10">
              <h1 className="font-bold text-base"> Project Detail</h1>
              <img src={LineImg} alt="VectorImage" className="w-1/3" />
            </div>
            <div className="grid grid-cols-2 p-4 px-12 gap-12">
              <div>
                <h2 className="mt-5 text-slate-600 font-bold">
                  Please describe your project in not less than 200 words.
                </h2>
                <textarea
                  {...register("desc")}
                  className="border border-slate-500 outline-none w-full "
                  rows="5"
                  placeholder="Your Answer"
                ></textarea>
              </div>
              <div>
                <h2 className="mt-5 text-slate-600 font-bold">Add File</h2>

                <input
                  type="file"
                  {...register("profile")}
                  className=" w-full p-2 border-b border-slate-500"
                />
              </div>
            </div>
            <p className="mb-5">
              By submitting your application you hereby declare that the
              information provided is true and correct, you also understand any
              willful dishonesty will lead to disqualification.{" "}
            </p>
            <div className="mt-10px">
              {/* <button className="bg-transparent border border-slate-700 p-5  rounded-xl  px-10  fon mr-10 font-semibold">
                Cancel
              </button> */}
              <button className="bg-blue-600 p-5  rounded-xl px-10  font-semibold">
                Add project
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
