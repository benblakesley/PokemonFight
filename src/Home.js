import React, { useEffect } from "react";

import {Link, Navigate, useNavigate} from "react-router-dom";
import { useState } from "react";
import { GoToLeaderboard } from "./GoToLeaderboard";




export const Home = (props) => {
    
    const navigate = useNavigate()
  
    const goToLogin = ()=>{
        navigate('../login');
    }

    const goToSignUp = ()=>{
        navigate('../signup');
    }
    return(
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className = "col text-center">
                        <h1>Welcome to Pokemon Fight</h1>
                    </div>
                </div>
                <div className = "row">
                    <div className="col text-center">
                        If you have an account then login, if not then sign up.
                    </div>
                </div>
                <div className = "row my-5">
                    <div className="col text-center ">
                        When signing up, do not enter sensitive information. Passwords are not encrypted, just stored plaintext in a database.
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mb-5">
                    <button type="button" className="btn btn-primary" onClick={goToLogin}>Sign In</button>
                    </div>
                    <div className="col text-center">
                    <button type="button" className="btn btn-success" onClick={goToSignUp}>Sign Up</button>
                    </div>
                </div>
                <div className = "row">
                <div className="col text-center mt-5">
                    <GoToLeaderboard/>
                    </div>
                </div>
            </div>
        </div>
        );
}

   
