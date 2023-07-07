import React from 'react'
import LeftContact from '../LeftContact'
import RightContact from '../RightContact'
import Titles from '../Titles'

const Contact = () => {
  return (
    <div className=" w-screen flex justify-center items-center flex-col gap-8 py-12">
      <Titles 
        title="CONTACT US"
        // desc="We have several programs that helps people with different experiences getting started and strengthening their careers in tech as talents and entrepreneurs "

      />
      <div className="flex w-[80%] gap-5 xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
        <LeftContact />
        <RightContact />
      </div>
    </div>
  );
}

export default Contact