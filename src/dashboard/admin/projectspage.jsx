// import React from 'react'

import Outline from './outline';
import {AiTwotoneCalendar} from 'react-icons/ai';
import Profile from '/src/asset/Profile.png';
import {FaCalendar, FaUsers, FaBell} from "react-icons/fa";
import {MdApartment} from "react-icons/md";
import {FaPlus} from "react-icons/fa";
import Sidebar from "../secondSidebar";


const Projectpage=()=>{
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
        </div>

        <div className='projects-section'>

        
        <div clasName="projects-sidebar">
        <Sidebar />
        </div>

        
         <div className='card'>
          <div className='head'>  
         <div className='card7' head>
            <h1>Open</h1>
            <div className='icon'><FaPlus/></div>
            </div>
            </div>
            
             <div className='head'> 
            <div className='card8'> 
            <div className='tex'><h1>In Progress</h1></div>
            <div className='icon'><FaPlus/></div>
            </div>
            </div>
            <div className='head'>   
            <div className='card9' head>
            <h1>Done</h1>
            <div className='icon'></div>
            </div>
            </div>
              
         <div class="card1 cards">
         <div class="headera">
            <div className='one'>UI Design</div>
            <div class="calender">
                <AiTwotoneCalendar/>
                <p>DueMarch24</p>
            </div>
        </div>
        <div className='paragraph'>
            <p>Conduct to research <br/>landing page flex jobs</p></div>
        <div class="progress-container">
            <div class="progress">
                <div class="progress-inside"></div>
            </div>
            <p>78%</p>
        </div>
        <div class="profi">
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        </div>
        </div>

        <div class="card2 cards">
         <div class="headera">
            <div className='one'>UI Design</div>
            <div class="calender">
                <AiTwotoneCalendar/>
                <p>DueMarch24</p>
            </div>
        </div>
        <div className='paragraph'>
            <p>Conduct to research <br/>landing page flex jobs</p></div>
        <div class="progress-container">
            <div class="progress">
                <div class="progress-inside"></div>
            </div>
            <p>78%</p>
        </div>
        <div class="profi">
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        </div>
        </div>
        <div class="card3 cards">
         <div class="headera">
            <div className='one'>UI Design</div>
            <div class="calender">
                <AiTwotoneCalendar/>
                <p>DueMarch24</p>
            </div>
        </div>
        <div className='paragraph'>
            <p>Conduct to research <br/>landing page flex jobs</p></div>
        <div class="progress-container">
            <div class="progress">
                <div class="progress-inside"></div>
            </div>
            <p>78%</p>
        </div>
        <div class="profi">
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        </div>
        {/* </div> */}
        </div>
       
        
        <div class="card4 cards">
         <div class="headera">
            <div className='one'>UI Design</div>
            <div class="calender">
                <AiTwotoneCalendar/>
                <p>DueMarch24</p>
            </div>
        </div>
        <div className='paragraph'>
            <p>Conduct to research <br/>landing page flex jobs</p></div>
        <div class="progress-container">
            <div class="progress">
                <div class="progress-inside"></div>
            </div>
            <p>78%</p>
        </div>
        <div class="profi">
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        </div>
        </div>
        <div class="card5 cards">
         <div class="headera">
            <div className='one'>UI Design</div>
            <div class="calender">
                <AiTwotoneCalendar/>
                <p>DueMarch24</p>
            </div>
        </div>
        <div className='paragraph'>
            <p>Conduct to research <br/>landing page flex jobs</p></div>
        <div class="progress-container">
            <div class="progress">
                <div class="progress-inside"></div>
            </div>
            <p>78%</p>
        </div>
        <div class="profi">
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        </div>
        </div>
        <div class="card6 cards">
         <div class="headera">
            <div className='one'>UI Design</div>
            <div class="calender">
                <AiTwotoneCalendar/>
                <p>DueMarch24</p>
            </div>
        </div>
        <div className='paragraph'>
            <p>Conduct to research <br/>landing page flex jobs</p></div>
        <div class="progress-container">
            <div class="progress">
                <div class="progress-inside"></div>
            </div>
            <p>78%</p>
        </div>
        <div class="profi">
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        <img src={Profile} alt="Profile" />
        </div>
        </div>
        </div>
        </div>
    </section>
</div>
)
    }

export default Projectpage