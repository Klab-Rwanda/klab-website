import Outline from "./outline";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUsers, FaBell } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import SecondSidebar from "../secondSidebar";

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
              </div>
      </section>
      <section className="company-content1"></section>
    </div>
  );
}