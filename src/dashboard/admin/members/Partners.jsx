import { FaHandsHelping, FaUserGraduate } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsPersonBoundingBox, BsEyeFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import alogo from "/assets/website/decorations/A-logo.svg";

const Partners = () => {
  return (
    <div className="patners-holder">
      <div className="admin-headers">
        <h1>All Patners</h1>
        <span>Dashboard &gt; Members &gt; Patners</span>
      </div>
      <div className="AllPatners">
        <div className="partner">
          <img src={alogo} alt="" className="image" />
          <span>
            <h1>Z-A Tech</h1>
            <p>
              Graphic design Company{" "}
              <label>Kigali, Nyarugenge, kg 655 st</label>
            </p>{" "}
          </span>
          <button>
            <BsEyeFill className="icoo" />
          </button>
        </div>
        <div className="partner">
          <img src={alogo} alt="" className="image" />
          <span>
            <h1>Z-A Tech</h1>
            <p>
              Graphic design Company{" "}
              <label>Kigali, Nyarugenge, kg 655 st</label>
            </p>{" "}
          </span>
          <button>
            <BsEyeFill className="icoo" />
          </button>
        </div>
        <div className="partner">
          <img src={alogo} alt="" className="image" />
          <span>
            <h1>Z-A Tech</h1>
            <p>
              Graphic design Company{" "}
              <label>Kigali, Nyarugenge, kg 655 st</label>
            </p>{" "}
          </span>
          <button>
            <BsEyeFill className="icoo" />
          </button>
        </div>
        <div className="partner">
          <img src={alogo} alt="" className="image" />
          <span>
            <h1>Z-A Tech</h1>
            <p>
              Graphic design Company{" "}
              <label>Kigali, Nyarugenge, kg 655 st</label>
            </p>{" "}
          </span>
          <button>
            <BsEyeFill className="icoo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
