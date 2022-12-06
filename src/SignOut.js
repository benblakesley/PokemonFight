import React from "react"
import { useNavigate } from "react-router-dom";

export const SignOut = (props) => {

const navigate = useNavigate();

const handleSignOut = async()=>{
            const endpoint = "http://localhost:8080/logout";
            try{
              const response = fetch(endpoint, {credentials:'include'});
              navigate('../');
            }
            catch(error){
              console.log(error);
            }
          }


      return( 
        <div className="container">
        <div className="row">
            <div className="col text-center my-5">
    <button type="button" className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
             </div>
         </div>
    </div>
        );

}