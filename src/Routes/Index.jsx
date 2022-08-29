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

const Index = () => {
  return (
    <Routes>
      {/* Website routes */}
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/community' element={<CommunityPage />}></Route>
      <Route path='/events' element={<EventsPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/programs' element={<ProgramsPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      {/* Website routes ends here */}

      <Route path='admin' element={<Main />}></Route>
      <Route path='add-program' element={<AddProgram />}></Route>
      <Route path='startup-academy' element={<StartupAcademy />}></Route>
      <Route path='future-koder' element={<FutureCoder />}></Route>
    </Routes>
  );
};

export default Index;
