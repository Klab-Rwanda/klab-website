import React from "react";
import WhatWeDoCard2 from "../../Card/WhatWeDoCard2";
import Titles from "../../Titles";
import "../../styles/whatWeDo.css";
import {FaFigma } from "react-icons/fa";
import { HiOutlineLightBulb, HiCode } from "react-icons/hi";
import { FaLaptopCode, FaRobot, FaHandshake } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";


const WhatWeDO2 = () => {
  return (
    <div className="w-screen bg-slate-200 flex flex-col gap-6 justify-center items-center rounded-3xl py-12">
      <Titles
        title="What we do"
        desc="kLab provides an open space for IT entrepreneurs to collaborate and innovate in Kigali, Rwanda."
      />
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-2 rounded-3xl  wwd-w">
        {/* <WhatWeDoCard2 /> */}
        <div className="bg-slate-100 rounded-3xl p-4 group flex flex-col items-center duration-500 justify-start gap-4 scale-95 hover:scale-100 h-auto">
          <div className="border border-slate-700 p-4 rounded-2xl w-14 h-14 flex justify-center items-center group-hover:bg-slate-700 group-hover:text-slate-50 scale-100 group-hover:scale-110">
            <HiOutlineLightBulb className=" text-6xl" />
          </div>
          <h1 className="font-semibold text-blue-500">
            kLab Entrepreneurs and innovators
          </h1>
          <p className="font-light text-center">
            This program supports young innovators and entrepreneurs in building
            skills through digital entrepreneurship from the ideation stage to
            marketable prototypes. The program supports and empowers members
            with the adequate potential to create innovative and market-fit
            prototypes. The entire program progresses over a four months period
          </p>
        </div>

        {/* <WhatWeDoCard2 /> */}

        <div className="bg-slate-100 rounded-3xl p-4 group flex flex-col items-center duration-500 justify-center gap-4 scale-95 hover:scale-100 h-auto">
          <div className="border border-slate-700 p-4 rounded-2xl w-14 h-14 flex justify-center items-center group-hover:bg-slate-700 group-hover:text-slate-50 scale-100 group-hover:scale-110">
            <FaLaptopCode className=" text-6xl" />
          </div>
          <h1 className="font-semibold text-blue-500">Talents Program</h1>
          <p className="font-light text-center">
            Talents program offers capacity building to Tech talents with
            updated technologies skills with the aim of helping them get
            employment. We offer project based learning strategies where
            participants learn skills by implemeting projects. The entire
            program progresses over a four months period.
          </p>
        </div>

        {/* <WhatWeDoCard2 /> */}

        <div className="bg-slate-100 rounded-3xl p-4 group flex flex-col items-center duration-500 justify-start gap-4 scale-95 hover:scale-100 h-auto">
          <div className="border border-slate-700 p-4 rounded-2xl w-14 h-14 flex justify-center items-center group-hover:bg-slate-700 group-hover:text-slate-50 scale-100 group-hover:scale-110">
            <FaRobot className=" text-6xl" />
          </div>
          <h1 className="font-semibold text-blue-500">
            kLab Future Coders program
          </h1>
          <p className="font-light text-center">
            Future Coders is a coding program in partnership with Childtech a
            kLab Alumni, that creates and empowers technology young talents aged
            between 5-17 years oldwith coding and web-designing skills
            including, Scratch, Figma, HTML & CSS, Javascript, PHP, Python and
            more.
          </p>
        </div>

        {/* <WhatWeDoCard2 /> */}

        <div className="bg-slate-100 rounded-3xl p-4 group flex flex-col items-center duration-500 justify-start gap-4 scale-95 hover:scale-100 h-auto">
          <div className="border border-slate-700 p-4 rounded-2xl w-14 h-14 flex justify-center items-center group-hover:bg-slate-700 group-hover:text-slate-50 scale-100 group-hover:scale-110">
            <FaHandshake className=" text-2xl" />
          </div>
          <h1 className="font-semibold text-blue-500">
            kLab Talents Solutions Program
          </h1>
          <p className="font-light text-center">
            kLab Freelancers connect young professional that have gone through
            kLab graduates program (that have got at least work experience) to
            connect with businesses worldwide to work on freelancing projects
            both with local companies and on international digital platforms
            like Upwork and Fiver.
          </p>
        </div>

        {/* <WhatWeDoCard2 /> */}

        <div className="bg-slate-100 rounded-3xl p-4 group flex flex-col items-center duration-500 justify-start gap-4 scale-95 hover:scale-100 h-auto">
          <div className="border border-slate-700 p-4 rounded-2xl w-14 h-14 flex justify-center items-center group-hover:bg-slate-700 group-hover:text-slate-50 scale-100 group-hover:scale-110">
            <BiLinkExternal className=" text-6xl" />
          </div>
          <h1 className="font-semibold text-blue-500">kLab Graduate Program</h1>
          <p className="font-light text-center">
            kLab Freelancers offers opportunities to all the Talents program
            graduates to connect them to Local companies for internship and
            Junior position; the program also helps them get experience in jobs.
            Additionally, kLab also offers junior development internship and
            jobs to the outstanding participants.
          </p>
        </div>

        <div className="bg-slate-100 rounded-3xl p-4 group flex flex-col items-center duration-500 justify-start gap-4 scale-95 hover:scale-100 h-auto">
          <div className="border border-slate-700 p-4 rounded-2xl w-14 h-14 flex justify-center items-center group-hover:bg-slate-700 group-hover:text-slate-50 scale-100 group-hover:scale-110">
            <HiCode className=" text-6xl" />
          </div>
          <h1 className="font-semibold text-blue-500">
            kLab Refugee Coding Academy
          </h1>
          <p className="font-light text-center">
            By initiating this program in partnership with ALIGHT, kLab aims to
            provide a unique, extensive program that will help equip and groom
            talented creative refugee programmers to provide them with the
            necessary tools needed to make them into ‘A-level skill programmers
            and developers in Rwanda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDO2;
