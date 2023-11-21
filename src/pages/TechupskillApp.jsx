import Navbar from "../Components/Navs/Navbar";
import Footer from "../Components/sections/Footer";
import LineImg from "../assets/Vector.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
import { AuthContext } from "../context/AppProvider";
import axios from "../axios/axios";

Report.init({
  width: "320px",
  backgroundColor: "#f8f8f8",
  borderRadius: "8px",
  backOverlayColor: "rgba(0,0,0,0.5)",
  svgSize: "100px",

  success: {
    svgColor: "#18385A",
    titleColor: "#1e1e1e",
    messageColor: "#242424",
    buttonBackground: "#18385A",
    backOverlayColor: "rgba( 0, 0, 0, 0.5)",
  },
  failure: {
    svgColor: "#ff5549",
    buttonBackground: "#ff5549",
    buttonColor: "#fff",
    backOverlayColor: "rgba( 0, 0, 0, 0.5)",
  },
});



const applicationSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  fullname: yup.string().required("Required"),
  phone: yup.number().typeError("Required").required("Required"),
  gender: yup.string().required("Required"),
  dob: yup
    .date("this is a required field")
    .typeError("Required")
    .required("Required"),
  agerange: yup.string().required("Required"),
  country: yup.string().required("Required"),
  province: yup.string().required("Required"),
  district: yup.string().required("Required"),
  sector: yup.string().required("Required"),
  cell: yup.string().required("Required"),
  educationlevel: yup.string().required("Required"),
  schoolfrom: yup.string().required("Required"),
  yearstudy: yup.string().required("Required"),
  fieldofstudy: yup.string().required("Required"),
  categoryfitin: yup.string().required("Required"),
  skilldesc: yup.string(),
  gitlink: yup.string().url("please enter a valid url"),
  linkedinlink: yup.string().url("please enter a valid url"),
  entInnovationdesc: yup.string(),
  shareInnovationModel: yup.string(),
  profile: yup.mixed().test("required", "CV/Resume is required", (value) => {
    return value && value.length;
  }),
});

