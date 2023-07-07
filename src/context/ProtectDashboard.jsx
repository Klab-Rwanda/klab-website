import React, { useContext } from "react";
import { AuthContext } from "./AppProvider";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectDashboard = ({ children }) => {
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    navigate("/account");
  }
  if (!loggedUser) {
    return <Loader />;
  }
  if (loggedUser.role !== "admin") {
    navigate("/");
  } else {
    return <div>{children}</div>;
  }
};

export default ProtectDashboard;
