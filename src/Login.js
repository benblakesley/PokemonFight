import React from "react";
import { Game } from "./Game";
import { Link, useNavigate} from "react-router-dom";
import {signIn} from './HelperHttpFunctions';
import { useState } from "react";


export const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")


 const handleUsernameChange = (event) => {
   setUsername(event.target.value);
}

const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
}


const handleSignIn = async()=>{

      const credentialsValid = await validCredentials();

      const credentialsValidJson = await credentialsValid.json();

      if(credentialsValidJson){
        await signIn(username, password);
        navigate("../Game");
      }
      else{
        console.log("invalid credentials")
      }

    
    }




const validCredentials = async()=>{
    const endpoint = "http://localhost:8080/checkCredentials";
    try{
    const response = await fetch(endpoint, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {username: username,
             password: password})
    });
    return response;
    }
    catch(error){
        console.log(error);
    }
}




return(
    <div className="Auth-form-container">
        <form className = "Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title text-center">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <Link to="../signup">Sign Up</Link>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="username"
                className="form-control mt-1"
                placeholder="Enter username"
                required
                onChange = {handleUsernameChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
                onChange = {handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button onClick={handleSignIn} type="button" className="btn btn-primary">
                Submit
              </button>
             
            </div>
            </div>
        </form>
     </div>
    );
 }