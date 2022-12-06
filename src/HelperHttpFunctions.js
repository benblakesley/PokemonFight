


export const checkSessionValid = async()=>{
    const endpoint = "http://localhost:8080/validateSession";
    try{
    const response = await fetch(endpoint, {credentials:'include'});
    return response;
    }
    catch(error){
        console.log(error);
    }
   }

export const getCurrentUser = async() => {
    const endpoint = "http://localhost:8080/get";
    try{
        const response = await fetch(endpoint, {credentials:'include'});
        return response;
    }
    catch(error){
        console.log(error);
    }
}

export const getHighScore = async(username)=>{
    const baseUrl = "http://localhost:8080/getScore/";
    const endpoint = `${baseUrl}${username}`;
    try{
        const response = await fetch(endpoint, {credentials:'include'});
        return response;
    }
    catch(error){
        console.log(error);
    }
}

export const setHighScore = async(username, score)=>{
    const baseUrl = "http://localhost:8080/update/";
    const endpoint = `${baseUrl}${username}${"/"}${score}`;
    try{
        const response = await fetch(endpoint, {method:'PUT', credentials:'include'});
    }
    catch(error){
        console.log(error);
    }
}

export const signIn = async(username, password)=>{
    const endpoint = "http://localhost:8080/login";
    try{
        const response = await fetch(endpoint, {
            credentials: 'include',
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {username: username,
                 password: password})
        });
    }
    catch(error){
        console.log(error);
    }
}