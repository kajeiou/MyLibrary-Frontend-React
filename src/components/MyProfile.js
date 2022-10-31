import React,{ useEffect,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Auth from '../contexts/Auth';

export default function MyProfile() {
    const {isAuthenticated} = useContext(Auth)
    const navigate = useNavigate();

    useEffect( ()=> {
        if(!isAuthenticated) {
            navigate("/login", { replace: true })
        }
    },[navigate,isAuthenticated])

    return(
        <div className="MyProfile">
            Mon Profil
        </div>
    )
}