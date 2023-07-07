import React from 'react'
import Info from './Info';
import Filters from './Filters';

const Desc = () => {
  return (
    <div className="w-screen bg-white flex flex-col justify-center items-center py-8">
      <div className="p-d-w flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col p-2 gap-2">
        <Filters title="Community members" />
        <Info />
      </div>
    </div>
  );
}

export default Desc