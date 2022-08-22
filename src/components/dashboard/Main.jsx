import React from 'react'
import SideBar from '../utils/SideBar';
import Content from './Content';
import Navbar from '../utils/Navbar';
import{Routes , Route } from 'react-router-dom'
import AddProgram from './Form/AddProgram';
import Footer from '../utils/Footer';

const Main = () => {
  return (
    <>
      {/*  BEGIN MAIN CONTAINER  */}
      <Navbar />
      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />
        <SideBar />
        <div id="content" className="main-content">
          <Content/>
        </div>
      </div>
      <Footer />
      {/* END MAIN CONTAINER */}
    </>
  );
}

export default Main