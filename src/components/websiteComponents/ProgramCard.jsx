import React from 'react';

const ProgramCard = ({ number, title, desc, linkTo }) => {
  return (
    <div className='prgram-card'>
      <div className='number'>{number}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={linkTo}>Learn more</a>
    </div>
  );
};

export default ProgramCard;
