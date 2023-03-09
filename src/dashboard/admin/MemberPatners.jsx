import React from 'react';
import Outline from './outline';
import { FaHandsHelping, FaUserGraduate } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsPersonBoundingBox, BsEyeFill } from "react-icons/bs";
import {GiTeacher} from 'react-icons/gi'
import alogo from "/assets/website/decorations/A-logo.svg"



export default function MemberPatners() {
  return (
    <div className="wrapper">
      <Outline />
      <section className="Patners-content">
        <div className="secondSider container">
          <ul>
            <li>
              <MdAdminPanelSettings />
              <span>Administration</span>
            </li>
            <li className="active">
              <FaHandsHelping />
              <span>Patners</span>
            </li>
            <li>
              <GiTeacher />
              <span>Trainers</span>
            </li>
            <li>
              <FaUserGraduate />
              <span>Alumni</span>
            </li>
            <li>
              <BsPersonBoundingBox />
              <span>Trainees</span>
            </li>
          </ul>
        </div>
        <div className="patners-holder">
          <h1>All Patners</h1>
          <span>Dashboard &gt; Members &gt; Patners</span>
          <div className="AllPatners">
            <div className="partner">
              <img src={alogo} alt="" className="image" />
              <span>
                <h1>Z-A Tech</h1>
                <p>
                  Graphic design Company{" "}
                  <label>Kigali, Nyarugenge, kg 655 st</label>
                </p>{" "}
              </span>
              <button>
                <BsEyeFill className="icoo" />
              </button>
            </div>
            <div className="partner">
              <img src={alogo} alt="" className="image" />
              <span>
                <h1>Z-A Tech</h1>
                <p>
                  Graphic design Company{" "}
                  <label>Kigali, Nyarugenge, kg 655 st</label>
                </p>{" "}
              </span>
              <button>
                <BsEyeFill className="icoo" />
              </button>
            </div>
            <div className="partner">
              <img src={alogo} alt="" className="image" />
              <span>
                <h1>Z-A Tech</h1>
                <p>
                  Graphic design Company{" "}
                  <label>Kigali, Nyarugenge, kg 655 st</label>
                </p>{" "}
              </span>
              <button>
                <BsEyeFill className="icoo" />
              </button>
            </div>
            <div className="partner">
              <img src={alogo} alt="" className="image" />
              <span>
                <h1>Z-A Tech</h1>
                <p>
                  Graphic design Company{" "}
                  <label>Kigali, Nyarugenge, kg 655 st</label>
                </p>{" "}
              </span>
              <button>
                <BsEyeFill className="icoo" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
