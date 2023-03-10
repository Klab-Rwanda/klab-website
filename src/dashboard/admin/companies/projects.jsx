import {AiTwotoneCalendar} from 'react-icons/ai';
import Profile from '/src/asset/Profile.png';
import {FaPlus} from "react-icons/fa";

const Projectpage=()=>{
    return(


        <div className='projects-section'>
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
    

)
    }

export default Projectpage