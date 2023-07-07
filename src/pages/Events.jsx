import React from 'react'
import EventsCards from '../Components/sections/Events/EventsCards'
import EventsWelcome from '../Components/sections/Events/EventsWelcome'
import Footer from '../Components/sections/Footer'

const Events = () => {
  return (
      <div>
          <EventsWelcome />
          <EventsCards />
          <Footer/>
    </div>
  )
}

export default Events