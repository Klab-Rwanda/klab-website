import Outline from "./outline";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUsers, FaBell } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import SecondSidebar from "../secondSidebar";
import { Link } from 'react-router-dom';
import {GiCompanionCube} from  'react-icons/gi'

export default function company() {
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
        <SecondSidebar />
        <div className="companies-container">
          <h1>Companies</h1>
          <div className="holder-info">
            <div className="info-company">
              <div className="logo-co">
                <GiCompanionCube />
              </div>
              <span>
                <h2>
                  <Link to="single-company">Aline</Link>
                </h2>
                <p>
                  <Link to="/single-company">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa beatae at, eius doloremque numquam voluptatibus ipsum
                    dolor unde laboriosam vitae optio minus pariatur
                    exercitationem quidem deserunt nobis sequi architecto
                    laudantium!
                  </Link>
                </p>
                <p>aline@gmail.com</p>
              </span>
            </div>
            <div className="info-company">
              <div className="logo-co">
                <GiCompanionCube />
              </div>
              <span>
                <h2>Jabo</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa beatae at, eius doloremque numquam voluptatibus ipsum
                  dolor unde laboriosam vitae optio minus pariatur
                  exercitationem quidem deserunt nobis sequi architecto
                  laudantium!
                </p>
                <p>aline@gmail.com</p>
              </span>
            </div>
            <div className="info-company">
              <div className="logo-co">
                <GiCompanionCube />
              </div>
              <span>
                <h2>Blandine</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa beatae at, eius doloremque numquam voluptatibus ipsum
                  dolor unde laboriosam vitae optio minus pariatur
                  exercitationem quidem deserunt nobis sequi architecto
                  laudantium!
                </p>
                <p>aline@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
