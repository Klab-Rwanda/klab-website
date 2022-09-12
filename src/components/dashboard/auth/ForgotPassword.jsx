import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="form-login">
      <div className="login-container">
        <h1>Password Recovery</h1>
        <p>Enter Email and instruction will sent to you</p>

        <form>
          <div className="login-wrapper">
            <label>Email</label>
            <input
              placeholder="Email"
              type="email"
            //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="login-wrapper">
            <button
              className="login-button"
              type="submit"
              
            >
              Reset
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword