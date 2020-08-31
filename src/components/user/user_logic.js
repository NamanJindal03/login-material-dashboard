import API from "../../backend"
export const signin = user =>{
    return fetch (`${API}/login`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        //console.log(err);
        return Promise.reject("wrong email or password");
    })
}