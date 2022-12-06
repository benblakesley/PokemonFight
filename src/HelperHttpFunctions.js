


export const checkSessionValid = async()=>{
    const endpoint = "http://localhost:8080/validateSession";
    try{
    const response = await fetch(endpoint, {credentials:'include'});
    console.log(response);
    return response;
    }
    catch(error){
        console.log(error);
    }
   }