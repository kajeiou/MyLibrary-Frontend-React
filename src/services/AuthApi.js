import jwtDecode from "jwt-decode"
import { getItem, addItem, removeItem } from "./LocaleStorage"

export function hasAuthenticated() {
    const token = getItem("MyLibraryToken")
    const result = token ? tokenIsValid(token) : false;

    if(result === false) {
        console.log("remove token")
        removeItem("MyLibraryToken")
    }
    console.log(result)
    return result
}

export async function login(dataForm) {
    
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
    .then(data => {addItem('MyLibraryToken', data.token); return true;});


}
export function logout() {
    removeItem("MyLibraryToken")
}

function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;

}