import { useEffect, useState, useContext } from "react";
import UserC from "../contexts/UserC";
import { useNavigate } from "react-router-dom";
import { getToken } from '../services/AuthApi';
import { getUser, getAllUsers } from '../services/UserApi';
import '../styles/Users.css';
import UserDelete from "./UserDelete";
export default function Users() {
    const {userId} = useContext(UserC)
    const navigate = useNavigate();
    const [user, setUser]= useState([null]);

    const [users, setUsers]= useState([
        {
           name: "Un user"
        },
    ]);

    useEffect( ()=> {
        if(!userId) {
            navigate("/login", { replace: true })
        }
        getUser(userId,getToken())
            .then(data => setUser(data));
        getAllUsers(getToken())
            .then(data => setUsers(data));
    },[navigate,userId])

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
                                            <button id="editUser" className="btn w-100 btn-block btn-secondary ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                                </svg>
                                            </button>
                                        
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