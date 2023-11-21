import React from "react";
import { useState, useEffect } from "react";
import Image from "../../assets/TeamImg.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/teamCard.css";
import { Link } from "react-router-dom";
import axios from "../../axios/axios";

const TeamCard = () => {
  const [team, setTeam] = useState([]);
  const fetchTeam = async () => {
    try {
      const response = await axios.get("/teams");
      setTeam(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTeam();
  }, []);
  console.log(team);

  return (
    <>
      {team?.map((item) => {
        return (
          <div
            className="bg-slate-100 m-4 p-2 rounded-3xl duration-1000 group hover:scale-105"
            key={item._id}
          >
            <div className=" relative  rounded-3xl w-full no-scroll h-64 group-hover:h-56 duration-1000">
              <img
                src={`${item?.profile}`}
                alt=""
                className="rounded-3xl w-full relative"
              />
            </div>
            <div className="px-4 flex flex-col gap-2">
              {/* <p className=" text-xs font-extralight opacity-0 -mt-4 group-hover:mt-4 group-hover:opacity-100 duration-1000">
                We have several programs that strengthening tech careers
              </p> */}
              <h1 className="text-lg font-light">{item.title}</h1>
              <p className="text-blue-500 font-medium text-sm">
                {item.details}
              </p>
              <Link to={`${item.linkedinLink}`} target="_blank">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
