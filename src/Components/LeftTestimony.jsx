import React from 'react'
import { Link } from "react-router-dom"

const LeftTestimony = () => {
  return (
    <div className="flex flex-col gap-5 justify-start items-start w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
      <h1 className=" text-5xl">
        Some of our <b className=" text-blue-500">proud</b> graduates
      </h1>
      <p className="text-sm font-light">
        Our graduates as as proud as you may think? Ofcourse yes! all people
        that passed through our different programs have got jobs and others
        continues their studies in their dream colleges because of tus
      </p>
      <a href="/programs">
        <button className="bg-blue-500 rounded-2xl px-6 py-3 text-slate-50">
          Join them
        </button>
      </a>
    </div>
  );
}

export default LeftTestimony