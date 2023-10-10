import Outline from './outline';
import { FaUsers, FaBell } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import UserImage from "../assets/website/images/girl.jpg";
import {AiOutlinePlusCircle} from "react-icons/ai";
import Activity from "../assets/website/icons/activity.png";
import Mail from "../assets/website/icons/mail.svg";
import { useState, useEffect, useContext } from 'react';
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
import axios from 'axios';
import { AuthContext } from '../../context/AppProvider';

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

  const {users} = useContext(AuthContext);

  const members = users.filter((user) => user.role === 'member');
  const companies = users.filter((user) => user.role === 'company');
  const alumni = users.filter((user) => user.role === 'alumni');

  
  const [message, setMessage] = useState([]);
  const fetchMessage = async () => {
    try {
      const response = await axios.get(
        "https://klab-academy-vqy2.onrender.com/api/v1/contacts/"
      );
      const data = await response.data.data;
      // console.log(data);
      setMessage(data);
      console.log(message);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(()=>{
    fetchMessage();
  },[])
 

  const handleDelete = async (id) => {
    console.log(id);
    window.confirm("are you sure you want to delete this message");
    try {
      await axios({
        method: "DELETE",
        url: `https://klab-academy-vqy2.onrender.com/api/v1/contact/${id}`,
      });
    }
    catch(error) {
      console.log(error);
    }
 };
  const [selectedMessage, setSelectedMessage] = useState([]);
  const [model, setModal] = useState(false);
  const handleSelecteMessage = (id) => {
    const selected = message.find((item) => item._id === id);
    setSelectedMessage(selected);

  };
   
  
  

  return (
    <>
      <div className="wrapper">
        <Outline />
        <section className="dashboard-home">
          <div className="event-cards">
            <div className="card-item">
              <div className="card-details">
                <p>Members</p>
                <h1>{members?.length}</h1>
              </div>
              <div className="card-icon allevents">
                <FaUsers />
              </div>
            </div>

            <div className="card-item">
              <div className="card-details">
                <p>Companies</p>
                <h1>{companies?.length}</h1>
              </div>
              <div className="card-icon new-events">
                <MdApartment />
              </div>
            </div>

            <div className="card-item">
              <div className="card-details">
                <p>Alumni</p>
                <h1>{alumni?.length}</h1>
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
                    <h1>Messages</h1>
                  </div>
                  <div className="messages-list">
                    {message.map((item) => {
                      return (
                        <div className="message-dash">
                          {/* <img src={UserImage} alt="" /> */}
                          <div className="message-details">
                            <h4
                              onClick={() => {
                                setModal(true);
                                handleSelecteMessage(item._id);
                              }}
                            >
                              {item.fullname}
                            </h4>
                            <p
                              onClick={() => {
                                setModal(true);
                              }}
                            >
                              {item.message.slice(0, 60)}
                            </p>
                            <br />
                            {/* <p>
                              <span className="pt-10 text-blue-400 font-semibold">
                                {item.email}
                              </span>
                              <br />
                              <span className="pt-10 text-blue-400 font-semibold">
                                {" "}
                                {item.phone}
                              </span>
                            </p> */}
                            <div>
                              <AiFillDelete
                                className="text-red-800 icoo"
                                onClick={() => {
                                  handleDelete(item._id);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
            <div className="recent-activities">
              <h3>Recent activities</h3>
              {/* <p>Latest activities on Klab website</p> */}
              <div className="activities-list">
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
        <div
          className={model ? "model-holder" : "hidden"}
         
        >
          <div  className={model ? "modal" : "hidden"}
        >
            <span className="name-icoo">
              <h1>{selectedMessage.fullname}</h1>
              <AiOutlineClose
                className="close-icoo"
                onClick={() => setModal(false)}
              />
            </span>
            <p> {selectedMessage.message}</p>
            <p>{selectedMessage.email}</p>
            <p>{selectedMessage.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard