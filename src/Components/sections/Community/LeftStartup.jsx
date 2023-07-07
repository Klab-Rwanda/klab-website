import React from "react";
import { FaStar } from "react-icons/fa";

const LeftStartup = () => {
  return (
    <div className="flex gap-4 flex-col w-full text-slate-800 h-full">
      <span className="flex flex-col gap-4">
        <p className="text-sm">Meet with our</p>
        <h1 className=" text-2xl text-slate-900"> STARTUPS MEMBERS</h1>
      </span>
      <p className="text-sm">
        At kLab, an innovation hub dedicated to supporting tech startups, we
        maintain a record of successful startups that have passed through our
        program. This collection showcases a diverse range of startups from
        various industries and highlights their unique journeys towards
        achieving success.
      </p>
      <span className="flex gap-4 justify-start items-center">
        <FaStar className=" text-blue-500" />
        <p>
          Rated <b className="text-base text-blue-500">4.9/5</b> form over{" "}
          <b className="text-base">450</b> reviews
        </p>
      </span>
    </div>
  );
};

export default LeftStartup;
