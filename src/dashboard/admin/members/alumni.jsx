import alumn from "/assets/website/decorations/alumni.jpg";
import {BsEyeFill} from "react-icons/bs";


export default function alumni() {
  return (
    <div>
      <div className="admin-headers">
        <h1>All Alumni</h1>
        <p>Dashboard &gt; Members &gt; Alumni</p>
      </div>
      <div className="alumn-holder">
        <img src={alumn} alt="" />
        <div className="infoo">
          <span>
            <h4>ISINGIZWE Aline</h4>
            <p>Alumni</p>
          </span>
          <label>aline@gmail.com</label>
          <label>0788266622</label>
        
            <button>
              <BsEyeFill className="icoo" />
            </button>
       
        </div>
      </div>
      <div className="alumn-holder">
        <img src={alumn} alt="" />
        <div className="infoo">
          <span>
            <h4>ISINGIZWE Aline</h4>
            <p>Alumni</p>
          </span>
          <label>aline@gmail.com</label>
          <label>0788266622</label>
            <button>
              <BsEyeFill className="icoo" />
            </button>
        </div>
      </div>
      <div className="alumn-holder">
        <img src={alumn} alt="" />
        <div className="infoo">
          <span>
            <h4>ISINGIZWE Aline</h4>
            <p>Alumni</p>
          </span>
          <label>aline@gmail.com</label>
          <label>0788266622</label>
            <button>
              <BsEyeFill className="icoo" />
            </button>
        </div>
      </div>
      <div className="alumn-holder">
        <img src={alumn} alt="" />
        <div className="infoo">
          <span>
            <h4>ISINGIZWE Aline</h4>
            <p>Alumni</p>
          </span>
          <label>aline@gmail.com</label>
          <label>0788266622</label>
      
            <button>
              <BsEyeFill className="icoo" />
            </button>
   
        </div>
      </div>
    </div>
  );
}
