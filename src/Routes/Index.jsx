import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../components/dashboard/Main';
import AddProgram from '../components/dashboard/Form/AddProgram';
import StartupAcademy from '../components/dashboard/Program/StartupAcademy';
import FutureCoder from '../components/dashboard/Program/FutureCoder';
import LandingPage from '../pages/LandingPage';
import CommunityPage from '../pages/CommunityPage';
import RegisterPage from '../pages/RegisterPage';
import EventsPage from '../pages/EventsPage';
import ProgramsPage from '../pages/ProgramsPage';
import AboutPage from '../pages/AboutPage';
import Events from '../components/dashboard/Events/Events';
import Program from '../components/dashboard/Program/Program';
import MemberLayout from '../components/dashboard/Members/MemberLayout';
import SignIn from '../components/dashboard/auth/SignIn';
import ForgotPassword from '../components/dashboard/auth/ForgotPassword';
import Register from '../components/dashboard/auth/Register';
import SingleEventPage from '../pages/SingleEventPage';
import LoginPage from '../pages/LoginPage';

const Index = () => {
  return (
    <Routes>
      {/* Website routes */}
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/community' element={<CommunityPage />}></Route>
      <Route path='/events' exact element={<EventsPage />}></Route>
      <Route path='/singleEvent' element={<SingleEventPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/programs' element={<ProgramsPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      {/* Website routes ends here */}

      <Route path='admin' element={<Main />}></Route>
      <Route path='add-program' element={<AddProgram />}></Route>
      <Route path='startup-academy' element={<StartupAcademy />}></Route>
      <Route path='future-koder' element={<FutureCoder />}></Route>
      <Route path='event' element={<Events />}></Route>
      <Route path='program' element={<Program />}></Route>
      <Route path='members' element={<MemberLayout />}></Route>
      <Route path='login' element={<SignIn />}></Route>
      <Route path='forgot-password' element={<ForgotPassword />}></Route>
      <Route path='sign-up' element={<Register />}></Route>
    </Routes>
  );
};

export default Index;
