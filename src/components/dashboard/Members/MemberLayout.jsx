import React from 'react'
import Footer from '../../utils/Footer';
import Navbar from '../../utils/Navbar';
import SideBar from '../../utils/SideBar';

import Members from './Members';

function MemberLayout() {
  return (
    <>
      {/*  BEGIN MAIN CONTAINER  */}
      <Navbar />
      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />
        <SideBar />
        <div id="content" className="main-content">
          <Members/>
        </div>
      </div>
      <Footer />
      {/* END MAIN CONTAINER */}
    </>
  );
}

export default MemberLayout