import React from 'react'
import ProgramsFilterList from '../ProgramsFilterList';
import { FaCheckCircle } from "react-icons/fa"

const ProgramFilterCard = (props) => {
  return (
    <div className="w-full bg-slate-200 rounded-2xl p-4 flex flex-col gap-5">
      <h1>{props.title}</h1>
      <ul className="flex flex-col gap-2 h-60 overflow-y-visible overflow-x-hidden overflow-scroll scroll-m-4 rounded-xl">
        <ProgramsFilterList title="Android developer" />
          <li className="w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer">
        <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
          <p className="text-sm w-10/12">{props.title}</p>
        </li>
        <ProgramsFilterList title="Frontend Developer" />
        <ProgramsFilterList title="Full Stack Developer" />
        <ProgramsFilterList title="Entrepreneur & Innovators" />
        <ProgramsFilterList title="Backend Developers" />
        <ProgramsFilterList title="Data analyst" />
        <ProgramsFilterList title="UI/UX Designer" />
      </ul>
    </div>
  );
}

export default ProgramFilterCard