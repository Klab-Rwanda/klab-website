import React, {useState} from 'react'
import logo from '../asset/Logo.png'
import {HiHome} from 'react-icons/hi'
import { MdApartment } from "react-icons/md";
import { FaUsers, FaTimes } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import {HiBars3BottomLeft } from "react-icons/hi2";
import {Link} from  "react-router-dom";

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
          <li className="active" >
            <HiHome />
            {sidebar && <span>Dashboard</span>}
          </li>
          <li>
            <MdApartment />
            {sidebar && <span>Companies</span>}
          </li>
          <li>
            <FaUsers />
            {sidebar && <span>Members</span>}
          </li>
          <li>
            <RiParentFill />
            {sidebar && <span>Parents</span>}
          </li>
          <Link to="/dashboard/events">
            <li>
              <BsFillCalendarEventFill />
              {sidebar && <span>Events</span>}
            </li>
          </Link>
          <li>
            <MdPayments />
            {sidebar && <span>Transactions</span>}
          </li>
        </ul>
      </div>
    );
};

export default DashboardSidebar;