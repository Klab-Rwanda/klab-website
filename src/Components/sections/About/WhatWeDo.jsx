import React, { useContext } from "react";
import WhatWeDoCard from "../../Card/WhatWeDoCard";
import Titles from "../../Titles";
import { FaAccusoft } from "react-icons/fa";
import { AuthContext } from "../../../context/AppProvider";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillBinocularsFill } from "react-icons/bs";

const WhatWeDo = () => {
  const { objectives } = useContext(AuthContext);

  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center py-12">
      <Titles
        title="KLab Rwanda"
        desc="kLab provides an open space for IT entrepreneurs to collaborate and innovate in Kigali, Rwanda."
      />
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 p-2 gap-12 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6 mt-12">
        {/* <WhatWeDoCard/>
        <WhatWeDoCard/>
        <WhatWeDoCard/> */}

        {objectives?.map((item, index) => {
          return (
            <div key={index} className="p-6 w-full rounded-3xl flex flex-col justify-start items-center pt-10 text-center border-t border-slate-700 shadow-md duration-500 shadow-slate-50 scale-95 hover:scale-100 hover:bg-slate-100">
              <div className=" bg-white border border-slate-700 absolute -mt-20 rounded-3xl p-6 rotate-45">
                {item.icon}
              </div>
              <h1 className="mt-8 xl:mt-10 lg:mt-8 md:mt-8 sm:mt-8 text-blue-500 text-lg">
                {item.title}
              </h1>
              <p className="font-light text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
