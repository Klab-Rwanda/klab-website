import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import PROFILE from '/assets/website/images/profilePlaceHolder.svg';

const LoginPage = () => {
  return (
    <div>
      <NavBar />
      <div className="loginPage container-default">
        <div className="loginPage-container ">
          <div className="left-part">
            <h2>Make a Dream.</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="right">
            <div className="intro">
              <img src={PROFILE} />
              <p>Welcome back!</p>
            </div>
            <form className="form">
              <div className="input">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="input">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <p>
                <Link className="link" to="/forgotPassword">
                  Forgot password?
                </Link>
              </p>
              <button className="button" type="submit">
                Login
              </button>
            </form>
            <div className="form-footer">
              <p>
                Don't have an account?
                <span>
                  <Link className="link" to="/register">
                    Register
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

export default LoginPage;
