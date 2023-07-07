import React, { useContext } from 'react'
// import Image from '../../../assets/Background.png'
// import {Link } from "react-router-dom"
// import { useParams } from 'react-router-dom'
// import { AuthContext } from '../../../context/AppProvider'


const Info = () => {
  // const {programs} = useContext(AuthContext);

  // const { programId } = useParams();

  // console.log(programId);

  // const single = programs.find((item) => item._id === programId);
  // console.log(single.deadline);

    return (
      <>
        
        <div className="w-full rounded-3xl px-6 py-4 flex flex-col gap-6 justify-start items-start">
          <div className="">
            {single?.details}
            <br />
            <br />
            {/* The project will be conducted during 5 months from October to
          February, in three phases: Talent detection across the country,
          training, and organizing a hackathon */}
          </div>
          <div className="grid grid-cols-1 w-full xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="flex flex-col gap-3">
              <h1 className=" text-blue-500">Why Apply?</h1>
              <ul className=" ml-4">
                <li>Access to incubation programs</li>
                <li>Membership at klab</li>
                <li>Mentorship</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className=" text-blue-500">Why Apply?</h1>
              <p>Requirements</p>
              <ul className=" ml-4">
                <li>Access to incubation programs</li>
                <li>Membership at klab</li>
                <li>Mentorship</li>
              </ul>
            </div>
          </div>
          <p className="">
            Application deadline :{" "}
            <b className="font-bold">{single.deadline}</b>
          </p>
          <Link to="apply">
            <button className="bg-slate-800 text-slate-50 px-8 py-4 rounded-2xl">
              Apply now
            </button>
          </Link>
          <hr />
          <h2 className="font-bold text-lg">{single.title} | Gallery</h2>
          <p>
            In Rwanda, most of the innovations in technology, start-ups, or even
            ideas, supporting projects and initiatives are concentrated in the
            capital city of Kigali and there is little knowledge about IT
            talents outside the capital.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-4 p-2 xl:h-80 lg:h-80 md:h-80 h-96 overflow-y-visible overflow-scroll scroll-m-4 rounded-3xl">
            <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
            <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
            <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
            <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
          </div>
        </div>
      </>
    );
}

export default Info