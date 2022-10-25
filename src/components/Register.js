import { useForm, useFormState } from "react-hook-form"
import '../styles/Register.css';
export default function Register() {
    const {register, handleSubmit, formState, errors} = useForm()
    const {isSubmitting} = formState

    const onSubmit = data => {
        console.log(data)
        console.log(errors)
    }

    return(
        <div className="container w-75">
            <div className="Register">
                <div className="card">
                    <h5 className="card-header">Inscription</h5>
                    <div className="card-body">
                        <h5 className="card-title">Nouveau membre ? Inscrivez vous!</h5>
                        <br/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <label htmlFor="userName" className="col-sm-2 col-form-label">Nom d'utilisateur</label>
                        <div className="col-sm-10">
                            <input name="userName" type="text" className="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Entrez un nom d'utilisateur" {...register("userName", {required:'Nom d\'utilisateur obligatoire'})}  />
                            <small id="userNameHelp" className="form-text text-muted">Première lettre en majuscule</small>
                        </div>
                    </div>
                    
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez une adresse email" {...register("email", {required:'Email obligatoire'})} />
                            <small id="emailHelp" className="form-text text-muted">@ obligatoire</small>
                        </div>
                    </div>

                    
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Mot de passe</label>
                        <div className="col-sm-10">
                            <input name="password" type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Entrez un mot de passe" {...register("password", {required:'Mot de passe obligatoire', minLength: 6})} />
                            <small id="passwordHelp" className="form-text text-muted">Minimum 6 caractères, un chiffre, une majuscule</small>
                        </div>
                    </div>
                    
                    <br/>
                    

                <button className="btn btn-success btn-block btn-md" type="submit">
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