const TechupskillApp = () => {
  const { programs } = useContext(AuthContext);
  const currentProgram = programs?.find(
    (program) => program?._id === "6426afb02afa3a9515f56028"
  );

  const [loading, setLoading] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [hardware, setHardware] = useState(false);

  const [enterpreneur, setEnterpreneur] = useState(false);

  const handleDev = () => {
    setDeveloper(true);
    setEnterpreneur(false);
    setHardware(false);
  };

  const handleEnt = () => {
    setEnterpreneur(true);
    setHardware(false);
    setDeveloper(false);
  };

  const handleHard = () => {
    setEnterpreneur(false);
    setHardware(true);
    setDeveloper(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(applicationSchema),
  });

  const selectedOption = watch("categoryfitin");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("fullname", data.fullname);
    formData.append("phone", data.phone);
    formData.append("gender", data.gender);
    formData.append("dob", data.dob);
    formData.append("agerange", data.agerange);
    formData.append("country", data.country);
    formData.append("province", data.province);
    formData.append("district", data.district);
    formData.append("cell", data.cell);
    formData.append("sector", data.sector);
    formData.append("village", data.village);
    formData.append("skillyouwantgain", data.skillyouwantgain);
    formData.append("educationlevel", data.educationlevel);
    formData.append("fieldofstudy", data.fieldofstudy);
    formData.append("categoryfitin", data.categoryfitin);
    formData.append("schoolfrom", data.schoolfrom);
    formData.append("yearstudy", data.yearstudy);
    formData.append("entInnovationdesc", data.entInnovationdesc);
    formData.append("shareInnovationModel", data.shareInnovationModel);
    if (developer) {
      formData.append("areyoudev", data.areyoudev);
      formData.append("skilldesc", data.skilldesc);
      formData.append("gitlink", data.gitlink);
      formData.append("linkedinlink", data.linkedinlink);
      formData.append("skillyouwantjoin", data.skillyouwantjoin);
    }
    formData.append("areyougraduate", data.areyougraduate);
    formData.append("profile", data.profile[0]);
    console.log(data);

    try {
      setLoading(true);
      const response = await axios.post("/application", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);

      Report.success(
        "Success",
        "You have successfully sent your application! we have sent you a confirmation message to the email you provided.",
        "Okay"
      );
      reset();
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };
  console.log(errors);

  return (
    <div>
      <div className="w-screen welcomeBg flex justify-center items-center relative  xl:pt-48 lg:pt-36 md:pt-28 sm:pt-16 py-32">
        <Navbar />
        <div className="w-3/4  flex flex-col gap-2 md:-ml-24">
          <div className="overlay"></div>
          <div className="relative z-20">
            <h1 className="font-semibold  text-3xl text-white">Techupskill</h1>
            <p className="font-light mt-5 text-white">
              Build your team with developers, engineers and pro remote experts.
            </p>
          </div>
        </div>
      </div>
      <div className="form-container">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="first-grid">
            <div className="email-input ">
              <label htmlFor="email">Email</label>
              <input
                className={`input ${errors.email ? "error" : ""}`}
                type="text"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              <span className="text-red-400">{errors.email?.message}</span>
            </div>
            <div className="name-input ">
              <label htmlFor="name">Fullname</label>
              <input
                type="text"
                {...register("fullname")}
                className={`input ${errors.fullname ? "error" : ""}`}
              />
              <span className="text-red-400">{errors.fullname?.message}</span>
            </div>
            <div className="phone-input ">
              <label htmlFor="phone">Phone number</label>
              <input
                type="number"
                {...register("phone")}
                className={`input ${errors.phone ? "error" : ""} `}
              />
              <span className="text-red-400">{errors.phone?.message}</span>
            </div>
            <div className="birthday-input ">
              <label htmlFor="birthdate">Date of Birth</label>
              <input
                type="date"
                {...register("dob")}
                className={`input flex ${errors.dob ? "error" : ""}`}
              />
              <span className="text-red-400">{errors.dob?.message}</span>
            </div>
          </div>
          <div className="second-grid">
            <div className="gender-input input">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <div className="radios">
                <div className="flex items-center ">
                  <input type="radio" value="Male" {...register("gender")} />
                  <label htmlFor="Male">Male</label>
                </div>
                <input type="radio" value="Female" {...register("gender")} />
                <label htmlFor="Female">Female</label>
              </div>
              <span className="text-red-400">{errors.gender?.message}</span>
            </div>
            <div className="gender-input input">
              <label htmlFor="age-range" className="form-label">
                Age range
              </label>
              <div className="radios">
                <input
                  type="radio"
                  name="agerange"
                  value="15-25"
                  {...register("agerange")}
                />
                <label>15 - 25</label>
                <br />
                <input
                  type="radio"
                  name="agerange"
                  value="25-Above"
                  {...register("agerange")}
                />
                <label>25 - Above</label>
              </div>
              <span className="text-red-400">{errors.agerange?.message}</span>
            </div>
            <div className="input">
              <label className="form-label">
                Which category do you fit in?
              </label>
              <div className="radios">
                <input
                  type="radio"
                  name="categoryfitin"
                  {...register("categoryfitin")}
                  value="entrepreneur"
                  onInput={handleEnt}
                />
                <label>Tech Entrepreneur</label>
                <br />
                <input
                  type="radio"
                  name="categoryfitin"
                  {...register("categoryfitin")}
                  value="developer"
                  onInput={handleDev}
                />
                <label>Software Talent</label>
                <br />
                <input
                  type="radio"
                  name="categoryfitin"
                  {...register("categoryfitin")}
                  value="hardware"
                  onInput={handleHard}
                />
                <label>Hardware Talent</label>
              </div>
              <span className="text-red-400">
                {errors.categoryfitin?.message}
              </span>
            </div>
          </div>
          <div className="address-container">
            <div className="country-select ">
              <label>Country</label>
              <input
                type="text"
                className={`input ${
                  errors.country ? "erorr " : "form-control"
                }`}
                id="country"
                {...register("country")}
              />
              <span className="text-red-400 ">{errors.country?.message}</span>
            </div>
            <div className="province ">
              <label>Province</label>
              <input
                type="text"
                {...register("province")}
                className={`input ${errors.province ? "erorr " : ""} `}
              />
              <span className="text-red-400">{errors.province?.message}</span>
            </div>
            <div className="district-input ">
              <label>District</label>
              <input
                type="text"
                {...register("district")}
                className={`input ${errors.district ? "erorr " : ""}`}
              />
              <span className="text-red-400">{errors.district?.message}</span>
            </div>
            <div className="district-input ">
              <label>Sector</label>
              <input
                type="text"
                {...register("sector")}
                className={`input ${errors.sector ? "erorr " : ""}`}
              />
              <span className="text-red-400">{errors.sector?.message}</span>
            </div>
            <div className="district-input ">
              <label>Cell</label>
              <input
                type="text"
                {...register("cell")}
                className={`input ${errors.cell ? "erorr " : ""}`}
              />
              <span className="text-red-400">{errors.cell?.message}</span>
            </div>
            <div className="district-input input">
              <label>Village</label>
              <input
                type="text"
                {...register("village")}
                className={errors?.village ? "erorr " : ""}
              />
              <span className="text-red-400">{errors?.village?.message}</span>
            </div>
          </div>

          <div className="education-background pt-4">
            <div className="level input">
              <label className="form-label">Education level</label>
              <div className="radios">
                <input
                  type="radio"
                  value="highschool"
                  name="educationlevel"
                  {...register("educationlevel")}
                />
                <label htmlFor="highschool">Highschool</label>
                <br />
                <input
                  type="radio"
                  value="university"
                  name="educationlevel"
                  className="input"
                  {...register("educationlevel")}
                />
                <label htmlFor="university">University/College</label>
                <br />
                <input
                  type="radio"
                  value="graduate"
                  name="educationlevel"
                  className="input"
                  {...register("educationlevel")}
                />
                <label htmlFor="graduate">Other</label>
                <br />
                <input
                  type="radio"
                  value="masters"
                  name="educationlevel"
                  {...register("educationlevel")}
                />
                <label htmlFor="masters">Masters</label>
              </div>
              <span className="text-red-400">
                {errors.educationlevel?.message}
              </span>
            </div>
            <div className="field ">
              <label className="form-label">Field of study</label>
              <div className="radios flex flex-col">
                <input
                  type="text"
                  {...register("fieldofstudy")}
                  className={
                    errors.fieldofstudy
                      ? "erorr bg-slate-200 py-2 outline-none border-none px-4 border-b-2 border-red-400"
                      : " bg-slate-200 py-2 outline-none border-none px-4"
                  }
                />
              </div>
              <span className="text-red-400">
                {errors.fieldofstudy?.message}
              </span>
            </div>
          </div>

          <div className="school">
            <div className="">
              <label>From which school/university</label>
              <input
                type="text"
                {...register("schoolfrom")}
                className={`input ${errors?.schoolfrom ? "erorr" : ""}`}
              />
              <span className="text-red-400">{errors.schoolfrom?.message}</span>
            </div>
            <div className="">
              <label>Year of study</label>
              <input
                type="number"
                {...register("yearstudy")}
                className={`input ${errors?.yearstudy ? "erorr" : ""}`}
              />
              <span className="text-red-400">{errors.yearstudy?.message}</span>
            </div>
            <div className="">
              <label>CV/Resume {hardware && "/Certificate"}</label>
              <input type="file" className="input" {...register("profile")} />
              <span className="text-red-400">{errors?.profile?.message}</span>
            </div>
          </div>
          <div className={developer ? "my-8" : "hidden"}>
            <h1 className="font-bold my-4 text-base">Software Talent</h1>
            <img src={LineImg} alt="VectorImage" className="w-40 mb-8" />
            <div className="skills">
              <div>
                <label className="form-label">Are you a developer</label>
                <div className="radios">
                  <input type="radio" value="yes" {...register("areyoudev")} />
                  <label>Yes</label>
                  <br />
                  <input type="radio" value="no" {...register("areyoudev")} />
                  <label>No</label>
                </div>
                <span className="text-red-400">
                  {errors.areyoudev?.message}
                </span>
              </div>
              <div>
                <label className="form-label">
                  Which skills do you want to gain
                </label>
                <div className="radios">
                  <input
                    type="radio"
                    value="frontend"
                    className="input"
                    {...register("skillyouwantjoin")}
                  />
                  <label>Frondend development</label>
                  <br />
                  <input
                    type="radio"
                    value="backend"
                    className="input"
                    {...register("skillyouwantjoin")}
                  />
                  <label>Backend development</label>
                  <br />
                  <input
                    type="radio"
                    value="mobile"
                    className="input"
                    {...register("skillyouwantjoin")}
                  />
                  <label>Mobile development</label>
                </div>
                <span className="text-red-400">
                  {errors.skillyouwantjoin?.message}
                </span>
              </div>
              <div className="description">
                <label className="form-label">
                  Describe your skills, not more than 200 words
                </label>
                <textarea
                  placeholder="Your answer"
                  {...register("skilldesc")}
                  className={`input {${errors?.skilldesc ? "erorr" : ""}`}
                ></textarea>
                <span className="text-red-400">
                  {errors.skilldesc?.message}
                </span>
              </div>
            </div>
            <div className="links">
              <div className="">
                <label>Share github profile</label>
                <input
                  type="text"
                  placeholder="http://github.com/username"
                  {...register("gitlink")}
                  className={` input ${errors?.gitlink ? "erorr" : ""}`}
                />
                <span className="text-red-400">{errors.gitlink?.message}</span>
              </div>
              <div className="">
                <label>Linkedin profile</label>
                <input
                  type="text"
                  placeholder="http://linkedin.com/username"
                  {...register("linkedinlink")}
                  className={`input${errors?.linkedinlink ? "erorr" : ""}`}
                />
                <span className="text-red-400">
                  {errors.linkedinlink?.message}
                </span>
              </div>
              <span className="text-red-400">{errors.devcv?.message}</span>
            </div>
          </div>
          <div className={hardware ? "my-8" : "hidden"}>
            <h1 className="font-bold my-4 text-base">Hardware Talent</h1>
            <img src={LineImg} alt="VectorImage" className="w-40 mb-8" />
            <div className="skills">
              <div>
                <label className="form-label">
                  Which skills do you want to gain
                </label>
                <div className="radios">
                  <input
                    type="radio"
                    value="additive-manufacturing-iot"
                    {...register("skillyouwantgain")}
                    className="input"
                  />
                  <label>Additive Manufacturing </label>
                  <br />
                  <input
                    type="radio"
                    value="backend"
                    {...register("skillyouwantgain")}
                    className="input"
                  />
                  <label>3D design & Printing </label>
                  <br />
                  <input
                    type="radio"
                    value="3D-design-printing"
                    {...register("skillyouwantgain")}
                    className="input"
                  />
                  <label>PCB designing</label>
                  <br />
                  <input
                    type="radio"
                    value="embedded-system"
                    {...register("skillyouwantgain")}
                    className="input"
                  />
                  <label>IOT and Embedded system</label>
                </div>
                <span className="text-red-400">
                  {errors.skillyouwantjoin?.message}
                </span>
              </div>
              <div className="w-80 gap-2 flex-col flex">
                <label className="font-bold">Share portfolio</label>
                <input
                  type="text"
                  placeholder="http://example.com/"
                  {...register("portfolio")}
                  className={`input
                    ${
                      errors?.portfolio
                        ? "erorr"
                        : "py-2 px-4 bg-slate-200 outline-none  w-full rounded-md"
                    }
                  `}
                />
                <span className="text-red-400">
                  {errors.portfolio?.message}
                </span>
              </div>
              <div className="description">
                <label className="form-label">
                  Describe your skills, not more than 200 words
                </label>
                <textarea
                  placeholder="Your answer"
                  {...register("skilldesc")}
                  className={`input ${errors?.skilldesc ? "erorr" : ""}`}
                ></textarea>
                <span className="text-red-400">
                  {errors.skilldesc?.message}
                </span>
              </div>
            </div>
          </div>
          <div className={enterpreneur ? "mt-5" : "hidden"}>
            <h1 className="font-bold text-base">Tech Entrepreneur</h1>
            <img src={LineImg} alt="VectorImage" className="w-40" />
            <div className="ent-desc mt-5">
              <label>
                If you are an entrepreneur, Please describe your innovation
                description in not less than 200 words.
              </label>
              <textarea
                placeholder="Your answer"
                {...register("entInnovationdesc")}
                className={errors.entInnovationdesc ? "input-err" : ""}
              ></textarea>
              <span className="text-red-400">
                {errors.entInnovationdesc?.message}
              </span>
            </div>
            <div className="innov-modal mt-5">
              <div className="">
                <label>Share your innovation business modal</label>
                <input
                  type="text"
                  {...register("shareInnovationModel")}
                  className={errors.shareInnovationModel ? "erorr" : ""}
                />
                <span className="text-red-400">
                  {errors.shareInnovationModel?.message}
                </span>
              </div>
            </div>
          </div>

          <div className="submit-info mt-4">
            <h4>
              Application Deadline: {currentProgram?.deadline.slice(0, 10)}
            </h4>
            <p className="mt-5 mb-5">
              By submitting your application you hereby declare that the
              information provided is true and correct, you also understand any
              willful dishonesty will lead to disqualification.
            </p>
          </div>
          {/* <button>Cancel</button> */}
          <button type="submit" disabled={loading}>
            {loading ? "Submiting..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default TechupskillApp;
