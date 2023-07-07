import React from 'react'
import Team from '../../../assets/Groups.png'
import '../../styles/community.css'
import LeftStartup from './LeftStartup'

const Startup = () => {
  return (
    <div className="w-screen bg-slate-200 flex justify-center items-center py-12 rounded-3xl">
      <div className="c-w flex justify-center items-center rounded-3xl flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col">
        <LeftStartup />
        <img
          src={Team}
          alt="TeamImage"
          className="w-full xl:w-1/2 lg:w-1/2 md:w-1/3 sm:w-1/2 mt-4"
        />
      </div>
    </div>
  );
}

export default Startup