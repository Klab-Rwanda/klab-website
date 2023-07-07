import React from "react";
import "../styles/Navbar.css";
import Logo from "../../assets/Logo.png";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function ParentNav() {
  return (
    <div className="bg-white navbar-Header rounded-3xl p-4 m-4 fixed flex justify-between items-center top-0 flex-grow z-50">
      <img src={Logo} alt="Klap Logo" className="w-16 ml-2" />
      <ul className="hidden justify-center items-center  text-sm font-light gap-8 xl:flex lg:flex md:flex sm:hidden">
        <ol className="group ">
          <li className="flex justify-center items-center gap-2 px-4 rounded-lg py-2">
            <span> Your Kidz</span>
            <FaChevronDown />
          </li>
          <ul className="bg-slate-50 shadow-lg rounded-xl absolute mt-0 px-4 py-2 duration-500 scale-0 group-hover:scale-100 border-t-4">
            <li className="duration-500 cursor-pointer scale-100 rounded-lg hover:scale-110 font-semibold hover:bg-blue-300 hover:text-slate-50 px-4 my-2 py-2">
              first kid
            </li>
            <li className="duration-500 cursor-pointer scale-100 rounded-lg hover:scale-110 font-semibold hover:bg-blue-300 hover:text-slate-50 px-4 my-2 py-2">
              second kid
            </li>
            <li className="duration-500 cursor-pointer scale-100 rounded-lg hover:scale-110 font-semibold hover:bg-blue-300 hover:text-slate-50 px-4 my-2 py-2">
              third kid
            </li>
            <Link to='/parentform'>
              
              <li className="duration-500 cursor-pointer scale-110 hover:scale-125 rounded-lg bg-blue-500 font-semibold text-slate-50 px-4 my-2 py-2">
                Add a kidz
              </li>
            </Link>
          </ul>
        </ol>
      </ul>


      
      
      <ul className="hidden justify-center items-center  text-sm font-light gap-8 xl:flex lg:flex md:flex sm:hidden">
        <ol className="group ">
          
          <ul className="bg-slate-50 shadow-lg rounded-xl absolute mt-0 px-4 py-2 duration-500 scale-0 group-hover:scale-100 border-t-4">
          <Link to='/'>
              
              <li className="duration-500 cursor-pointer scale-110 hover:scale-125 rounded-lg bg-blue-500 font-semibold text-slate-50 px-4 my-2 py-2">
                SignOut
              </li>
          </Link>
          </ul>
          
        <button
          className="bg-slate-800 px-5 text-sm font-semibold py-2 text-slate-50 rounded-3xl hidden xl:flex lg:flex md:flex sm:hidden"
          style={{
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          B
        </button>
      
          
        </ol>
      </ul>

      <FaBars className="block xl:hidden lg:hidden md:hidden sm:block mr-2" />
    </div>
  );
}
