import { FaPen, FaTrash, FaTrashAlt } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AppProvider";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import axios from "../../../axios/axios";

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

const Partners = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const { partners } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: selected ? selected.name : "",
      details: selected ? selected.details : "",
      link: selected ? selected.link : "",
      category: selected ? selected.category : "",
      profile: selected ? selected.profile : "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("details", data.details);
    formData.append("link", data.link);
    formData.append("profile", data.profile[0]);
    console.log(data);
    if (selected) {
    } else {
      const response = await axios.post("/partner", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("partner created successfully!");
      reset();
      window.location.reload(true);
    }
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      Confirm.show(
        "Confirm",
        "are you sure you want to delete this partner?",
        "Yes",
        "No",
        async () => {
          await axios.delete(
            `/partner/${id}`
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

  useEffect(() => {
    reset(selected);
  }, [selected]);

  return (
    <div className="patners-holder">
      <div className="part flex flex-row justify-between items-center w-full px-2 ">
        <div className="admin-headers">
          <h2>All Partners</h2>
          <p>Dashboard &gt; Members &gt; Partners</p>
        </div>
        <button
          onClick={() => {
            setModal(true);
          }}
          className="bg-transparent border border-slate-800 px-4 hover:bg-slate-800 hover:text-slate-100 duration-500 h-10 py-2 text-slate-800 rounded-xl"
        >
          Add New
        </button>
      </div>
      <div className={modal ? "modal-wrapper" : " hidden "}>
        <div className="modal">
          <div className="modal-header">
            <h3>Add Partner</h3>
            <button
              className="close-btn"
              onClick={() => {
                setModal(false);
              }}
            >
              &times;
            </button>
          </div>
          <div class="flex flex-col ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[15px]"
            >
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className="outline-none py-[5px] px-[10px]"
                />
              </div>
              <div className="flex flex-col">
                <label>Date</label>
                <input
                  type="date"
                  className="bg-[#f3f1f1] rounded-[8px] outline-none border-none py-[5px] h-[30px] px-[10px]"
                />
              </div>

              <div className="flex flex-col">
                <label>Partner More Info</label>
                <textarea
                  className="outline-none py-[5px] px-[10px] h-[80px]"
                  {...register("details")}
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label>Partner Category</label>
                <select className="bg-[#f3f1f1] rounded-[8px] outline-none h-[30px] py-[5px] px-[10px]">
                  <option value=""></option>
                  <option>ICT</option>
                  <option>Entrepreneurship</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>link</label>
                <input
                  type="text"
                  {...register("link")}
                  className="outline-none py-[5px] px-[10px]"
                />
              </div>
              <div className="flex flex-col">
                <label>Logo</label>
                <input type="file" {...register("profile")} />
              </div>
              <button type="submit">Add Partner</button>
            </form>
          </div>
        </div>
      </div>

      <div className="AllPatners">
        {partners.map((item) => {
          return (
            <div className="partner" key={item._id}>
              <img src={item.profile} alt="" className="image" />
              <span>
                <h1>{item.name}</h1>
                <label>{item.link}</label>
              </span>
              <div className="flex items-center gap-[10px]">
                <div className="cursor-pointer text-[#2F85E1] border border-[#DDE8F4] rounded-[5px] p-[5px]">
                  <FaPen
                    onClick={() => {
                      setSelected(item);
                      setModal(true);
                    }}
                  />
                </div>
                <button>
                  <FaTrashAlt
                    onClick={() => handleDelete(item._id)}
                    className="text-red-500 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
