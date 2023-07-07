import React from "react"
import Logo from "../assets/logo.svg"

const Loader = () => {
  return (
    <div className="custom-loader flex items-center justify-center">
      <img src={Logo} alt="Loading" className="w-1/5 absolute top-1/3"/>
    </div>
  );
};

export default Loader;
