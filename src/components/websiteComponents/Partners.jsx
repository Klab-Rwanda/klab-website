import React from 'react';
import HeadIntro from './HeadIntro';
import ICT from '/assets/website/images/ictChamber.svg';
import KLEIN from '/assets/website/images/klein.svg';
import BITMI from '/assets/website/images/bitmi.svg';
import GERMAN from '/assets/website/images/germanCoperation.svg';
import BLUE from '/assets/website/decorations/blue.svg';

const Partners = () => {
  return (
    <div className='partners-cmp'>
      <div className='content container-default'>
        <HeadIntro
          title='OUR PARTNERS'
          desc='Obviously we can’t run all of these programs alone so we have joined hands with different partners to make that possible and help people the best out of our programs'
        />
        <div className='partners-logos'>
          <div className='partner'>
            <img src={ICT} alt='ICT' />
          </div>
          <div className='partner'>
            <img src={KLEIN} alt='Klein' />
          </div>
          <div className='partner'>
            <img src={BITMI} alt='Bitmi' />
          </div>
          <div className='partner'>
            <img src={GERMAN} alt='German coperation' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
