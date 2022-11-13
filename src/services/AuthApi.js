import jwtDecode from "jwt-decode"
import { getItem, addItem, removeItem } from "./LocaleStorage"

// Vérification du token présent en locale
export function hasAuthenticated() {
    
    const token = getItem("MyLibraryToken")
    const result = token ? tokenIsValid(token) : false;

    if(result === false) {
        removeItem("MyLibraryToken")
    }
    else {
        return getUserId()
    }
    
}

// Connexion de l'utilisateur
export async function loginApi(dataForm) {
    
    return await fetch("http://localhost:2000/users/login", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
        email: dataForm.email,
        password: dataForm.password,
        }),
    })
    .then(response => response.json())
    .then(data => {addItem('MyLibraryToken', data.token);addItem('MyLibraryUserId', data.userId); return data.userId;});

}
// Inscription de l'utilisateur
export async function registerApi(dataForm) {
    const userName = dataForm.userName.charAt(0).toUpperCase() + dataForm.userName.slice(1);
    return await fetch("http://localhost:2000/users/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            userName: userName,
            email: dataForm.email,
            password: dataForm.password,
            isAdmin: false
        }),
    });
}
// Récupération du token
export function getToken() {
    return getItem("MyLibraryToken")
}
// Récupération de l'id
export function getUserId() {
    return getItem("MyLibraryUserId")
}
// Suppression du token
export function logout() {
    removeItem("MyLibraryToken")
}


// Vérification du token
function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;

}