import React from "react";
import Navbar from "../../Navs/Navbar";
import "../../styles/HomeWelcome.css";

const AboutHomepage = () => {
  return (
    <div className="w-screen welcomeBg flex justify-center items-center relative p-4 pt-20 xl:pt-48 lg:pt-36 md:pt-28 sm:pt-16 py-32">
      <Navbar />
      <div className="homewelcome-w text-slate-50 ">
        <div className="overlay"></div>
        <div className="w-3/4 flex  relative z-20 flex-col gap-4">
          <p className="font-light mt-14">
            kLab provides an open space for IT entrepreneurs to collaborate and
            innovate in Kigali, Rwanda
          </p>
          <h1 className="font-semibold text-3xl text-slate-50">About K-LAB</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHomepage;
