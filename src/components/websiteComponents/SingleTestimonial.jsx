import React from 'react';

const SingleTestimonial = ({ testmonial }) => {
  return (
    <div className='single-testmonial-cmp '>
      <div className='upper'>
        <div className='image'>
          <img src={testmonial.image} alt='profile' />
        </div>
        <div className='profile-info'>
          <h3 className='name'>{testmonial.name}</h3>
          <p className='position'>{testmonial.position}</p>
          <h4 className='company'>{testmonial.company}</h4>
        </div>
      </div>
      <div className='bottom'>
        <p className='testimonial'>{testmonial.testmonial}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
