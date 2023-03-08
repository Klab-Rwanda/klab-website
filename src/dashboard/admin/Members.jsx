import Outline from "./outline";
import Admin from "/public/assets/website/icons/administration.svg";
import Partners from "/public/assets/website/icons/partners-icon.svg";
import Trainers from "/public/assets/website/icons/trainers.svg";
import Alumni from "/public/assets/website/icons/alumni.svg";
import Trainees from "/public/assets/website/icons/trainee.svg";
import { Outlet, NavLink } from "react-router-dom";

const Members = () => {
  return (
    <div className="wrapper">
      <Outline />
      <section className="members-content">
        <div className="members-container">
          <div className="members-sider">
            <ul>
              <NavLink to="/dashboard/members" end activeClassName="members-active">
                <li>
                  <img src={Admin} alt="" /> <span>Administration</span>
                </li>
              </NavLink>
              <NavLink to="partners" >
                <li>
                  <img src={Partners} alt="" /> <span>Partners</span>
                </li>
              </NavLink>
              <NavLink to="trainers" >
                <li>
                  <img src={Trainers} alt="" />
                  <span>Trainers</span>
                </li>
              </NavLink>
              <NavLink to="alumni" >
                <li>
                  {" "}
                  <img src={Alumni} alt="" /> <span>Alumni</span>
                </li>
              </NavLink>
              <NavLink to="trainees">
                <li>
                  <img src={Trainees} alt="" />
                  <span>Trainees</span>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Members
