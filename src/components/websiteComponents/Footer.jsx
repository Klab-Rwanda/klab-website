import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/img/website/images/logo.svg';

const Footer = () => {
  return (
    <div className='footer-cmp'>
      <div className='container'>
        <div className='upper-footer'>
          <div className='grid'>
            <h2>Klab</h2>
            <div className='footer-links'>
              <div className='footer-link'>
                <Link to='/'>About us</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Our team</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Blog</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Terms and servises</Link>
              </div>
            </div>
          </div>
          <div className='grid'>
            <h2>Klab</h2>
            <div className='footer-links'>
              <div className='footer-link'>
                <Link to='/'>About us</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Our team</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Blog</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Terms and servises</Link>
              </div>
            </div>
          </div>
          <div className='grid'>
            <h2>Klab</h2>
            <div className='footer-links'>
              <div className='footer-link'>
                <Link to='/'>About us</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Our team</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Blog</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Terms and servises</Link>
              </div>
            </div>
          </div>
          <div className='grid'>
            <h2>Klab</h2>
            <div className='footer-links'>
              <div className='footer-link'>
                <Link to='/'>About us</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Our team</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Blog</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Terms and servises</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='lower-footer'>
          <div className='logo'>
            <Link to={'/'}>
              <a>
                <img src={Logo} alt='logo' />
              </a>
            </Link>
          </div>
          <div className='social'>social medias</div>
          <p>
            &copy; 2022 Klab Rwanda. Made with passion by
            <b>
              <a href='https://github.com/mansurissa'> Issa 💚</a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
