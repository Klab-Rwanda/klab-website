import React, { useContext } from 'react'
import { FaFilter } from 'react-icons/fa';
import Titles from '../../Titles'
import '../../styles/events.css'
import EventsCard from '../../Card/EventsCard';
import EventPic from '../../../assets/CardImage.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AppProvider';

const EventsCards = () => {
  const {events} = useContext(AuthContext);

  const RecentEvents = events.filter((event) => event.category === "Recent");
  console.log(RecentEvents);
  const Upcoming = events.filter((event) => event.category === "Upcoming");
 
  return (
    // <Link to="/singleEvent">
    <div className="flex flex-col w-screen justify-center items-center bg-slate-100 pt-20">
      <div className="flex justify-between items-center e-w">
        <Titles
          title="Recent events"
          desc="We have several programs that helps people with different experiences getting started and strengthening their careers in tech as talents and entrepreneurs"
        />
        <button className="border border-slate-800 rounded-2xl px-4 py-3 flex-row justify-center items-center gap-4 hidden xl:flex lg:flex md:flex sm:hidden ">
          <p>Category</p>
          <FaFilter />
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-12 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6 e-w mt-8">
        {/* event card */}

        {RecentEvents?.map((item) => {
          return (
            <Link to={`/events/${item._id}`} key={item._id}>
              <div
                className="bg-slate-200 w-full rounded-3xl duration-500 scale-95 hover:scale-100"
              >
                <img
                  src={item.profile}
                  alt=""
                  className=" rounded-t-2xl h-64 w-full object-cover"
                />
                <div className="flex">
                  <h1 className="w-4/12 text-3xl p-4 font-semibold">
                    <b className="text-blue-500"></b> {/* <br /> */}
                    {item.startDate.slice(0, 10)}
                  </h1>
                  <span className=" w-10/12 p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.details}</p>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
        {/* event card */}
      </div>
      <div className="flex justify-between items-center e-w">
        <Titles
          title="Upcoming events"
          desc="We have several programs that helps people with different experiences getting started and strengthening their careers in tech as talents and entrepreneurs"
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-12 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6 e-w mt-8">
        {Upcoming?.map((item) => {
          return (
            <Link to="/singleEvent">
              <div
                className="bg-slate-200 w-full rounded-3xl duration-500 scale-95 hover:scale-100"
                key={item._id}
              >
                <img
                  src={item.profile}
                  alt=""
                  className=" rounded-t-2xl h-64 w-full object-cover"
                />
                <div className="flex">
                  <h1 className="w-4/12 text-3xl p-4 font-semibold">
                    <b className="text-blue-500"></b> {/* <br /> */}
                    {item.startDate.slice(0, 10)}
                  </h1>
                  <span className=" w-10/12 p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.details}</p>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
}

export default EventsCards