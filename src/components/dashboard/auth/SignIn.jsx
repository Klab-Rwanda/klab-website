import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate= useNavigate()

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const loginData = {
    email:email,
    password:password,
  };

  const formSubmit = async (e) => {
    e.preventDefault();
   
  try {
      console.log(JSON.stringify(loginData));
      const response = await axios.post("https://klabattendees.herokuapp.com/api/login/LoginInfo",
        JSON.stringify(loginData),
        {
          headers: { "Content-Type": "application/json" },
         }
      );
   
      localStorage.setItem("admin", JSON.stringify(response?.data?.Token.original));
      navigate("/admin");
        setEmail("");
        setPassword("");
        setSuccess(true);
    
      
  }catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else if (err.response?.status === 422) {
        setErrMsg("Wrong Data");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <div>
          <p>Logged in Successfully</p>
        </div>
      ) : (
        <div>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="form-login">
            <div className="login-container">
              <h1>Sign In</h1>
              <p> Log in to your account to continue</p>

              <form onSubmit={formSubmit}>
                <div className="login-wrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    value={email}
                    required
                    placeholder="johndoe@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login-wrapper">
                  <div className="pass-label">
                    <label htmlFor="password">Password</label>
                    <p>Forgot Password?</p>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="login-wrapper">
                  <button
                    className="login-button"
                    type="submit"
                    
                  >
                    Sign-in
                  </button>
                </div>
                <div className="login-wrapper">
                  <p className="bottom">
                    Not Registered?{" "}
                    <span className="bottom-span">Create Account</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
