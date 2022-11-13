import Modal from 'react-modal';
import React, {  useState } from 'react';
import { useForm  } from "react-hook-form";
import { toast } from 'react-toastify';
import { updateUserApi } from '../services/UserApi';
import { getToken } from '../services/AuthApi';

export default function EditerProfil(props) {
    // Initialisation du formulaire
    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            email: props.user.email,
            isAdmin: props.user.isAdmin,
        }
      });
    const [modalIsOpen, setIsOpen] = useState(false);
    // Erreur formulaire
    const [message, setMessage] = useState(0)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const onSubmit = async dataForm => {
        try {
            const response = await updateUserApi(props.user._id,getToken(), dataForm);
            
            toast.success("Le profil a été modifié")
            closeModal();
            
    
        } catch ({ response }) {
            setMessage({type:"danger", message:"Une erreur est survenue"})
        }
    }
        
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
    return(
        <div className="UserEdit">
            <button className="btn btn-primary btn-block btn-md w-100" type="submit" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                </svg>
                    Éditer mon profil 
            </button>
            
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" shouldCloseOnOverlayClick={false}>
            <div className="card">
                    <h5 className="card-header text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                        Éditer mon profil</h5>
                    {message
                    ?
                    <div className={"alert alert-"+message.type} role="alert">
                        {message.message}
                    </div>
                    :
                    ''
                    }

                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group row">
                                <label htmlFor="email" className="col col-form-label">Email</label>
                                <div className="col-8 text-center">
                                    <input name="email" type="text" className="form-control" id="email" aria-describedby="userEmailHelp" placeholder="Entrez un email" {...register("email", {required:'Email obligatoire'})}  />
                                    {errors.email && errors.email.type === "required" && <p className="text-white bg-danger ">
                                        Email non renseigné
                                    </p>}
                                </div>
                            </div>

                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-block btn-danger w-100"onClick={closeModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x m-0" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="col-8">
                                    <button className="btn btn-success btn-block w-100" type="submit">
                                        Modifier mon profil
                                    </button>
                                </div>
                            </div>
                            
                            
                        </form>
                    </div>
                </div><br/>
               
                
            </Modal>
        </div>
        
    )
}
