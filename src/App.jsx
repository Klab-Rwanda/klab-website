import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import SingleProgram from "./pages/SingleProgram";
import AdminDashboard from "./dashboard/admin/index";
import EventsPage from "./dashboard/admin/Events";
import AllCompanies from "./dashboard/admin/companies/AllCompanies";
import Projects from "./dashboard/admin/companies/projects";
import Companies from "./dashboard/admin/company";
import Transactions from "./dashboard/admin/companies/Transactions";
import SingleCompany from "./dashboard/admin/SingleCompany";
import MembersPage from "./dashboard/admin/Members";
import Administration from "./dashboard/admin/members/Administration";
import Partners from "./dashboard/admin/members/Partners";
import Trainees from "./dashboard/admin/members/Trainees";
import Trainers from "./dashboard/admin/members/Trainers";
import SingleAdmin from "./dashboard/admin/members/SingleAdmin";
import SinglePartner from "./dashboard/admin/SinglePartner";
import Singletrainee from "./dashboard/admin/Singletrainee";
import Singletrainer from "./dashboard/admin/Singletrainer";
import Singlealumni from "./dashboard/admin/Singlealumni";
import Alumni from "./dashboard/admin/members/alumni";
import ParentPage from "./dashboard/admin/ParentPage";
import Payments from "./dashboard/admin/Payments";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyForm from "./pages/CompanyForm";
import TechupskillApp from "./pages/TechupskillApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Applicants from "./dashboard/admin/members/Applicants";
import DashboardPrograms from "./dashboard/admin/Programs";
import Parentdashboard from "./pages/Parentdashboard";
import Parentform from "./pages/parentform";
import SingleEvents from "./pages/SingleEvents";
import AddTeam from "./dashboard/admin/members/AddTeam";
import Loader from "./context/Loader";
import SmoothScroll from "./helpers/SmoothScroll";
import ProtectDashboard from "./context/ProtectDashboard";
import HighSchoolApp from "./pages/HighSchoolApp";

const App = () => {
  return (
    <div className="w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/:programId" element={<SingleProgram />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events/:eventId" element={<SingleEvents />} />
          <Route path="/events" element={<Events />} />
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/companyForm" element={<CompanyForm />} />
          <Route path="/apply" element={<TechupskillApp />} />
          <Route path="/apply/high-school-leaver" element={<HighSchoolApp />} />
          <Route path="/account" element={<Login />} />
          <Route path="/SignUp" element={<Register />} />
          <Route path="/parentdashboard" element={<Parentdashboard />} />
          <Route path="/parentform" element={<Parentform />} />
          <Route
            path="/admin/dashboard"
            exact
            element={
              <ProtectDashboard>
                <AdminDashboard />
              </ProtectDashboard>
            }
          ></Route>
          <Route path="/dashboard/events" element={<EventsPage />}></Route>
          {/* dashboard companies */}
          <Route
            path="/dashboard/companies"
            exact
            element={
              <ProtectDashboard>
                <Companies />
              </ProtectDashboard>
            }
          >
            <Route index element={<AllCompanies />} />
            <Route path="projects" element={<Projects />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="singlecompany" element={<SingleCompany />} />
          </Route>
          <Route
            path="/dashboard/programs"
            element={<DashboardPrograms />}
          ></Route>
          <Route
            path="/dashboard/members"
            exact
            element={
              <ProtectDashboard>
                <MembersPage />
              </ProtectDashboard>
            }
          >
            <Route index element={<Administration />} />
            <Route path="partners" element={<Partners />} />
            <Route path="alumni" element={<Alumni />} />
            <Route path="trainees" element={<Trainees />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="admin" element={<SingleAdmin />} />
            <Route
              path="applicants"
              element={
                <ProtectDashboard>
                  <Applicants />
                </ProtectDashboard>
              }
            />
            <Route
              path="/dashboard/members/partners/single"
              element={<SinglePartner />}
            />
            <Route
              path="/dashboard/members/Administration/addTeam"
              element={<AddTeam />}
            />
            <Route
              path="/dashboard/members/trainers/singletrainer"
              element={<Singletrainer />}
            />
            <Route
              path="/dashboard/members/alumni/singlealumni"
              element={<Singlealumni />}
            />
            <Route
              path="/dashboard/members/alumni/singletrainee"
              element={<Singletrainee />}
            />
          </Route>
          <Route
            path="/dashboard/parentpage"
            exact
            element={<ParentPage />}
          ></Route>
          <Route path="/payments" exact element={<Payments />}></Route>
          <Route path="/loader" element={<Loader />}></Route>
        </Routes>
        <SmoothScroll />
      </Router>
    </div>
  );
};

export default App;
