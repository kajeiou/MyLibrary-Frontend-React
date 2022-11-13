import { useEffect, useState, useContext } from "react";
import UserC from "../contexts/UserC";
import { useNavigate } from "react-router-dom";
import { getToken } from '../services/AuthApi';
import { getUser, getAllUsers } from '../services/UserApi';
import '../styles/Users.css';
import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";

export default function Users() {

    // Variable utilisateur
    const {userId} = useContext(UserC)
    // Pour la rédirection
    const navigate = useNavigate();
    // Variable utilisateur
    const [user, setUser]= useState([null]);

    // Initialisation de la liste de tous les utilisateurs
    const [users, setUsers]= useState([
        {
           name: "Un user"
        },
    ]);

    // Récupération de tous les utilisateurs avec l'API
    useEffect( ()=> {
        if(!userId) {
            navigate("/login", { replace: true })
        }
        getUser(userId,getToken())
            .then(data => setUser(data));
        getAllUsers(getToken())
            .then(data => setUsers(data));
    },[navigate,userId])


    // Retrait d'un utilisateur de la liste
    function deleteUser(userId) {
        setUsers(current =>
            current.filter(user => {
              return user._id !== userId;
            }),
        );
    }

    return(
        <div className="container">
            <div className="Users">
                Liste des utilisateurs
                <br/>
                <div className='row'>
                    {users.map((user, index) => 
                    
                        <div className='col-sm-3' key={user.id}>
                            <div className="card bg-light" style={{maxWidth: '18rem'}}>
                                <div className="card-header">
                                    <div class="row">
                                        <div class="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-video" viewBox="0 0 16 16">
                                                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
                                            </svg>
                                        </div>
                                        <div class="col-10">
                                        {user.email}
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{user.userName}</h5>
                                    
                                    <div className="row">
                                        <div className="col m-0 p-0">
                                            <UserEdit userSelected={user} />
                                        </div>
                                        <div className="col m-0 p-0">
                                            <UserDelete userSelected={user} deleteUser={deleteUser}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}