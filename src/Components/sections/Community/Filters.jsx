import React from 'react'
import { FaFilter } from 'react-icons/fa';
import ProgramFilterCard from '../../Card/ProgramFilterCard'
import ProgramFilterCardType from '../../Card/ProgramFilterCardType';

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
        <ProgramFilterCardType title="Cohorts" />
        <ProgramFilterCard title="Members Skills" />
      </div>
    </>
  );
}

export default Filters