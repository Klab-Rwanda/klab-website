import React from 'react';
import TITLEDEC from '/assets/website/decorations/title.svg';

const HeadIntro = ({ title, desc }) => {
  return (
    <div className='headIntro-cmp'>
      <h1 className='head'>{title}</h1>
      <div className='decoration'>
        <img src={TITLEDEC} alt='titlec=decoration' />
      </div>
      <p className='decs'>{desc}</p>
    </div>
  );
};

export default HeadIntro;
