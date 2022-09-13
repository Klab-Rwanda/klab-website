import React from 'react';

const EventCard = ({ id, image, date, title, desc }) => {
  return (
    <div className='eventCard-cmp'>
      <a href=''>
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
      </a>
    </div>
  );
};

export default EventCard;
