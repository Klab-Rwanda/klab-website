import React from 'react'
import ProgramsWelcome from '../Components/sections/Programs/ProgramsWelcome'
import Footer from '../Components/sections/Footer'
// import Desc from '../Components/sections/Programs/Desc'
import ProgramSection from '../Components/sections/ProgramSection'

const Programs = () => {
  return (
      <div>
        <ProgramsWelcome />
        <ProgramSection />
        {/* <Desc/> */}
        <Footer/>
    </div>
  )
}

export default Programs