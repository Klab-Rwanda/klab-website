import Outline from "./outline";
import {Outlet, Link} from "react-router-dom";
import { useState } from "react";
import {RiMoneyDollarBoxFill} from "react-icons/ri";
import Image from "../assets/website/images/girl.jpg";

const Payments = () => {

  return (
    <div className="wrapper">
      <Outline />
      <section className="payments-content">
        <h1>Invoices</h1>
        <div className="pymnt-cards">
          <div className="pymnt-card">
            <div className="card-flex">
              <RiMoneyDollarBoxFill className="dollar-icon fill-blue-500" />
              <h1>020</h1>
              <label>Total invoices</label>
            </div>
            <span className="text-blue-500">+25%</span>
          </div>
          <div className="pymnt-card">
            <div className="card-flex">
              <RiMoneyDollarBoxFill className="dollar-icon fill-green-800" />
              <h1>020</h1>
              <label>Paid invoices</label>
            </div>
            <span className="text-green-800">+25%</span>
          </div>
          <div className="pymnt-card">
            <div className="card-flex">
              <RiMoneyDollarBoxFill className="dollar-icon fill-red-600" />
              <h1>020</h1>
              <label>Unpaid invoices</label>
            </div>
            <span className="text-red-600">+25%</span>
          </div>
          <div className="pymnt-card">
            <div className="card-flex">
              <RiMoneyDollarBoxFill className="dollar-icon fill-yellow-600" />
              <h1>020</h1>
              <label>Draft</label>
            </div>
            <span className="text-yellow-600">+25%</span>
          </div>
        </div>
        <div className="invoices">
          <div className="inv-headers">
            <h1>Latest invoices</h1>
            <ul className="inv-filters">
              <li>Monthly</li>
              <li>Weekly</li>
              <li className="active-inv">Today</li>
            </ul>
          </div>
          <table>
            <tr className="inv-header-row">
              <th>Client</th>
              <th>Date</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Service Type</th>
              <th>Status</th>
            </tr>
            <tr>
              <td className="td">
                <img src={Image} alt="" className="inv-profile" />
                <span>
                  <h2>John Doe</h2>
                  <p>inv-001-123</p>
                </span>
              </td>
              <td>
                <h2>March 10, 2022</h2>
              </td>
              <td>
                <h2>john@email.com</h2>
              </td>
              <td>
                <h2>$450</h2>
              </td>
              <td>
                <h2>Server Maintenance</h2>
              </td>
              <td>
                <h2 className="status">Paid</h2>
              </td>
            </tr>
            <tr>
              <td className="td">
                <img src={Image} alt="" className="inv-profile" />
                <span>
                  <h2>John Doe</h2>
                  <p>inv-001-123</p>
                </span>
              </td>
              <td>
                <h2>March 10, 2022</h2>
              </td>
              <td>
                <h2>john@email.com</h2>
              </td>
              <td>
                <h2>$450</h2>
              </td>
              <td>
                <h2>Server Maintenance</h2>
              </td>
              <td>
                <h2 className="status">Paid</h2>
              </td>
            </tr>
            <tr>
              <td className="td">
                <img src={Image} alt="" className="inv-profile" />
                <span>
                  <h2>John Doe</h2>
                  <p>inv-001-123</p>
                </span>
              </td>
              <td>
                <h2>March 10, 2022</h2>
              </td>
              <td>
                <h2>john@email.com</h2>
              </td>
              <td>
                <h2>$450</h2>
              </td>
              <td>
                <h2>Server Maintenance</h2>
              </td>
              <td>
                <h2 className="status">Paid</h2>
              </td>
            </tr>
            <tr>
              <td className="td">
                <img src={Image} alt="" className="inv-profile" />
                <span>
                  <h2>John Doe</h2>
                  <p>inv-001-123</p>
                </span>
              </td>
              <td>
                <h2>March 10, 2022</h2>
              </td>
              <td>
                <h2>john@email.com</h2>
              </td>
              <td>
                <h2>$450</h2>
              </td>
              <td>
                <h2>Server Maintenance</h2>
              </td>
              <td>
                <h2 className="status">Paid</h2>
              </td>
            </tr>
            <tr>
              <td className="td">
                <img src={Image} alt="" className="inv-profile" />
                <span>
                  <h2>John Doe</h2>
                  <p>inv-001-123</p>
                </span>
              </td>
              <td>
                <h2>March 10, 2022</h2>
              </td>
              <td>
                <h2>john@email.com</h2>
              </td>
              <td>
                <h2>$450</h2>
              </td>
              <td>
                <h2>Server Maintenance</h2>
              </td>
              <td>
                <h2 className="status">Paid</h2>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Payments
