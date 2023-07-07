import React from 'react'
import { FaAccusoft } from 'react-icons/fa'

const MVOCard = () => {
  return (
    <div className="p-10 flex gap-10 justify-center items-center rounded-3xl flex-col  xl:flex-row lg:flex-row md:flex-row">
      <div className="border border-slate-500 p-8 rounded-3xl rotate-45 flex justify-center items-center">
        <FaAccusoft className="text-6xl" />
      </div>
      <div className="flex flex-col justify-center items-center xl:items-start lg:items-start md:items-start">
        <h1 className="text-blue-500 text-base font-semibold">Our Mission</h1>
        <p className="text-slate-800 font-light text-sm text-center xl:text-left lg:text-left md:text-left">
          In publishing and graphic design, Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Cupiditate officiis similique aut autem
          cumque.
        </p>
      </div>
    </div>
  );
}

export default MVOCard