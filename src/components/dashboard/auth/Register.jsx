import React from 'react'

const Register = () => {
  return (
    <div className="form-login">
      <div className="login-container">
        <h1>Register</h1>
        <p className="bottom">
          Already have an Account <span className="bottom-span">Login</span>
        </p>

        <form>
          <div className="login-wrapper">
            <label>Email</label>
            <input
              placeholder="johndoe@gmail.com"
              type="email"
             
            />
          </div>
          <div className="login-wrapper">
            <label>Password</label>

            <input
              placeholder="Password"
              type="password "
              
            />
          </div>
          <div className="login-wrapper">
            <label>confirm-Password</label>

            <input
              placeholder="confirm-Password"
              type="password "
             
            />
          </div>
          <div className="login-wrapper">
            <button
              className="login-button"
              type="submit"
              
            >
              Get-started
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Register