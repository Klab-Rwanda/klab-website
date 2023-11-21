import Outline from "./outline";
import { FaCalendar, FaUsers, FaBell } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { eventSchema } from "../../validations/EventValidation";
import { AuthContext } from "../../context/AppProvider";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import axios from "../../axios/axios";

const Events = () => {
  const { events } = useContext(AuthContext);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      title: selected ? selected.title : "",
      details: selected ? selected.details : "",
      startDate: selected ? selected.startDate : "",
      endDate: selected ? selected.endDate : "",
      location: selected ? selected.location : "",
      category: selected ? selected.category : "",
      profile: selected ? selected.profile : "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("details", data.details);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("location", data.location);
    formData.append("category", data.category);
    formData.append("profile", data.profile[0]);

    try {
      if (selected) {
        setLoading(true);
        const response = await axios.put(`/event/${selected._id}`, data);
        setLoading(false);
        Notify.success("Event updated successfully!");
        console.log(response);
        window.location.reload(true);
      } else {
        setLoading(true);
        const response = await axios.post("/event", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setLoading(false);
        Notify.success("Event created successfully!");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      Confirm.show(
        "Confirm",
        "Are you sure to delete this event?",
        "Yes",
        "No",
        async () => {
          await axios.delete(`/event/${id}`);
          window.location.reload(true);
        },
        () => {},
        {}
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    reset(selected);
  }, [selected]);

  return (
    <div className="wrapper">
      <Outline />
      <section className="events-content">
        <div className="event-cards">
          <div className="card-item">
            <div className="card-details">
              <p>All Events</p>
              <h1>{events.length}</h1>
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
              {/* <div className="titles">
                <p>All</p>
                <p>Tech-upskills</p>
                <p>Upcoming</p>
                <p>Juniors</p>
                <p>meetups</p>
              </div> */}
            </div>

            <table className="events-table">
              <tr className="table-headers">
                <th>Title</th>
                <th>Date</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
              {events.map((item) => {
                return (
                  <tr className="event-item" key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.startDate}</td>
                    <td>{item.category}</td>
                    <td className="actions">
                      <FaPen
                        id="pen"
                        onClick={() => {
                          setSelected(item);
                        }}
                      />
                      <FaTrash
                        id="delete-icon"
                        onClick={() => {
                          console.log(item._id);
                          handleDelete(item._id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="add-event">
            <div className="add-event-header">
              <h3>Add Event</h3>
              <p>{events.length} events</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                {...register("title")}
                className={errors.title ? "add-event-error" : ""}
              />
              {errors.title && (
                <p className="text-red-400">{errors.title?.message}</p>
              )}
              <div className="dates">
                <div className="start-date">
                  <label htmlFor="start-date">Start date</label>
                  <input
                    type="date"
                    {...register("startDate")}
                    className={errors.startDate ? "add-event-error" : ""}
                  />
                  {errors.startDate && (
                    <p className="text-red-400">{errors.startDate?.message}</p>
                  )}
                </div>
                <div className="end-date">
                  <label htmlFor="end-date">End date</label>
                  <input
                    type="date"
                    {...register("endDate")}
                    className={errors.endDate ? "add-event-error" : ""}
                  />
                  {errors.endDate && (
                    <p className="text-red-400">{errors.endDate?.message}</p>
                  )}
                </div>
              </div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                {...register("category")}
                className={errors.category ? "add-event-error" : ""}
              >
                <option value=""></option>
                <option>Tech-upskill</option>
                <option>Upcoming</option>
                <option>Recent</option>
                <option>Meetups</option>
              </select>
              {errors.category && (
                <p className="text-red-400">{errors.category?.message}</p>
              )}
              <label>Location</label>
              <input
                type="text"
                {...register("location")}
                className={errors.location ? "add-event-error" : ""}
              />
              {errors.location && (
                <p className="text-red-400">{errors.location?.message}</p>
              )}
              <label htmlFor="image">choose image</label>
              <input
                type="file"
                {...register("profile")}
                className={errors.profile ? "add-event-error" : ""}
              />
              {errors.profile && (
                <p className="text-red-400">{errors.profile?.message}</p>
              )}
              <textarea
                placeholder="Event description"
                col-span="15"
                {...register("details")}
                className={errors.details ? "add-event-error" : ""}
              ></textarea>
              {errors.details && (
                <p className="text-red-400">{errors.details?.message}</p>
              )}
              <button className="text-[18px]" type="submit">
                {loading ? "Loading" : "Add Event"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
