import Profile from "/public/assets/website/images/girl.jpg";
import { BsFillEyeFill } from "react-icons/bs";

const Administration = () => {
  return (
    <section>
      <div className="admin-headers">
        <h2>All Administrators</h2>
        <p>Dashboard &gt; Members &gt; Administration</p>
      </div>
      <div className="admin-members">
        <div className="admin-item">
          <img src={Profile} alt="" />
          <div className="admin-info-container">
            <div className="admin-names">
              <h4>UMURUNGI Nicole</h4>
              <p>Admin</p>
            </div>
            <p>umurunginicole@gmail.com</p>
            <p>0788746373</p>
            <div className="eye-icon">
              <BsFillEyeFill />
            </div>
          </div>
        </div>

        <div className="admin-item">
          <img src={Profile} alt="" />
          <div className="admin-info-container">
            <div className="admin-names">
              <h4>UMURUNGI Nicole</h4>
              <p>Admin</p>
            </div>
            <p>umurunginicole@gmail.com</p>
            <p>0788746373</p>
            <div className="eye-icon">
              <BsFillEyeFill />
            </div>
          </div>
        </div>

        <div className="admin-item">
          <img src={Profile} alt="" />
          <div className="admin-info-container">
            <div className="admin-names">
              <h4>UMURUNGI Nicole</h4>
              <p>Admin</p>
            </div>
            <p>umurunginicole@gmail.com</p>
            <p>0788746373</p>
            <div className="eye-icon">
              <BsFillEyeFill />
            </div>
          </div>
        </div>

        <div className="admin-item">
          <img src={Profile} alt="" />
          <div className="admin-info-container">
            <div className="admin-names">
              <h4>UMURUNGI Nicole</h4>
              <p>Admin</p>
            </div>
            <p>umurunginicole@gmail.com</p>
            <p>0788746373</p>
            <div className="eye-icon">
              <BsFillEyeFill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Administration
