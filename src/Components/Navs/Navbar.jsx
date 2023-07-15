import React, { useContext, useState, useRef } from "react";
import "../styles/Navbar.css";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { AuthContext } from "../../context/AppProvider";
import { set } from "react-hook-form";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { loggedUser, setLoggedUser, programs } = useContext(AuthContext);

  const currentProgram = programs?.find(
    (program) => program?._id === "6426afb02afa3a9515f56028"
  );
  console.log(setLoggedUser);
  const handleLogout = () => {
    setLoggedUser(null);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.reload(true);
  };

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-white navbar-Header shadow-md rounded-3xl p-4 m-4 fixed flex justify-between items-center top-0 flex-grow z-50">
      <img src={Logo} alt="Klap Logo" className="w-16 ml-2 cursor-pointer" />
      <ul className="hidden justify-around text-sm font-light items-center gap-4 xl:flex lg:flex md:flex sm:hidden">
        <Link to="/" className={`${isActive("/") ? "active-link" : ""}`}>
          <li>Home</li>
        </Link>
        <Link
          to="/about"
          className={`${isActive("/about") ? "active-link" : ""}`}
        >
          <li>About</li>
        </Link>
        <Link
          to="/programs"
          className={`${isActive("/programs") ? "active-link" : ""}`}
        >
          <li>Programs</li>
        </Link>
        {/* <Link
          to="/community"
          className={`${isActive("/community") ? "active-link" : ""}`}
        >
          <li>Community</li>
        </Link> */}
        {/* <Link
          to="/events"
          className={`${isActive("/events") ? "active-link" : ""}`}
        >
          <li>Events</li>
        </Link> */}
      </ul>
      {loggedUser ? (
        <>
          <div
            class=" hidden relative profile-avatar md:inline-flex items-center cursor-pointer justify-center w-10 h-10 overflow-hidden bg-slate-800 rounded-full dark:bg-gray-600 "
            onClick={() => setOpenProfile(!openProfile)}
          >
            <span class="font-medium text-slate-50 ">
              {loggedUser?.username[0]?.toUpperCase()}
            </span>
          </div>
          {openProfile && (
            <div className="flex flex-col drop-down-profile">
              <ul className="flex flex-col gap-4">
                {loggedUser?.role === "admin" && (
                  <Link to={`/dashboard/members`}>
                    <li>Dashboard</li>
                  </Link>
                )}
                {/* <li>Settings</li> */}
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className="flex gap-8">
          {currentProgram?.tags === "Open now" && (
            <Link to={`/${currentProgram?._id}`}>
              <button className="bg-slate-800 px-5 text-sm font-semibold py-2 text-slate-50 rounded-[8px] hidden xl:flex lg:flex md:flex sm:hidden">
                Apply Now
              </button>
            </Link>
          )}

          <Link to="/account">
            <button className="bg-slate-800 px-5 text-sm font-semibold py-2 text-slate-50 rounded-[8px] hidden xl:flex lg:flex md:flex sm:hidden">
              Sign in
            </button>
          </Link>
        </div>
      )}
      <Menu />
    </div>
  );
};

export default Navbar;
