import React, { useContext, useEffect, useState } from "react";
import Image from "../assets/Background.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AppProvider";
import Footer from "../Components/sections/Footer";
import Navbar from "../Components/Navs/Navbar";
import "../Components/styles/HomeWelcome.css";
import "../Components/styles/Programs.css";
import Titles from "../Components/Titles";
import { FaArrowRight, FaCheckCircle, FaFilter } from "react-icons/fa";
import ProgramFilterCardType from "../Components/Card/ProgramFilterCardType";
import ProgramFilterCard from "../Components/Card/ProgramFilterCard";
import { GrFormClose } from "react-icons/gr";

const SingleProgram = () => {
  const { programs } = useContext(AuthContext);
  const { programId } = useParams();
  const [skill, setSkill] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // console.log(programId);
  const single = programs?.find((item) => item._id === programId);
  console.log(single?.tags);

  const otherPrograms = programs.filter((item) => item._id !== programId);

  const handleFilter = (title) => {
    setSkill(title);
  }

  

  useEffect(() => {
    console.log(skill);
  }, [skill]);


  return (
    <div>
      <div className="w-screen welcomeBg flex justify-center items-center relative p-4 pt-20 xl:pt-48 lg:pt-36 md:pt-28 sm:pt-16 py-32">
        <Navbar />
        <div className="homewelcome-w text-slate-50 ">
          <div className="w-3/4 flex flex-col gap-4">
            <p className="font-light mt-14">
              Build your team with developers, engineers and pro remote experts.
            </p>
            <h1 className="font-semibold text-3xl text-slate-100">
              {single?.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen bg-slate-100 flex flex-col justify-center items-center py-8 rounded-3xl rounded-b-none">
        <div className="p-d-w flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col p-2 gap-2">
          {/* <Filters title="Filter by Attribute" /> */}

          <>
            <div className="relative text-slate-700 text-lg p-2 rounded-3xl z-10 flex xl:hidden lg:hidden md:hidden sm:flex justify-end items-end">
              <button className="p-2 border border-slate-700 rounded-2xl">
                <FaFilter className=" " />
              </button>
            </div>
            <div className="bg-slate-100 px-4 py-4 w-2/6 flex-col gap-4 rounded-3xl hidden xl:flex lg:flex md:flex sm:hidden absolute xl:relative lg:relative md:relative sm:absolute pt-12">
              <h1 className="font-semibold">Filter by Attribute</h1>
              {/* <ProgramFilterCard title="Klab Programs" /> */}
              <div className="w-full bg-slate-200 rounded-2xl p-4 flex flex-col gap-5">
                <h1>kLab Programs</h1>
                <ul className="flex flex-col gap-2 overflow-y-visible overflow-x-hidden overflow-scroll scroll-m-4 rounded-xl">
                  <li
                    onClick={() => handleFilter("Android developer")}
                    className={`${
                      skill === "Android developer" ? "bg-slate-300" : ""
                    } w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer`}
                  >
                    <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
                    <p className="text-sm w-10/12">Android developer</p>
                  </li>
                  <li
                    onClick={() => handleFilter("Frontend developer")}
                    className={`${
                      skill === "Frontend developer" ? "bg-slate-300" : ""
                    } w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer`}
                  >
                    <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
                    <p className="text-sm w-10/12">Frontend developer</p>
                  </li>
                  <li
                    onClick={() => handleFilter("Backend developer")}
                    className={`${
                      skill === "Backend developer" ? "bg-slate-300" : ""
                    } w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer`}
                  >
                    <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
                    <p className="text-sm w-10/12">Backend developer</p>
                  </li>
                  <li
                    onClick={() => handleFilter("Full-stack developer")}
                    className={`${
                      skill === "Full-stack developer" ? "bg-slate-300" : ""
                    } w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer`}
                  >
                    <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
                    <p className="text-sm w-10/12">Full-stack developer</p>
                  </li>

                  <li
                    onClick={() => handleFilter("Entrepreneur & Innovators")}
                    className={`${
                      skill === "Entrepreneur & Innovators"
                        ? "bg-slate-300"
                        : ""
                    } w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer`}
                  >
                    <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
                    <p className="text-sm w-10/12">Entrepreneur & Innovators</p>
                  </li>
                  <li
                    onClick={() => handleFilter("UI/UX Designer")}
                    className={`${
                      skill === "UI/UX Designer" ? "bg-slate-300" : ""
                    } w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer`}
                  >
                    <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
                    <p className="text-sm w-10/12">UI/UX Designer</p>
                  </li>
                </ul>
              </div>
              {/* <ProgramFilterCardType title="Select Type" />
              <ProgramFilterCard title="Recent Programs" /> */}
            </div>
          </>
          <div className="w-full rounded-3xl px-6 py-4 flex flex-col gap-6 justify-start items-start">
            <div className="">
              {single?.details}
              <br />
            </div>
            {skill === "Android developer" && (
              <div className="flex flex-col">
                <h1 className="font-[500] text-blue-500">Android developer</h1>
                <p className="mt-2">
                  Android developers typically work with the Java or Kotlin
                  programming languages to build native Android applications.
                  They are responsible for designing, developing, testing, and
                  debugging mobile applications that run on Android devices.
                  This involves understanding the Android application framework,
                  utilizing various development tools, and integrating different
                  components such as user interfaces, databases, network
                  connections, and third-party libraries.
                  <br /> <br />
                  Android developers may also work with other technologies and
                  frameworks such as XML, JSON, SQLite, RESTful APIs, and
                  Firebase to enhance the functionality and performance of their
                  applications. They need to have a good understanding of
                  software development principles, mobile app design guidelines,
                  and best practices for delivering high-quality and
                  user-friendly applications.
                </p>
              </div>
            )}
            {skill === "Frontend developer" && (
              <div className="flex flex-col">
                <h1 className="font-[500] text-blue-500">Frontend developer</h1>
                <p className="mt-2">
                  Frontend developers work with technologies such as HTML
                  (Hypertext Markup Language), CSS (Cascading Style Sheets), and
                  JavaScript to design and implement the frontend of a website.
                  HTML is used to structure the content of web pages, CSS is
                  used to style and layout the elements, and JavaScript is used
                  to add interactivity and dynamic functionality. <br /> <br />
                  Frontend developers need to have a good understanding of web
                  standards, responsive design, and cross-browser compatibility
                  to ensure that their websites work well across different
                  devices and browsers. They collaborate closely with designers
                  and backend developers to translate design mockups and user
                  requirements into functional web pages.
                </p>
              </div>
            )}
            {skill === "Backend developer" && (
              <div className="flex flex-col">
                <h1 className="font-[500] text-blue-500">Backend developer</h1>
                <p className="mt-2">
                  Backend developers work with various technologies and
                  programming languages such as Python, Java, Ruby, PHP, or
                  Node.js to create the server-side components of a web
                  application. They handle tasks such as data storage, business
                  logic, user authentication, server-side validation, and
                  integration with external services or APIs.
                  <br /> <br /> Backend developers often work with databases
                  such as MySQL, PostgreSQL, MongoDB, or Oracle to store and
                  retrieve data efficiently. They design and optimize database
                  schemas, write complex queries, and ensure data integrity and
                  security.
                </p>
              </div>
            )}
            {skill === "Full-stack developer" && (
              <div className="flex flex-col">
                <h1 className="font-[500] text-blue-500">
                  Full-stack developer
                </h1>
                <p className="mt-2">
                  A full-stack developer is a versatile professional who has the
                  skills to work on both the frontend and backend components of
                  a web application. They can create user interfaces using HTML,
                  CSS, and JavaScript, and also handle server-side programming,
                  database management, and business logic. Full-stack developers
                  possess a comprehensive understanding of the entire web
                  development stack, including frontend frameworks (e.g., React,
                  Angular) and backend frameworks (e.g., Django, Express.js).
                  They are involved in the entire software development lifecycle
                  and can effectively collaborate with designers, frontend
                  developers, and other stakeholders. Overall, full-stack
                  developers are valuable professionals who can contribute to
                  all aspects of web application development.
                </p>
              </div>
            )}
            {skill === "Entrepreneur & Innovators" && (
              <div className="flex flex-col">
                <h1 className="font-[500] text-blue-500">
                  Entrepreneur & Innovators
                </h1>
                <p className="mt-2">
                  Certainly! Entrepreneurs and innovators are individuals who
                  bring new ideas, products, or services to the market with the
                  aim of creating value and solving problems. Entrepreneurs
                  establish new businesses or ventures, while innovators
                  introduce novel ideas or technologies to existing industries
                  or create entirely new industries. They possess qualities such
                  as creativity, leadership, and a willingness to take risks.
                  Entrepreneurs focus on building successful enterprises, while
                  innovators seek to improve existing products or processes.
                  Together, they drive economic growth, technological
                  advancements, and societal progress by pushing boundaries and
                  introducing transformative changes.
                </p>
              </div>
            )}
            {skill === "UI/UX Designer" && (
              <div className="flex flex-col">
                <h1 className="font-[500] text-blue-500">UI/UX Designer</h1>
                <p className="mt-2">
                  A UI/UX designer is responsible for creating engaging and
                  intuitive user interfaces and experiences for digital
                  products. They focus on the visual elements (UI) and overall
                  user experience (UX) of websites, apps, and software. UI
                  designers work on the aesthetics, layout, and visual
                  consistency of interfaces, while UX designers conduct
                  research, develop user flows, and ensure user-friendly
                  experiences. UI/UX designers collaborate with stakeholders,
                  use design tools, and work closely with developers to bring
                  their designs to life. Their goal is to create visually
                  appealing, intuitive, and user-friendly digital experiences.
                </p>
              </div>
            )}
            {single?.tags === "Open now" ? (
              <>
                <div className="grid grid-cols-1 w-full xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-[500] text-blue-500">Why Apply?</h1>
                    <ul className=" ml-4">
                      <li>Access to incubation programs</li>
                      <li>Membership at klab</li>
                      <li>Mentorship</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="font-[500] text-blue-500">Requirements</h1>
                    <ul className=" ml-4">
                      <li>Access to incubation programs</li>
                      <li>Membership at klab</li>
                      <li>Mentorship</li>
                    </ul>
                  </div>
                </div>

                <p className="">
                  Application deadline :{" "}
                  <b className="font-bold">{single.deadline.slice(0, 10)}</b>
                </p>
                <Link to="/apply">
                  <button className="bg-slate-800 text-slate-50 px-4 py-2 rounded-[8px]">
                    Apply now
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div>
                  <h1>
                    <b className="text-blue-500 text-2xl ">
                      Application is not open yet! try again later in the future
                    </b>
                  </h1>
                </div>
              </>
            )}
            <hr />
          </div>
        </div>
        <div className="w-[90%] px-8">
          <div className="py-5">
            <h2 className="font-bold text-lg">{single.title} | Gallery</h2>
            <p>
              In Rwanda, most of the innovations in technology, start-ups, or
              even ideas, supporting projects and initiatives are concentrated
              in the capital city of Kigali and there is little knowledge about
              IT talents outside the capital.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 p-2 xl:h-90 lg:h-80 md:h-80 h-96 overflow-x-hidden overflow-y-visible overflow-scroll scroll-m-4 rounded-[5px]">
            <img
              src={Image}
              alt="ImageOne"
              className="w-full cursor-pointer rounded-[5px] h-full object-cover"
              onClick={() => setIsOpen(true)}
            />
            <img
              src={Image}
              alt="ImageOne"
              className="w-full cursor-pointer rounded-[5px] h-full object-cover"
              onClick={() => setIsOpen(true)}
            />
            <img
              src={Image}
              alt="ImageOne"
              className="w-full cursor-pointer rounded-[5px] h-full object-cover"
              onClick={() => setIsOpen(true)}
            />
            <img
              src={Image}
              alt="ImageOne"
              className="w-full cursor-pointer rounded-[5px] h-full object-cover"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      {/* image modal */}
      <div
        className={`fixed flex inset-0 items-center bg-[#00000090] justify-center z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white w-3/4 sm:max-w-md rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={Image}
              alt="Image"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-0 right-0 m-2 rounded-[2px] bg-white"
              onClick={() => setIsOpen(false)}
            >
              <GrFormClose className="fill-white text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* image modal end */}

      <div className="w-screen flex flex-col gap-4 justify-center items-center py-12">
        <Titles
          title="OTHER PROGRAMS"
          desc="We have several progams that helps peaple with different experience
        getting started an strength their career in tech as talents and
        enterprenuers."
        />
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-10 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6">
          {otherPrograms?.map((program) => {
            return (
              <Link to={`/${program._id}`} key={program._id}>
                <div className="bg-slate-50 relative rounded-3xl flex xl:flex-col lg:flex-col md:flex-row sm:flex-col flex-col">
                  <img
                    src={program.profile}
                    alt="CardImage"
                    className="rounded-3xl h-64 object-cover xl:w-full lg:w-full md:w-1/3"
                  />
                  <span
                    className={` ${
                      program.tags === "Closed" ? "bg-red-800" : "bg-slate-800"
                    } text-white absolute top-2 left-2 rounded-[18px] font-semibold px-[10px] py-[5px] text-[14px]`}
                  >
                    {program.tags}
                  </span>
                  <div className="px-6 py-4 pb-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-semibold text-base">
                        {program.title}
                      </h1>
                      <p className="text-sm font-light">
                        {program.details}
                        {/* <span className="hidden md:block lg:hidden xl:hidden">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit quo eaque labore deleniti tempora
                          temporibus porro excepturi sequi nisi perspiciatis
                          quisquam, ab fuga recusandae distinctio commodi sunt
                          ullam? Ut, tempora.
                        </span> */}
                      </p>
                    </div>
                    <span className="flex mt-2 gap-2 items-center text-blue-500 text-sm font-light ">
                      <p>Learn more </p>
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProgram;
