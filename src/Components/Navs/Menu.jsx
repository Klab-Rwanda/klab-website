import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AppProvider";
import { BiLogOut } from "react-icons/bi";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const { isLoged, setIsLoged } = useContext(AuthContext);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload(true);
  };

  return (
    <div className="block xl:hidden lg:hidden md:hidden sm:block absolute right-0 top-0 smNavbar-Header">
      <div className=" w-full flex items-end justify-end p-4">
        {menu ? (
          <FaTimes className="text-xl" onClick={handleMenu} />
        ) : (
          <FaBars className="text-xl" onClick={handleMenu} />
        )}
      </div>
      {menu && (
        <ul className="mt-3 p-4 bg-slate-50 rounded-2xl shadowSide gap-1 flex flex-col group">
          <Link to="/">
            <li className="py-4 px-3 rounded-xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="py-4 px-3 rounded-xl">About</li>
          </Link>
          <Link to="/programs">
            <li className="py-4 px-3 rounded-xl">Programs</li>
          </Link>
          <Link to="/community">
            <li className="py-4 px-3 rounded-xl">Community</li>
          </Link>
          <Link to="/events">
            <li className="py-4 px-3 rounded-xl">Events</li>
          </Link>
          {isLoged ? (
            <li onClick={() => handleLogout()} className="py-4 px-3 cursor-pointer mt-2 rounded-xl flex items-center gap-2 text-slate-800 font-[500]"><BiLogOut />  Log out</li>
          ) : (
            <div className="grid grid-cols-2">
              <Link to="/account">
                <li className="py-4 scale-90 hover:scale-100 bg-slate-700 text-slate-50 text-center rounded-xl font-medium">
                  Sign in
                </li>
              </Link>
              <Link to="/SignUp">
                <li className="py-4 scale-90 hover:scale-100 bg-slate-700 text-slate-50 text-center rounded-xl font-medium">
                  Sign Up
                </li>
              </Link>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Menu;
