import Outline from "./outline";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUsers, FaBell } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import {Outlet} from "react-router-dom";
import { HiSquares2X2 } from "react-icons/hi2";
import {NavLink} from "react-router-dom";
import {CgMenuRight} from "react-icons/cg";
import { useState } from "react";

export default function company() {
  const [sider, setSider] = useState(false);

  return (
    <div className="wrapper">
      <Outline />
      <section className="company-content">
        <div className="event-cards">
          <div className="card-item">
            <div className="card-details">
              <p>All Companies</p>
              <h1>36</h1>
            </div>
            <div className="card-icon allevents">
              <BsFillPeopleFill />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>New Companies</p>
              <h1>7</h1>
            </div>
            <div className="card-icon new-events">
              <MdApartment />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Free Projects</p>
              <h1>46</h1>
            </div>
            <div className="card-icon hackathons">
              <FaUsers />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Paid Projects</p>
              <h1>456</h1>
            </div>
            <div className="card-icon competitons">
              <FaBell />
            </div>
          </div>
        </div>
        <div className="company-flex">
          <div className={sider ? "comp-modal" : "company-sider"}>
            <ul>
              <NavLink to="/dashboard/companies" end className="companies-link">
                <li>
                  {" "}
                  <HiSquares2X2 className="side-icon" />
                  <span>All Companies</span>
                </li>
              </NavLink>
              <NavLink to="projects" className="companies-link">
                <li>
                  {" "}
                  <BsFillCheckSquareFill className="side-icon" />
                  <span>Projects</span>
                </li>
              </NavLink>
              <NavLink to="transactions" className="companies-link">
                <li>
                  {" "}
                  <MdOutlinePayments className="side-icon" />
                  <span>Transactions</span>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="outlet">
            <div className="companies-menu-icon">
              <CgMenuRight className="comp-icon"
                onClick={() => {
                  setSider(!sider);
                }}
              />
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}
