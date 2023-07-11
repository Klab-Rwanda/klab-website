import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect, useContext, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../../context/AppProvider";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Notify } from "notiflix";

Confirm.init({
  width: "320px",
  backgroundColor: "#f8f8f8",
  borderRadius: "8px",
  backOverlay: true,
  backOverlayColor: "rgba(0,0,0,0.5)",
  svgSize: "100px",
  okButtonBackground: "#18385A",
  titleColor: "#18385A",
});

const trainerSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("please enter a valid email").required("Required"),
  phone: yup.number().required("Required"),
  program: yup.string().required("Required"),
  location: yup.string().required("Required"),
  cohort: yup.number().required("Required"),
  stack: yup.string().required("Required"),
});

const CREATE_TRAINER = "https://klab-academy.onrender.com/api/v1/trainers";
const DELETE_TRAINER = "https://klab-academy.onrender.com/api/v1/trainers/";

const Trainers = () => {
  // add skill section

  const [inputValue, setInputValue] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [suggestedSkills, setSuggestedSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Problem Solving",
    "Python",
    "Java",
    "C++",
    "Entrepreneurship",
    "Project Management",
  ]);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newSkill = inputValue.trim();

      if (skillsList.includes(newSkill)) {
        setError("Skill already exists.");
        setInputValue("");
        return;
      }

      if (skillsList.length >= 5) {
        setError("Maximum limit of 5 skills reached.");
        setInputValue("");
        return;
      }

      setSkillsList((prevList) => [...prevList, newSkill]);
      setInputValue("");
      setError("");
    }
  };

  const handleSkillClick = (skill) => {
    if (skillsList.includes(skill) || skillsList.length >= 5) {
      setError("Skill already exists or maximum limit of 5 skills reached.");
      return;
    }

    setSkillsList((prevList) => [...prevList, skill]);
    setInputValue("");
    setError("");
  };

  const handleRemoveSkill = (skill) => {
    setSkillsList((prevList) => prevList.filter((item) => item !== skill));
  };

  // add skill end

  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState(false);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const { trainers } = useContext(AuthContext);
  console.log(trainers);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(trainerSchema),
    defaultValues: {
      name: selected ? selected.name : "",
      email: selected ? selected.email : "",
      phone: selected ? selected.phone : "",
      program: selected ? selected.program : "",
      location: selected ? selected.location : "",
      cohort: selected ? selected.cohort : "",
      profile: selected ? selected.profile[0] : "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("program", data.program);
    formData.append("location", data.location);
    formData.append("cohort", data.cohort);
    formData.append("profile", data.profile[0]);
    formData.append("stack", data.stack);
    formData.append("skills", JSON.stringify(skillsList));

    try {
      if (selected) {
        setLoading(true);
        const response = await axios.put(
          `https://klab-academy.onrender.com/api/v1/trainers/${selected._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoading(false);
        Notify.success("Trainer was updated successfully!");
        window.location.reload(true);
      } else {
        setLoading(true);
        const response = await axios.post(CREATE_TRAINER, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setLoading(false);
        Notify.success("Trainer was added successfully!");
        window.location.reload(true);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      Confirm.show(
        "Confirm",
        "are you sure you want to delete this trainer?",
        "Yes",
        "No",
        async () => {
          await axios.delete(
            `https://klab-academy.onrender.com/api/v1/trainers/${id}`
          );
          window.location.reload(true);
        },
        () => {},
        {}
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    reset(selected);
  }, [selected]);

  return (
    <>
      <div>
        <div className="part flex flex-row justify-between items-center w-full px-2 ">
          <div className="admin-headers">
            <h2>All Trainers</h2>
            <p>Dashboard &gt; Members &gt; Trainers</p>
          </div>
          <button
            onClick={() => setModal(true)}
            className="bg-transparent border border-slate-800 px-4 hover:bg-slate-800 hover:text-slate-100 duration-500 h-10 py-2 text-slate-800 rounded-xl"
          >
            Add New
          </button>
        </div>
        <div className="border-t border-[#D0D7DE] ">
          {trainers.map((item) => {
            return (
              <div
                key={item._id}
                className="flex items-center w-full px-[15px] py-[5px] text-[#18385A] border-b border-[#D0D7DE] cursor-pointer hover:bg-[#F6F8FA]"
              >
                <img
                  src={item.profile}
                  onClick={() => {
                    setSelected(item);
                    setDetails(true);
                  }}
                  className="w-[60px] h-[60px] cursor-pointer rounded-full"
                />
                <div className="flex flex-row w-[100%] items-center justify-between ml-[20px]">
                  <div className="admin-names">
                    <h4
                      onClick={() => {
                        setSelected(item);
                        setDetails(true);
                      }}
                      className="cursor-pointer"
                    >
                      {item.name}
                    </h4>
                    <p>{item.program}</p>
                  </div>
                  <p className="hidden md:block">{item.email}</p>
                  <p className="hidden md:block">{item.phone}</p>
                  <div className="flex items-center gap-[20px]">
                    <div
                      onClick={() => {
                        setSelected(item);
                        setModal(true);
                      }}
                      className="cursor-pointer text-[#2F85E1] border border-[#DDE8F4] rounded-[5px] p-[5px]"
                    >
                      <FaPen />
                    </div>
                    <div onClick={() => handleDelete(item._id)}>
                      <FaTrashAlt className="text-red-500 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 bg-[#00000080] ${
          modal ? "" : "hidden"
        } z-[1000] w-full h-full `}
      >
        <div className="absolute bg-white w-[50%] p-5 rounded-[5px] top-[50%] left-[50%] max-h-[90%] overflow-y-scroll transform -translate-x-[50%]  -translate-y-[50%]">
          <div className="flex flex-col relative px-[10px]">
            <h3 className="text-[20px] font-[500] text-slate-800">
              Add Trainer
            </h3>
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setModal(false)}
            >
              <IoCloseSharp className="text-2xl " />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 items-center mt-[10px] gap-[10px]">
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`bg-[#f3f1f1] ${
                      errors.name ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                    {...register("name")}
                  />
                </div>
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`bg-[#f3f1f1] ${
                      errors.email ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                    {...register("email")}
                  />
                </div>
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Phone number
                  </label>
                  <input
                    type="number"
                    className={`bg-[#f3f1f1] ${
                      errors.phone ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                    {...register("phone")}
                  />
                </div>
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Program
                  </label>
                  <select
                    className={`bg-[#f3f1f1] ${
                      errors.program ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                    {...register("program")}
                  >
                    <option value=""></option>
                    <option>Future Koders</option>
                    <option>Klab Startups Academy</option>
                  </select>
                </div>
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Location
                  </label>
                  <input
                    type="text"
                    className={`bg-[#f3f1f1] ${
                      errors.location ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                    {...register("location")}
                  />
                </div>
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Cohort
                  </label>
                  <input
                    type="number"
                    className={`bg-[#f3f1f1] ${
                      errors.cohort ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                    {...register("cohort")}
                  />
                </div>
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Stack
                  </label>
                  <select
                    className={`bg-[#f3f1f1] ${
                      errors.stack ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                    {...register("stack")}
                  >
                    <option value=""></option>
                    <option>Frontend developer</option>
                    <option>Backend developer</option>
                    <option>Fullstack developer</option>
                  </select>
                </div>
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Image
                  </label>
                  <input
                    type="file"
                    className="bg-[#f3f1f1] w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]"
                    {...register("profile")}
                  />
                </div>
              </div>

              {/* add skill input  */}
              <div className="flex flex-col items-start py-4">
                <div className="flex items-start gap-[5px] w-full flex-col">
                  <label className="text-slate-800 font-[500] text-[16px]">
                    Skills
                  </label>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter a skill"
                    className={`bg-[#f3f1f1] ${
                      errors.cohort ? "border border-red-500" : ""
                    } w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                  />
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                  <div className="mt-4 flex items-center flex-wrap gap-2">
                    {suggestedSkills.map((s) => (
                      <span
                        key={s}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 cursor-pointer"
                        onClick={() => handleSkillClick(s)}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    {skillsList.map((s) => (
                      <span
                        key={s}
                        className="bg-blue-600 flex gap-1 items-center text-white px-3 py-1 rounded-full"
                      >
                        {s}
                        <button
                          onClick={() => handleRemoveSkill(s)}
                          className="text-slate-100"
                        >
                          <IoCloseSharp />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                {/* add skill end  */}
              </div>
              <button
                type="submit"
                className="bg-slate-800 text-white py-[5px] w-[50%] rounded-[8px]"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 bg-[#00000080] ${
          details ? "" : "hidden"
        } z-[1000] w-full h-full`}
      >
        <div className="absolute bg-white w-[50%] max-h-[80%] overflow-y-auto p-5 rounded-[5px] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <div className="flex flex-col relative">
            <div
              className="absolute top-1 right-1 cursor-pointer"
              onClick={() => setDetails(false)}
            >
              <IoCloseSharp className="text-2xl " />
            </div>
            <div className="flex gap-10 flex-col lg:flex-row">
              <div>
                <img
                  src={selected?.profile}
                  alt=""
                  className="max-w-[320px] md:max-w-[340px]  rounded-[8px]"
                />
              </div>
              <div className="flex flex-col items-start gap-[5px]">
                <div className="flex flex-col items-start ">
                  <label className="text-[#18385A] text-[18px]">Name:</label>
                  <span className="text-[#627DA0] text-[16px]">
                    {selected?.name}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-[#18385A] text-[18px]">Email:</label>
                  <span className="text-[#627DA0] text-[16px]">
                    {selected?.email}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-[#18385A] text-[18px]">
                    Phone number:
                  </label>
                  <span className="text-[#627DA0] text-[16px]">
                    {selected?.phone}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-[#18385A] text-[18px]">Program:</label>
                  <span className="text-[#627DA0] text-[16px]">
                    {selected?.program}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-[#18385A] text-[18px]">
                    Location:
                  </label>
                  <span className="text-[#627DA0] text-[16px]">
                    {selected?.location}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-[#18385A] text-[18px]">Cohort:</label>
                  <span className="text-[#627DA0] text-[16px]">
                    {selected?.cohort}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trainers;
