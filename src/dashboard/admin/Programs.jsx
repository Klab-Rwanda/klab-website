import React from "react";
import Outline from "./outline";
import { GiProgression } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AppProvider";
import { FaPen, FaTrash } from "react-icons/fa";
import { Confirm } from "notiflix";
import axios from "axios";
import { set, useForm } from "react-hook-form";
import { programSchema } from "../../validations/ProgramValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Notify } from "notiflix";
import { IoMdOpen } from "react-icons/io";
import { BsFillDoorClosedFill } from "react-icons/bs";
import { MdUpcoming } from "react-icons/md";

const Programs = () => {
  const [modal, setModal] = useState(false);

  const { programs } = useContext(AuthContext);
  console.log(programs);

  const openPrograms = programs.filter((item) => item.tags === "Open now");
  const closedPrograms = programs.filter((item) => (item.tags = "Closed"));

  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(programSchema),
    defaultValues: {
      title: selected ? selected?.title : "",
      details: selected ? selected.details : "",
      deadline: selected ? selected.deadline : "",
      tags: selected ? selected.tags : "",
      cohort: selected ? selected.cohort : "",
      profile: selected ? selected.profile : "",
      startDate: selected ? selected.startDate : "",
      endDate: selected ? selected.endDate : "",
      location: selected ? selected.location : "",
    },
  });

  const handleDelete = async (id) => {
    try {
      Confirm.show(
        "Confirm",
        "Are you sure to delete this program?",
        "Yes",
        "No",
        async () => {
          await axios.delete(
            `https://klab-academy.onrender.com/api/v1/program/${id}`
          );
          window.location.reload(true);
        },
        () => {},
        {}
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("details", data.details);
    formData.append("tags", data.tags);
    formData.append("cohort", data.cohort);
    formData.append("profile", data.profile[0]);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("location", data.location);
    formData.append("deadline", data.deadline);

    try {
      if (selected) {
        setLoading(true);
        console.log(data);
        const response = await axios.put(
          `https://klab-academy.onrender.com/api/v1/program/${selected._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoading(false);
        Notify.success("Event updated successfully!");
        console.log(response);
        window.location.reload(true);
      } else {
        setLoading(true);
        const response = await axios.post(
          "https://klab-academy.onrender.com/api/v1/program",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoading(false);
        Notify.success("Program created successfully!");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.message === "Network Error") {
        Notify.failure("Failed to connect to the server");
      } else {
        Notify.failure("Failed to add the program");
      }
    }
  };
  console.log(errors);

  useEffect(() => {
    reset(selected);
  }, [selected]);

  return (
    <>
      <div className="wrapper">
        <Outline />

        <section className="programs-section">
          <div className="programs-cards">
            <div className="programs-card">
              <div className="card-details">
                <p>All Programs</p>
                <h1 className="text-[24px]">{programs.length}</h1>
              </div>
              <div className="card-icon new-events">
                <GiProgression className="programs-cons" />
              </div>
            </div>
            <div className="programs-card">
              <div className="card-details">
                <p>Open</p>
                <h1 className="text-[24px]">{openPrograms.length}</h1>
              </div>
              <div className="card-icon new-events">
                <IoMdOpen className="programs-cons fill-blue-400" />
              </div>
            </div>
            <div className="programs-card">
              <div className="card-details">
                <p>Upcoming</p>
                <h1 className="text-[24px]">11</h1>
              </div>
              <div className="card-icon new-events">
                <MdUpcoming className="programs-cons fill-yellow-700" />
              </div>
            </div>
            <div className="programs-card">
              <div className="card-details">
                <p>closed</p>
                <h1 className="text-[24px]">{closedPrograms.length}</h1>
              </div>
              <div className="card-icon new-events">
                <BsFillDoorClosedFill className="programs-cons fill-red-600" />
              </div>
            </div>
          </div>
          <div className="programs-container">
            <button
              onClick={() => {
                setModal(true);
              }}
              className="add-pro"
            >
              Add New
            </button>

            <div className={modal ? "modal-wrapper" : " hidden "}>
              <div className="modal">
                <div className="modal-header">
                  <h3>Add Program</h3>
                  <button
                    className="close-btn"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="name-input flex flex-col">
                        <label>Program Name</label>
                        <input
                          type="text"
                          id="program-name"
                          name="program-name"
                          {...register("title")}
                        />
                      </div>
                      <div className="tag-input flex flex-col">
                        <label>Tag</label>
                        <select type="text" {...register("tags")}>
                          <option>Open now</option>
                          <option>Closed</option>
                          <option>Coming soon</option>
                        </select>
                      </div>

                      <div className="category flex flex-col">
                        <label>Cohort</label>
                        <input type="number" {...register("cohort")} />
                      </div>
                      <div className="deadline flex flex-col">
                        <label>Deadline</label>
                        <input type="date" {...register("deadline")} />
                      </div>
                      <div className="flex flex-col">
                        <label>Start Date</label>
                        <input type="date" {...register("startDate")} />
                      </div>
                      <div className="flex flex-col">
                        <label>End Date</label>
                        <input type="date" {...register("endDate")} />
                      </div>

                      <div className="flex flex-col ">
                        <label>Image</label>
                        <input type="file" {...register("profile")} />
                      </div>

                      <div className="program-details flex flex-col">
                        <label>Details</label>
                        <textarea
                          placeholder="Enter program details"
                          {...register("details")}
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex flex-col mt-[10px] items-start w-full gap-5">
                      <div className="flex flex-col w-[50%]">
                        <input
                          placeholder="Location"
                          type="text"
                          {...register("location")}
                        />
                      </div>
                      <button type="submit" className="w-[50%]">
                        {loading ? "Submiting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <table className="programs-table">
              <tr className="table-headers">
                <th>Title</th>
                <th>Date</th>
                <th>Cohort</th>
                <th>Actions</th>
              </tr>
              {programs.map((item) => {
                return (
                  <tr className="event-item" key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.startDate?.slice(0, 10)}</td>
                    <td>{item.cohort}</td>
                    <td className="actions">
                      <FaPen
                        id="pen"
                        onClick={() => {
                          setSelected(item);
                          setModal(true);
                        }}
                      />
                      <FaTrash
                        id="delete-icon"
                        onClick={() => handleDelete(item._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Programs;
