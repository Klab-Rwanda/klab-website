import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import HERO_BANNER_IMG from '/assets/website/images/event.png';
import BlueDecoration from '/assets/website/decorations/blue.svg';
import WhiteDecoration from '/assets/website/decorations/white.svg';
import EventCard from '../components/websiteComponents/EventCard';
import HeadIntro from '../components/websiteComponents/HeadIntro';

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
        <div className='container-default'>
          <div className='single-event-body '>
            <div className='desc-part'>
              <div className='title'>
                <HeadIntro title='Event description' />
              </div>
              <div className='body'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages,
                </p>
              </div>
              <form className='form'>
                <p className='title-xl'>Leave Comment</p>
                <div className='input'>
                  <input type='text' name='name' placeholder='Full name' />
                </div>
                <div className='input'>
                  <input type='email' name='email' placeholder='Email' />
                </div>
                <div className='text-area'>
                  <textarea name='name' placeholder='Full name' />
                </div>
                <button className='button' type='submit'>
                  Send
                </button>
              </form>
            </div>
            <div className='other-info-part'>
              <div className='title-xl'>Event Location</div>
              <div className='map'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327136866454!2d30.08853461543378!3d-1.939467698586016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1662556691905!5m2!1sen!2srw'></iframe>
              </div>
              <div className='title-xl'>Tags</div>
              <div className='tags'></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleEventPage;
