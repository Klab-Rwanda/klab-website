import React from 'react';
import HeadIntro from './HeadIntro';
import DARK_BG from '/assets/website/images/blackBg.svg';

const Partners = () => {
  return (
    <div className='partners-cmp'>
      {/* <div className='image-bg'>
        <img src={DARK_BG} alt='partners bg' />
      </div> */}

      <HeadIntro
        title='OUR PARTNERS'
        desc='Obviously we can’t run all of these programs alone so we have joined hands with different partners to make that possible and help people the best out of our programs'
      />
    </div>
  );
};

export default Partners;
