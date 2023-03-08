import Outline from './outline';
import Secondsidebar from '../secondSidebar'
import {FaCalendar, FaUsers, FaBell} from "react-icons/fa";
import {MdApartment} from "react-icons/md";

const Transactionpage = () =>{
return(
    <div className="wrapper">
         <Outline />  
         <section className="projects-content">

         <div className="event-cards">
          <div className="card-item">
            <div className="card-details">
              <p>All Events</p>
              <h1>36</h1>
            </div>
            <div className="card-icon allevents">
              <FaCalendar />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>New Events</p>
              <h1>11</h1>
            </div>
            <div className="card-icon new-events">
              <MdApartment />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Hackathons</p>
              <h1>08</h1>
            </div>
            <div className="card-icon hackathons">
              <FaUsers />
            </div>
          </div>

          <div className="card-item">
            <div className="card-details">
              <p>Competitions</p>
              <h1>08</h1>
            </div>
            <div className="card-icon competitons">
              <FaBell />
            </div>
          </div>
        

        

        
        <div className='projects-sidebar'>
        <Secondsidebar />
        </div>
        
        

        
      </div>
      </section>
    </div>

)
}
export default Transactionpage;