import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "./HelperHttpFunctions";

export const SignUp = (props) => {


const navigate = useNavigate();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");



const handleUsernameChange = (event) => {
    setUsername(event.target.value);
}

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
}

const handleSignUp = () => {
   usernameTaken().then(
       async(response)=>{
           if(response){
               console.log("username taken");
               // functionality to prevent signup and tell user username is taken
           }
           else{
               //functionality to create user, begin session, and redirect to game page
            await createUser();
            await signIn(username, password);
            navigate("../Game");
            //nagigate to game
        }
       }
   )
}

const createUser = async() =>{
    
    const endpoint="http://localhost:8080/create";
    try{
        const response = await fetch(endpoint,{
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

const usernameTaken = async () => {
    
    const baseUrl="http://localhost:8080/";
    const endpoint = `${baseUrl}${username}`;
    try{
        const response = await fetch(endpoint);
        if(response.ok){
            const textResponse = await response.text();
            if(textResponse.length===0){
                return false;
            }
            else{
                return true;
            }
        }
    }catch(error){
        console.log(error);
    }
    
}



 return(
    <div className="Auth-form-container">
        <form className="Auth-form" 
              >
            <div className="Auth-form-content">
            <h3 className="Auth-form-title text-center">Sign Up</h3>
            <div className="text-center">
        Already registered?{" "}
        <Link to="../login"> Login</Link>
      </div>
             <div className="form-group mt-3">
                 <label>Username</label>
                    <input
                        type="username"
                        className="form-control mt-1"
                        placeholder="WelshBen"
                        required
                        onChange={handleUsernameChange}

                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                        required
                        onChange={handlePasswordChange}
                        />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button onClick={handleSignUp} type="button" className="btn btn-primary">
                     Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
 );
 }

 