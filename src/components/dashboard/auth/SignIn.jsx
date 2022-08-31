import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div id="flLoginForm" className="col-lg-4 layout-spacing">
        <div className="statbox widget box box-shadow">
          <div className="widget-content widget-content-area">
            <form>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="lEmail"
                  placeholder="Email address *"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="lPassword"
                  placeholder="Password *"
                />
              </div>
              <Link to="/admin">
                {" "}
                <button type="submit" className="btn btn-primary mt-4">
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn