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
        <div className="container w-75">
            <div className="MyProfile">
                <div className="card">
                    <h5 className="card-header">Mon profil</h5>
                
                    <div className="card-body">
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Nom d'utilisateur</label>
                            <div className="col-sm-10">
                            <span className="badge bg-light text-black p-3 m-3">Username</span>
                                <small id="emailHelp" className="form-text text-muted">Nom visible par les autres utilisateurs</small>
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Adresse email</label>
                            
                            <div className="col-sm-10">
                                <span className="badge bg-light text-black p-3 m-3">Adresseutilisateur@gmail.com</span>
                                <small id="emailHelp" className="form-text text-muted">Identifiant de connexion</small>
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Rôle</label>
                            <div className="col-sm-10">
                                <span className="badge bg-success p-3 m-3">Administrateur</span>
                                <small id="passwordHelp" className="form-text text-muted">Minimum 6 caractères, un chiffre, une majuscule</small>
                            </div>
                        </div>
                        
                        <br/>
                            
                        <button className="btn btn-primary btn-block btn-md w-50" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                            </svg>
                                Éditer mon profil
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
        
    ) 
}