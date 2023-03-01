import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import PROFILE from '/assets/website/images/profilePlaceHolder.svg';

const RegisterPage = () => {
  return (
    <div>
      <NavBar />
      <div className='registerPage container-default'>
        <div className='registerPage-container '>
          <div className='left-part'>
            <h2>Make a Dream.</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className='right'>
            <div className='intro'>
            <h2>Make a Dream.</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
            </div>
            <form className='form'>
              <div className='input'>
                <input type='text' name='name' placeholder='Full name' />
              </div>
              <div className='input'>
                <input type='email' name='email' placeholder='Email' />
              </div>
              <div className='input'>
                <input type='password' name='password' placeholder='Password' />
              </div>
              <div className='input'>
                <input type='password' name='password' placeholder='Comfirm Password' />
              </div>

              <div className='input'>
                <input type='text' name='professionalism' placeholder='Professionalism' />
              </div>

              <button className='button' type='submit'>
                Register
              </button>
            </form>
            <div className='form-footer'>
              <p>
                Already have account?
                <span>
                  <Link className='link' to='/signin'>
                    Sign in
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
