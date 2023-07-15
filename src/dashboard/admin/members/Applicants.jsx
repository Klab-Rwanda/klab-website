import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AuthContext } from "../../../context/AppProvider";
import axios from "axios";
import { CiNoWaitingSign } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Link } from "react-router-dom";
import { IoCloseSharp, IoHardwareChipOutline } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { BiUser, BiCodeAlt, BiBriefcase } from "react-icons/bi";

const ApplicantCount = ({
  filteredFiles,
  hardwareApplicant,
  developer,
  entrepreneurApplicant,
}) => {
  const categories = [
    {
      name: "applicants",
      count: filteredFiles.length,
      icon: BiUser,
      color: "#657786",
    },
    {
      name: "Hardware",
      count: hardwareApplicant?.length,
      icon: IoHardwareChipOutline,
      color: "#657786",
    },
    {
      name: "Developer",
      count: developer?.length,
      icon: BiCodeAlt,
      color: "#657786",
    },
    {
      name: "Entrepreneur",
      count: entrepreneurApplicant?.length,
      icon: BiBriefcase,
      color: "#657786",
    },
  ];

  return (
    <div className="flex  flex-wrap gap-4 flex-row">
      {categories.map((category) => (
        <div
          className="text-[#24292F] flex items-center gap-1"
          key={category.name}
        >
          {React.createElement(category.icon, {
            className: `text-${category.color} text-xl`,
          })}
          <span className="font-bold">{category.count}</span>
          <span className="text-sm">{category.name}</span>
        </div>
      ))}
    </div>
  );
};
const APPROVE_LINK =
  "https://klab-academy.onrender.com/api/v1/application/online/approval";

const REJECT_LINK =
  "https://klab-academy.onrender.com/api/v1/application/physical/reject/";

const ACCEPT_LINK =
  "https://klab-academy.onrender.com/api/v1/application/physical/approval/";

const WAITING_LINK =
  "https://klab-academy.onrender.com/api/v1/application/physical/waiting/";

