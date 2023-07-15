import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useJwt } from "react-jwt";
import Loader from "./Loader";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillBinocularsFill } from "react-icons/bs";
import { FaAccusoft } from "react-icons/fa";

export const AuthContext = createContext({});

const AppProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(false);
  const [events, setEvents] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [partners, setPartners] = useState([]);
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);

  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));
  const fetchEvents = async () => {
    const response = await axios.get(
      "https://klab-academy.onrender.com/api/v1/events"
    );
    const data = await response.data;
    setEvents(data);
  };

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://klab-academy.onrender.com/api/v1/users"
    );
    const data = response.data;
    setUsers(data);
  };

  useEffect(() => {
    fetchEvents();
    fetchUsers();
  }, []);

  const fetchPrograms = async () => {
    const response = await axios.get(
      "https://klab-academy.onrender.com/api/v1/programs"
    );
    const data = await response.data;
    setPrograms(data);
  };
  // console.log(decodedToken, isExpired);

  const fetchUser = async () => {
    try {
      if (decodedToken) {
        const response = await axios.get(
          `https://klab-academy.onrender.com/api/v1/users/${decodedToken?.id}`
        );
        setLoggedUser(response?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchApplicants = async () => {
    const response = await axios.get(
      "https://klab-academy.onrender.com/api/v1/application"
    );
    const data = await response.data;
    setApplicants(data.data);
  };

  async function fetchPartners() {
    const response = await axios.get(
      "https://klab-academy.onrender.com/api/v1/partners"
    );
    setPartners(response.data);
  }

  const fetchTrainers = async () => {
    try {
      const response = await axios.get(
        "https://klab-academy.onrender.com/api/v1/trainers"
      );
      setTrainers(response?.data.trainers);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPrograms();
    fetchUser();
    fetchApplicants();
    fetchPartners();
    fetchTrainers();
  }, [decodedToken]);

  const objectives = [
    {
      id: 1,
      icon: "BsFillBinocularsFill",
      title: "Our Mission",
      icon: <TbTargetArrow className=" text-5xl -rotate-45" />,
      description:
        "Facilitate, promote & support young entrepreneurs to develop ICT-enabled solutions to solve social & business challenges",
    },
    {
      id: 2,
      title: "Vision",
      icon: <BsFillBinocularsFill className=" text-5xl -rotate-45" />,
      description:
        "Make Rwanda the most innovative country in Africa to create jobs and expand the economy",
    },
    {
      id: 3,
      title: "Objectives",
      icon: <FaAccusoft className=" text-5xl -rotate-45" />,
      description: `Naturing Startups from ideation stage to marketable prototypes, 
                    Offering adequate primary and advanced technology skills
                    Training and supporting tech innovators and entrepreneurs`,
    },
  ];

  return (
    <AuthContext.Provider
      value={{
        events,
        programs,
        loggedUser,
        setLoggedUser,
        trainers,
        isLoged,
        setIsLoged,
        applicants,
        partners,
        users,
        objectives,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AppProvider;
