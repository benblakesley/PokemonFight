import React from "react";
import { Game } from "./Game";
import { json, Link, Navigate} from "react-router-dom";
import {checkSessionValid} from './HelperHttpFunctions';
import { SignOut } from "./SignOut";
import { useState } from "react";


export const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")


 const handleUsernameChange = (event) => {
   setUsername(event.target.value);
}

const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
}


const handleSignIn = async()=>{
       validCredentials().then(async(response)=>{
           if(response){
               //sign in functionality
               
               await signIn();
               const isLoggedIn = await checkSessionValid().then(response=>{
                 return response.json();
               });
               console.log(isLoggedIn);
                   
           }
           else{
               //inform user that credentials are incorrect
               const isLoggedIn = await checkSessionValid().then(response=>{
                return response.json();
              });
              console.log(isLoggedIn);
               console.log("invalid credentials");
           }
       });
    }


const signIn = async()=>{
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
        console.log("I have signed in ")
    }
    catch(error){
        console.log(error);
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
    const jsonResponse = await response.json();
    return jsonResponse;
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
            <SignOut/>
            </div>
        </form>
     </div>
    );
 }