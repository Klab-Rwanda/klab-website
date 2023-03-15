import Outline from './outline';
import { FaUsers, FaBell } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import UserImage from "/public/assets/website/images/girl.jpg";
import {AiOutlinePlusCircle} from "react-icons/ai";
import Activity from "/public/assets/website/icons/activity.png";
import Mail from "/public/assets/website/icons/mail.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Alumi chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#9263A5",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "#0CE2F7",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div className="wrapper">
      <Outline />
      <section className="dashboard-home">
        <div className="event-cards">
          <div className="card-item">
            <div className="card-details">
              <p>Members</p>
              <h1>456</h1>
            </div>
            <div className="card-icon allevents">
              <FaUsers />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Companies</p>
              <h1>110</h1>
            </div>
            <div className="card-icon new-events">
              <MdApartment />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Alumni</p>
              <h1>08</h1>
            </div>
            <div className="card-icon hackathons">
              <FaUsers />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Subscribers</p>
              <h1>08</h1>
            </div>
            <div className="card-icon competitons">
              <FaBell />
            </div>
          </div>
        </div>
        <div className="flex-container">
          <aside>
            <div className="chard-container">
              <Line options={options} data={data} />
            </div>
            <div className="home-actions">
              <div className="users-container">
                <div className="users-header">
                  <h4>Users</h4>
                  <p>
                    <span>128</span> Users
                  </p>
                </div>
                <button>
                  Add new <AiOutlinePlusCircle />
                </button>
                <div className="users">
                  <div className="user">
                    <img src={UserImage} alt="" className="user-profile" />
                    <div className="user-details">
                      <div>
                        <h4>Blandine Munezero</h4>
                        <p>Trainee</p>
                      </div>
                      <img src={Mail} alt="" />
                    </div>
                  </div>
                  <div className="user">
                    <img src={UserImage} alt="" className="user-profile" />
                    <div className="user-details">
                      <div>
                        <h4>Blandine Munezero</h4>
                        <p>Trainee</p>
                      </div>
                      <img src={Mail} alt="" />
                    </div>
                  </div>
                  <div className="user">
                    <img src={UserImage} alt="" className="user-profile" />
                    <div className="user-details">
                      <div>
                        <h4>Blandine Munezero</h4>
                        <p>Trainee</p>
                      </div>
                      <img src={Mail} alt="" />
                    </div>
                  </div>
                  <div className="user">
                    <img src={UserImage} alt="" className="user-profile" />
                    <div className="user-details">
                      <div>
                        <h4>Blandine Munezero</h4>
                        <p>Trainee</p>
                      </div>
                      <img src={Mail} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="messages-container">
                <div className="messages-header">
                  <h3>Messages</h3>
                  <p>
                    You have <span>86</span> unread messages
                  </p>
                </div>
                <div className="messages-list">
                  <div className="message-dash">
                    <img src={UserImage} alt="" />
                    <div className="message-details">
                      <h4>Klab tech-upskill</h4>
                      <p>
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry ...
                      </p>
                      <p>
                        <span>24 min ago</span>
                      </p>
                    </div>
                  </div>

                  <div className="message-dash">
                    <img src={UserImage} alt="" />
                    <div className="message-details">
                      <h4>Klab tech-upskill</h4>
                      <p>
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry ...
                      </p>
                      <p>
                        <span>24 min ago</span>
                      </p>
                    </div>
                  </div>

                  <div className="message-dash">
                    <img src={UserImage} alt="" />
                    <div className="message-details">
                      <h4>Klab tech-upskill</h4>
                      <p>
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry ...
                      </p>
                      <p>
                        <span>24 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="recent-activities">
            <h3>Recent activities</h3>
            <p>Latest activities on Klab website</p>
            <div className='activities-list'>
            <div className="activity">
              <img src={Activity} alt="" />
              <div className="activity-details">
                <h4>January</h4>
                <p>Lorem ipsum is a dummy text used by designers...</p>
              </div>
            </div>

            <div className="activity">
              <img src={Activity} alt="" />
              <div className="activity-details">
                <h4>January</h4>
                <p>Lorem ipsum is a dummy text used by designers...</p>
              </div>
            </div>

            <div className="activity">
              <img src={Activity} alt="" />
              <div className="activity-details">
                <h4>January</h4>
                <p>Lorem ipsum is a dummy text used by designers...</p>
              </div>
            </div>
            <div className="activity">
              <img src={Activity} alt="" />
              <div className="activity-details">
                <h4>January</h4>
                <p>Lorem ipsum is a dummy text used by designers...</p>
              </div>
            </div>
            <div className="activity">
              <img src={Activity} alt="" />
              <div className="activity-details">
                <h4>January</h4>
                <p>Lorem ipsum is a dummy text used by designers...</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard