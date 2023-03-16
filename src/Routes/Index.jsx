import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import CommunityPage from '../pages/CommunityPage';
import RegisterPage from '../pages/RegisterPage';
import EventsPage from '../pages/EventsPage';
import ProgramsPage from '../pages/ProgramsPage';
import AboutPage from '../pages/AboutPage';
import SingleEventPage from '../pages/SingleEventPage';
import LoginPage from '../pages/LoginPage';
import SingleProgramPage from '../pages/SingleProgram';
import ApplyTechupSkillsPage from '../pages/ApplyTechupSkillsPage';
import AdminDashboard from '../dashboard/admin';
import AdminEvents from '../dashboard/admin/Events';
import Companies from '../dashboard/admin/company';
import SingleCompany from '../dashboard/admin/SingleCompany';
import MembersPage from '../dashboard/admin/Members';
import Administration from '../dashboard/admin/members/Administration';
import Partners from '../dashboard/admin/members/Partners';
import AllCompanies from '../dashboard/admin/companies/AllCompanies';
import Alumni from '../dashboard/admin/members/alumni';
import Trainees from '../dashboard/admin/members/Trainees';
import Trainers from '../dashboard/admin/members/Trainers';
import Projects from '../dashboard/admin/companies/projects';
import Transactions from '../dashboard/admin/companies/Transactions';

import ParentPage from '../dashboard/admin/ParentPage';

import Payments from '../dashboard/admin/Payments';
import CompaniesPayment from '../dashboard/admin/payments/CompaniesPayment';
import ParentsPayment from '../dashboard/admin/payments/ParentsPayment';
import SinglePartner from '../dashboard/admin/SinglePartner';
import SingleAdmin from '../dashboard/admin/members/SingleAdmin';
import Singletrainer from'../dashboard/admin/Singletrainer';
import Singlealumni from '../dashboard/admin/Singlealumni';
import Singletrainee from '../dashboard/admin/Singletrainee';


const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/community" exact element={<CommunityPage />}></Route>
      <Route path="/events" exact element={<EventsPage />}></Route>
      <Route path="/singleEvent" element={<SingleEventPage />}></Route>
      <Route path="/about" exact element={<AboutPage />}></Route>
      <Route path="/programs" exact element={<ProgramsPage />}></Route>
      <Route path="/program" element={<SingleProgramPage />}></Route>
      <Route path="/register" exact element={<RegisterPage />}></Route>
      <Route path="/signin" exact element={<LoginPage />}></Route>
      <Route path="/admin/dashboard" exact element={<AdminDashboard />}></Route>
      <Route path="/dashboard/events" exact element={<AdminEvents />}></Route>
      <Route path="/dashboard/parentpage" exact element={<ParentPage />} ></Route>

        <Route path="/payments" exact element={<Payments />}>
        <Route index element={<CompaniesPayment />} />
        <Route path="parents" element={<ParentsPayment />} />
      </Route>

      <Route path="/dashboard/companies" exact element={<Companies />}>
        <Route index element={<AllCompanies />} />
        <Route path="projects"  element={<Projects />} />
        <Route path="transactions"  element={<Transactions />} />
        <Route path="/dashboard/companies/allcompanies/singlecompany" element={<SingleCompany/>}/>
      </Route>

      
      <Route
        path="/apply/tech-up-skills"
        element={<ApplyTechupSkillsPage />}
      ></Route>

      <Route path="/dashboard/members" exact element={<MembersPage />}>
        <Route index element={<Administration />} />
        <Route path="partners" element={<Partners />} />
        <Route path="alumni" element={<Alumni />} />
        <Route path="trainees" element={<Trainees />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="admin" element={<SingleAdmin />} />
        <Route
          path="/dashboard/members/partners/single"
          element={<SinglePartner />}
        />
        <Route path='/dashboard/members/trainers/singletrainer' element={<Singletrainer/>}/>
        <Route path='/dashboard/members/alumni/singlealumni' element={<Singlealumni/>}/>
        <Route path='/dashboard/members/alumni/singletrainee'element={<Singletrainee/>}/>
      </Route>
    </Routes>
  );
};

export default Index;
