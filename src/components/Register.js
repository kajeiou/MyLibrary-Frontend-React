import { useForm, useFormState } from "react-hook-form"



export default function Register() {
    const {register, handleSubmit, formState, errors} = useForm()
    const {isSubmitting} = formState

    const onSubmit = data => {
        console.log(data)
        console.log(errors)
    }


    return(
        <div className="Register">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="userName">Nom d'utilisateur :</label>
                <input name="userName" type="text" {...register("userName", {required:'Nom d\'utilisateur obligatoire'})} />
                {errors && <span>errors.userName.message</span>}
                
                <br/>
                <label htmlFor="email" >Email :</label>
                <input name="email" type="text" {...register("email", {required:'Email obligatoire'})}/>
                {errors && <span>errors.email.message</span>}
                
                <br/>
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" {...register("password", {required:'Mot de passe obligatoire', minLength: 6})}/>
                {errors && <span>errors.password.message</span>}
                
                <br/>
                

               <input type="submit" value="S'inscrire" />
            </form>
        </div>
    ) 
}