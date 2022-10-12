import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import ProgramsCards from '../components/websiteComponents/ProgramsCards';
import HERO_BANNER_IMG from '/assets/website/images/heroBanner.png';
import BlueDecoration from '/assets/website/decorations/blue.svg';
import grayDecoration from '/assets/website/decorations/gray.svg';
import WhiteDecoration from '/assets/website/decorations/white.svg';
import Mission from '../components/websiteComponents/Mission';
import Partners from '../components/websiteComponents/Partners';
import Testimonials from '../components/websiteComponents/Testimonials';
import Contacts from '../components/websiteComponents/Contacts';
import TeamCmp from '../components/websiteComponents/TeamCmp';

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
          </div>
        </div>
        <div className='Program-cards-container'>
          <ProgramsCards />
        </div>
        <div className='mission-container container-default'>
          <Mission />
        </div>
        <div className='paartners-cmp-container'>
          <Partners />
        </div>
        <div className='testimonials-cmp-container container-default'>
          <Testimonials />
        </div>
        <div className='team-container'>
          <TeamCmp />
        </div>
        <div className='contacts-cmp-container container-default'>
          <Contacts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
