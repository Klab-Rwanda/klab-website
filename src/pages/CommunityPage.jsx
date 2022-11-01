import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';

import HERO_BANNER_IMG from '/assets/website/images/heroBanner.png';


const CommunityPage = () => {
  return (
    <div className='communityPage'>
      <NavBar />
      <div>
      <div className='hero-banner'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content '>
            <div className='events-summary'>
              <div className='content-container container-default'>
                <h1>Klab Community</h1>
                <p>
                 We have a big community of people who passed through our different programs and other external people ready to help everyday.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
