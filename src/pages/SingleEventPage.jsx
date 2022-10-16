import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import HERO_BANNER_IMG from '/assets/website/images/event.png';
import BlueDecoration from '/assets/website/decorations/blue.svg';
import WhiteDecoration from '/assets/website/decorations/white.svg';
import EventCard from '../components/websiteComponents/EventCard';
import { Link } from 'react-router-dom';
import FB from '/assets/website/icons/fb.svg';
import HeadIntro from '../components/websiteComponents/HeadIntro';
import TWITTER from '/assets/website/icons/twitter.svg';
import LINKEDIN from '/assets/website/icons/linkedin.svg';
import YOUTUBE from '/assets/website/icons/youtube.svg';
import IG from '/assets/website/icons/ig.svg';
import PLACE_HOLDER from '/assets/website/images/event.png';

const SingleEventPage = () => {
  const eventsList = [
    {
      id: 1,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    },
    {
      id: 2,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    },
    {
      id: 3,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    }
  ];
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
              <div className='tags'>
                <div className='tag'>Techup skills</div>
                <div className='tag'>Meet ups</div>
                <div className='tag'>Entepreneurs</div>
                <div className='tag'>Ihuzo</div>
              </div>
              <div className='social-share'>
                <div className='title-xl'>Share with friends</div>
                <div className='socials'>
                  <div className='item'>
                    <Link to='/'>
                      <img src={FB} alt='fb' />
                    </Link>
                  </div>
                  <div className='item'>
                    <Link to='/'>
                      <img src={TWITTER} alt='twitter' />
                    </Link>
                  </div>
                  <div className='item'>
                    <Link to='/'>
                      <img src={YOUTUBE} alt='twitter' />
                    </Link>
                  </div>
                  <div className='item'>
                    <Link to='/'>
                      <img src={IG} alt='twitter' />
                    </Link>
                  </div>
                  <div className='item'>
                    <Link to='/'>
                      <img src={LINKEDIN} alt='twitter' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='eventsCards-cmp'>
            <div className='events-page__events-header'>
              <HeadIntro title='Upcoming Events' />
            </div>
            <div className='cards-wrapper'>
              {eventsList.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  image={event.image}
                  date={event.date}
                  title={event.title}
                  desc={event.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleEventPage;
