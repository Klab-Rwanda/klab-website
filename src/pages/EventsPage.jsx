import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import HERO_BANNER_IMG from '/assets/website/images/event.png';
import BlueDecoration from '/assets/website/decorations/blue.svg';
import WhiteDecoration from '/assets/website/decorations/white.svg';
import EventsCards from '../components/websiteComponents/EventsCards';

const EventsPage = () => {
  return (
    <div className='events-page'>
      <NavBar />
      <div>
        <div className='hero-banner-events'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content '>
            <div className='events-summary'>
              <div className='content-container container-default'>
                <h1>Klab Events</h1>
                <p>
                  kLab provides an open space for IT entrepreneurs to
                  collaborate and innovate in Kigali, Rwanda
                </p>
              </div>
            </div>

          </div>

        </div>
        <div className='events-cards-container container-default'>
          <EventsCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
