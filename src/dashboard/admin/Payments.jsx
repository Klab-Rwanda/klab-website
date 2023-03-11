import Outline from "./outline";
import {Outlet, Link} from "react-router-dom";

const Payments = () => {
  return (
    <div className="wrapper">
      <Outline />
      <section className="payments-content">
        <h1>Payments Invoice</h1>
        <div className="payment-filters">
          <h4 className="parents-active">
            <Link
              to="/payments">
              Companies
            </Link>
          </h4>

          <h4>
            <Link to="parents">Parents</Link>
          </h4>
        </div>
        <div className="payment-invoices">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Payments
