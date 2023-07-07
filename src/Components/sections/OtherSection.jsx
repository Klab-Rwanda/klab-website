import React from "react";
import ProgramsCard from "../Card/ProgramsCard";
import Titles from "../Titles";

const OtherProgramSection = () => {
  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center py-12">
      <Titles
        title="OTHER PROGRAMS"
        desc="We have several progams that helps peaple with different experience
        getting started an strength their career in tech as talents and
        enterprenuers."
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 p-2 gap-20 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6">
        <ProgramsCard />
      </div>
    </div>
  );
};

export default OtherProgramSection;
