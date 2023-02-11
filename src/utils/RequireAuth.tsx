// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import React from "react";
import {Navigate, Outlet} from "react-router-dom"

const RequireAuth:React.FC = () => {
    let auth = false;
    if (!auth) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}

export default RequireAuth;