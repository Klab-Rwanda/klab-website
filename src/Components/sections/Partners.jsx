import React from 'react'
import Titles from '../Titles'
import { useContext } from "react"
import { AuthContext } from "../../context/AppProvider"
import {Link} from "react-router-dom" 

const Partners = () => {
  const { partners } = useContext(AuthContext);

  return (
    <div className="w-screen bg-white flex flex-col gap-6 justify-center items-center rounded-3xl py-12">
      <Titles
        title="OUR PARTNERS"
        desc="Obviously we can not run all of these programs alone so we have joined hands with different partners to make that possible and help people the best out of our programs"
      />
      <center>
        <div className="grid justify-center mx-auto grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 p-2 rounded-3xl">
          {partners?.map((item) => {
            return (
              <Link to={`${item.link}`} key={item._id}>
                <div className="w-full h-full flex flex-col justify-center justify-items-center mx-auto items-center">
                  <img
                    src={item.profile}
                    alt=""
                    className="cursor-pointer w-[140px] p-2"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </center>
    </div>
  );
}

export default Partners