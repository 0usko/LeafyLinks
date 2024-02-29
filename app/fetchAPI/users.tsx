//ToDo Replace personal token by the variable in the AsyncStorage (not here for now)

export default async function getUser() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/users/me", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function updateUser(username: any, email: any, password: any, phone: any, first_name: any, last_name: any, profile_picture: any, bio: any){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "PUT",
        headers:
            myHeaders,
            "username": username,
            "email": email,
            "password": password,
            "phone": phone,
            "first_name": first_name,
            "last_name": last_name,
            "profile_picture": profile_picture,
            "bio": bio
    };

    fetch("https://leafylinks.maxim-le-cookie.fr/api/users/me", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function deleteUser(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
    };

    fetch("https://leafylinks.maxim-le-cookie.fr/api/users/me", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getUserById(id: { toString: () => string; }) {
    var requestOptions = {
        method: 'GET',
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/users/" + id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function register(username: any, email: any, password: any){
    const requestOptions = {
        method: "POST",
        headers: {
            'username' : username,
            'email' : email,
            'password' : password,
        }
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/users/register", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function login(email: any, password: any){
    const requestOptions = {
        method: "POST",
        headers: {
            'email' : email,
            'password' : password,
        }
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/users/login", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function logout(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/users/logout", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}