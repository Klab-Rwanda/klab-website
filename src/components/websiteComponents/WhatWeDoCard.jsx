import React from 'react';

const WhatWeDoCard = ({ image, date, title, desc }) => {
  return (
    <div className='whatWeDoCard-cmp'>
      <div className='icon'>
        <img src={image} alt='What we do image' />
      </div>
      <div className='details'>
        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
