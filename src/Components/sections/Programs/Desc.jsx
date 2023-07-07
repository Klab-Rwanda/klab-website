import React from 'react'
import Info from './Info'
import '../../styles/Programs.css'
import Filters from './Filters'

const Desc = () => {
  return (
    <div className="w-screen bg-slate-100 flex flex-col justify-center items-center py-8 rounded-3xl rounded-b-none">
      <div className="p-d-w flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col p-2 gap-2">
        <Filters title="Filter by Attribute" />
        <Info />
      </div>
    </div>
  );
}

export default Desc