import React from 'react'
import { FaAccusoft } from 'react-icons/fa'

const WhatWeDoCard = () => {
  return (
    <div className="p-6 w-full rounded-3xl flex flex-col justify-start items-center pt-10 text-center border-t border-slate-700 shadow-md duration-500 shadow-slate-50 scale-95 hover:scale-100 hover:bg-slate-100">
      <div className=" bg-white border border-slate-700 absolute -mt-20 rounded-3xl p-6 rotate-45">
        <FaAccusoft className=" text-5xl -rotate-45" />
      </div>
      <h1 className="mt-8 xl:mt-10 lg:mt-8 md:mt-8 sm:mt-8 text-blue-500 text-lg">
        Our Mission
      </h1>
      <p className="font-light text-sm">
        Facilitate, promote & support young entrepreneurs to develop ICT-enabled
        solutions to solve social & business challenges
      </p>
    </div>
  );
}

export default WhatWeDoCard