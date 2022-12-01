import React from "react";
import {Link, Navigate } from "react-router-dom";

export class SignUp extends React.Component{



constructor(props){
    super(props);
    this.state = {
        username: "",
        password: ""
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.usernameTaken = this.usernameTaken.bind(this);
}

handleUsernameChange(event){
    this.setState({username: event.target.value});
}

handlePasswordChange(event){
    this.setState({password: event.target.value});
}

handleSignUp(){
   this.usernameTaken().then(
       response=>{
           if(response){
               // functionality to prevent signup and tell user username is taken
           }
           else{
               //functionality to create user, begin session, and redirect to game page
            this.createUser();
            <Navigate to="../Game"/>
        }
       }
   )
}

createUser = async() =>{
    
    const endpoint="http://localhost:8080/create";
    try{
        const response = await fetch(endpoint,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(
                {username: this.state.username,
                 password: this.state.password})
        });
    }
    catch(error){
        console.log(error);
    }
}

usernameTaken = async () => {
    
    const baseUrl="http://localhost:8080/";
    const username = this.state.username;
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


render(){
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
                        onChange={this.handleUsernameChange}

                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                        required
                        onChange={this.handlePasswordChange}
                        />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button onClick={this.handleSignUp} type="button" className="btn btn-primary">
                     Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
 );
 }

 }