import React from "react";
import SideBar from "../../utils/SideBar";
import Navbar from "../../utils/Navbar";
import Footer from "../../utils/Footer";
import ProgamContent from "./ProgamContent";

const StartupAcademy = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />
        <SideBar />

        <ProgamContent />
      </div>
      <Footer />
    </div>
  );
};

export default StartupAcademy;
