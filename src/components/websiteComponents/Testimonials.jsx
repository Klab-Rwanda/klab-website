import React from 'react';
import HeadIntro from './HeadIntro';
import SingleTestimonial from './SingleTestimonial';
import PROFILE_PPACEHOLDER from '/assets/website/images/profile.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const Testimonials = () => {
  const testimonialsList = [
    {
      name: 'Issa Nsabimana',
      image: PROFILE_PPACEHOLDER,
      position: 'Frontend developer',
      company: 'KLAB',
      testmonial:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or'
    },
    {
      name: 'Issa Nsabimana',
      image: PROFILE_PPACEHOLDER,
      position: 'Frontend developer',
      company: 'KLAB',
      testmonial:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or'
    },
    {
      name: 'Issa Nsabimana',
      image: PROFILE_PPACEHOLDER,
      position: 'Frontend developer',
      company: 'KLAB',
      testmonial:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or'
    }
  ];
  return (
    <div className='testimonials-cmp'>
      <HeadIntro
        title='TESTIMONIALS'
        desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech as talents and enterpreneurs'
      />
      <div className='testimonial-wrapper'>
        <div className='intro'>
          <h2 className='title'>
            Some of our <span>proud</span> graduates.
          </h2>
          <p className='desc'>
            Our graduates as as proud as you may think? Ofcourse yes! all people
            that passed through our different programs have got jobs and others
            continues their studies in their dream colleges because of tus
          </p>
          <button className='button'>Join them</button>
        </div>
        <div className='right'>
          <div className='slides'>
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className='testmonials-slider'
            >
              {testimonialsList.map((testimonial) => {
                return (
                  <div key={testimonial.name}>
                    <SwiperSlide>
                      <SingleTestimonial testmonial={testimonial} />
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
