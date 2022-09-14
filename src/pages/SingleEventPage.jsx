import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import HERO_BANNER_IMG from '/assets/website/images/event.png';
import BlueDecoration from '/assets/website/decorations/blue.svg';
import WhiteDecoration from '/assets/website/decorations/white.svg';
import EventCard from '../components/websiteComponents/EventCard';

const SingleEventPage = () => {
  return (
    <div className='single-event-page'>
      <NavBar />
      <div>
        <div className='hero-banner-single-event'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content '>
            <div className='event-booking container-default'>
              <div className='content-container'>
                <h1>Klab Events</h1>
                <p>
                  kLab provides an open space for IT entrepreneurs to
                  collaborate and innovate in Kigali, Rwanda
                </p>
              </div>
              <div className='booking-card'>
                <div className='date-container'>
                  <p className='title-big'>Date & Time</p>
                  <p className='title-small'>
                    Monday, Sept 12, 2022 at 08:30 AM
                  </p>
                </div>
                <button className='addToCalendar'>+ Add to calendar </button>
                <button className='button'>+ Book Now </button>
              </div>
            </div>
            <div className='white-decoration'>
              <img src={WhiteDecoration} alt='decoration' />
            </div>
          </div>

          <div className='colored-decorations '>
            <img src={BlueDecoration} alt='decoration' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleEventPage;
