import alumn from "../../assets/website/decorations/alumni.jpg";
import {BsEyeFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AuthContext } from "../../../context/AppProvider";
import { useEffect } from "react";

export default function alumni() {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const { applicants } = useContext(AuthContext);
  const [option, setOption] = useState(null);
  const alumnies = applicants.filter((item) => item.status === "physical");
  console.log(alumnies);
  const cohorts = [...new Set(applicants.map((applicant) => applicant.cohort))];

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const filterAlumni = (cohort) => {
    const filtered = alumnies.filter((item) => item.cohort === cohort);
    setFilteredAlumni(filtered);
  }
  
  const onFilter = (option) => {
    setOption("Cohort " + option)
    setIsOpen(false);
    filterAlumni(option);
  }
  useEffect(() => {
    filterAlumni(4);
  }, [applicants]);

  console.log(filteredAlumni);
  
  return (
    <section>
      <div className="text-[#18385A] px-[18px] mt-[20px]">
        <h2 className=" font-[600] text-[20px]">Klab Alumni</h2>
        <p>Dashboard &gt; Members &gt; Alumni</p>
      </div>
      <div className="flex items-center gap-5 mt-2 px-[18px]">
        <div className="relative flex items-center gap-2 bg-[#F2F8FF] border border-[#D0D7DE] rounded-[8px]">
          <div className="w-[100%] rounded-l-md px-4 " onClick={toggle}>
            {option || "Filter"}
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
            <div className="absolute top-6 right-0 z-10 mt-4 min-w-[100%] origin-top-right rounded-md border border-[#D0D7DE] bg-white shadow-md">
              <button
                type="button"
                onClick={() => onFilter(4)}
                className="block text-left w-full rounded-lg cursor-pointer hover:bg-[#F2F8FF] px-4 py-2 text-sm text-gray-500"
              >
                cohort 4
              </button>
              <button
                type="button"
                onClick={() => onFilter(3)}
                className="block text-left w-full rounded-lg cursor-pointer hover:bg-[#F2F8FF] px-4 py-2 text-sm text-gray-500"
              >
                cohort 3
              </button>
              <button
                type="button"
                onClick={() => onFilter(2)}
                className="block text-left w-full rounded-lg cursor-pointer hover:bg-[#F2F8FF] px-4 py-2 text-sm text-gray-500"
              >
                cohort 2
              </button>
              <button
                type="button"
                onClick={() => onFilter(1)}
                className="block text-left w-full rounded-lg cursor-pointer hover:bg-[#F2F8FF] px-4 py-2 text-sm text-gray-500"
              >
                cohort 1
              </button>
            </div>
          )}
        </div>
        <div className="text-[#24292F] flex items-center gap-1">
          <span className="font-bold">{filteredAlumni.length}</span> alumnies
        </div>
      </div>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-1 border-t border-[#D0D7DE] lg:grid-cols-1">
        {filteredAlumni.map((item) => {
          return (
            <div
              key={item._id}
              className={`py-2 px-6 cursor-pointer bg-transparent hover:bg-[#F6F8FA] 
            flex gap-2 justify-between w-full border-b border-[#D0D7DE]`}
            >
              <div className="flex items-center gap-4 max-w-[400px]">
                <div
                  className="h-[40px] w-[40px] bg-[#24292F] flex items-center
                justify-center text-white rounded-full"
                >
                  J
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#24292F] hover:underline hover:underline-offset-1">
                    {item.fullname}
                  </span>
                  <span className="text-[#57606A] font-[14px]">
                    {item.email}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
