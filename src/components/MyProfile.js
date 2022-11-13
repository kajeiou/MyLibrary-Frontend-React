import React,{ useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import UserC from '../contexts/UserC';
import { getToken } from '../services/AuthApi';
import { getUser } from '../services/UserApi';

import EditerProfil from './EditerProfil';

export default function MyProfile() {
    //const {isAuthenticated} = useContext(Auth)
    const {userId} = useContext(UserC)
    const navigate = useNavigate();
    const [user, setUser]= useState([null]);

    useEffect( ()=> {
        if(!userId) {
            navigate("/login", { replace: true })
        }
        getUser(userId,getToken())
            .then(data => setUser(data));
    },[navigate,userId])

    return(
        <div className="container w-75">
            <div className="MyProfile">
                <div className="card">
                    <h5 className="card-header text-center">Mon profil</h5>
                
                    <div className="card-body">

                        <div className="form-group row m-3">
                            <div className="col">
                                <label htmlFor="email" className=" col-form-label">Nom d'utilisateur</label>
                            </div>
                            <div className="col">
                                <span className="badge bg-light text-black p-3 d-block">{user.userName}</span>
                            </div>
                            <div className="col">
                                <span id="emailHelp" className="form-text text-muted">Nom visible par les autres utilisateurs</span>
                            </div>
                            
                        </div>
                        <br/>
                        <div className="form-group row m-3">
                            <div className="col">
                                <label htmlFor="email" className=" col-form-label ">Adresse email</label>
                            </div>
                            <div className="col">
                                <span className="badge bg-light text-black p-3 d-block">{user.email}</span>
                            </div>
                            <div className="col">
                                <span id="emailHelp" className="form-text text-muted">Identifiant de connexion</span>
                            </div>
                            
                        </div>
                        <br/>
                        <div className="form-group row m-3">
                            <div className="col">
                                <label htmlFor="password" className=" col-form-label">Rôle</label>
                            </div>
                            <div className="col">
                                {user.isAdmin  ?
                                    <span className="badge bg-success p-3 d-block ">Administrateur</span>
                                    : <span className="badge bg-danger p-3 d-block ">Non Admin</span>
                                }
                            </div>
                            <div className="col">
                                <EditerProfil user={user} />  
                            </div>
                            

                        </div>
                        
                        <br/>
                             
                    </div>
                </div>
                
            </div>
        </div>
        
    ) 
}
