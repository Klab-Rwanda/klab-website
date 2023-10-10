import Outline from "./outline";
import Admin from "../assets/website/icons/administration.svg";
import Partners from "../assets/website/icons/partners-icon.svg";
import Trainers from "../assets/website/icons/trainers.svg";
import Alumni from "../assets/website/icons/alumni.svg";
import Trainees from "../assets/website/icons/trainee.svg";
import { Outlet, NavLink } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

const Members = () => {
  const [sider, setSider] = useState(false);

  const handleSider = () => {
    setSider(!sider);
  };

  return (
    <div className="wrapper">
      <Outline />
      <section className="members-content">
        <div className="members-container">
          <div className={sider ? "members-modal" : "members-sider"}>
            <ul>
              <NavLink to="/dashboard/members" end className="members-link">
                <li>
                  <img src={Admin} alt="" /> <span>Team</span>
                </li>
              </NavLink>
              <NavLink to="partners" className="members-link">
                <li>
                  <img src={Partners} alt="" /> <span>Partners</span>
                </li>
              </NavLink>
              <NavLink to="trainers" className="members-link">
                <li>
                  <img src={Trainers} alt="" />
                  <span>Trainers</span>
                </li>
              </NavLink>
              <NavLink to="alumni" className="members-link">
                <li>
                  {" "}
                  <img src={Alumni} alt="" /> <span>Alumni</span>
                </li>
              </NavLink>
              <NavLink to="trainees" className="members-link">
                <li>
                  <img src={Trainees} alt="" />
                  <span>Trainees</span>
                </li>
              </NavLink>
              <NavLink to="applicants" className="members-link">
                <li>
                  <img src={Trainees} alt="" />
                  <span>Applicants</span>
                </li>
              </NavLink>
              <NavLink to="school" className="members-link">
                <li>
                  <img src={Trainees} alt="" />
                  <span>School</span>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="outlet">
            <CgMenuRight className="members-menu-icon" onClick={handleSider} />
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
