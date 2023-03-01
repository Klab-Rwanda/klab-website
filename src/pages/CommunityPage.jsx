import React from "react";
import Footer from "../components/websiteComponents/Footer";
import NavBar from "../components/websiteComponents/Navbar";

import HERO_BANNER_IMG from "/assets/website/images/heroBanner.png";
import icon1 from "/assets/website/decorations/Vector.svg";
import { CiLocationOn } from 'react-icons/ci';
import star from '/assets/website/icons/star.svg';
import bitmi from "/assets/website/images/bitmi.svg";

import german from "/assets/website/images/germanCoperation.svg";
import ict from "/assets/website/images/ictChamber.svg";
import klein from "/assets/website/images/klein.svg";


const CommunityPage = () => {
  return (
    <div className="communityPage">
      <NavBar />
      <div>
        <div className="hero-banner">
          <img src={HERO_BANNER_IMG} alt="herobaner-bg" />
          <div className="content ">
            <div className="events-summary">
              <div className="content-container container-default">
                <h1>Klab Community</h1>
                <p>
                  We have a big community of people who passed through our
                  different programs and other external people ready to help
                  everyday.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="first container">
          <div className="community-card container">
            <h2>COMMUNITY MEMBERS</h2>
            <div className="skills-card container">
              <h3>Members Skills</h3>
              <ul>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Android developer</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Android developer</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Android developer</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Android developer</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Android developer</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Android developer</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Android developer</p>
                </li>
              </ul>{" "}
            </div>
            <div className="cohort-card container">
              <h3>Cohorts</h3>
              <ul>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>cohort 1</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>cohort 2</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>cohort 3</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>cohort 4</p>
                </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>cohort 5</p>
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="left-div container">
            <div className="holder1">
              <div className="photo"></div>
              <div className="decription">
                <h4>ERIC KAMANA | ANDOROID DEVELOPER </h4>
                <h5>Member since 2020 . Hire me</h5>
                <lable className="lbl">
                  <img src={icon1} alt="" /> Cohort 1 | <CiLocationOn /> Muhanga
                </lable>
              </div>
            </div>
            <div className="holder1">
              <div className="photo1"></div>
              <div className="decription">
                <h4>Mireille UMURERWA | ANDOROID DEVELOPER </h4>
                <h5>Member since 2010 . Hire me</h5>
                <lable className="lbl">
                  <img src={icon1} alt="" /> Cohort 2 | <CiLocationOn /> Kigali
                </lable>
              </div>
            </div>
            <div className="holder1">
              <div className="photo2"></div>
              <div className="decription">
                <h4>Aline ISINGIZWE | ANDOROID DEVELOPER </h4>
                <h5>
                  Member since 2012 .<a href="">Hire me</a>
                </h5>
                <lable className="lbl">
                  <img src={icon1} alt="" /> Cohort 1 |{" "}
                  <CiLocationOn className="icons" /> Huye
                </lable>
              </div>
            </div>
          </div>
        </div>
        <div className="middle container">
          <div className="words">
            <span>
              Meet with Us
              <h2> STARTUPS MEMBERS</h2>
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id qui
              dolorem ex quibusdam non eaque, tempore quidem vel fugit
              reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Saepe possimus quo corporis, facere assumenda quidem iure
              distinctio praesentium facilis placeat consectetur repudiandae,
              reiciendis nisi rem quae laboriosam sit fuga nobis! Delectus
              facere deserunt quae? A voluptate quasi numquam quibusdam.
              Exercitationem.
            </p>
            <label>
              <img src={star} alt="" /> Rated 4.9/5 form over 450 reviewes
            </label>{" "}
          </div>
          <div className="left  container">
            <h2>Members ----------------</h2>
            <div className="holder2">
              <div className="photo1"></div>
              <div className="decription">
                <h4>ERIC KAMANA | Freelancer</h4>
                <h5>Member since 2020 . Hire me</h5>
              </div>
            </div>
            <div className="holder2">
              <div className="photo1"></div>
              <div className="decription">
                <h4>ERIC KAMANA | Enterpreneurs </h4>
                <h5>Member since 2020 . Hire me</h5>
              </div>
            </div>
            <div className="holder2">
              <div className="photo1"></div>
              <div className="decription">
                <h4>ERIC KAMANA | Talent </h4>
                <h5>Member since 2020 . Hire me</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom container">
          <div className="bottom-words">
            <span>
              Meet with Us
              <h2> We work with the best parteners</h2>
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id qui
              dolorem ex quibusdam non eaque, tempore quidem vel fugit
              reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Saepe possimus quo corporis, facere assumenda quidem iure
              distinctio praesentium facilis placeat consectetur repudiandae,
              reiciendis nisi rem quae laboriosam sit fuga nobis! Delectus
              facere deserunt quae? A voluptate quasi numquam quibusdam.
              Exercitationem.
            </p>
            <label>More than 56 partners work s with us</label>{" "}
          </div>
          <div className="partners">
            <img src={bitmi} alt="" />
            <img src={ict} alt="" />
            <img src={klein} alt="" />
            <img src={german} alt="" />
            <img src={bitmi} alt="" />
            <img src={ict} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
