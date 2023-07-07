import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Report } from "notiflix/build/notiflix-report-aio";
// import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// const TEAM_URL = "https://klabbackend-sbhs.onrender.com/api/v1/team";

export default function AddTeam() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("details", data.details);
    formData.append("facebookLink", data.facebookLink);
    formData.append("twitterLink", data.twitterLink);
    formData.append("linkedinLink", data.linkedinLink);
    formData.append("instagramLink", data.instagramLink);
    formData.append("profile", data.profile[0]);

    console.log(formData.get("profile"));
    try {
      const result = await axios.post(
        "https://klabbackend-sbhs.onrender.com/api/v1/team",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Report.success("Team ", "is created successful ", "Okay", () => {
        window.location.href = "/dashboard/members";
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="formDiv">
        <h1>Add a Team</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Enter Names" {...register("title")} />
          <input
            type="text"
            placeholder="Enter Detail"
            {...register("details")}
          />
          <input
            type="text"
            placeholder="Enter facebook Link"
            {...register("facebookLink")}
          />
          <input
            type="text"
            placeholder="Enter twitter Link"
            {...register("twitterLink")}
          />
          <input
            type="text"
            placeholder="Enter linkedin Link"
            {...register("linkedinLink")}
          />
          <input
            type="text"
            placeholder="Enter instagram Link"
            {...register("instagramLink")}
          />
          <br />
          <input type="file" {...register("profile")} />
          <br />
          <button>Add Team</button>
        </form>
      </div>
    </div>
  );
}
