import React, {useState} from 'react'
import logo from './assets/website/images/logo.svg'
import {HiHome} from 'react-icons/hi'
import { MdApartment } from "react-icons/md";
import { FaUsers, FaTimes } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import {HiBars3BottomLeft } from "react-icons/hi2";
import {NavLink} from  "react-router-dom";
import {IoClose} from "react-icons/io5";
import {GiProgression} from "react-icons/gi"; 


const DashboardSidebar = ({sidebar, setSidebar}) => {

    const handleToggle = () => {
      setSidebar(!sidebar);
    };
    
    return (
      <div className={sidebar ? "custom-side-container" : "sidebar-off"}>
        <div className="logo">
          <img src={logo} alt="" />
          <IoClose className=" menu-close" onClick={handleToggle} />
        </div>
        <ul className={`nav ${sidebar ? "" : "collapsed"}`}>
          <NavLink
            to="/admin/dashboard"
            activeClassName="active"
            className="sidebar-link"
          >
            <li>
              <HiHome className="side-icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/companies" className="sidebar-link">
            <li>
              <MdApartment className="side-icon" />
              <span>Companies</span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/members" className="sidebar-link">
            <li>
              <FaUsers className="side-icon" />
              <span>Members</span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/parentpage" className="sidebar-link">
            <li>
              <RiParentFill className="side-icon" />
              <span>Parents</span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/events" className="sidebar-link">
            <li>
              <BsFillCalendarEventFill className="side-icon" />
              <span>Events</span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/programs" className="sidebar-link">
            <li>
              <GiProgression className="side-icon" />
              <span>Programs</span>
            </li>
          </NavLink>
          <NavLink to="/payments" className="sidebar-link">
            <li>
              <MdPayments className="side-icon" />
              <span>Payments</span>
            </li>
          </NavLink>
        </ul>
      </div>
    );
};

export default DashboardSidebar;