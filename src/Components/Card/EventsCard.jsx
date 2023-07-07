import React from 'react'
import { Link } from 'react-router-dom';
import EventPic from '../../assets/CardImage.jpg';

const EventsCard = () => {
 
  return (
    <>
        <Link to="/singleEvent">
        <div className="bg-slate-200 w-full rounded-3xl duration-500 scale-95 hover:scale-100 cursor-pointer">
          <img src={EventPic} alt="" className=" rounded-t-2xl" />
          <div className="flex">
            <h1 className="w-2/12 text-3xl p-4 font-semibold">
              <b className="text-blue-500">SEP</b> <br />
              09
            </h1>
            <span className=" w-10/12 p-4">
              <h3 className="text-xl font-bold">Huye Techup skills</h3>
              <p>
                A program dedicate for kids in their school vacancies and
                weekend programs
              </p>
            </span>
          </div>
        </div>
        </Link>
    </>
  );
}

export default EventsCard