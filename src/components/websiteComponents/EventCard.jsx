import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ id, image, date, title, desc }) => {
  return (
    <div className='eventCard-cmp'>
      <Link to='/event'>
        <div className='thumbnail'>
          <img src={image} alt='event image' />
        </div>
        <div className='content'>
          <div className='date'>
            <p className='month'>sep</p>
            <p className='day'>09</p>
            <p className='year'>2022</p>
          </div>
          <div className='event-details'>
            <p className='title'>{title}</p>
            <p className='desc'>{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
