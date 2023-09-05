import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutesComponent = ({ admin }) => {
    return
    if (admin) {
        // Line 57 in app.js, admin is false => return to login page
        // Line 68 in app.js admin is true => Outlet gives admin access to each route path
        let adminAuth = true;
        return adminAuth ? <Outlet /> : <Navigate to="/login" />
    } else {
        // Line 
        let userAuth = true;
        return userAuth ? <> <Outlet /> </> : <Navigate to="/login" />
    }

}

export default ProtectedRoutesComponent;