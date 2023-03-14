import Outline from "./outline";
import {Outlet, Link} from "react-router-dom";
import { useState } from "react";

const Payments = () => {
  const [companiiesActive, setCompaniesActive] = useState(false);
  const [parentsActive, setParentsActive] = useState(false);

  const companiesState = () =>{
    setCompaniesActive(!companiiesActive);
    setParentsActive(false);
  }
  const parentsState = () => {
    setParentsActive(!parentsActive);
    setCompaniesActive(true);
  }


  return (
    <div className="wrapper">
      <Outline />
      <section className="payments-content">
        <h1>Payments Invoice</h1>
        <div className="payment-filters">
          <button className={ companiiesActive? "" : "payment-companies"} onClick={companiesState}>
            <Link to="/payments">Companies</Link>
          </button>

          <button
            className={parentsActive ? "payment-parents" : ""}
            onClick={parentsState}
          >
            <Link to="parents">Parents</Link>
          </button>
        </div>
        <div className="payment-invoices">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Payments
