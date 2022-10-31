import React, { useContext } from "react";
import { Navigate, Route,Routes } from "react-router-dom";
import Auth from "../contexts/Auth";

export default function AuthenticatedRoute(path, component) {
    const {isAuthenticated} = useContext(Auth)

    return isAuthenticated ? (
        <Routes>
            <Route path={path} element={component} />
        </Routes>
        
    ) : (
        <Navigate to="/login" />
    )
}