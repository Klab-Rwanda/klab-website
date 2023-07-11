import React from "react";
import ProgramsCard from "../Card/ProgramsCard";
import Titles from "../Titles";

const ProgramSection = () => {
  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center py-12">
      <Titles
        title="OUR PROGRAMS"
        desc="We offer a range of programs designed to support individuals with varying levels of experience in the tech industry, empowering them to embark on and enhance their careers as talented professionals and entrepreneurs."
      />
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-10 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6">
        <ProgramsCard />
      </div>
    </div>
  );
};

export default ProgramSection;
