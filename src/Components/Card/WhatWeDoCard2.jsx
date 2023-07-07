import React from 'react'
import { FaFigma } from 'react-icons/fa'

const WhatWeDoCard2 = () => {
  return (
    <div className="bg-slate-100 rounded-3xl p-4 group flex flex-col duration-500 justify-start gap-4 scale-95 hover:scale-100 h-auto">
      <div className="border border-slate-700 p-4 rounded-2xl w-14 h-14 flex justify-center items-center group-hover:bg-slate-700 group-hover:text-slate-50 scale-100 group-hover:scale-110">
        <FaFigma className=" text-2xl" />
      </div>
      <h1 className="font-semibold text-blue-500">kLab University Program</h1>
      <p className="font-light">
        kLab university program is a program implemented by kLab in partnership
        with universities to improve student's digital skills as well as
        entrepreneruship skills.
      </p>
    </div>
  );
}

export default WhatWeDoCard2