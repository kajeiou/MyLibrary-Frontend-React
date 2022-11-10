import React,{ useEffect,useContext, useState } from 'react';
import { useForm,  } from "react-hook-form"
import '../styles/Register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import UserC from '../contexts/UserC';
import { registerApi } from '../services/AuthApi';
import { toast } from 'react-toastify';

export default function Register() {
    const {userId} = useContext(UserC)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState(0)


    useEffect( ()=> {
        if(userId) {
            navigate("/myprofile", { replace: true })
        }
    },[navigate,userId])

    const onSubmit = async dataForm => {
        try {
            const response = await registerApi(dataForm);
            console.log(response)
            toast.success("Bienvenue ! Tu t'es connecté.")
            console.log("User created successfully");
            setMessage({type:"success", message:"Votre compte avec l'adresse email "+ dataForm.email +" a été créé avec succès. "});
        } catch (err) {
          console.log(err);
          setMessage({type:"danger", message:"Un compte existe déjà avec cette adresse email."});
        }
        
    }
    

    return(
        <div className="container w-75">
            <div className="Register">
                <div className="card">
                    <h5 className="card-header text-center">Inscription</h5>
                    {message
                    ?
                    <div className={"alert alert-"+message.type} role="alert">
                        {message.message}
                    </div>
                    :
                    ''
                    }
                    <div className="card-body">
                        <h5 className="card-title text-center">Déjà inscrit ? <Link to="../login" className='btn btn-secondary' >
                            
                            Connectez vous!</Link></h5>
                        <br/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group row">
                                <label htmlFor="userName" className="col-sm-2 col-form-label">Nom d'utilisateur</label>
                                <div className="col-sm-10">
                                    <input name="userName" type="text" className="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Entrez un nom d'utilisateur" {...register("userName", {required:'Nom d\'utilisateur obligatoire'})}  />
                                    {errors.userName && errors.userName.type === "required" && <p className="text-white bg-danger ">
                                        Nom d'utilisateur non renseigné
                                    </p>}
                                </div>
                            </div>
                    
                            <br/>
                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Adresse email</label>
                                <div className="col-sm-10">
                                    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez une adresse email" {...register("email", {required:'Email obligatoire'})} />
                                    {errors.email && errors.email.type === "required" && <p className="text-white bg-danger">
                                        Adresse email non renseignée
                                    </p>}
                                    
                                </div>
                            </div>

                            
                            <br/>
                            <div className="form-group row " >
                                <label htmlFor="password" className="col-sm-2 col-form-label">Mot de passe</label>
                                <div className="col-sm-10 ">
                                    <input name="password" type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Entrez un mot de passe" {...register("password", {required:'Mot de passe obligatoire', minLength: 6, 
                                        pattern: 
                                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
                                      })} />
                                    {errors.password && errors.password.type === "required" && <p className="text-white bg-danger">
                                        Mot de passe non renseigné
                                    </p>}
                                    {errors.password && errors.password.type === "minLength" && <p className="text-white bg-danger">
                                        Mot de passe trop court (6 caractères minimum)
                                    </p>}
                                    {errors.password && errors.password.type === "pattern" && <p className="text-white bg-danger">
                                        Mot de passe sans chiffre ou majuscule
                                    </p>}
                                    <small id="passwordHelp" className="form-text text-muted ">Minimum 6 caractères, un chiffre, et une majuscule</small>
                                </div>
                            </div>
                        
                            <br/>
                    

                            <button className="btn btn-success btn-block btn-md w-100" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                S'inscrire
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    ) 
}
