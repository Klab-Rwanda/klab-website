
import {Link } from "react-router-dom";
import {GiCompanionCube} from "react-icons/gi";


const AllCompanies = () => {
  return (
    <section>
      <div className="companies-container">
        <h1>Companies</h1>
        <div className="holder-info">
          <div className="info-company">
            <div className="logo-co">
              <GiCompanionCube />
            </div>
            <span>
              <h2>
                <Link to="single-company">Aline</Link>
              </h2>
              <p>
                <Link to="/single-company">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa beatae at, eius doloremque numquam voluptatibus ipsum
                  dolor unde laboriosam vitae optio minus pariatur
                  exercitationem quidem deserunt nobis sequi architecto
                  laudantium!
                </Link>
              </p>
              <p>aline@gmail.com</p>
            </span>
          </div>
          <div className="info-company">
            <div className="logo-co">
              <GiCompanionCube />
            </div>
            <span>
              <h2>Jabo</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae at, eius doloremque numquam voluptatibus ipsum dolor unde
                laboriosam vitae optio minus pariatur exercitationem quidem
                deserunt nobis sequi architecto laudantium!
              </p>
              <p>aline@gmail.com</p>
            </span>
          </div>
          <div className="info-company">
            <div className="logo-co">
              <GiCompanionCube />
            </div>
            <span>
              <h2>Blandine</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae at, eius doloremque numquam voluptatibus ipsum dolor unde
                laboriosam vitae optio minus pariatur exercitationem quidem
                deserunt nobis sequi architecto laudantium!
              </p>
              <p>aline@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCompanies;
