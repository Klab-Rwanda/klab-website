import React from 'react'
import LoginForm from '../Components/LoginForm'
import Navbar from '../Components/Navs/Navbar'
import Footer from '../Components/sections/Footer'

const Login = () => {

  return (
    <>
      <div className="w-screen  flex justify-center items-center relative p-4 py-12">
        <Navbar />
        <LoginForm  />
      </div>
      
      <Footer />
    </>
  );
}

export default Login