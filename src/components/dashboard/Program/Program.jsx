import React from 'react'
import SingleProgram from './SingleProgram';
import SideBar from '../../utils/SideBar';
import Footer from '../../utils/Footer';
import Navbar from '../../utils/Navbar';


const Program = () => {
  return (
    <>
      {/*  BEGIN MAIN CONTAINER  */}
      <Navbar />
      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />
        <SideBar />
        <div id="content" className="main-content">
          <div className="event">
            <div className="events-header">
              <h1>All Programs</h1>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-calendar mr-2"
                >
                  <rect x="3" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Add Program
              </button>
            </div>
            <div className='single-program'>
              <SingleProgram />
              <SingleProgram />
              <SingleProgram />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* END MAIN CONTAINER */}
    </>
  );
}

export default Program