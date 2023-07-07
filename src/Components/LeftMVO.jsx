import React, { useContext } from "react";
import MVOCard from "./Card/MVOCard";
import { FaAccusoft } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillBinocularsFill } from "react-icons/bs";

const LeftMVO = () => {
  return (
    <div className="flex flex-col gap-6-row xl:w-1/2 lg:w-3/5 md:w-3/4 sm:w-full w-full gap-2">
      <div className="p-10 flex gap-10 justify-center items-center rounded-3xl flex-col  xl:flex-row lg:flex-row md:flex-row">
        <div className="border border-slate-500 p-8 rounded-3xl rotate-45 flex justify-center items-center">
          {/* <FaAccusoft className="text-6xl" /> */}
          <TbTargetArrow className="text-[50px]" />
        </div>
        <div className="flex flex-col justify-center items-center xl:items-start lg:items-start md:items-start">
          <h1 className="text-blue-500 text-base font-semibold">Our Mission</h1>
          <p className="text-slate-800 font-light text-sm text-center xl:text-left lg:text-left md:text-left">
            Facilitate, promote & support young entrepreneurs to develop
            ICT-enabled solutions to solve social & business challenges.
          </p>
        </div>
      </div>

      <div className="p-10 flex gap-10 justify-center items-center rounded-3xl flex-col  xl:flex-row lg:flex-row md:flex-row">
        <div className="border border-slate-500 p-8 rounded-3xl rotate-45 flex justify-center items-center">
          <BsFillBinocularsFill className="text-[50px]" />
        </div>
        <div className="flex flex-col justify-center items-center xl:items-start lg:items-start md:items-start">
          <h1 className="text-blue-500 text-base font-semibold">Vision</h1>
          <p className="text-slate-800 font-light text-sm text-center xl:text-left lg:text-left md:text-left">
            Make Rwanda the most innovative country in Africa to create jobs and
            expand the economy.
          </p>
        </div>
      </div>

      <div className="p-10 flex gap-10 justify-center items-center rounded-3xl flex-col  xl:flex-row lg:flex-row md:flex-row">
        <div className="border border-slate-500 p-8 rounded-3xl rotate-45 flex justify-center items-center">
          <FaAccusoft className="text-[50px]" />
        </div>
        <div className="flex flex-col justify-center items-center xl:items-start lg:items-start md:items-start">
          <h1 className="text-blue-500 text-base font-semibold">Objectives</h1>
          <p className="text-slate-800 font-light text-sm text-center xl:text-left lg:text-left md:text-left">
            Naturing Startups from ideation stage to marketable prototypes,
            Offering adequate primary and advanced technology skills Training
            and supporting tech innovators and entrepreneurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftMVO;
