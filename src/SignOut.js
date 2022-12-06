import React from "react"


export const SignOut = (props) => {



const handleSignOut = async()=>{
            const endpoint = "http://localhost:8080/logout";
            try{
              const response = fetch(endpoint, {credentials:'include'});
            }
            catch(error){
              console.log(error);
            }
          }


      return( 
        <div className="gap-2 mt-3">
                <button onClick={handleSignOut} type="button" className="btn btn-danger">
                  Sign out
                </button>
        </div>
        );

}