
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
              <Link to="/dashboard/companies/allcompanies/singlecompany"><h2>Aline</h2></Link>
              <p>
                
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa beatae at, eius doloremque numquam voluptatibus ipsum
                  dolor unde laboriosam vitae optio minus pariatur
                  exercitationem quidem deserunt nobis sequi architecto
                  laudantium!
               
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