const Applicants = () => {
  const { applicants, programs } = useContext(AuthContext);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const currentCohort = programs?.find(
    (program) => program?.tags === "Open now"
  )?.cohort;

  const hardwareApplicant = applicants?.filter(
    (applicant) =>
      applicant?.cohort === currentCohort &&
      applicant?.categoryfitin === "hardware"
  );
  const developer = applicants?.filter(
    (applicant) =>
      applicant?.cohort === currentCohort &&
      applicant?.categoryfitin === "developer"
  );
  const entrepreneurApplicant = applicants?.filter(
    (applicant) =>
      applicant?.cohort === currentCohort &&
      applicant?.categoryfitin === "entrepreneur"
  );

  useEffect(() => {
    setFilteredFiles(applicants);
  }, [applicants]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  // action functions

  const approveAll = async () => {
    try {
      const response = await axios.put(APPROVE_LINK, null);
      console.log(response.data);
      Notify.success("Applicants was approved to the online training");
      window.location.reload(true);
    } catch (error) {
      console(error);
    }
  };

  const accept = async (id) => {
    try {
      const response = await axios.put(ACCEPT_LINK + id, null);
      console.log(response.data);
      Notify.success("Applicant was accepted to the physical training");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
      Notify.failure("Failed to accept the applicant");
    }
  };

  const reject = async (id) => {
    try {
      const response = await axios.put(REJECT_LINK + id, null);
      console.log("accept ");
      console.log(response.data);
      Notify.success("Aplicant was rejected successfully");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
      Notify.failure("Failed to reject the applicant");
    }
  };

  const wait = async (id) => {
    try {
      const response = await axios.put(WAITING_LINK + id, null);
      console.log(response.data);
      Notify.success("Applicant was added to the waiting list");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
      Notify.failure("Failed to add applicant to the waiting list");
    }
  };

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    filterFiles(value);
  };

  const [resume, setResume] = useState(null);
  const [viewer, setViewer] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredApplicants = applicants.filter((applicant) => {
    if (selectedStatus && applicant.status !== selectedStatus) {
      return false; // Skip if status doesn't match
    }

    if (selectedCategory && applicant.categoryfitin !== selectedCategory) {
      return false; // Skip if category doesn't match
    }

    return true; // Include if both filters match or if no filters are selected
  });
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const filesPerPage = 10;

  const lastFileIndex = (currentPage + 1) * filesPerPage;
  const firstFileIndex = lastFileIndex - filesPerPage;
  const currentFiles = filteredApplicants?.slice(firstFileIndex, lastFileIndex);
  const totalPages = Math.ceil(filteredApplicants?.length / filesPerPage);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col px-6 py-4 gap-3">
        <h1 className="text-[18px] font-[600] text-[#24292F]">Applicants</h1>
        <div className="flex items-center w-full justify-between">
          <div className="flex  gap-5">
            <div className="relative  flex flex-wrap items-center gap-2  ">
              <span className=" px-4 p-2 flex flex-row items-center text-sm gap-2">
                Filter
                <AiOutlineArrowRight />
              </span>
              <div className="flex flex-wrap gap-2">
                <select
                  name=""
                  className="outline-none rounded-sm text-sm border-none px-4 py-2 bg-[#F2F8FF]"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="">By Status</option>
                  <option value="online">Online</option>
                  <option value="physical">Physical</option>
                  <option value="waiting">Waiting</option>
                </select>

                <select
                  name=""
                  className="outline-none rounded-sm text-sm border-none px-4 py-2 bg-[#F2F8FF]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">By Category</option>
                  <option value="hardware">Hardware</option>
                  <option value="developer">Developer</option>
                  <option value="entrepreneur">Entrepreneur</option>
                </select>
              </div>
              {/* <div className="w-[100%] rounded-l-md px-4 " onClick={toggle}>
                {selectedOption || "Filter"}
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggle}
                  className="h-full inline-flex px-2 py-[5px] items-center justify-center rounded-r-md border-l  border-[#D0D7DE]"
                >
                  <RiArrowDropDownLine className="text-2xl" />
                </button>
              </div> */}
              {/* {isOpen && (
                <div
                  className="absolute top-6 right-0 z-10 mt-4 min-w-[100%] origin-top-right rounded-md border border-[#D0D7DE] bg-white 
                  shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => onOptionClicked("all")}
                    className="block text-left w-full rounded-lg cursor-pointer hover:bg-[#F2F8FF] px-4 py-2 text-sm text-gray-500"
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => onOptionClicked("physical")}
                    className="block text-left w-full rounded-lg cursor-pointer hover:bg-[#F2F8FF] px-4 py-2 text-sm text-gray-500"
                  >
                    Physical
                  </button>
                  <button
                    type="button"
                    onClick={() => onOptionClicked("waiting")}
                    className="block text-left w-full rounded-lg cursor-pointer hover:bg-[#F2F8FF] px-4 py-2 text-sm text-gray-500"
                  >
                    Waiting
                  </button>
                </div>
              )} */}
            </div>
            <ApplicantCount
              filteredFiles={filteredFiles}
              hardwareApplicant={hardwareApplicant}
              developer={developer}
              entrepreneurApplicant={entrepreneurApplicant}
            />
          </div>
          <button
            className="bg-[#18385A] text-white rounded-[12px] px-[10px] py-[5px] text-[18px] 
          border border-[#D0D7DE] hover:bg-[#215881] "
            onClick={() => approveAll()}
          >
            Approve all
          </button>
        </div>
      </div>
      {currentFiles.length || filteredApplicants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-1 border-t border-[#D0D7DE] lg:grid-cols-1">
          {currentFiles.map((file) => (
            <div
              key={file._id}
              className={`py-2 px-6 cursor-pointer bg-transparent hover:bg-[#F6F8FA] ${
                file.status === "online" || file.status === "waiting"
                  ? "flex gap-2 justify-between"
                  : "grid grid-cols-2 items-center"
              } w-full border-b border-[#D0D7DE]`}
            >
              <div className="flex items-center gap-4 max-w-[400px]">
                <div
                  className="h-[40px] w-[40px] bg-[#24292F] flex items-center
                justify-center text-white rounded-full"
                >
                  {file.fullname[0].toUpperCase()}
                </div>
                <div className="flex flex-col items-start">
                  <span
                    className="text-[#24292F] hover:underline hover:underline-offset-1"
                    onClick={() => {
                      setSelected(file);
                      setModal(true);
                    }}
                  >
                    {file.fullname}
                  </span>
                  <span className="text-[#57606A] font-[14px]">
                    {file.email}
                  </span>
                </div>
              </div>
              <div
                className={`${
                  file.status === "physical"
                    ? "text-blue-500"
                    : file.status === "rejected"
                    ? "text-red-500"
                    : file.status === "waiting"
                    ? "text-[#18385A]"
                    : file.status === "pending"
                    ? "text-[#18385A]"
                    : "text-green-800"
                } flex items-center gap-1`}
              >
                {" "}
                <span
                  className={`h-[5px] w-[5px] ${
                    file.status === "physical"
                      ? "bg-blue-500"
                      : file.status === "rejected"
                      ? "bg-red-500 "
                      : file.status === "waiting"
                      ? "bg-[#18385A]"
                      : file.status === "pending"
                      ? "bg-[#18385A]"
                      : "bg-green-800"
                  } rounded-full`}
                ></span>
                {file.status}
              </div>
              <div className="flex items-center gap-4">
                {(file.status === "online" || file.status === "waiting") && (
                  <>
                    <button
                      className="text-[#24292F] border-none hover:text-red-500"
                      onClick={() => {
                        reject(file._id);
                      }}
                    >
                      Reject
                    </button>
                    <button
                      className="text-[#0969DA] border-2 border-[#0969DA] rounded-[12px] py-[2px] px-[10px] hover:bg-[#F6F8FA]"
                      onClick={() => {
                        accept(file._id);
                      }}
                    >
                      Accept
                    </button>
                  </>
                )}

                {file.status === "online" && (
                  <button
                    onClick={() => {
                      wait(file._id);
                    }}
                  >
                    <CiNoWaitingSign className="text-2xl hover:font-bold" />
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="pagination mt-4">
            <ReactPaginate
              previousLabel="< Previous"
              nextLabel="Next >"
              breakLabel="..."
              breakClassName="break"
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName="pagination-container flex items-center gap-4 justify-center"
              pageClassName="page"
              activeClassName="active-page font-bold bg-[#18385A] text-white rounded-[5px] px-[5px]"
              previousClassName="previous text-[#18385] "
              nextClassName="next text-[#18385A] "
              disabledClassName="disabled text-[#57606A] "
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">No files found.</div>
      )}

      {/* single applicant details modal*/}

      <div
        className={`fixed top-0 left-0 bg-[#00000080] ${
          modal ? "" : "hidden"
        } z-[1000] w-full h-full`}
      >
        <div className="absolute bg-white w-11/12  md:w-3/5 p-5 rounded-[5px] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <div className="flex flex-col relative">
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setModal(false)}
            >
              <IoCloseSharp className="text-2xl " />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-[40px] w-[40px] bg-[#24292F] flex items-center
                justify-center text-white rounded-full"
              >
                {selected?.fullname[0]?.toUpperCase()}
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-[600] text-[18px] text-[#24292F]">
                  {selected?.fullname}
                </h1>
                <span className="text-[#57606A]">{selected?.email}</span>
              </div>
            </div>
            <div className="flex justify-between  capitalize   w-full mt-5">
              <div className="flex basis-2/4 items-start flex-col gap-4">
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Phone:</label>
                  <p className="text-[#57606A]">{selected?.phone}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Gender:</label>
                  <p className="text-[#57606A]">{selected?.gender}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">
                    Date of Birth:
                  </label>
                  <p className="text-[#57606A]">
                    {selected?.dob?.slice(0, 10)}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Country:</label>
                  <p className="text-[#57606A]">{selected?.country}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Province:</label>
                  <p className="text-[#57606A]">{selected?.province}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">District:</label>
                  <p className="text-[#57606A]">{selected?.district}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Sector:</label>
                  <p className="text-[#57606A]">{selected?.sector}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Cell:</label>
                  <p className="text-[#57606A]">{selected?.cell}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Village:</label>
                  <p className="text-[#57606A]">{selected?.village}</p>
                </div>
                {selected?.areyougraduate && (
                  <div className="flex items-center gap-1 text-[#24292F]">
                    <label className="text-[16px] font-[500]">
                      Occupation:
                    </label>
                    <p className="text-[#57606A]">{selected?.areyougraduate}</p>
                  </div>
                )}
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">
                    Education Level:
                  </label>
                  <p className="text-[#57606A]">{selected?.educationlevel}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">
                    Field of study:
                  </label>
                  <p className="text-[#57606A]">{selected?.fieldofstudy}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">School:</label>
                  <p className="text-[#57606A]">{selected?.schoolfrom}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">
                    Year of study:
                  </label>
                  <p className="text-[#57606A]">{selected?.yearstudy}</p>
                </div>
              </div>
              <div className="flex basis-2/4 flex-col gap-1 items-start">
                <div className="flex items-center gap-4 text-[#24292F]">
                  <label className="text-[16px] font-[500]">Category:</label>
                  <p className="text-[#57606A] capitalize">
                    {selected?.categoryfitin}
                  </p>
                </div>
                {selected?.skillyouwantjoin && (
                  <div className="flex items-center gap-1 text-[#24292F]">
                    <label className="text-[16px] font-[500]">
                      Skills to join:
                    </label>
                    <p className="text-[#57606A] capitalize">
                      {selected?.skillyouwantjoin}
                    </p>
                  </div>
                )}

                {selected?.shareInnovationModel && (
                  <div className="flex flex-col items-start gap-1 text-[#24292F]">
                    <label className="text-[16px] font-[500]">
                      Skill description:
                    </label>
                    <p className="text-[#57606A]">
                      {selected?.entInnovationdesc}
                    </p>
                  </div>
                )}

                {selected?.shareInnovationModel && (
                  <div className="flex flex-col items-start gap-1 text-[#24292F]">
                    <label className="text-[16px] font-[500]">
                      Innovation Model:
                    </label>
                    <p className="text-[#57606A]">
                      {selected?.shareInnovationModel}
                    </p>
                  </div>
                )}

                <div
                  onClick={() => {
                    setViewer(true);
                    setResume(selected?.profile);
                  }}
                  className="flex gap-[2px] cursor-pointer items-center font-[500] text-[#24292F]"
                >
                  <span className="bg-sky-500  flex items-center gap-1 rounded-md  px-4 py-2 text-white">
                    <strong>
                      <BiLinkExternal />
                    </strong>
                    <span> Resume</span>
                  </span>
                </div>

                <Link to={`${selected?.gitlink}`} target="_blank">
                  <div className="flex gap-[2px] cursor-pointer items-center font-[500] text-[#24292F]">
                    <span className="bg-gray-700  flex items-center gap-1 rounded-md  px-4 py-2 text-white">
                      <strong>
                        <AiFillGithub />
                      </strong>
                      <span>Github</span>
                    </span>
                  </div>
                </Link>
                <Link to={`${selected?.linkedinlink}`} target="_blank">
                  <div className="flex gap-[2px] cursor-pointer items-center font-[500] text-[#24292F]">
                    <span className="bg-blue-500  flex items-center gap-1 rounded-md  px-4 py-2 text-white">
                      <strong>
                        <AiFillLinkedin />
                      </strong>
                      <span>Linkedin</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* single applicant model end */}
      {/* resume test model */}
      <div
        className={`fixed top-0 left-0 bg-[#00000080] ${
          resume ? "" : "hidden"
        } z-[1001] w-full h-full`}
      >
        <div className="absolute bg-white w-full h-full p-5 rounded-[5px] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <button
            className="absolute bg-red-800 text-white shadow-xl z-[1002] p-2 px-4 text-2xl rounded-full top-0 right-0"
            onClick={() => {
              setResume(null);
              setViewer(false);
            }}
          >
            &#x2715;
          </button>
          <div className="relative h-screen">
            <div className="viewer">
              {viewer && (
                <>
                  <div className="div">
                    <iframe src={resume} width="100%" height="900px" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* resume test model end */}
    </div>
  );
};

export default Applicants;
