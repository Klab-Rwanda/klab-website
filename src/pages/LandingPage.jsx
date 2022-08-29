import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <NavBar />
      <div>Home page</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
