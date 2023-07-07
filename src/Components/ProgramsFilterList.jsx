import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const ProgramsFilterList = (props) => {
  return (
    <li className="w-full hover:bg-slate-300 flex justify-between items-center flex-grow gap-2 py-2 rounded-2xl cursor-pointer">
      <FaCheckCircle className="text-blue-500 text-xl w-2/12" />
      <p className="text-sm w-10/12">{props.title}</p>
    </li>
  );
}

export default ProgramsFilterList