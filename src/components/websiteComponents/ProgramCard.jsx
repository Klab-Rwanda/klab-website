import React from 'react';
import { Link } from 'react-router-dom';
import ARROW from '/assets/website/icons/arrow.svg';

const ProgramCard = ({ number, title, desc, linkTo, image, color }) => {
  return (
    <div className='program-card-cmp'>
      <div className='number'>
        <p>{number}</p>
      </div>
      <div className='program-img'>
        <img src={image} alt="program image"/>
      </div>
      <Link to={`${linkTo}`}>
        <h3 className='title'>{title}</h3>
      </Link>
      <p className='desc'>{desc}</p>
      <Link to={`${linkTo}`}>
        <div className='link'>
          <div>
            <a href={linkTo}>Learn more</a>
          </div>
          <img src={ARROW} alt='arrow' />
        </div>
      </Link>
    </div>
  );
};

export default ProgramCard;
