import React, { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaUsers, FaMale } from "react-icons/fa";
import axios from "../../../axios/axios";

// const applications = [
//   {
//     id: 1,
//     fullName: "Jean Munyaneza",
//     email: "jean@example.com",
//     gender: "Male",
//     location: "Kigali, Rwanda",
//     educationLevel: "High School",
//     schoolName: "Groupe Scolaire de Kigali",
//     combination: "Science",
//     yearOfBirth: 2001,
//   },
//   {
//     id: 2,
//     fullName: "Alice Uwimana",
//     email: "alice@example.com",
//     gender: "Female",
//     location: "Rwamagana, Rwanda",
//     educationLevel: "High School",
//     schoolName: "Lycée de Rwamagana",
//     combination: "Arts",
//     yearOfBirth: 2002,
//   },
//   // Add more applicants as needed
// ];

const School = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios("/school");
        setApplications(res.data.data.applications);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApplications();
  }, []);

  console.log(applications);

  const [filesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const lastFileIndex = (currentPage + 1) * filesPerPage;
  const firstFileIndex = lastFileIndex - filesPerPage;
  const currentFiles = applications?.slice(firstFileIndex, lastFileIndex);
  const totalPages = Math.ceil(applications?.length / filesPerPage);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const male = applications?.filter(
    (applicant) => applicant.gender === "Male"
  ).length;
  const female = applications?.filter(
    (applicant) => applicant.gender === "Female"
  ).length;

  return (
    <>
      <div className="flex flex-col p-8">
        <div className="flex justify-between border-b border-gray-100 pb-4">
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <FaUsers className="text-sm mr-2" />
              <h1 className="text-md">Applicants: {applications?.length}</h1>
            </div>

            <div className="flex items-center">
              <FaMale className="text-sm mr-2" />
              <h1 className="text-sm">Male: {male}</h1>
            </div>

            <div className="flex items-center">
              <FaMale className="text-sm mr-2" />
              <h1 className="text-md">Female: {female}</h1>
            </div>
          </div>
          <div>Filter by:</div>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="min-w-screen bg-white p-4">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 font-bold">Names</th>
                <th className="py-2 px-4 font-bold">Email</th>
                <th className="py-2 px-4 font-bold">Gender</th>
                {/* <th className="py-2 px-4 font-bold">Location</th> */}
                {/* <th className="py-2 px-4 font-bold">Level</th> */}
                <th className="py-2 px-4 font-bold">School</th>
                <th className="py-2 px-4 font-bold">Combination</th>
                <th className="py-2 px-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((application) => (
                <tr key={application._id}>
                  <td className="py-2 text-sm px-4">{application.fullName}</td>
                  <td className="py-2 text-sm px-4">{application.email}</td>
                  <td className="py-2 text-sm px-4">{application.gender}</td>
                  {/* <td className="py-2 text-sm px-4">{application.location}</td> */}
                  {/* <td className="py-2 text-sm px-4">
                    {application.educationLevel}
                  </td> */}
                  <td className="py-2 text-sm px-4">
                    {application.schoolName}
                  </td>
                  <td className="py-2 text-sm px-4">
                    {application.combination}
                  </td>
                  <td className="py-2 text-sm px-4">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
    </>
  );
};

export default School;
