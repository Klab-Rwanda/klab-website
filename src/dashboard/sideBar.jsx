import React, {useState} from 'react'
import logo from '../asset/Logo.png'
import {HiHome} from 'react-icons/hi'
import { MdApartment } from "react-icons/md";
import { FaUsers, FaTimes } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import {HiBars3BottomLeft } from "react-icons/hi2";
import {NavLink} from  "react-router-dom";

const DashboardSidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    const handleToggle = () => {
        setSidebar(!sidebar);
    };

    
    return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          {/* <span className="collapse">
                    {
                        sidebar ?
                            <HiBars3BottomLeft
                                className="icon show"
                                onClick={handleToggle}
                            />
                            :
                            <FaTimes
                                className="icon hide"
                                onClick={handleToggle}
                            />
                    }
                </span> */}
        </div>
        <ul className={`nav ${sidebar ? "" : "collapsed"}`}>
          <NavLink
            to="/admin/dashboard"
            activeclassName="active"
            className="sidebar-link"
          >
            <li>
              <HiHome />
              {sidebar && <span>Dashboard</span>}
            </li>
          </NavLink>
          <NavLink to="/dashboard/companies" className="sidebar-link">
            <li>
              <MdApartment />
              {sidebar && <span>Companies</span>}
            </li>
          </NavLink>
          <NavLink to="/dashboard/members" className="sidebar-link">
            <li>
              <FaUsers />
              {sidebar && <span>Members</span>}
            </li>
          </NavLink>
          <NavLink to="/" className="sidebar-link">
            <li>
              <RiParentFill />
              {sidebar && <span>Parents</span>}
            </li>
          </NavLink>
          <NavLink to="/dashboard/events" className="sidebar-link">
            <li>
              <BsFillCalendarEventFill />
              {sidebar && <span>Events</span>}
            </li>
          </NavLink>
          <NavLink to="/" className="sidebar-link">
            <li>
              <MdPayments />
              {sidebar && <span>Transactions</span>}
            </li>
          </NavLink>
        </ul>
      </div>
    );
};

export default DashboardSidebar;