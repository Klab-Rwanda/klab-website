import React from 'react';

const WhatWeDoCard = ({ image, date, title, desc }) => {
  return (
    <div className='whatWeDoCard-cmp'>
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
    </div>
  );
};

export default WhatWeDoCard;
