
import {Link } from "react-router-dom";
import {GiCompanionCube} from "react-icons/gi";



const AllCompanies = () => {
  return (
    <section>
      <div className="companies-container">
        <h2>All Companies</h2>
        <div className="holder-info">
          <div className="info-company">
            <div className="logo-co">
              <GiCompanionCube />
            </div>
            <span>
              <Link to="singlecompany"><h1>HEAVEN STUDIO</h1></Link>
              <p>
                
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa beatae at, eius doloremque numquam voluptatibus ipsum
                  dolor unde laboriosam vitae optio minus pariatur
                  exercitationem quidem deserunt nobis sequi architecto
                  laudantium!
               
              </p>
              <h4>heavenstudio@gmail.com</h4>
            </span>
          </div>
          <div className="info-company">
            <div className="logo-co">
              <GiCompanionCube />
            </div>
            <span>
              <h1>Y-LABS</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae at, eius doloremque numquam voluptatibus ipsum dolor unde
                laboriosam vitae optio minus pariatur exercitationem quidem
                deserunt nobis sequi architecto laudantium!
              </p>
              <h4>y-labs@gmail.com</h4>
            </span>
          </div>
          <div className="info-company">
            <div className="logo-co">
              <GiCompanionCube />
            </div>
            <span>
              <h1>Blandine</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae at, eius doloremque numquam voluptatibus ipsum dolor unde
                laboriosam vitae optio minus pariatur exercitationem quidem
                deserunt nobis sequi architecto laudantium!
              </p>
              <h4>aline@gmail.com</h4>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCompanies;
