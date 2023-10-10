import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState } from 'react'
import{useForm} from 'react-hook-form'
import axios from "axios"
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { Confirm } from "notiflix"


Confirm.init({
  width: "320px",
  backgroundColor: "#f8f8f8",
  borderRadius: "8px",
  backOverlay: true,
  backOverlayColor: "rgba(0,0,0,0.5)",
  svgSize: "100px",
  okButtonBackground: "#18385A",
  titleColor: "#18385A",
});

const Administration = () => {
const [selectedTeamData ,setSelectedTeamData]  = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
    }});

  const [team, setTeam] = useState([]);
  const fetchTeam = async () => {
    try {
    const response = await axios.get(
      "https://klab-academy-vqy2.onrender.com/api/v1/teams"
    );  
      console.log(response);
      setTeam(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };
  fetchTeam();

  const handleDelete = async (id) => {
    try {
      Confirm.show(
        "Confirm",
        "are you sure you want to delete this member?",
        "Yes",
        "No",
        async () => {
          await axios.delete(
            `https://klab-academy-vqy2.onrender.com/api/v1/team/${id}`
          );
          window.location.reload(true);
        },
        () => {},
        {}
      );
    } catch (err) {
      console.log(err);
    }
  };

  const [selectedTeam, setSelectedTeam] = useState([]);
  const [model, setModal] = useState(false);
  
  return (
    <section>
      <div className="admin-headers">
        <h2>All Teams</h2>
        <div className="admin-add">
          <p>Dashboard &gt; Members &gt; Team </p>{" "}
          <Link to="/dashboard/members/Administration/addTeam">
            <button
              className="flex items-center bg-transparent border border-slate-800 px-4 hover:bg-slate-800 hover:text-slate-100 duration-500 h-10 py-2 text-slate-800 rounded-xl"
            >
              Add New
            </button>
          </Link>
        </div>
      </div>
      <div className="admin-members">
        {team.map((item) => {
          return (
            <div className="admin-item ">
              <img src={`${item?.profile}`} alt="" />
              <div className="admin-info-container">
                <div className="admin-names">
                  <h4
                    onClick={() => {
                      setModal(true);
                      setSelectedTeam(item);
                    }}
                  >
                    {item.title}
                  </h4>
                  <p>{item.details}</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="eye-icon">
                    <FaPen
                      onClick={() => {
                        setModal(true);
                        setSelectedTeamData(item);
                      }}
                    />
                  </div>

                  <div>
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={model ? "model-content" : "hidden"}>
                <div className={model ? "modals" : "hidden"}>
                  <span className="name-icoo">
                    <h1>Update Team</h1>

                    <AiOutlineClose
                      className="close-icoo"
                      onClick={() => setModal(false)}
                    />
                  </span>
                  <div className="formDiv">
                    <form>
                      <input type="text" {...register("title")} />
                      <input type="text" {...register("details")} />
                      <input type="text" {...register("facebookLink")} />
                      <input type="text" {...register("twitterLink")} />
                      <input type="text" {...register("linkedinLink")} />
                      <input type="text" {...register("instagramLink")} />
                      <br />
                      <input type="file" />
                      <br />
                      <button>Update Team</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Administration
