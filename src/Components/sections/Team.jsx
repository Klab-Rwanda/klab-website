import React from "react";
import TeamCard from "../Card/TeamCard";
import Titles from "../Titles";

const Team = () => {
  return (
    <div className="w-screen flex justify-center items-center flex-col gap-6 xl:px-32 lg:px-12 md:px-10 sm:px-10 px-6 py-12">
      <Titles title="OUR TEAM" desc="" />
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full xl:px-32 lg:px-12 md:px-10 sm:px-10 px-6">
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
