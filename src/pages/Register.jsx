import React from 'react'
import Navbar from '../Components/Navs/Navbar'
import RegisterForm from '../Components/RegisterForm'
import Footer from '../Components/sections/Footer'

const Register = () => {
  return (
    <>
    <div className="w-screen flex justify-center items-center relative p-4 py-12">
      <Navbar />
      <RegisterForm/>
    </div>
    <Footer/>
    </>
  )
}

export default Register