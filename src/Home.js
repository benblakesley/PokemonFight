import React from "react";

import {Link} from "react-router-dom";



export const Home = (props) => {
 
   
    return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <Link to="login">Login</Link>
                    </div>
                    <div className="col text-center">
                        <Link to="signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
    