import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Main from '../components/dashboard/Main'
import AddProgram from '../components/dashboard/Form/AddProgram'
import StartupAcademy from '../components/dashboard/Program/StartupAcademy'
import FutureCoder from '../components/dashboard/Program/FutureCoder'
import SignIn from '../components/dashboard/auth/SignIn'

const Index = () => {
  return (
    <Routes>
      <Route path="admin" element={<Main />}></Route>
      <Route path="add-program" element={<AddProgram />}></Route>
      <Route path="startup-academy" element={<StartupAcademy />}></Route>
      <Route path="future-koder" element={<FutureCoder />}></Route>
      <Route path="/" element={<SignIn />}></Route>
    </Routes>
  );
}

export default Index