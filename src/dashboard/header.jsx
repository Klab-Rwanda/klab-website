
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import Profile from './assets/website/images/girl.jpg';
import { useState } from 'react';
import { AiFillDelete, AiFillHome } from "react-icons/ai";
import {RxExit} from "react-icons/rx";
import { TbUserCircle} from "react-icons/tb";
import { CgMenuLeft} from "react-icons/cg";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const DashboardHeader = ({sidebar, setSidebar}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.reload(true);
    // navigate('/account');
  } 


  const [profileOpen, setProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  }

  const handleToggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="header">
      <CgMenuLeft className="menu-icon" onClick={handleToggle} />
      <div className="message">
        <h1>Dashboard</h1>
        <p>Hi, {username} welcome back</p>
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
          <p className="bell">20</p>
          <BsBellFill className="icon" />
        </div>
      </div>
      <div className="profile">
        <FaUserCircle className="img" onClick={handleClick} />
        <span>
          <h4>{username}</h4>
          <p>aline@gmail.com</p>
        </span>
      </div>
      {isOpen && (
        <div className="flex flex-col dashboard-profile">
          <ul className="flex flex-col gap-4">
            <li>Profile</li>
            <li>Settings</li>
            <li onClick={logOut}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DashboardHeader