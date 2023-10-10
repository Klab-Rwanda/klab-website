import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AuthContext } from "../../../context/AppProvider";
import axios from "axios";
import { CiNoWaitingSign } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import DocViewer, { PDFRenderer } from "react-doc-viewer";
import testPdf from "./test.pdf";
import { set } from "immutable";

const APPROVE_LINK =
  "https://klab-academy-vqy2.onrender.com/api/v1/application/online/approval";

const REJECT_LINK =
  "https://klab-academy-vqy2.onrender.com/api/v1/application/physical/reject/";

const ACCEPT_LINK =
  "https://klab-academy-vqy2.onrender.com/api/v1/application/physical/approval/";

const WAITING_LINK =
  "https://klab-academy-vqy2.onrender.com/api/v1/application/physical/waiting/";

const filesPerPage = 10;

const Applicants = () => {
  const { applicants } = useContext(AuthContext);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [selected, setSelected] = useState(null);
  console.log(applicants);

  const [currentPage, setCurrentPage] = useState(0);
  const lastFileIndex = (currentPage + 1) * filesPerPage;
  const firstFileIndex = lastFileIndex - filesPerPage;
  const currentFiles = filteredFiles?.slice(firstFileIndex, lastFileIndex);
  const totalPages = Math.ceil(filteredFiles.length / filesPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const filterFiles = (status) => {
    if (status === "all") {
      setFilteredFiles(applicants);
    } else {
      const filtered = applicants.filter((file) => file.status === status);
      setFilteredFiles(filtered);
    }
  };

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

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col px-6 py-4 gap-3">
        <h1 className="text-[18px] font-[600] text-[#24292F]">Applicants</h1>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-5">
            <div className="relative flex items-center gap-2 bg-[#F2F8FF] border border-[#D0D7DE] rounded-[8px]">
              <div className="w-[100%] rounded-l-md px-4 " onClick={toggle}>
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
              </div>
              {isOpen && (
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
              )}
            </div>
            <div className="text-[#24292F] flex items-center gap-1">
              <span className="font-bold">{filteredFiles.length}</span>{" "}
              applicants
            </div>
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
      {currentFiles.length || filteredFiles.length > 0 ? (
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
            <div className="flex justify-between   w-full mt-5">
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
                  <p className="text-[#57606A]">{selected?.dob?.slice(0, 10)}</p>
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
                  <label className="text-[16px] font-[500]">Occupation:</label>
                  <p className="text-[#57606A]">{selected?.areyougraduate}</p>
                </div>
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
                  <p className="text-[#57606A]">{selected?.categoryfitin}</p>
                </div>
                <div className="flex items-center gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">
                    Skills to join:
                  </label>
                  <p className="text-[#57606A]">{selected?.skillyouwantjoin}</p>
                </div>
                <div className="flex flex-col items-start gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">
                    Skill description:
                  </label>
                  <p className="text-[#57606A]">
                    {selected?.skilldesc}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 text-[#24292F]">
                  <label className="text-[16px] font-[500]">
                    Innovation Model:
                  </label>
                  <p className="text-[#57606A]">
                    {selected?.shareInnovationModel}
                  </p>
                </div>

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
                    <iframe
                      src={resume}
                      width="100%"
                      height="600px"
                    />
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
