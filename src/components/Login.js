import React,{ useEffect,useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { loginApi } from '../services/AuthApi';
import { toast } from 'react-toastify';
import UserC from '../contexts/UserC';

export default function Login() {

    // Variable utilisateur
    const {userId, setUserId} = useContext(UserC)
    
    // Pour rédiriger
    const navigate = useNavigate();

    // Initialisation du formulaire
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Erreurs fomulaires
    const [message, setMessage] = useState(0)

    //Si l'utilisateur est connecté, redirection vers so profil
    useEffect( ()=> {
        if(userId) {
            setTimeout(function(){
                navigate("/myprofile", { replace: true })
            },2000); 
        }
    },[navigate,userId])


    // Traitement du formulaire de connexion
    const onSubmit = async dataForm => {

    try {
        const response = await loginApi(dataForm);
        console.log(response)
        //setIsAuthenticated(response);
        setUserId(response)
        setMessage({type:"success", message:"Vous vous êtes connecté avec succès."})
        toast.success("Bienvenue ! Tu t'es connecté.")

        } catch ({ response }) {
            setMessage({type:"danger", message:"Les identifiants renseignés sont incorrectes."})
        }
    }

    

    return(
        <div className="container w-75">
            <div className="Register">
                <div className="card">
                    <h5 className="card-header text-center">Connexion</h5>
                    {message
                    ?
                    <div className={"alert alert-"+message.type} role="alert">
                        {message.message}
                    </div>
                    :
                    ''
                    }
                    <div className="card-body">
                        <h5 className="card-title text-center">Nouveau membre ? <Link to="../register" className='btn btn-secondary'>Inscrivez vous!</Link></h5>
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
                            

                            <button className="btn btn-primary btn-block btn-md w-100" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wifi" viewBox="0 0 16 16">
                                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
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
