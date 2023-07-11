import React, { useContext } from "react";
import Navbar from "../Components/Navs/Navbar";
import Footer from "../Components/sections/Footer";
import Titles from "../Components/Titles";

import klabImg from "../assets/klabimg.jpg";
import EventsCard from "../Components/Card/EventsCard";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AppProvider";
import { useParams } from "react-router-dom";

const SingleEvents = () => {
  const { events } = useContext(AuthContext);
  const { eventId } = useParams();

  const event = events.find((event) => event._id === eventId);

  const similarEvents = events.filter((item) => item.category === "Recent");
  console.log(similarEvents);

  const mapLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5328897567774!2d30.083656165334382!3d-1.9393929872357032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1680253145829!5m2!1sen!2srw";
  return (
    <>
      <div className="w-screen welcomeBg flex justify-center items-center relative p-4 pt-20 xl:pt-48 lg:pt-36 md:pt-28 sm:pt-16 py-42">
        <Navbar />
        <div className="homewelcome-w text-slate-50">
          <div className="w-3/4 flex flex-col gap-4">
            <p className="font-light mt-14">
              Build your team with developers, engineers and pro remote experts.
            </p>
            <h1 className="font-semibold text-4xl text-slate-100">
              {event.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-8 p-8 xl:p-24 lg:p-24 md:12 sm:10 xl:flex-row lg:flex-col md:flex-col">
        <div className=" w-full xl:w-4/6 p-4">
          <Titles title="Description" />
          <p className="mt-5">{event.details}</p>
          <img
            src={klabImg}
            alt=""
            className=" rounded-3xl mt-6 w-full xl:w-5/6"
          />
          <form action="" className="mt-5">
            <h1>Book event</h1>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="username"
                className="px-4 outline-none border-none py-4 rounded-2xl bg-slate-200"
              />
              <input
                type="email"
                placeholder="email"
                className="px-4 outline-none border-none py-4 rounded-2xl bg-slate-200"
              />
            </div>
            <br />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="phone number"
                className="px-4 outline-none border-none py-4 rounded-2xl bg-slate-200"
              />
              {/* <div className="flex flex-col px-4 outline-none border-none rounded-2xl bg-slate-200">
                <label htmlFor="">CV</label>
                <input type="file" className="border-none bg-transparent" />
              </div> */}
            </div>
            <input
              type="submit"
              value="Book event"
              className="bg-blue-500 px-4 outline-none text-white cursor-pointer border-none py-4 rounded-2xl w-full mt-4"
            />
          </form>
          <br />
          <br />
          <hr />
          <br />
          <form action="" className="mt-5">
            <h1>Leave comment</h1>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Fullname"
                className="px-4 outline-none border-none py-4 rounded-2xl bg-slate-200"
              />
              <input
                type="email"
                placeholder="email"
                className="px-4 outline-none border-none py-4 rounded-2xl bg-slate-200"
              />
            </div>
            <br />
            <div className="grid grid-cols-1 gap-4">
              <input
                type="number"
                placeholder="phone number"
                className="px-4 outline-none border-none py-4 rounded-2xl w-full bg-slate-200"
              />
            </div>
            <input
              type="submit"
              value="Apply now"
              className="bg-blue-500 px-4 outline-none border-none py-4 cursor-pointer text-white rounded-2xl w-full mt-4"
            />
          </form>
        </div>
        <div className=" w-full xl:w-2/6 flex flex-col gap-8">
          <div className="w-full">
            <h1 className="text-blue-500 text-3xl p-4">Event location</h1>
            <iframe
              src={mapLocation}
              frameborder="0"
              className="h-96 w-full rounded-3xl "
            ></iframe>
          </div>

          <div className="w-full">
            <h1 className="text-blue-500 text-3xl p-4">Tags</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <button className="bg-slate-200 py-3 rounded-2xl">
                Kigali Teckup skills
              </button>
              <button className="bg-slate-200 py-3 rounded-2xl">
                Future Koders
              </button>
              <button className="bg-slate-200 py-3 rounded-2xl">
                Entrepreures
              </button>
              <button className="bg-slate-200 py-3 rounded-2xl">
                Ihuzo Digital
              </button>
              <button className="bg-slate-200 py-3 rounded-2xl">Dev</button>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-blue-500 text-3xl p-4">Share with friends</h1>
            <div className="grid grid-cols-5 gap-4 p-4">
              <div className="hover:bg-slate-600  text-slate-600 flex justify-center items-center p-4 text-2xl rounded-xl group duration-500 cursor-pointer">
                <FaFacebook className=" group-hover:-rotate-45 scale-100 group-hover:scale-125 group-hover:text-slate-100 duration-300" />
              </div>
              <div className="hover:bg-slate-600  text-slate-600 flex justify-center items-center p-4 text-2xl rounded-xl group duration-500 cursor-pointer">
                <FaTwitter className=" group-hover:-rotate-45 scale-100 group-hover:scale-125 group-hover:text-slate-100 duration-300" />
              </div>
              <div className="hover:bg-slate-600  text-slate-600 flex justify-center items-center p-4 text-2xl rounded-xl group duration-500 cursor-pointer">
                <FaYoutube className=" group-hover:-rotate-45 scale-100 group-hover:scale-125 group-hover:text-slate-100 duration-300" />
              </div>
              <div className="hover:bg-slate-600  text-slate-600 flex justify-center items-center p-4 text-2xl rounded-xl group duration-500 cursor-pointer">
                <FaLinkedin className=" group-hover:-rotate-45 scale-100 group-hover:scale-125 group-hover:text-slate-100 duration-300" />
              </div>
              <div className="hover:bg-slate-600  text-slate-600 flex justify-center items-center p-4 text-2xl rounded-xl group duration-500 cursor-pointer">
                <FaInstagram className=" group-hover:-rotate-45 scale-100 group-hover:scale-125 group-hover:text-slate-100 duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex pl-20 justify-between items-center e-w">
          <Titles
            title="Similar events"
            desc="We have several programs that helps people with different experiences getting started and strengthening their careers in tech as talents and entrepreneurs"
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-12 lg:mx-12 md:mx-10 sm:mx-10 mx-6 e-w mt-8">
          {similarEvents.map((event) => {
            return (
              <Link to={`/events/${event._id}`} key={event._id}>
                <div className="bg-slate-200 w-full rounded-3xl duration-500 scale-95 hover:scale-100">
                  <img
                    src={event.profile}
                    alt=""
                    className=" rounded-t-2xl h-64 w-full object-cover"
                  />
                  <div className="flex">
                    <h1 className="w-4/12 text-3xl p-4 font-semibold">
                      <b className="text-blue-500"></b> {/* <br /> */}
                      {event.startDate.slice(0, 10)}
                    </h1>
                    <span className=" w-10/12 p-4">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p>{event.details}</p>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleEvents;
