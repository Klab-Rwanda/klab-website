import React from 'react'
import Image from '../../assets/CardImage.jpg'
import { FaDotCircle, FaLocationArrow } from 'react-icons/fa';

const CommunityCard = () => {
  return (
    <div className="bg-slate-100 rounded-3xl p-4 scale-95 hover:scale-100 flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-2 cursor-pointer group">
      <img
        src={Image}
        alt="ImageCard"
        className="rounded-2xl w-full xl:w-1/5 lg:w-1/5 md:w-1/2 sm:w-full"
      />
      <div className="w-full flex flex-col justify-between items-start ">
        <div className=" w-full">
          <span className="flex items-start lg:items-center  flex-grow gap-2 p-4 flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-start ">
            <h1 className="text-lg font-semibold">Eric KAMANA</h1>
            <p>Android developer</p>
          </span>
          <span className="flex justify-between items-center flex-grow gap-4 p-4 w-full sm:w-full md:w-full lg:w-3/4 text-xs sm:text-sm lg:text-base flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-row lg:items-center md:items-start sm:lg:items-center">
            <h1 className="">Member since May 2022</h1>
            <p className="text-slate-50 bg-blue-500 border-blue-500 border px-4 py-2 rounded-2xl scale-100 hover:scale-110 hover:bg-slate-100 hover:text-blue-500">
              Hire me
            </p>
          </span>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-2 p-2 w-full text-xs">
          <button className="bg-slate-200 p-2 rounded-2xl flex justify-center items-center gap-3 scale-95 hover:scale-100">
            <FaDotCircle />
            <p>Cohort 4</p>
          </button>
          <button className="bg-slate-200 p-2 rounded-2xl flex justify-center items-center gap-3 scale-95 hover:scale-100">
            <FaLocationArrow />
            <p>Kigali</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard