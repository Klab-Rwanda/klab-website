
import {FaSearch} from 'react-icons/fa'
import { MdTextsms } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import Profile from '../asset/Profile.png';
import { useState } from 'react';
import { AiFillDelete, AiFillHome } from "react-icons/ai";
import {RxExit} from "react-icons/rx";
import { TbUserCircle} from "react-icons/tb";
import { CgMenuLeft} from "react-icons/cg";



const DashboardHeader = ({sidebar, setSidebar}) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message:
        "ICT Chamber signed up as a company and wants to upload a project",
    },
    {
      id: 2,
      message:
        "ICT Chamber signed up as a company and wants to upload a project",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDismiss = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };
  const clearAll = () => {
    notifications.length = 0;
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
      <CgMenuLeft className='menu-icon' onClick={handleToggle}/>
      <div className="message">
        <h1>Dashboard</h1>
        <p>Hi, Aline welcome back</p>
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
        <div className="icons" onClick={handleClick}>
          <p className="bell">{notifications.length}</p>
          <BsBellFill className="icon" />
        </div>
      </div>
      <div className="profile">
        <img src={Profile} alt="Profile"  onClick={handleProfileClick}/>
        <span>
          <h4>Aline</h4>
          <p>aline@gmail.com</p>
        </span>
      </div>
      <div className={profileOpen ? "profile-dropdown" : "off-screen"}>
        <div className="profile-header">
          <h1>Aline Isingizwe</h1>
        </div>
        <div className='profile-actions'>
            <p> <TbUserCircle />  My Account</p>
            <p> <AiFillHome />  Back to home</p>
            <p> <RxExit />  Sign out</p>
        </div>
      </div>
      <div className="notifications-dropdown">
        {isOpen && (
          <div className="notifications-list">
            <div className="notif-header">
              <h4>Notifications</h4>
              <button onClick={clearAll}>clear all</button>
            </div>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <span>{notification.message}</span>
                  <AiFillDelete
                    onClick={() => handleDismiss(notification.id)}
                    className="notif-icon"
                  />
                </div>
              ))
            ) : (
              <div className="no-notifications">No notifications</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHeader