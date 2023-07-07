import React from 'react'
import Contact from '../Components/sections/Contact'
import Footer from '../Components/sections/Footer'
import HomeWelcome from '../Components/sections/Home/HomeWelcome'
import MVO from '../Components/sections/MVO'
import Partners from '../Components/sections/Partners'
import ProgramSection from '../Components/sections/ProgramSection'
import Team from '../Components/sections/Team'
import Testimonials from '../Components/sections/Testimonials'


const Home = () => {

  return (
    <>
        <div>
          <HomeWelcome />
          <ProgramSection />
          <MVO />
          <Partners />
          {/* <Testimonials /> */}
          <Team />
          <Contact />
          <Footer />
        </div>
    </>
  );
}

export default Home