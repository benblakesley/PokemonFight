import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { getAll } from "./HelperHttpFunctions"
import { PlayAgain } from "./PlayAgain";
import { SignOut } from "./SignOut";
import {Link} from "react-router-dom";


export const Leaderboard  = (props) => {

 

  return <div>
        <div className="container">
        



          
            <div className="row my-2">
              <div className="col text-center">
                <h2>Username</h2>
              </div>
              <div className="col text-center">
                <h2>Score</h2>
              </div>
            </div>
          </div>
        {props.users.map(user=>{
          return(
            <div className="container">
              <div className="row">
              <div className="col text-center">
             <h3>{user.username}</h3>
              </div>
              <div className="col text-center">
             <h4>{user.score}</h4>
              
            </div>

            </div>
            </div>
          );
        })}
  </div>;
}