import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
// import Profile from '../asset/Profile.png';
import Profile from "../../assets/website/images/girl.jpg";
import { FaPlus, FaTrashAlt, FaProjectDiagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "../../../axios/axios";

const Projectpage = () => {
  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    try {
      const response = await axios.get(
        "/projects"
      );
      const data = await response.data.data;
      // console.log(data);
      setProject(data);
      console.log(project);
    } catch (error) {
      console.log(error);
    }
  };
  fetchProject();
  const handleDelete = async (id) => {
    window.confirm("are you sure you want to delete this project?");
    try {
      await axios({
        method: "DELETE",
        url: `/project/${id}`,
        headers: {
          "Content-Type": "multipart/form-data",
          companyauth: `${localStorage.getItem("token")}`,
        },
      });
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedProject, setSelectedProject] = useState([]);
  const [model, setModal] = useState(false);
  // const handleSelecteMessage = (id) => {
  //   const selected = message.find((item) => item._id === id);
  //   setSelectedProject(selected);
  // };

  return (
    <section className="projects-container">
      <div className="open-projects">
        <h1>
          Companies Projects
          <span>
            <FaProjectDiagram />
          </span>
        </h1>
        <hr />
        {project.map((item) => {
          return (
            <>
              <div className="project-card">
                <div class="card-header">
                  <div className="one">
                    <p
                      onClick={() => {
                        setModal(true);
                        setSelectedProject(item);
                      }}
                    >
                      {item.companyName}
                    </p>
                  </div>
                </div>
                <div className="paragraph">
                  <h1
                    onClick={() => {
                      setModal(true);
                      setSelectedProject(item);
                    }}
                  >
                    {item.ProjectName}
                  </h1>
                  <p
                    onClick={() => {
                      setModal(true);
                      handleSelecteMessage(item._id);
                    }}
                  >
                    {item.desc.slice(0, 200)}
                  </p>
                  <button
                    href="https://res.cloudinary.com/shopitrw/image/upload/v1680278024/muthuegsfmngxxjivrei.jpg"
                    type="download"
                  >
                    resume
                  </button>
                </div>

                <div className="project-profiles">
                  <span className="IMG">
                    <img src={Profile} alt="" />
                    <img src={Profile} alt="" />
                    <img src={Profile} alt="" />
                  </span>

                  <span className="icoo-projects">
                    <FaTrashAlt
                      className="text-red-800 icoo cursor-pointer"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    />
                  </span>
                </div>
                <div className={model ? "model-holder" : "hidden"}>
                  <div className={model ? "modal" : "hidden"}>
                    <span className="name-icoo">
                      <h1>{selectedProject.fullname}</h1>
                      <AiOutlineClose
                        className="close-icoo"
                        onClick={() => setModal(false)}
                      />
                    </span>

                    <h1> {selectedProject?.companyName}</h1>
                    <hr />
                    <h3>{selectedProject?.ProjectName}</h3>

                    <p>{selectedProject?.desc}</p>
                    <h4 className="mb-1 mt-1 font-semibold text-slate-700">
                      {" "}
                      This project is {selectedProject.category}
                    </h4>
                    <p className="font-semibold mt-4">
                      {selectedProject?.email}
                    </p>
                    <p className="font-semibold mt-1">
                      {selectedProject?.phone}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Projectpage;
