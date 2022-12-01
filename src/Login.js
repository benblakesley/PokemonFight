import React from "react";
import { Game } from "./Game";
import { json, Link, Navigate} from "react-router-dom";


export class Login extends React.Component{

 constructor(props){
     super(props);
     this.state = {
        username: "",
        password: ""
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.validCredentials = this.validCredentials.bind(this);
    this.signIn = this.signIn.bind(this);
    this.validateSession = this.validateSession.bind(this);
 }

 handleUsernameChange(event){
    this.setState({username: event.target.value});
}

handlePasswordChange(event){
    this.setState({password: event.target.value});
}

handleSignIn = async()=>{
       this.validCredentials().then(async(response)=>{
           if(response){
               //sign in functionality
               console.log("this mesage is first")
               await this.signIn();
               await this.validateSession();
               console.log("this message is last")
               
           }
           else{
               //inform user that credentials are incorrect
               console.log("invalid credentials");
           }
       });
    }
validateSession = async()=>{
 const endpoint = "http://localhost:8080/validateSession";
 try{
 const response = await fetch(endpoint);
 const jsonResponse = await response.json();
 console.log(jsonResponse);
 }
 catch(error){
     console.log(error);
 }
}

signIn = async()=>{
    const endpoint = "http://localhost:8080/login";
    try{
        const response = await fetch(endpoint, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {username: this.state.username,
                 password: this.state.password})
        });
        console.log("I have signed in ")
    }
    catch(error){
        console.log(error);
    }
}

validCredentials = async()=>{
    const endpoint = "http://localhost:8080/checkCredentials";
    try{
    const response = await fetch(endpoint, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {username: this.state.username,
             password: this.state.password})
    });
    const jsonResponse = await response.json();
    return jsonResponse;
    }
    catch(error){
        console.log(error);
    }
}


 render(){
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
                onChange = {this.handleUsernameChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
                onChange = {this.handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button onClick={this.handleSignIn} type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
            </div>
        </form>
     </div>
    );
 }
}