import React from 'react'
import LeftMVO from '../LeftMVO.jsx'
import RightMVO from '../RightMVO.jsx'

const MVO = () => {
  return (
    <div className="w-screen flex justify-center items-center xl:px-32 lg:px-12 md:px-10 sm:px-10 px-6 gap-10 flex-col xl:flex-row lg:flex-row py-12">
      <LeftMVO />
      <RightMVO />
    </div>
  );
}

export default MVO