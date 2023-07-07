import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AppProvider";

const ProgramsCard = () => {
  const { programs } = useContext(AuthContext);
  return (
    <>
      {programs?.map((program) => {
        return (
          <Link to={`/${program._id}`} key={program._id}>
            <div className="bg-slate-50 relative rounded-3xl flex xl:flex-col lg:flex-col md:flex-row sm:flex-col flex-col">
              <img
                src={program.profile}
                alt="CardImage"
                className="rounded-3xl h-64 object-cover xl:w-full lg:w-full md:w-1/3"
              />
              <span
                className={` ${
                  program.tags === "Closed" ? "bg-red-800" : "bg-slate-800"
                } text-white absolute top-2 left-2 rounded-[18px] font-semibold px-[10px] py-[5px] text-[14px]`}
              >
                {program.tags}
              </span>
              <div className="px-6 py-4 pb-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-base">{program.title}</h1>
                  <p className="text-sm font-light">
                    {program.details}
                    {/* <span className="hidden md:block lg:hidden xl:hidden">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit quo eaque labore deleniti tempora
                          temporibus porro excepturi sequi nisi perspiciatis
                          quisquam, ab fuga recusandae distinctio commodi sunt
                          ullam? Ut, tempora.
                        </span> */}
                  </p>
                </div>
                <span className="flex mt-2 gap-2 items-center text-blue-500 text-sm font-light ">
                  <p>Learn more </p>
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProgramsCard;
