export async function getUser(userId, token) {
    return await fetch('http://localhost:2000/users/' + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      })
    .then(response => response.json());
}
export async function getAllUsers(token) {
  return await fetch('http://localhost:2000/users/', {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
  })
    .then(response => response.json());
}


export async function deleteUserApi(userId, token) {
  return await fetch('http://localhost:2000/users/' + userId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });  
}

export async function updateUserApi(userId, token, dataForm) {

  console.log(userId, token, dataForm)
  return await fetch('http://localhost:2000/users/' + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({
        email: dataForm.email,
        isAdmin: dataForm.isAdmin,
      }),
  });  
  
}