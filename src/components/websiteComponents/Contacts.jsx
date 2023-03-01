import React from 'react';
import HeadIntro from './HeadIntro';

const Contacts = () => {
  return (
    <div className='contacts-cmp'>
      <HeadIntro
        title='CONTACT US'
        desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech as talents and enterpreneurs'
      />
      <div className='contact-wraper'>
        <div className='map'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327136866454!2d30.08853461543378!3d-1.939467698586016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1662556691905!5m2!1sen!2srw'></iframe>
        </div>
        <form className='form'>
          <div className='input'>
            <input type='text' name='name' placeholder='Full name' />
          </div>
          <div className='input'>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div className='input'>
            <input type='text' name='phone' placeholder='Phone number' />
          </div>
          <div className='text-area'>
            <textarea name='name' placeholder='Message' />
          </div>
          <button className='button' type='submit'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
