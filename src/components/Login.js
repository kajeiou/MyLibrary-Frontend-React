import React,{ useEffect,useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Auth from '../contexts/Auth';
import { login } from '../services/AuthApi';

export default function Login() {
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState(0)

    useEffect( ()=> {
        if(isAuthenticated) {
            setTimeout(function(){
                navigate("/myprofile", { replace: true })
            },2000); 
        }
    },[navigate,isAuthenticated])

    const onSubmit = async dataForm => {

    try {
        const response = await login(dataForm);
        console.log(response)
        setIsAuthenticated(response);
        setMessage({type:"success", message:"Vous vous êtes connecté avec succès."})

        } catch ({ response }) {
            setMessage({type:"danger", message:"Les identifiants renseignés sont incorrectes."})
        }
    }

    

    return(
        <div className="container w-75">
            <div className="Register">
                <div className="card">
                    <h5 className="card-header">Connexion</h5>
                    {message
                    ?
                    <div className={"alert alert-"+message.type} role="alert">
                        {message.message}
                    </div>
                    :
                    ''
                    }
                    <div className="card-body">
                        <h5 className="card-title">Nouveau membre ? <Link to="../register" className='btn btn-secondary'>Inscrivez vous!</Link></h5>
                        <br/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                    
                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Adresse email</label>
                                <div className="col-sm-10">
                                    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez une adresse email" {...register("email", {required:'Email obligatoire'})} />
                                    {errors.email && errors.email.type === "required" && <p className="text-white bg-danger ">
                                        Adresse email non renseignée
                                    </p>}
                                    <small id="emailHelp" className="form-text text-muted">@ obligatoire</small>
                                </div>
                            </div>

                            
                            <br/>
                            <div className="form-group row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Mot de passe</label>
                                <div className="col-sm-10">
                                    <input name="password" type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Entrez un mot de passe" {...register("password", {required:'Mot de passe obligatoire', minLength: 6})} />
                                    {errors.password && errors.password.type === "required" && <p className="text-white bg-danger ">
                                        Mot de passe non renseigné
                                    </p>}
                                    {errors.password && errors.password.type === "minLength" && <p className="text-white bg-danger ">
                                        Mot de passe trop court (6 caractères minimum)
                                    </p>}
                                    <small id="passwordHelp" className="form-text text-muted">Minimum 6 caractères, un chiffre, une majuscule</small>
                                </div>
                            </div>
                            
                            <br/>
                            

                            <button className="btn btn-primary btn-block btn-md w-50" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                                </svg>
                                    Se connecter
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        
    ) 
}