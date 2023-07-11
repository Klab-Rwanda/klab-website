import React from 'react'
import { FaCheckCircle, FaFilter } from 'react-icons/fa';
import ProgramFilterCard from '../../Card/ProgramFilterCard'
import ProgramFilterCardType from '../../Card/ProgramFilterCardType';
import ProgramsFilterList from '../../ProgramsFilterList';

const Filters = (props) => {
  return (
    <>
      <div className="relative text-slate-700 text-lg p-2 rounded-3xl z-10 flex xl:hidden lg:hidden md:hidden sm:flex justify-end items-end">
        <button className="p-2 border border-slate-700 rounded-2xl">
          <FaFilter className=" " />
        </button>
      </div>
      <div className="bg-slate-100 px-4 py-4 w-2/6 flex-col gap-4 rounded-3xl hidden xl:flex lg:flex md:flex sm:hidden absolute xl:relative lg:relative md:relative sm:absolute pt-12">
        <h1 className="font-semibold">{props.title}</h1>
        {/* <ProgramFilterCard title="Klab Programs" /> */}
        <div className="w-full bg-slate-200 rounded-2xl p-4 flex flex-col gap-5">
          <h1>KLab Programs</h1>
          <ul className="flex flex-col gap-2 h-60 overflow-y-visible overflow-x-hidden overflow-scroll scroll-m-4 rounded-xl">
            <ProgramsFilterList title="Android developer" />
            <ProgramsFilterList title="Frontend Developer" />
            <ProgramsFilterList title="Full Stack Developer" />
            <ProgramsFilterList title="Entrepreneur & Innovators" />
            <ProgramsFilterList title="Backend Developers" />
            <ProgramsFilterList title="Data analyst" />
            <ProgramsFilterList title="UI/UX Designer" />
          </ul>
        </div>
        <ProgramFilterCardType title="Select Type" />
        <ProgramFilterCard title="Recent Programs" />
      </div>
    </>
  );
}

export default Filters