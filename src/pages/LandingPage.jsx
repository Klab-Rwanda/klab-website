import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import ProgramsCards from '../components/websiteComponents/ProgramsCards';
import HERO_BANNER_IMG from '/assets/website/images/heroBanner.png';
import BlueDecoration from '/assets/website/decorations/blue.svg';
import grayDecoration from '/assets/website/decorations/gray.svg';
import WhiteDecoration from '/assets/website/decorations/white.svg';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <NavBar />
      <div>
        <div className='hero-banner'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content'>
            <div>
              <h1>Klab Rwanda</h1>
              <p>
                kLab provides an open space for IT entrepreneurs to collaborate
                and innovate in Kigali, Rwanda
              </p>
              <button type='submit' className='button'>
                Become a member
              </button>
            </div>
            <div className='white-decoration'>
              <img src={WhiteDecoration} alt='decoration' />
            </div>
          </div>

          <div className='colored-decorations '>
            <img src={grayDecoration} alt='decoration' />
          </div>
          <div className='colored-decorations '>
            <img src={BlueDecoration} alt='decoration' />
          </div>
        </div>
        <div className='Program-cards-container'>
          <ProgramsCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
