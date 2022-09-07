import React from 'react';

const MissionCard = ({ image, title, desc }) => {
  return (
    <div className='missionCard-cmp'>
      <div className='image'>
        <img src={image} />
      </div>
      <div className='details'>
        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
      </div>
    </div>
  );
};

export default MissionCard;
