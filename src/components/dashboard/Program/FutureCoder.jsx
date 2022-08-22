import React from 'react'
import Navbar from '../../utils/Navbar';
import SideBar from '../../utils/SideBar';
import Footer from '../../utils/Footer';
import FurureContent from './FurureContent';

const FutureCoder = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />
        <SideBar />

        <FurureContent />
      </div>
      <Footer />
    </div>
  );
}

export default FutureCoder