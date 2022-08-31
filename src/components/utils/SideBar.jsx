import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { nav } from '../util/AdminSidebar';

const SideBar = () => {
  const [display,setDisplay]= useState(false)
  const [program, setProgram] = useState(false)
  const[events, setEvents] = useState(false);


  return (
    <>
      {/*  BEGIN SIDEBAR  */}
      <div className="sidebar-wrapper sidebar-theme">
        <nav id="sidebar">
          <div className="shadow-bottom" />
          <ul className="list-unstyled menu-categories" id="accordionExample">
            <li className="menu">
              <p onClick={()=>setDisplay(display===false ? true:false)}
                data-active="true"
                data-toggle="collapse"
                aria-expanded="true"
                className="dropdown-toggle"
              >
                <div className="">
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
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Dashboard</span>
                </div>
              </p>
            { display && (<ul
                className="collapse submenu list-unstyled show"
                id="dashboard"
                data-parent="#accordionExample"
              >
                <li className="active">
                  <NavLink to="/admin">Home </NavLink>
                </li>
              </ul>)}
            </li>
            <li className="menu">
              <p onClick={()=>setProgram(program===false ? true : false)}
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
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
                    className="feather feather-cpu"
                  >
                    <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
                    <rect x={9} y={9} width={6} height={6} />
                    <line x1={9} y1={1} x2={9} y2={4} />
                    <line x1={15} y1={1} x2={15} y2={4} />
                    <line x1={9} y1={20} x2={9} y2={23} />
                    <line x1={15} y1={20} x2={15} y2={23} />
                    <line x1={20} y1={9} x2={23} y2={9} />
                    <line x1={20} y1={14} x2={23} y2={14} />
                    <line x1={1} y1={9} x2={4} y2={9} />
                    <line x1={1} y1={14} x2={4} y2={14} />
                  </svg>
                  <span>Program</span>
                </div>
                
              </p>
              {program && (<ul
                className="collapse submenu list-unstyled"
                id="app"
                data-parent="#accordionExample"
              >
                <li>
                  <NavLink to="/add-program">Add Program</NavLink>
                </li>
                <li>
                  <NavLink to="/startup-academy">kLab Startups Academy</NavLink>
                </li>
                <li>
                  <a href="apps_todoList.html">Techup Skills</a>
                </li>

                <li>
                  <a
                    href="#appInvoice"
                    to="/future-koder"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                  >
                  
                    Future Koders
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
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>{" "}
                  </a>
                  <ul
                    className="collapse list-unstyled sub-submenu"
                    id="appInvoice"
                    data-parent="#app"
                  >
                   
                    <li>
                      <NavLink to="/future-koder">Weekend Program</NavLink>
                    </li>
                    <li>
                      <NavLink to="/future-koder">Holiday Program</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>)}
            </li>
            <li className="menu">
              <p onClick={()=>{setEvents(events=== false ? true :false)}}
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
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
                    className="feather feather-box"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1={12} y1="22.08" x2={12} y2={12} />
                  </svg>
                  <span>Events</span>
                </div>
                
              </p>
              {events && (<ul
                className="collapse submenu list-unstyled"
                id="components"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="component_tabs.html">Blogs</a>
                </li>
                
                <li>
                  <a href="component_modal.html">Events</a>
                </li>
                
              </ul>)}
            </li>
            <li className="menu">
              <a
                href="#elements"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
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
                    className="feather feather-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Members</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="elements"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="element_progress_bar.html"> Companies </a>
                </li>
                <li>
                  <a href="element_search.html">Individuals</a>
                </li>
              </ul>
            </li>

            <li className="menu">
              <a
                href="#datatables"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
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
                    className="feather feather-layers"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  <span>Company</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="datatables"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="table_dt_basic.html">Hiring</a>
                </li>
                <li>
                  <a href="table_dt_striped_table.html">Projects</a>
                </li>
              </ul>
            </li>
            <li className="menu">
              <a
                href="#forms"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
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
                    className="feather feather-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Enterpreneurs</span>
                </div>
                <div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
              <ul
                className="collapse submenu list-unstyled"
                id="forms"
                data-parent="#accordionExample"
              >
                <li>
                  <a href="form_bootstrap_basic.html"> Individual</a>
                </li>
                <li>
                  <a href="form_input_group_basic.html"> Company</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      {/*  END SIDEBAR  */}
    </>
  );
}

export default SideBar