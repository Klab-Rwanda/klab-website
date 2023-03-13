import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { MdTextsms } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import Profile from '../asset/Profile.png';


const DashboardHeader = () => {
  return (
    <div className="header">
      <div className="message">
        <h1>Dashboard</h1>
        <p>Hi, Aline welcome back to Klab Dashboard</p>
      </div>
      <div className="search">
        <input type="text" placeholder="Serach here ..." />
       
          <FaSearch className="search_icon" />

      </div>
      <div className="chat">
        <div className="icons">
          <p className="sms">12</p>
          <MdTextsms className="icon" />
        </div>
        <div className="icons">
          <p className="bell">12</p>
          <BsBellFill className="icon" />
        </div>
      </div>
      <div className="profile">
        <img src={Profile} alt="Profile" />
        <span>
          <h4>Aline</h4>
          <p>aline@gmail.com</p>
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader