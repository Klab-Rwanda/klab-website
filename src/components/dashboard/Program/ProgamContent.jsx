import React from 'react'
import ProgramCohort from '../../utils/ProgramCohort';
import ProgramChart from '../../utils/ProgramChart';
import ProgramTable from './ProgramTable';
import Linechart from '../../utils/LineChart';


const ProgamContent = () => {
  return (
    <div id="content" className="main-content">
      <div className="layout-px-spacing">
        <div className="row layout-top-spacing">
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
            <div className="widget widget-one">
              <div className="widget-heading">
                <h6 className="">Cohort</h6>
                <div className="task-action">
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="pendingTask"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-more-horizontal"
                      >
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={19} cy={12} r={1} />
                        <circle cx={5} cy={12} r={1} />
                      </svg>
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="w-chart">
                <div className="w-chart-section total-visits-content">
                  <div className="w-detail">
                    <p className="w-title">courses</p>
                    <p className="w-stats">42</p>
                  </div>
                  <div className="w-chart-render-one">
                    <Linechart />
                    <div id="total-users" />
                  </div>
                </div>
                <div className="w-chart-section paid-visits-content">
                  <div className="w-detail">
                    <p className="w-title">Trainer</p>
                    <p className="w-stats">7</p>
                  </div>
                  <div className="w-chart-render-one">
                    <Linechart />
                    <div id="paid-visits" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
            <div className="widget widget-card-four">
              <div className="widget-content">
                <div className="w-header">
                  <div className="w-info">
                    <h6 className="value">Fellows</h6>
                  </div>
                  <div className="task-action">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="pendingTask"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      
                    </div>
                  </div>
                </div>
                <div className="w-content">
                  <div className="w-info">
                    <p className="value">
                      45,141 <span>Total</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trending-up"
                      >
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="w-progress-stats">
                  <div className="progress">
                    <div
                      className="progress-bar bg-gradient-secondary"
                      role="progressbar"
                      style={{ width: "57%" }}
                      aria-valuenow={57}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="">
                    <div className="w-icon">
                      <p>57%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
            <div className="widget widget-account-invoice-two">
              <div className="widget-content">
                <div className="account-box">
                  <div className="info">
                    <div className="inv-title">
                      <h5 className="">Total Trainees</h5>
                    </div>
                    <div className="inv-balance-info">
                      <p className="inv-balance">41,741.42</p>
                      <span className="inv-stats balance-credited">+ 2453</span>
                    </div>
                  </div>
                  <div className="acc-action">
                    <div className="">
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus"
                        >
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                      </a>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-credit-card"
                        >
                          <rect
                            x={1}
                            y={4}
                            width={22}
                            height={16}
                            rx={2}
                            ry={2}
                          />
                          <line x1={1} y1={10} x2={23} y2={10} />
                        </svg>
                      </a>
                    </div>
                    <a href="">Upgrade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row layout-top-spacing">
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
              <div className="widget widget-chart-one">
                <div className="widget-heading">
                  <h5 className="">kLab Startups Academy</h5>
                </div>
                <div className="widget-content">
                  <ProgramChart />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
              <div className="widget widget-chart-two">
                <div className="widget-heading">
                  <h5 className="">Cohort Category</h5>
                </div>
                <div className="widget-content">
                  <ProgramCohort />
                </div>
              </div>
            </div>
            <ProgramTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgamContent