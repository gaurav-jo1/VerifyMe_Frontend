// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequireAuth: React.FC = () => {
  let { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default RequireAuth;
