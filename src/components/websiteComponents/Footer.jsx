import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/assets/website/images/logo.svg';
import FB from '/assets/website/icons/fb.svg';
import TWITTER from '/assets/website/icons/twitter.svg';
import LINKEDIN from '/assets/website/icons/linkedin.svg';
import YOUTUBE from '/assets/website/icons/youtube.svg';
import IG from '/assets/website/icons/ig.svg';
import CALL from '/assets/website/icons/call.svg';
import LOCATION from '/assets/website/icons/location.svg';
import EMAIL from '/assets/website/icons/email.svg';

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
            <h2>Need help?</h2>
            <div className='footer-links'>
              <div className='footer-link flex'>
                <img src={LOCATION} alt='location' />
                <p>Kigali, Gasabo KG 2324 st</p>
              </div>{' '}
              <div className='footer-link flex'>
                <img src={CALL} alt='call' />
                <p>+25078999943</p>
              </div>{' '}
              <div className='footer-link flex'>
                <img src={EMAIL} alt='email' />
                <p>info@klab.com</p>
              </div>
            </div>
          </div>
          <div className='grid'>
            <h2>Programs</h2>
            <div className='footer-links'>
              <div className='footer-link'>
                <Link to='/'>Klab startpus academy</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Future coder</Link>
              </div>
              <div className='footer-link'>
                <Link to='/'>Another program</Link>
              </div>
            </div>
          </div>
          <div className='grid'>
            <h2>Our newsletter</h2>
            <div className='footer-links'>
              <p className='cta'>
                Get latest news and updates from us and all over the worl by
                subscribing to our news letter.
              </p>
              <form>
                <div>
                  <input type='text' placeholder='Enter your email' />
                </div>
                <button type='submit' className='button'>
                  Subscribe
                </button>
              </form>
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
          <div className='socials'>
            <div className='item'>
              <Link to='/'>
                <img src={FB} alt='fb' />
              </Link>
            </div>
            <div className='item'>
              <Link to='/'>
                <img src={TWITTER} alt='twitter' />
              </Link>
            </div>
            <div className='item'>
              <Link to='/'>
                <img src={YOUTUBE} alt='twitter' />
              </Link>
            </div>
            <div className='item'>
              <Link to='/'>
                <img src={IG} alt='twitter' />
              </Link>
            </div>
            <div className='item'>
              <Link to='/'>
                <img src={LINKEDIN} alt='twitter' />
              </Link>
            </div>
          </div>
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
