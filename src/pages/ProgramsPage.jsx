import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import ProgramsCards from '../components/websiteComponents/ProgramsCards';
import Contacts from '../components/websiteComponents/Contacts';

import HERO_BANNER_IMG from '/assets/website/images/heroBanner.png';

const ProgramsPage = () => {
  return (
    <div className='progrmasPage'>
      <NavBar />
      <div>
        <div className='hero-banner'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content '>
            <div className=' container-default'>
              <div className='content-container'>
                <h1>We have several programs </h1>
                <p>
                  You can chose the best program that fits your needs and come gain these skills
                </p>
              </div>
            </div>
          </div>
        </div>

        <div  className='Program-cards-container'>
<ProgramsCards/>
        </div>
      <div className='contacts-cmp-container container-default'>
          <Contacts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
