import React from "react";

import {Link} from "react-router-dom";



export class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Link to="login">Login</Link>
                <Link to="signup">Sign Up</Link>
            </div>
        );
    }
    
}