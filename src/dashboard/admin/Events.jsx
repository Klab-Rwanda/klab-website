import Outline from "./outline";
import { FaCalendar, FaUsers, FaBell } from "react-icons/fa";
import {MdApartment } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa";

const Events = () => {
  return (
    <div className="wrapper">
      <Outline />
      <section className="events-content">
        <div className="event-cards">
          <div className="card-item">
            <div className="card-details">
              <p>All Events</p>
              <h1>36</h1>
            </div>
            <div className="card-icon allevents">
              <FaCalendar />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>New Events</p>
              <h1>11</h1>
            </div>
            <div className="card-icon new-events">
              <MdApartment />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Hackathons</p>
              <h1>08</h1>
            </div>
            <div className="card-icon hackathons">
              <FaUsers />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Competitions</p>
              <h1>08</h1>
            </div>
            <div className="card-icon competitons">
              <FaBell />
            </div>
          </div>
        </div>
        <div className="events-section">
          <div className="events-container">
            <div className="events-header">
              <h2>Events</h2>
              <p>List of all events in Klab</p>
              <div className="titles">
                <p>All</p>
                <p>Tech-upskills</p>
                <p>Upcoming</p>
                <p>Juniors</p>
                <p>meetups</p>
                <p>icon</p>
              </div>
            </div>

            <table className="events-table">
              <tr className="table-headers">
                <th>Title</th>
                <th>Date</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
              <tr className="event-item">
                <td>Klab Startups academy</td>
                <td>25 Jan 2023</td>
                <td>Tech-upskills</td>
                <td className="actions">
                  <FaPen id="pen" />
                  <FaTrash id="delete-icon" />
                </td>
              </tr>
            </table>
          </div>
          <div className="add-event">
            <div className="add-event-header">
              <h3>Add Event</h3>
              <p>36 events</p>
            </div>
            <form>
              <label htmlFor="title">Title</label>
              <input type="text" />
              <div className="dates">
                <div className="start-date">
                  <label htmlFor="start-date">Start date</label>
                  <input type="date" />
                </div>
                <div className="end-date">
                  <label htmlFor="end-date">End date</label>
                  <input type="date" />
                </div>
              </div>
              <label htmlFor="category">Category</label>
              <select name="category">
                <option>Tech-upskill</option>
                <option>Juniors</option>
                <option>Meetups</option>
              </select>
              <label htmlFor="image">choose image</label>
              <input type="file" />
              <textarea
                placeholder="Event description"
                col-span="15"
              ></textarea>
              <button type="button">Add Event</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events
